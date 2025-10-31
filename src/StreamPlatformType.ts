//import {PlatformType} from "./PlatformType";


import { PlatformTypeEnum } from './PlatformTypeEnum';
import { StreamEntityType } from './StreamEntityType';

export type StreamPlatformType = {
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

  stream: StreamEntityType;
};

/*
export type StreamPlatformType = {
  platformUuid: string;
  platformType: PlatformType
  platformStatus: boolean;
  streamUuid: string;
  streamKey: string;
};*/