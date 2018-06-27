import { IBackground } from '../interface/IBackground';
import { GroupComponent } from './GroupComponent';

const backgroundExemple: IBackground = {
  image: 'resources/tests/applications/01/background1.png'
};
const backgroundExemple2: IBackground = {
  image: 'resources/tests/applications/01/background2.png'
};
const backgroundGroupComponent = new GroupComponent<IBackground>([backgroundExemple]);
backgroundGroupComponent.addItem(backgroundExemple2);

const backgroundGroupComponent2 = new GroupComponent<IBackground>();

test('Valida a classe GroupComponent que agrupa componentes', () => {
  expect(backgroundGroupComponent.getItems()).toBeInstanceOf(Array);
  expect(backgroundGroupComponent.getItems().length).toEqual(2);
  expect(backgroundGroupComponent.getItems()[0].image).toEqual('resources/tests/applications/01/background1.png');
  expect(backgroundGroupComponent.getItems()[1].image).toEqual('resources/tests/applications/01/background2.png');
  expect(backgroundGroupComponent2.getItems().length).toEqual(0);
});
