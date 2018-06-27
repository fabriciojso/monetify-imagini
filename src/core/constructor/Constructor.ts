import * as Jimp from 'jimp';
import { GroupComponent } from '../component/GroupComponent';
import { IUser } from '../interface/IUser';

export abstract class Constructor<Component> {
  protected image: Jimp;
  protected user: IUser;
  protected component: GroupComponent<Component>;

  constructor(image: Jimp, user: IUser, component: GroupComponent<Component>) {
    this.image = image;
    this.user = user;
    this.component = component;
  }

  public abstract async run(): Promise<Jimp>;
}
