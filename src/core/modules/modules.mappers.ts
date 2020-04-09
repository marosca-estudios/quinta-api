import { ConfigModule } from 'src/modules/config/config.module'
import { DatabaseModule } from 'src/modules/database/database.module'
import { DynamicModule } from '@nestjs/common'

export const modulesMapper = {
  config: ConfigModule,
  database: DatabaseModule,
}
