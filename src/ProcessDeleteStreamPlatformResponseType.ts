import { StreamEntityType } from './StreamEntityType';

export type ProcessDeleteStreamPlatformResponseType = {
  received: StreamEntityType,
  status: string,
  message?: string,
};