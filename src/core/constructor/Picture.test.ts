import { compareImages, isSame } from '@bouzuya/compare-images';
import { unlinkSync } from 'fs';
import * as Jimp from 'jimp';
import { GroupComponent } from '../component/GroupComponent';
import { Gender } from '../enum/Gender';
import { IPicture } from '../interface/IPicture';
import { IUser } from '../interface/IUser';
import { Picture } from './Picture';

const tmpImage1 = 'resources/tests/tmp/picture1.png';
const originalImage1 = 'resources/tests/results/picture1.png';

const tmpImage2 = 'resources/tests/tmp/picture2.png';
const originalImage2 = 'resources/tests/results/picture2.png';

const userExemple: IUser = {
  birthday: new Date('1995-03-30 GMT-0300'),
  gender: Gender.Male,
  name: 'Fabricio',
  picture: 'resources/tests/fabricio.jpg'
};

const pictureExemple1: IPicture = {
  w: 323,
  h: 323,
  x: 847,
  y: 217,
  opacity: 100,
  background: false,
  grayscale: false,
  rounded: false
};

const pictureExemple2: IPicture = {
  w: 323,
  h: 323,
  x: 847,
  y: 217,
  opacity: 20,
  background: true,
  grayscale: true,
  rounded: true
};

const pictureGroupComponent01 = new GroupComponent<IPicture>([pictureExemple1]);
const pictureGroupComponent02 = new GroupComponent<IPicture>([pictureExemple2]);

describe('Inserir fotos do usuário na imagem', () => {
  test(
    'Valida a classe Picture -- Exemplo 01',
    async () => {
      const background = await new Jimp(1200, 630);
      const picture = new Picture(background, userExemple, pictureGroupComponent01);
      await picture
        .run()
        .then(image => new Promise((res, rej) => image.write(tmpImage1, (err, ret) => (err ? rej(err) : res(ret)))));
      const tmp = await Jimp.read(tmpImage1);
      const original = await Jimp.read(originalImage1);
      const result = compareImages(tmp.bitmap, original.bitmap);
      unlinkSync(tmpImage1);
      expect(isSame(result)).toEqual(true);
    },
    30000
  );

  test(
    'Valida a classe Picture -- Exemplo 02',
    async () => {
      const background = await Jimp.read('resources/tests/applications/01/background1.png');
      const picture = new Picture(background, userExemple, pictureGroupComponent02);
      await picture
        .run()
        .then(image => new Promise((res, rej) => image.write(tmpImage2, (err, ret) => (err ? rej(err) : res(ret)))));
      const tmp = await Jimp.read(tmpImage2);
      const original = await Jimp.read(originalImage2);
      const result = compareImages(tmp.bitmap, original.bitmap);
      unlinkSync(tmpImage2);
      expect(isSame(result)).toEqual(true);
    },
    30000
  );
});
