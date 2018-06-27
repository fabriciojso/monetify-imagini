import { IBackground } from '../interface/IBackground';
import { backgroundExemple } from '../interface/IBackground.test';
import { IPicture } from '../interface/IPicture';
import { pictureExemple1, pictureExemple2 } from '../interface/IPicture.test';
import { GroupComponent } from './GroupComponent';

export const backgroundGroupComponent = new GroupComponent<IBackground>([backgroundExemple]);
export const pictureGroupComponent01 = new GroupComponent<IPicture>([pictureExemple1]);
export const pictureGroupComponent02 = new GroupComponent<IPicture>([pictureExemple2]);

test('Valida a classe GroupComponent que agrupa componentes', () => {
  expect(backgroundGroupComponent.getItems()).toBeInstanceOf(Array);
  expect(pictureGroupComponent01.getItems()).toBeInstanceOf(Array);
});
