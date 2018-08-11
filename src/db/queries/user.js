import User from '../models/user';

export function insertUser(email, password) {
  const userModel = new User({ email, password });
  return userModel.save();
}

export async function getUser(_id) {
  const user = await User.findById(_id);
  return user;
}
