export type StreamStatisticType = {
  streamKey: string;
  active: boolean;
  streamData: any;
  currentBitrate: number;
  useDvr: boolean;
  isTranscoded: boolean;
  memoryBytes: number;
  cpuUsage: number;
  speed: number;
  dropDup: string;
  fps: number;
  clientCount: number;
  scenePreview: string | null;
  resolution: string | null;
};