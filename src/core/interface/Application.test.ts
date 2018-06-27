import { unlinkSync } from 'fs';
import { createUser } from '../../facebook/Facebook';
import { GroupComponent } from '../component/GroupComponent';
import { Background } from '../constructor/Background';
import { Picture } from '../constructor/Picture';
import { isEqualImages, saveJimp } from '../helpers';
import { ApplicationMock } from './__mocks__/Application.mock';
import { IBackground } from './IBackground';
import { IPicture } from './IPicture';

describe('Gerando uma imagem real de um aplicativo', () => {
  test(
    'Usuário Larissa Dias',
    async () => {
      const tokens = [
        {
          token: '',
          name: 'larrisa'
        },
        {
          token: '',
          name: 'fabricio'
        }
      ];

      for (const token of tokens) {
        const user = await createUser(token.token);
        const application = new ApplicationMock();

        const backgroundComp: GroupComponent<IBackground> = application.getComponents()[0];
        const pictureComp: GroupComponent<IPicture> = application.getComponents()[1];

        const background = await new Background(undefined, user, backgroundComp).run();
        const picture = await new Picture(background, user, pictureComp).run();
        await saveJimp(picture, 'resources/tests/tmp/real.png');
        const isEqual =
          (await isEqualImages('resources/tests/tmp/real.png', `resources/tests/results/${token.name}1.1.png`)) ||
          (await isEqualImages('resources/tests/tmp/real.png', `resources/tests/results/${token.name}1.2.png`));
        expect(isEqual).toEqual(true);
        unlinkSync('resources/tests/tmp/real.png');
      }
    },
    30000
  );
});
