import AppDataSource from '../config/dataSource';
import Album from '../entity/album.entity';

const AlbumRepo = AppDataSource.getRepository(Album);

export default AlbumRepo;
