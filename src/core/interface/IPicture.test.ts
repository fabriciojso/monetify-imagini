import { IPicture } from './IPicture';

export const pictureExemple1: IPicture = {
  w: 323,
  h: 323,
  x: 847,
  y: 217,
  opacity: 100,
  background: false,
  grayscale: false,
  rounded: false
};

export const pictureExemple2: IPicture = {
  ...pictureExemple1,
  background: true,
  grayscale: true,
  opacity: 90,
  rounded: true
};

describe('Interface IPicture', () => {
  test('Exemplo 01', () => {
    expect(pictureExemple1.w).toEqual(323);
    expect(pictureExemple1.h).toEqual(323);
    expect(pictureExemple1.x).toEqual(847);
    expect(pictureExemple1.y).toEqual(217);
    expect(pictureExemple1.opacity).toEqual(100);
    expect(pictureExemple1.background).toEqual(false);
    expect(pictureExemple1.grayscale).toEqual(false);
    expect(pictureExemple1.rounded).toEqual(false);
  });
});
