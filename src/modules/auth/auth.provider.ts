import { Injectable } from '@nestjs/common'
import { UserProvider } from 'src/modules/user/user.provider'
import { User } from 'src/modules/user/user.model'

@Injectable()
export class AuthProvider {
  constructor(private readonly userProvider: UserProvider) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userProvider.findByUsername(username)

    if (!user) {
      return null
    }

    if (user.password === password) {
      const { password, ...result} = user

      return user
    }
  }
}
