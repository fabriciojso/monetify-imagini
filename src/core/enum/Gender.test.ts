import { Gender } from './Gender';

describe('Gender é um enumerador de generos, tendo dois tipos Male (Masculino) e Female (Feminino)', () => {
  test('Verificando Gender.Female', () => {
    const female = Gender.Female;
    expect(female).toEqual('female');
  });

  test('Verificando Gender.Male', () => {
    const male = Gender.Male;
    expect(male).toEqual('male');
  });
});
