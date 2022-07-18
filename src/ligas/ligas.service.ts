// import { Injectable } from '@nestjs/common';
import { CreateLigasDto } from './dto/create-ligas.dto';
import { UpdateLigasDto } from './dto/update-ligas.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ligas, LigasDocument } from './entities/ligas.entity';
//
// @Injectable()
export class LigasService {
  constructor(
    @InjectModel(Ligas.name) private ligaModel: Model<LigasDocument>,
  ) {}

  create(createLigasDto: CreateLigasDto) {
    const liga = new this.ligaModel(createLigasDto);
    return liga.save();
  }

  findAll() {
    return this.ligaModel.find();
  }

  findOne(id: string) {
    return this.ligaModel.findOne({ id: +id });
  }

  update(id: string, updateLigasDto: UpdateLigasDto) {
    return this.ligaModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        updateLigasDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.ligaModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
