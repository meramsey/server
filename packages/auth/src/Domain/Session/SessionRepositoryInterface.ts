import { Session } from './Session'

export interface SessionRepositoryInterface {
  findOneByUuid(uuid: string): Promise<Session | null>
  findOneByUuidAndUserUuid(uuid: string, userUuid: string): Promise<Session | null>
  findAllByRefreshExpirationAndUserUuid(userUuid: string): Promise<Array<Session>>
  findAllByUserUuid(userUuid: string): Promise<Array<Session>>
  deleteAllByUserUuid(userUuid: string, currentSessionUuid: string): Promise<void>
  deleteOneByUuid(uuid: string): Promise<void>
  updateHashedTokens(uuid: string, hashedAccessToken: string, hashedRefreshToken: string): Promise<void>
  updatedTokenExpirationDates(uuid: string, accessExpiration: Date, refreshExpiration: Date): Promise<void>
  save(session: Session): Promise<Session>
  remove(session: Session): Promise<Session>
  clearUserAgentByUserUuid(userUuid: string): Promise<void>
  removeExpiredBefore(date: Date): Promise<void>
}
