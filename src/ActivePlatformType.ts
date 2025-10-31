import { PlatformTypeEnum } from './PlatformTypeEnum';

export type ActivePlatformType = {
  platformUuid: string;
  platformType: PlatformTypeEnum
  platformStatus: boolean;
  streamUuid: string;
  streamKey: string;
};