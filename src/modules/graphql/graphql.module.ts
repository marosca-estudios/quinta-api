import { Module } from '@nestjs/common'
import { GraphQLModule as NestjsGraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

@Module({
  imports: [
    NestjsGraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    })
  ]
})
export class GraphQLModule{}
