import { IArtist } from '../../utils/interfaces';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Album } from '../../albums/entities/album.entity';
import { Track } from '../../tracks/entities/track.entity';
import { Favorite } from '../../favorites/entities/favorites.entity';

@Entity('artist')
export class Artist implements IArtist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  grammy: boolean;

  @OneToMany(() => Album, (album) => album.artist, {
    onDelete: 'SET NULL',
  })
  albums: Album[];

  @OneToMany(() => Track, (track) => track.artist, {
    onDelete: 'SET NULL',
  })
  tracks: Track[];

  @ManyToOne(() => Favorite, (favorite) => favorite.artists, {
    onDelete: 'CASCADE',
  })
  favorites: Favorite;
}
