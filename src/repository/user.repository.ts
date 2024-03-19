import AppDataSource from '../config/dataSource';
import User from '../entity/user.entity';

const UserRepo = AppDataSource.getRepository(User);

export default UserRepo;
