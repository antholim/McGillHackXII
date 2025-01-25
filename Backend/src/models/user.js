import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  authId: { type: String, required: true, unique: true }, // Store the Auth0/Okta user ID (sub)
  email: { type: String, required: true },
  name: { type: String },
  picture: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

export default User;
