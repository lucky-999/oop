// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));


export class Character {

    constructor(name, type) {
        if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
            throw new Error('Ошибка!');
        } else {
            this.name = name;
        }

        if (typeof type == 'string' && (type == 'Bowman' || type == 'Swordsman' || type == 'Magician' || type == 'Undead' || type == 'Zombie' || type == 'Daemon' )) {
            this.type = type;
        } else {
            throw new Error('Ошибка!');
        }

        this.health = 100;
        this.level = 1;

        this.attack = 0;
        this.defence = 0;
    }

    levelUp() {

        if (this.health == 0) {
            throw new Error('Ошибка!');
        } else {
            this.level += 1;
            let procentAttack = (this.attack / 100) * 20;
            let procentDefence = (this.defence / 100) * 20;
            this.attack += procentAttack;
            this.defence += procentDefence;
            this.health = 100;
            return this;
        }
        
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }

        return this;
    }
}

export class Bowman extends Character {
    
    constructor(name, type) {
        super(name, type);

        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    
    constructor(name, type) {
        super(name, type);

        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    
    constructor(name, type) {
        super(name, type);

        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    
    constructor(name, type) {
        super(name, type);

        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    
    constructor(name, type) {
        super(name, type);

        this.attack = 40;
        this.defence = 10;
    }
}

export class Daemon extends Character {
    
    constructor(name, type) {
        super(name, type);

        this.attack = 10;
        this.defence = 40;
    }
}