import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaM } from 'mongoose';
import { Ligas } from '../../ligas/entities/ligas.entity';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  senha: string;

  @Prop({
    type: [{ type: SchemaM.Types.ObjectId, ref: 'Ligas' }],
  })
  ligas: Array<Ligas>;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
