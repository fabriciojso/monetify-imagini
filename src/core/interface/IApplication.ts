import { GroupComponent } from '../component/GroupComponent';

export interface IApplication {
  getComponents(): Array<GroupComponent<any>>;
}
