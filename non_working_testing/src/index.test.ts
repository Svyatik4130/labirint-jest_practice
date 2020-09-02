import { minWalk } from './index';

describe('minWalk test', () => {
  test('walking horisontal', () => {
    expect(minWalk(
        [
          '...',
          '...',
          '...',
        ], 
        2, 0,
        2, 2
    )).toBe("Ваша фигура прошла весь путь к точке назначения и не попала на \"Х\". Количество ходов:2");
  });
  test('walking vertical', () => {
    expect(minWalk(
        [
          '...',
          '...',
          '...',
        ], 
        2, 0,
        0, 0
    )).toBe("Ваша фигура прошла весь путь к точке назначения и не попала на \"Х\". Количество ходов:2");
  });
  test('walking horisontal with bomb', () => {
    expect(minWalk(
        [
          '...',
          '...',
          '.X.',
        ], 
        2, 0,
        2, 2
    )).toBe("Ваша фигура попала на \"Х\". Количесвто ходов: 1");
  });
  test('walking vertical with bomb', () => {
    expect(minWalk(
        [
          '...',
          'X..',
          '...',
        ], 
        2, 0,
        0, 0
    )).toBe("Ваша фигура попала на \"Х\". Количесвто ходов: 1");
  });
  test('walking diagonal from bt left to top right', () => {
    expect(minWalk(
        [
          '...',
          '...',
          '...',
        ], 
        2, 0,
        0, 2
    )).toBe("Ваша фигура прошла весь путь к точке назначения и не попала на \"Х\". Количество ходов:2");
  });
  test('walking diagonal from top right to bt left', () => {
    expect(minWalk(
        [
          '...',
          '...',
          '...',
        ], 
        2, 2,
        0, 0
    )).toBe("Ваша фигура прошла весь путь к точке назначения и не попала на \"Х\". Количество ходов:2");
  });
  test('walking diagonal from bt left to top right with the bomb in the end', () => {
    expect(minWalk(
        [
          'X..',
          '...',
          '...',
        ], 
        2, 2,
        0, 0
    )).toBe("Ваша фигура попала на \"Х\". Количесвто ходов: 2");
  });
});
