import { compareImages, isSame } from '@bouzuya/compare-images';
import { unlinkSync } from 'fs';
import * as Jimp from 'jimp';
import { pictureGroupComponent01 } from '../component/GroupComponent.test';
import { userExemple } from '../interface/IUser.test';
import { background } from './Background.test';
import { Picture } from './Picture';

const tmpImage = 'resources/tests/tmp/exemplo1.png';
const originalImage = 'resources/tests/applications/01/result2.png';

describe('Inserir fotos do usuário na imagem', () => {
  test(
    'Valida a classe Picture -- Exemplo 01',
    async () => {
      const backgroundTemp = await background.run();
      const picture = new Picture(backgroundTemp, userExemple, pictureGroupComponent01);
      await picture
        .run()
        .then(image => new Promise((res, rej) => image.write(tmpImage, (err, ret) => (err ? rej(err) : res(ret)))));
      const tmp = await Jimp.read(tmpImage);
      const original = await Jimp.read(originalImage);
      const result = compareImages(tmp.bitmap, original.bitmap);
      unlinkSync(tmpImage);
      expect(isSame(result)).toEqual(true);
    },
    30000
  );
});
