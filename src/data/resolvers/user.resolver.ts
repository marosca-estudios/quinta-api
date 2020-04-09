import { NotFoundException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'apollo-server-express'
import { User } from 'src/data/models/user.model'
import { UserProvider } from 'src/data/providers/user.provider'

const pubSub = new PubSub()

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userProvider: UserProvider) {}

  @Query(returns => User)
  async user(
    @Args('id') id: number
  ): Promise<User> {
    const user = await this.userProvider.findOne(id)

    if (!user) {
      throw new NotFoundException(id)
    }

    return user
  }
}

