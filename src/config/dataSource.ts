import './env';
import { DataSource } from 'typeorm';

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const AppDataSource = new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: process.env.NODE_ENV == 'dev' ? true : false, // 개발환경일 때에만 로컬 DB와 동기화
  logging: false, // sql query를 console에 출력하고 싶을 때는 true로 전환
  entities: [`${__dirname}/../entity/*.entity.ts`],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;
