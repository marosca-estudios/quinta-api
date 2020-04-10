import { NotFoundException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'apollo-server-express'
import { User } from 'src/modules/user/user.model'
import { UserProvider } from 'src/modules/user/user.provider'

const pubSub = new PubSub()

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userProvider: UserProvider) {}

  @Query(returns => User)
  async findById(
    @Args('id') id: number
  ): Promise<User> {
    const user = await this.userProvider.findById(id)

    if (!user) {
      throw new NotFoundException(id)
    }

    return user
  }

  @Query(returns => User)
  async findByUsername(
    @Args('username') username: string
  ): Promise<User> {
    const user = await this.userProvider.findByUsername(username)

    if (!user) {
      throw new NotFoundException(username)
    }

    return user
  }
}

