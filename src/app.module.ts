import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LigasModule } from './ligas/ligas.module';

@Module({
  imports: [
    UsuariosModule,
    MongooseModule.forRoot(
      'mongodb+srv://cartola:cartola123@cluster0.rrjl7.mongodb.net/test',
    ),
    LigasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
