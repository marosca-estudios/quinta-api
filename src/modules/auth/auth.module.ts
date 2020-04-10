import { Module } from '@nestjs/common'
import { UserModule } from 'src/modules/user/user.module'
import { AuthProvider } from './auth.provider'
import { LocalStrategy } from './auth.strategy'
import { PassportModule } from '@nestjs/passport'
import { AuthResolver } from './auth.resolver'

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthResolver, AuthProvider, LocalStrategy],
})
export class AuthModule{}
