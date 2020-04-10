import { UnauthorizedException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'apollo-server-express'
import { Auth } from './auth.model'
import { UserProvider } from 'src/modules/user/user.provider'
import { AuthProvider } from './auth.provider'

const pubSub = new PubSub()

@Resolver(of => Auth)
export class AuthResolver {
  constructor(private readonly authProvider: AuthProvider) {}

  @Mutation(returns => Auth)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<Auth> {
    const user = await this.authProvider.validateUser(username, password)

    if (!user) {
      throw new UnauthorizedException()
    }

    return {
      user,
      token: 'token',
    }
  }
}

