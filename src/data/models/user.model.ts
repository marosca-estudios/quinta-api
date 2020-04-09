import { Field, ID, ObjectType } from '@nestjs/graphql'
import { UserRole } from '../enums/user.enum';

@ObjectType()
export class User {
  @Field(type => ID)
  id: number

  @Field()
  firstName: string

  @Field()
  lastName: string

  @Field()
  isActive: boolean

  @Field()
  role: UserRole
  
}
