/**
 * Represents the configuration and metadata for a stream player.
 *
 * This type consolidates information about a stream player including its URLs, stream settings,
 * activity status, and associated author metadata.
 *
 * @property {string} uuid - Unique identifier for the stream player.
 * @property {string} playerUrl - URL of the player interface.
 * @property {string} hlsUrl - URL for the HLS stream.
 * @property {string} streamKey - Unique key used to identify the stream.
 * @property {string} streamName - Name of the stream for identification purposes.
 * @property {string} createdAt - Timestamp of when the stream player configuration was created.
 * @property {boolean} active - Indicates whether the stream is currently active.
 * @property {string|null} dateFirstActive - Timestamp indicating the first time the stream was active, or null if never active.
 * @property {string|null} dateLastActive - Timestamp indicating the last time the stream was active, or null if never active.
 * @property {string} currentBitrate - Current bitrate of the stream.
 * @property {string} fps - Frames per second of the stream.
 * @property {string} resolution - Current resolution of the stream.
 * @property {boolean} useDvr - Indicates whether DVR functionality is enabled for the stream.
 * @property {boolean} isTranscoded - Specifies whether the stream is being transcoded.
 * @property {number} clientCount - Number of clients currently connected to the stream.
 * @property {Object} streamAuthor - Metadata about the author or creator associated with the stream.
 * @property {string} streamAuthor.uuid - Unique identifier of the stream author.
 * @property {string} streamAuthor.firstName - First name of the stream author.
 * @property {string} streamAuthor.lastName - Last name of the stream author.
 */
export type StreamPlayerType = {
  uuid: string;
  playerUrl: string;
  hlsUrl: string;
  streamKey: string;
  streamName: string;
  createdAt: string;
  active: boolean;
  dateFirstActive: string | null;
  dateLastActive: string | null;
  currentBitrate: string;
  fps: string;
  resolution: string;
  useDvr: boolean;
  isTranscoded: boolean;
  clientCount: number;
  streamAuthor: {
    uuid: string,
    firstName: string,
    lastName: string,
  };
};


/**
 * Represents the type definition for a stream, including properties related to its configuration,
 * metadata, and performance metrics.
 *
 * @property {string} uuid - The unique identifier of the stream.
 * @property {string} [streamKey] - The optional key used to access or identify the stream.
 * @property {string} [streamKeySecret] - The optional secret associated with the stream key.
 * @property {string} [streamName] - The optional name given to the stream.
 * @property {Date} createdAt - The date and time when the stream was created.
 * @property {boolean} status - Indicates whether the stream is currently operational or not.
 * @property {boolean} active - Indicates if the stream is active.
 * @property {Date|null} [dateFirstActive] - The first date and time the stream became active, if available.
 * @property {Date|null} [dateLastActive] - The last date and time the stream was active, if available.
 * @property {string|null} [streamData] - Any associated data for the stream, if available.
 * @property {number} [currentBitrate] - The current bitrate of the stream, measured in bits per second.
 * @property {number} [memoryBytes] - The memory usage of the stream, measured in bytes.
 * @property {number} [cpuUsage] - The CPU usage percentage of the stream process.
 * @property {number} [speed] - The speed of the stream, typically measured as a multiplier relative to normal playback.
 * @property {string|null} [dropDup] - Information about duplicate frames dropped, if applicable.
 * @property {number} [fps] - The frame rate of the stream, measured in frames per second.
 * @property {string|null} [resolution] - The resolution of the stream, typically in the format "widthxheight".
 * @property {boolean} useDvr - Indicates whether DVR functionalities are enabled for the stream.
 * @property {boolean} isTranscoded - Indicates whether the stream is being transcoded.
 * @property {number} clientCount - The total number of clients currently connected to the stream.
 * @property {string|null} [scenePreview] - A preview image or scene URL associated with the stream, if available.
 * @property {any} [region] - The associated region data. Use `RegionType` if defined.
 * @property {any} [account] - The account linked to the stream. Use `AccountType` or `AccountEntity` for detailed typing if available.
 * @property {any[]} [platforms] - The platforms that the stream is broadcasted to. Use an array of `PlatformType` for deep typing.
 * @property {any} [statistic] - Overall statistical information related to the stream. Use `StatisticType` if available.
 * @property {any[]} [statisticMonthly] - An array of monthly statistical data for the stream. Use `StatisticMonthlyType[]` if defined.
 */
export type StreamType = {
  uuid: string;
  streamKey?: string;
  streamKeySecret?: string;
  streamName?: string;
  streamDescription?: string;
  streamCategory?: string;
  enableComments: boolean;
  createdAt: Date;
  status: boolean;
  active: boolean;
  dateFirstActive?: Date | null;
  dateLastActive?: Date | null;
  streamData?: string | null;
  currentBitrate?: number;
  memoryBytes?: number;
  cpuUsage?: number;
  speed?: number;
  dropDup?: string | null;
  fps?: number;
  resolution?: string | null;
  useDvr: boolean;
  isTranscoded: boolean;
  clientCount: number;
  scenePreview?: string | null;

  region?: any;                    // Use RegionType if you have one defined
  account?: any;                   // Use AccountType/AccountEntity if you want deep typing
  platforms?: any[];               // Use PlatformType[] if defined
  statistic?: any;                 // Use StatisticType if defined
  statisticMonthly?: any[];        // Use StatisticMonthlyType[] if defined
};