import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TeacherModule } from './domain/src/teacher/teacherModule';
import { DatabaseModule } from './infra/dataSource.module';

@Module({
  imports: [
    TeacherModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../../ui', 'dist'),
      exclude: ['/api*'],
    }),
    DatabaseModule,
  ],
})
export class AppModule {}
