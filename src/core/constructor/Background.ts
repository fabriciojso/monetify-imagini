import * as Jimp from 'jimp';
import { IBackground } from '../interface/IBackground';
import { Constructor } from './Constructor';

export class Background extends Constructor<IBackground> {
  public async run(): Promise<Jimp> {
    this.image = await Jimp.read(this.getBackground().image);
    return this.image;
  }

  private getBackground(): IBackground {
    const items = this.component.getItems();
    return items[Math.floor(Math.random() * items.length)];
  }
}
