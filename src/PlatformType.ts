import { PlatformTypeEnum } from './PlatformTypeEnum';

export type PlatformType = {
  platform: PlatformTypeEnum,
  streamKey: string,
  streamUrl: string
};

export type PlatformTypeExtended = {
  uuid: string;
  platformType: PlatformTypeEnum
  platformStreamUrl: string;
  platformStreamKey: string;
  createdAt: string;
  status: boolean;
  stream: string;
};