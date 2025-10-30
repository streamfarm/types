/**
 * Represents the structure of an API response.
 *
 * This type is typically used to describe the response object received from an API.
 * It contains optional fields for items, pagination details, a single item, a message, or an error.
 *
 * Properties:
 * - `items` (optional): An array of StreamEntity objects, representing a collection of items.
 * - `pagination` (optional): An object containing pagination details including:
 *   - `pages`: The total number of available pages.
 *   - `total`: The total number of items available.
 *   - `current`: The current page number.
 * - `item` (optional): A single StreamEntity object, representing a single item.
 * - `message` (optional): A string providing additional context or information.
 * - `error` (optional): A string indicating an error message if the API call fails.
 */
export type ApiSocialNetworkResponseType = {
  message?: string;
  error?: string;
};