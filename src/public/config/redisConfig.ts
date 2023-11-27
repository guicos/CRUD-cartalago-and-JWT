import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService extends Redis {
  constructor() {
    super();

    super.on('error', (err) => {
      console.log('Error on Redis');
      console.log(err);
      process.exit(11);
    });

    super.on('connect', () => {
      console.log('Redis connected');
    });
  }
}
