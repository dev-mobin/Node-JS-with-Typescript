import User from '../models/users.models';
import { IUser } from '../interface/users.interface';

class UserService {
  async createUser(userData: IUser): Promise<IUser> {
    const user = new User(userData);
    return user.save();
  }

  async getAllUsers(): Promise<IUser[]> {
    return User.find();
  }

  async getUserById(name: string): Promise<IUser | null> {
    return User.findById(name);
  }

  async updateUser(userId: string, updateData: Partial<IUser>): Promise<IUser | null> {
    return User.findByIdAndUpdate(userId, updateData, { new: true });
  }

  async deleteUser(userId: string): Promise<IUser | null> {
    return User.findByIdAndDelete(userId);
  }
}

export default new UserService();
