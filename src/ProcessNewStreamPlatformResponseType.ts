import { StreamEntityType } from './StreamEntityType';

export type ProcessNewStreamPlatformResponseType = {
  received: StreamEntityType,
  status: string,
  message?: string,
};