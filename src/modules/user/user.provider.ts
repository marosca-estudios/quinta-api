import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User as UserEntity } from 'src/modules/user/user.entity'
import { User as UserModel } from 'src/modules/user/user.model'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UserProvider {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserModel>
  ){}

  async findById(id: number) {
    return this.usersRepository.findOne( { where: { id } })
  }

  async findByUsername(username: string) {
    return this.usersRepository.findOne( { where: { username } } )
  }
}
