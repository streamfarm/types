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

/**
 * Represents a user entity with essential details.
 *
 * @property {string} email - The user's email address.
 * @property {UserTypeEnum} type - The classification or role of the user.
 * @property {string} password - The user's password for authentication.
 * @property {string} passwordConfirmation - A confirmation of the user's password to ensure consistency.
 */
export type UserType = {
  email: string,
  type: UserTypeEnum,
  password: string,
  passwordConfirmation: string,
};