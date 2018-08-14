import mongoose from 'mongoose';

import timestamps from 'mongoose-timestamp';

const UserSchema = new mongoose.Schema({
  email: {
    type: 'String',
    required: true
  },
  password: {
    type: 'String',
    required: true
  },
  token: {
    type: 'String',
  }
}, { collection: 'user' });

let state;

if (mongoose.models.Users) {
  state = mongoose.model('Users');
} else {
  UserSchema.plugin(timestamps);
  state = mongoose.model('Users', UserSchema);
}

export default state;
