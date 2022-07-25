import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaM } from 'mongoose';
import { Usuario } from '../../usuarios/entities/usuario.entity';

export type LigasDocument = Ligas & Document;

@Schema()
export class Ligas {
  @Prop({ required: true })
  nameLiga: string;

  @Prop({ required: true })
  copa: boolean;

  @Prop({ required: true })
  publica: boolean;

  @Prop({ required: true })
  valorEntrada: number;

  @Prop({ required: true })
  descricao: string;

  @Prop()
  dataCriaao: Date;

  @Prop()
  donoLiga: Usuario;

  @Prop({
    type: [{ type: SchemaM.Types.ObjectId, ref: 'Usuario' }],
    required: true,
  })
  usuarios: Array<Usuario>;
}

export const LigaSchema = SchemaFactory.createForClass(Ligas);
