import { StreamEntityType } from './StreamEntityType';

export type ProcessDeleteStreamResponseType = {
  received: StreamEntityType,
  status: string,
  message?: string,
};