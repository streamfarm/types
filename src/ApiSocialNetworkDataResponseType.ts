import { SocialNetworkUserType } from './SocialNetworkUserType';

/**
 * Represents the structure of an API response.
 *
 * This type is used to encapsulate the response data from an API call. It contains
 * optional properties that can indicate either a single entity, a list of entities,
 * or provide information about the success or failure of the request.
 *
 * Properties:
 * - `item`: An optional property representing a single entity in the response.
 * - `items`: An optional array of entities for cases where the response contains multiple items.
 * - `message`: An optional string carrying a success or informational message regarding the API response.
 * - `error`: An optional string providing details about an error in the API response.
 */
export type ApiSocialNetworkDataResponseType = {
  user?: SocialNetworkUserType,
  message?: string;
  error?: string;
};