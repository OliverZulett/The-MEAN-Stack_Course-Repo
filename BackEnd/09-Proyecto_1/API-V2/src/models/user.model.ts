import { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  name: string;
  surname: string;
  email: string;
  nit: number;
  adress: string;
  phone: number;
  password:string;
  comparePassword: (pasword: string) => Promise<boolean>;
}

const userSchema = new Schema(
  {
    
    role: {
      type: String,
      required: true, 
      default: 'USER_ROLE'
    },
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
      type: Number,
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
    collection: "users",
  }
);

// Asignamos un middleware
userSchema.pre<IUser>('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10); //cuantas veces va a encriptar
  const hash = await bcrypt.hash(user.password, salt); //contraseña cifrada
  user.password = hash;
  next();//el next continua con el codigo es como el return 
});

userSchema.pre<IUser>('findByIdAndDelete', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10); //cuantas veces va a encriptar
  const hash = await bcrypt.hash(user.password, salt); //contraseña cifrada
  user.password = hash;
  next();//el next continua con el codigo es como el return 
});

// methodos para el esquema
userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password)
}

export default model<IUser>('User', userSchema);