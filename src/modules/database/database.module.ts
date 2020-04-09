import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import entities from 'src/core/entities/entities.mappers'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseFloat(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'test',
      entities,
      synchronize: true, // development only
    })
  ],
})
export class DatabaseModule{}
