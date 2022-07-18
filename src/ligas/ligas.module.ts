import { Module } from '@nestjs/common';
import { LigasService } from './ligas.service';
import { LigasController } from './ligas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ligas, LigaSchema } from './entities/ligas.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ligas.name, schema: LigaSchema }]),
  ],
  controllers: [LigasController],
  providers: [LigasService],
})
export class LigasModule {}
