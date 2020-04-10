import { Field, ID, ObjectType } from '@nestjs/graphql'
import { User } from '../user/user.model';

@ObjectType()
export class Auth {
  @Field(type => User)
  user: User

  @Field()
  token: string

}
