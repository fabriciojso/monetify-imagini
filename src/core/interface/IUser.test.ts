import { Gender } from '../enum/Gender';
import { IUser } from './IUser';

export const userExemple: IUser = {
  name: 'Fabricio',
  picture: 'resources/tests/fabricio.jpg',
  birthday: new Date('1995-03-30 GMT-0300'),
  gender: Gender.Male
};

test('Utilizando a interface IUser', () => {
  expect(userExemple.name).toBe('Fabricio');
  expect(userExemple.picture).toBe('resources/tests/fabricio.jpg');
  expect(userExemple.birthday.toDateString()).toBe(new Date('1995-03-30 GMT-0300').toDateString());
  expect(userExemple.gender).toBe('male');
});
