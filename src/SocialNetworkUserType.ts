export type SocialNetworkUserType = {
  id: number | string;
  firstName?: string;
  lastName?: string;
  //email?: string;
  avatar?: string;
  screenName?: string;
  params?: {
    streamUrl?: string;
    streamKey?: string;
  }
};