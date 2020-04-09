import { Module } from '@nestjs/common'
import { UserModule } from 'src/data/modules/user.module'

@Module({
  imports: [UserModule],
})
export class BlogModule{}
