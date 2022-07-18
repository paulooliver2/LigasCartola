import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaM } from 'mongoose';
import { Usuario } from '../../usuarios/entities/usuario.entity';

export type LigasDocument = Ligas & Document;

@Schema()
export class Ligas {
  @Prop()
  nameLiga: string;

  @Prop()
  copa: boolean;

  @Prop()
  publica: boolean;

  @Prop()
  valorEntrada: number;

  @Prop({ type: [{ type: SchemaM.Types.ObjectId, ref: 'Usuario' }] })
  usuarios: Array<Usuario>;
}

export const LigaSchema = SchemaFactory.createForClass(Ligas);
