import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  owner: {
    type: String,
    required: [true, "Owner is required"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
