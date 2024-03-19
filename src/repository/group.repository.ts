import AppDataSource from '../config/dataSource';
import Group from '../entity/group.entity';

const GroupRepo = AppDataSource.getRepository(Group);

export default GroupRepo;
