"use strict";
/*
    Data Modifiers - Modificadores de acesso.
    public - Pode ser acessada de fora da classe (default)
    private - Só pode ser acessada de dentro da classe
    protected - Só pode ser acessado de dentro da classe ou subclasses
*/
class Character {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
//Character: superclass - classe pai
// Subclasse - Classe que herda de outra classe
class Magician extends Character {
    constructor(stregth, skill, magicPoints) {
        super(stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const c1 = new Character(50, 100);
const c2 = new Magician(50, 100, 150);
c1.attack();
