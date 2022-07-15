import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  senha: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
