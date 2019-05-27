import { Module } from '@nestjs/common';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const BROWSER_DIR = join(process.cwd(), 'dist', 'apps', 'ng-test-app');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: BROWSER_DIR,
      bundle: require('../../../../dist/apps/ng-test-app-server/main'),
      liveReload: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
