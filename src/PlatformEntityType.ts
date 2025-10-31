import { PlatformTypeEnum } from './PlatformTypeEnum';
import { StreamEntityType } from './StreamEntityType';

export type PlatformEntityType = {
  uuid: string;
  platformType: PlatformTypeEnum;
  platformStreamUrl: string;
  platformStreamKey: string;
  active: boolean;
  dateFirstActive: Date | null;
  dateLastActive: Date | null;
  currentBitrate: number;
  memoryBytes: number;
  cpuUsage: number;
  speed: number;
  dropDup: string | null;
  fps: number;
  resolution: string | null;
  isReadyOnRemote: boolean;
  createdAt: Date;
  status: boolean;

  stream: StreamEntityType; // Use StreamType if you want strict typing and it's available
};


/*
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
};*/