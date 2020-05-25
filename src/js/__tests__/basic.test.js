import Character from '../character';
import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('Нельзя добавить персонажа с именем короче двух символов', () => {
  function result() {
    const char = new Character('a', 'Bowman');
    return char;
  }
  expect(result).toThrow('Слишком короткое имя');
});

test('Нельзя добавить персонажа с именем длиннее десяти символов', () => {
  function result() {
    const char = new Character('aaaaaaaaaas', 'Bowman');
    return char;
  }
  expect(result).toThrow('Слишком длинное имя');
});

test('Если добавить персонажа типа Bowerman, получится Bowerman', () => {
  const result = new Bowerman('cat');
  expect(result).toEqual({
    attack: 25,
    defense: 25,
    health: 100,
    level: 1,
    name: 'cat',
    type: 'Bowerman',
  });
});

test('Если добавить персонажа типа Swordsman, получится Swordsman', () => {
  const result = new Swordsman('cat');
  expect(result).toEqual({
    attack: 40,
    defense: 10,
    health: 100,
    level: 1,
    name: 'cat',
    type: 'Swordsman',
  });
});

test('Если добавить персонажа типа Magician, получится Magician', () => {
  const result = new Magician('cat');
  expect(result).toEqual({
    attack: 10,
    defense: 40,
    health: 100,
    level: 1,
    name: 'cat',
    type: 'Magician',
  });
});

test('Если добавить персонажа типа Undead, получится Undead', () => {
  const result = new Undead('cat');
  expect(result).toEqual({
    attack: 25,
    defense: 25,
    health: 100,
    level: 1,
    name: 'cat',
    type: 'Undead',
  });
});

test('Если добавить персонажа типа Zombie, получится Zombie', () => {
  const result = new Zombie('cat');
  expect(result).toEqual({
    attack: 40,
    defense: 10,
    health: 100,
    level: 1,
    name: 'cat',
    type: 'Zombie',
  });
});

test('Если добавить персонажа типа Daemon, получится Daemon', () => {
  const result = new Daemon('cat');
  expect(result).toEqual({
    attack: 10,
    defense: 40,
    health: 100,
    level: 1,
    name: 'cat',
    type: 'Daemon',
  });
});
