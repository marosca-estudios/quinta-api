import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/data/entities/user.entity'
import { UserResolver } from '../resolvers/user.resolver'
import { UserProvider } from '../providers/user.provider'

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [
    UserResolver,
    UserProvider,
  ],
  controllers: [

  ],
})
export class UserModule{}
