import { Catalogue } from 'src/catalogue/entities/catalogue.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'Postgres@123',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [User, Catalogue],
  subscribers: [],
  migrations: [],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
