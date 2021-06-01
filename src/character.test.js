import {
  Bowerman, Daemon, Swordsman, Magician, Undead, Zombie, Character,
} from './Character';

test('Проверка превышение длины имени', () => {
  expect(() => { new Character('01234567891'); }).toThrowError('Имя должно содержать от двух до десяти символов');
});

test('Проверка слишком короткого имени', () => {
  expect(() => { new Character('о'); }).toThrowError('Имя должно содержать от двух до десяти символов');
});

test('Проверка создания Bowerman', () => {
  const result = new Bowerman('тест');
  expect(result).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'тест', type: 'Bowerman',
  });
});

test('Проверка создания Daemon', () => {
  const result = new Daemon('тест');
  expect(result).toEqual({
    attack: 10, defence: 40, health: 100, level: 1, name: 'тест', type: 'Daemon',
  });
});

test('Проверка создания Swordsman', () => {
  const result = new Swordsman('тест');
  expect(result).toEqual({
    attack: 40, defence: 10, health: 100, level: 1, name: 'тест', type: 'Swordsman',
  });
});

test('Проверка создания Magician', () => {
  const result = new Magician('тест');
  expect(result).toEqual({
    attack: 10, defence: 40, health: 100, level: 1, name: 'тест', type: 'Magician',
  });
});

test('Проверка создания Undead', () => {
  const result = new Undead('тест');
  expect(result).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'тест', type: 'Undead',
  });
});

test('Проверка создания Zombie', () => {
  const result = new Zombie('тест');
  expect(result).toEqual({
    attack: 40, defence: 10, health: 100, level: 1, name: 'тест', type: 'Zombie',
  });
});

test('Проверка повышения уровню', () => {
  const result = new Zombie('тест');
  result.levelUp();
  expect(result).toEqual({
    attack: 48, defence: 12, health: 100, level: 2, name: 'тест', type: 'Zombie',
  });
});

test('Проверка, что уровень не повысится когда здоровье равно нулю', () => {
  const result = new Zombie('тест');
  result.health = 0;
  expect(() => { result.levelUp(); }).toThrowError('Нельзя повысить левел умершего');
});

test('Проверка, что уровень не повысится когда здоровье меньше нуля', () => {
  const result = new Zombie('тест');
  result.health = -10;
  expect(() => { result.levelUp(); }).toThrowError('Нельзя повысить левел умершего');
});

test('Проверка, что урон будет нанесен', () => {
  const result = new Zombie('тест');
  result.damage(10);
  expect(result.health).toEqual(91);
});

test('Проверка, что урон не будет нанесен если здоровье ноль', () => {
  const result = new Zombie('тест');
  result.health = 0;
  expect(() => { result.damage(10); }).toThrowError('Мертвый персонаж не получит урон.');
});
