import { Module } from '@nestjs/common'
import { mapModules } from 'src/core/modules/modules.helpers'
import config from 'src/core/config/config.main'

@Module({
  imports: mapModules(config.modules),
})
export class AppModule {}
