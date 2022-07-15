import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario, UsuarioDocument } from './entities/usuario.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = new this.usuarioModel(createUsuarioDto);
    return usuario.save();
  }

  findAll() {
    return this.usuarioModel.find();
  }

  findOne(id: string) {
    return this.usuarioModel.findOne({ id: +id });
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        updateUsuarioDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.usuarioModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
