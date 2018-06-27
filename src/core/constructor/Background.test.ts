import { readFileSync } from 'fs';
import { backgroundGroupComponent } from '../component/GroupComponent.test';
import { userExemple } from '../interface/IUser.test';
import { Background } from './Background';

export const background = new Background(undefined, userExemple, backgroundGroupComponent);
const original = 'resources/tests/applications/01/background.png';

describe('Gera-se uma imagem com o background definido e o valida com o exemplo pré-definido', () => {
  test('Gerando um background', async () => {
    const backgroundTemp = await background.run();
    expect(backgroundTemp.bitmap.data.compare(readFileSync(original))).toEqual(1);
  });
});
