import { Entity, PrimaryGeneratedColumn, Column, Exclude } from 'typeorm';
import { FullAuditEntity } from 'src/common/helpers/full-audit.entity';

@Entity({ name: 'users' })
export class User extends FullAuditEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';

  @Column({ unique: true })
  username: string;

  @Exclude()
  @Column()
  password: string;
}
