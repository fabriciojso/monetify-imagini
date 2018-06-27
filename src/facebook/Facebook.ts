import { Facebook } from 'fb-node-sdk';
import { Gender } from '../core/enum/Gender';
import { IUser } from '../core/interface/IUser';

const FB = new Facebook({
  appId: '416196102147539',
  appSecret: '30d6f8a42d4e41400f432e5fafde3403',
  version: 'v3.0'
});

export function createUser(token: string): Promise<IUser> {
  return new Promise((resolve, reject) => {
    FB.setAccessToken(token);
    FB.api('/me', { fields: 'name,gender, birthday, picture.height(3000){url}' }, response => {
      if (!response || response.error) {
        reject(response);
      }
      const user: IUser = {
        name: response.name,
        birthday: new Date(`${response.birthday} GMT-0300`),
        gender: response.gender === 'male' ? Gender.Male : Gender.Female,
        picture: response.picture.data.url
      };
      resolve(user);
    });
  });
}
