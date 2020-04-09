import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { UserRole } from 'src/data/enums/user.enum'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ default: true })
  isActive: boolean

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole
}
