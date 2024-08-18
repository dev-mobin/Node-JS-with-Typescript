import { Schema, model, Document } from 'mongoose';
import { IUser } from '../interface/users.interface';

interface IUserModel extends IUser, Document {}

const userSchema = new Schema<IUserModel>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, default: 18 },
});

const User = model<IUserModel>('User', userSchema);

export default User;
