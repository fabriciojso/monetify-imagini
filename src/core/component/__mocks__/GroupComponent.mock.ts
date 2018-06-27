import { IBackground } from '../../interface/IBackground';
import { IPicture } from '../../interface/IPicture';
import { GroupComponent } from '../GroupComponent';

export const backgroundGroupMock = new GroupComponent<IBackground>([
  { image: 'resources/tests/applications/01/background1.png' },
  { image: 'resources/tests/applications/01/background2.png' }
]);

export const pictureGroupMock = new GroupComponent<IPicture>([
  {
    w: 323,
    h: 323,
    x: 847,
    y: 217,
    opacity: 100,
    background: true,
    grayscale: false,
    rounded: false
  }
]);
