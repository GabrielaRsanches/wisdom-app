import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TeacherModule } from './domain/src/teacher/teacherModule';

@Module({
  imports: [
    TeacherModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../../ui', 'dist'),
      exclude: ['/api*'],
    }),
  ],
})
export class AppModule {}
