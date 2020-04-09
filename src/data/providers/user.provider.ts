import { Injectable } from '@nestjs/common'
import { User } from 'src/data/models/user.model'
import { UserRepository } from 'src/data/repositories/user.repository'

@Injectable()
export class UserProvider {
  constructor(private readonly userRepository: UserRepository) {}

  async findOne(id: number) {
    return this.userRepository.findOne(id)
  }
}
