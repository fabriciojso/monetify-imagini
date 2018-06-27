import { backgroundGroupMock, pictureGroupMock } from '../../component/__mocks__/GroupComponent.mock';
import { IApplication } from '../IApplication';

export class ApplicationMock implements IApplication {
  public getComponents() {
    return [backgroundGroupMock, pictureGroupMock];
  }
}
