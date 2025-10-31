/**
 * Represents the enumeration of user types within the system.
 *
 * This enum defines the types of users that can exist, such as
 * a regular user or an admin.
 *
 * Enum members:
 * - `USER`: Represents a standard user with basic access privileges.
 * - `ADMIN`: Represents an administrator with elevated access rights.
 */
export enum UserTypeEnum {
  USER = 'user',
  ADMIN = 'admin',
}