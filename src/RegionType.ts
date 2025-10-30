export type Region = {
  uuid: string;
  regionName: string;
  regionShortKey: string;
  regionIp: string;
  regionDomain: string;
  regionPort: number;
  regionRtmpPort: number;
  regionRtspPort: number;
  useSSL: boolean;
  regionUsername: string;
  regionPassword: string;
  regionAccessToken: string;
  regionRefreshToken: string;
  regionSigningKey: string;
  regionAccessTokenExpiresAt: string;
};