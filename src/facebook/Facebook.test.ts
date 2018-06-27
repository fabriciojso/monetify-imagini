import { Gender } from '../core/enum/Gender';
import { IUser } from '../core/interface/IUser';
import { createUser } from './Facebook';

describe('Autentica usuário utilizando o Facebook a partir do Token', () => {
  test('Cria usuário', async () => {
    const token =
      'EAAF6hzTTTdMBAMV4K5Iy2QBsZAGOFkOPb04FSPEY19akFzbZAZBw5gjcVZBCTaXgi4cVF650bGWNsRT18GqRdkepvrt4tDPxYUlTJZACEBHJgg7CZAUmMEShckw6xQXZCfIa8WAFcUNfHstYdSXZACKzjD5pJIBgBqBZClsHQRlA3Bdr0xy8bf6ohbBKuXOssAtbbZCzwm3PE7RiIuy6LBrNMhXbxcAWOxRj6LHVC7dUZCW2gZDZD';
    const user: IUser = await createUser(token);
    expect(user.name).toEqual('Larissa Dias');
    expect(user.gender).toEqual(Gender.Female);
    expect(user.birthday.getTime()).toEqual(348634800000);
  });
});
