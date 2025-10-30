import {PlatformType} from "./PlatformType";

export type StreamPlatformType = {
  platformUuid: string;
  platformType: PlatformType
  platformStatus: boolean;
  streamUuid: string;
  streamKey: string;
};