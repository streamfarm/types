import { AccountSocialNetworkEnum } from './AccountSocialNetworkEnum';
import { AccountEntityType } from './AccountEntityType';

export type AccountSocialNetworkEntityType = {
  uuid: string;
  socialType: AccountSocialNetworkEnum;
  isAuthorized: boolean;
  accessToken?: string;
  accessTokenExpiresAt: Date;
  refreshToken?: string;
  deviceId?: string;
  idToken?: string;
  idUser?: string;
  avatar?: string;
  screenName?: string;
  channelStreamKey?: string;
  account: AccountEntityType;
  createdAt: Date;
  updatedAt: Date;
};