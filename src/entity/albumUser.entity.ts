import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import User from './user.entity';
import Album from './album.entity';

@Entity()
export default class AlbumUser {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user: User) => user.albums, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user!: User;

  @ManyToOne(() => Album, (album: Album) => album.users, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  album!: Album;
}
