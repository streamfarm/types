import { PlatformTypeEnum } from './PlatformTypeEnum';

export type PlatformStatisticType = {
  uuid: string;
  streamKey: string;
  streamData: string;
  platformType: PlatformTypeEnum;
  active: boolean;
  currentBitrate: number;
  memoryBytes: number;
  cpuUsage: number;
  speed: number;
  dropDup: string;
  fps: number;
  resolution: string | null;
};