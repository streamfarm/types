import { StreamEntityType } from './StreamEntityType';

export type ProcessNewStreamResponseType = {
  received: StreamEntityType,
  status: string,
  message?: string,
};