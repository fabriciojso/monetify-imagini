import { IBackground } from './IBackground';

export const backgroundExemple: IBackground = {
  image: 'resources/tests/applications/01/background1.png'
};

test('Utilizando a interface IBackground', () => {
  expect(backgroundExemple.image).toBe('resources/tests/applications/01/background1.png');
});
