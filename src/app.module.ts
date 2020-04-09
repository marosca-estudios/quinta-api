import { Module } from '@nestjs/common'
import { mapModules } from './core/modules/modules.helpers'
import config from './core/config/config.main'

@Module({
  imports: mapModules(config.modules),
})
export class AppModule {}
