import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import Group from './group.entity';
import AlbumUser from './albumUser.entity';

@Entity()
export default class Album {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  name!: string;

  @Column({
    type: 'tinyint',
    default: 0,
  })
  isShared!: boolean;

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

  @OneToMany(() => Group, (group) => group.album)
  group?: Group[];

  @OneToMany(() => AlbumUser, (albumUser) => albumUser.album)
  users!: AlbumUser[];
}
