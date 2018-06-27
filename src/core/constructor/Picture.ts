import * as Jimp from 'jimp';
import { IPicture } from '../interface/IPicture';
import { Constructor } from './Constructor';

export class Picture extends Constructor<IPicture> {
  public async run(): Promise<Jimp> {
    const pictures = this.component.getItems();
    for (let i = 0; i < pictures.length; i++) {
      const pictureComponent = pictures[i];
      const picture = await Jimp.read(this.user.picture);
      const pictureResize = await picture.resize(pictureComponent.w, pictureComponent.h);
      this.image = await this.image.composite(pictureResize, pictureComponent.x, pictureComponent.y);
    }
    return this.image;
  }
}
