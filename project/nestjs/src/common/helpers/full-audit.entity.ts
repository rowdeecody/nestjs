import {
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
} from 'typeorm';

export abstract class FullAuditEntity extends BaseEntity {
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at?: Date;

  @Column({ nullable: true })
  created_by?: number; 

  @Column({ nullable: true })
  updated_by?: number;

  @Column({ nullable: true })
  deleted_by?: number;
}
