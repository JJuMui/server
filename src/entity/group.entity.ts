import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Album from './album.entity';

@Entity()
export default class Group {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: 20,
  })
  name!: string;

  @ManyToOne(() => Album, (album: Album) => album.group, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  album!: Album;

  @Column({
    type: 'tinyint',
    default: 0,
  })
  isHidden!: boolean;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  updatedAt?: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt?: Date;
}
