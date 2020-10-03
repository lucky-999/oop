import { Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon }  from '../app.js';

test('create Character', () => {
    const received = new Character('Jane', 'Bowman');
    const expected = {
        name: 'Jane',
        type: 'Bowman',
        health: 100,
        level: 1,

        attack: 0,
        defence: 0
    }


expect(received).toEqual(expected);
});

test('create Character with error', () => {
    
    function createCharacter(name, type) {
        let character = new Character(name, type);
        return character;
    }

    expect(() => {
        createCharacter(1, 45678);
      }).toThrow();

    
});

test('levelUp', () => {
    let character = new Bowman('Jane', 'Bowman');
    const received = character.levelUp();
    const expected = {
        name: 'Jane',
        type: 'Bowman',
        health: 100,
        level: 2,

        attack: 30,
        defence: 30
    }

    expect(received).toEqual(expected);
});

test('damage', () => {
    let character = new Bowman('Jane', 'Bowman');
    const received = character.damage(25);
    const expected = {
        name: 'Jane',
        type: 'Bowman',
        health: 81.25,
        level: 1,

        attack: 25,
        defence: 25
    }

    expect(received).toEqual(expected);
});

test('create Swordsman', () => {
    const received = new Swordsman('Jane', 'Swordsman');
    const expected = {
        name: 'Jane',
        type: 'Swordsman',
        health: 100,
        level: 1,

        attack: 40,
        defence: 10
    }


expect(received).toEqual(expected);
});

test('create Magician', () => {
    const received = new Magician('Jane', 'Magician');
    const expected = {
        name: 'Jane',
        type: 'Magician',
        health: 100,
        level: 1,

        attack: 10,
        defence: 40
    }


expect(received).toEqual(expected);
});

test('create Undead', () => {
    const received = new Undead('Jane', 'Undead');
    const expected = {
        name: 'Jane',
        type: 'Undead',
        health: 100,
        level: 1,

        attack: 25,
        defence: 25
    }


expect(received).toEqual(expected);
});

test('create Zombie', () => {
    const received = new Zombie('Jane', 'Zombie');
    const expected = {
        name: 'Jane',
        type: 'Zombie',
        health: 100,
        level: 1,

        attack: 40,
        defence: 10
    }


expect(received).toEqual(expected);
});

test('create Daemon', () => {
    const received = new Daemon('Jane', 'Daemon');
    const expected = {
        name: 'Jane',
        type: 'Daemon',
        health: 100,
        level: 1,

        attack: 10,
        defence: 40
    }


expect(received).toEqual(expected);
});

test('create Character with error type', () => {
    
    function createCharacter(name, type) {
        let character = new Character(name, type);
        return character;
    }

    expect(() => {
        createCharacter('Jane', 45678);
      }).toThrow();

    
});

test('create levelUp with error', () => {
    
    function createCharacter(name, type) {
        let character = new Character(name, type);
        character.health = 0;
        return character;
    }

    expect(() => {
        createCharacter('Jane', 'Bowman').levelUp();
      }).toThrow();

    
});