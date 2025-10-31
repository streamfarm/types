import { UserTypeEnum } from './UserTypeEnum';

/**
 * Represents a user entity with essential details.
 *
 * @property {string} email - The user's email address.
 * @property {UserTypeEnum} type - The classification or role of the user.
 * @property {string} password - The user's password for authentication.
 * @property {string} passwordConfirmation - A confirmation of the user's password to ensure consistency.
 */
export type UserEntityType = {
  email: string,
  type: UserTypeEnum,
  password: string,
  passwordConfirmation: string,
};