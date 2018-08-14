import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/user';

export function insertUser(email, password) {
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);

  const userModel = new User({ email, password: passwordHash });
  return userModel.save();
}

export function insertUserToken(_id) {
  const token = jwt.sign({ _id }, process.env.SECRET, {
    expiresIn: 300
  });
  return User.findByIdAndUpdate({ _id }, { token }, { new: true });
}


export async function getUser(_id) {
  const user = await User.findById(_id);
  return user;
}
