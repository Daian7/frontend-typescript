/*
    Decorators - Decora um método para exibir uma ação
*/

function ExibirNome(target: any){
    console.log(`Quem me chama é: ${target}`);
}

@ExibirNome
class Funcionario{

}

@ExibirNome
class Daian{

}

// Função Factory - Função que chama outra função

function apiVersion(version: string){
    return(target: any) => {
        Object.assign(target.prototype, {__version: version})
    };
};

//attribute decorator

function minLength(length: number){
    return (target: any, key: any) => {
        let _value = target[key];

        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if(value.length < length){
                throw new Error(`Tamanho menor do que ${length}`);
            }else{
                _value = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    }
}

//validação dos decorators

@apiVersion("1.0")
class Api {
    @minLength(3)
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const api = new Api("usu");
console.log(`Versão ${api.__version} e Nome: ${api.name}`)