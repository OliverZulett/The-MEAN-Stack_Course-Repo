import { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface ICustomer extends Document {
  name: string;
  surname: string;
  email: string;
  nit: number;
  adress: string;
  phone: number;
  password: (pasword: string) => Promise<boolean>;
}

const customerSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "El nombre es necesario"],
    },
    surname: {
      type: String,
      trim: true,
      required: [true, "El apellido es necesario"],
    },
    email: {
      type: String,
      required: [true, "El email es necesario"],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, "La contraseña es necesaria"],
    },
    nit: {
      type: [Number, "el nit solo admite numeros"],
      trim: true,
      required: [true, "El nit o ci es necesario"],
    },
    adress: {
      type: String,
      trim: true
    },
    phone: {
      type: Number,
      trim: true,
    },
  },
  {
    collection: "customers",
  }
);

export default model<ICustomer>('Customer', customerSchema);