import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthController } from './auth/auth.controller.js';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { PropertiesModule } from './modules/properties/properties.module.js';
import { UnitsModule } from './modules/units/units.module.js';
import { FavoritesModule } from './modules/favorites/favorites.module.js';
import { BookingsModule } from './modules/bookings/bookings.module.js';
import { ReviewsModule } from './modules/reviews/reviews.module.js';
import { NotificationsModule } from './modules/notifications/notifications.module.js';

@Module({
  imports: [AuthModule, UsersModule, PropertiesModule, UnitsModule, FavoritesModule, BookingsModule, ReviewsModule, NotificationsModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
