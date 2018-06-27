import { readFileSync } from 'fs';
import { GroupComponent } from '../component/GroupComponent';
import { Gender } from '../enum/Gender';
import { IBackground } from '../interface/IBackground';
import { IUser } from '../interface/IUser';
import { Background } from './Background';

const userExemple: IUser = {
  name: 'Fabricio',
  picture: 'resources/tests/fabricio.jpg',
  birthday: new Date('1995-03-30 GMT-0300'),
  gender: Gender.Male
};
const backgroundExemple: IBackground = {
  image: 'resources/tests/applications/01/background1.png'
};
const backgroundGroupComponent: GroupComponent<IBackground> = new GroupComponent<IBackground>([backgroundExemple]);
const background = new Background(undefined, userExemple, backgroundGroupComponent);
const original = 'resources/tests/applications/01/background1.png';

describe('Gera-se uma imagem com o background definido e o valida com o exemplo pré-definido', () => {
  test('Gerando um background', async () => {
    const backgroundTemp = await background.run();
    expect(backgroundTemp.bitmap.data.compare(readFileSync(original))).toEqual(1);
  });
});
