import { PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ nullable: true, name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true, name: 'updated_at' })
  updatedAt: Date;
}
