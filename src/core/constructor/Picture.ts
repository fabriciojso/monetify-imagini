import * as Jimp from 'jimp';
import { IPicture } from '../interface/IPicture';
import { Constructor } from './Constructor';

export class Picture extends Constructor<IPicture> {
  public async run(): Promise<Jimp> {
    const pictures = this.component.getItems();
    for (const component of pictures) {
      await Jimp.read(this.user.picture)
        .then(image => image.resize(component.w, component.h))
        .then(image => (component.grayscale ? image.greyscale() : image))
        .then(image => image.opacity(component.opacity / 100))
        .then(async image => {
          if (component.rounded) {
            const mask = await Jimp.read('resources/helpers/rounded.png').then(imageMask =>
              imageMask.resize(component.w, component.h)
            );
            return image.mask(mask, 0, 0);
          }
          return image;
        })
        .then(async image => {
          if (component.background) {
            const newBackground: Jimp = await new Jimp(1200, 630);
            await newBackground.composite(image, component.x, component.y);
            await newBackground.composite(this.image, 0, 0);
            this.image = newBackground;
          } else {
            await this.image.composite(image, component.x, component.y);
          }
          return this.image;
        });
    }
    return this.image;
  }
}
