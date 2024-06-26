import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    property_id: { type: String, required: true },
    name: { type: String, minlength: 4, required: true },
    address: { type: String, required: true },
    description: { type: String, minlength: 10 },
    type: { type: String, required: true },
    position: { lat: Number, lng: Number },
    Distance: { type: Number },
    // enquiries: { type: Array },
    profileImage: { type: String },
    images: { type: Array },
    unite: { type: String },
    contactNumber: { type: String },
    contactEmail: { type: String },
    user_id: { type: String },
  },
  {
    timestamps: true,
  }
);
export const Property = mongoose.model("Property", propertySchema);
