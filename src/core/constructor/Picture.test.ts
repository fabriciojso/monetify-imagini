import { readFileSync } from 'fs';
import { pictureGroupComponent01, pictureGroupComponent02 } from '../component/GroupComponent.test';
import { userExemple } from '../interface/IUser.test';
import { background } from './Background.test';
import { Picture } from './Picture';

describe('Inserir fotos do usuário na imagem', () => {
  test('Valida a classe Picture -- Exemplo 01', async () => {
    const backgroundTemp = await background.run();
    const picture = new Picture(backgroundTemp, userExemple, pictureGroupComponent01);
    const pictureTemp = await picture.run();
    const status = pictureTemp.bitmap.data.compare(readFileSync('resources/tests/applications/01/result2.png'));
    expect(status).toEqual(1);
  });

  test('Valida a classe Picture -- Exemplo 02', async () => {
    const backgroundTemp = await background.run();
    const picture = new Picture(backgroundTemp, userExemple, pictureGroupComponent02);
    const pictureTemp = await picture.run();
    const status = pictureTemp.bitmap.data.compare(readFileSync('resources/tests/applications/01/result1.png'));
    expect(status).toEqual(1);
  });
});
