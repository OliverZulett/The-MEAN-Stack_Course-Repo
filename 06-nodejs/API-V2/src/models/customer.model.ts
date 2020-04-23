import { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface ICustomer extends Document {
  name: string;
  surname: string;
  email: string;
  nit: number;
  adress: string;
  phone: number;
  password:string;
  comparePassword: (pasword: string) => Promise<boolean>;
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

// Asignamos un middleware
customerSchema.pre<ICustomer>('save', async function (next) {
  const customer = this;
  if (!customer.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10); //cuantas veces va a encriptar
  const hash = await bcrypt.hash(customer.password, salt); //contraseña cifrada
  customer.password = hash;
  next();//el next continua con el codigo es como el return 
});

customerSchema.pre<ICustomer>('findByIdAndDelete', async function (next) {
  const customer = this;
  if (!customer.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10); //cuantas veces va a encriptar
  const hash = await bcrypt.hash(customer.password, salt); //contraseña cifrada
  customer.password = hash;
  next();//el next continua con el codigo es como el return 
});

// methodos para el esquema
customerSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password)
}

export default model<ICustomer>('Customer', customerSchema);