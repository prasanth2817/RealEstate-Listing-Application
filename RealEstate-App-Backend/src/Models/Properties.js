import mongoose from "./index.js";

const PropertySchema = new mongoose.Schema(
  {
    propertyName: {
      type: String,
      required: [true, "Property Name is required"],
    },
    propertyType: {
      type: String,
      required: [true, "property Type is required"],
      enum: ["Apartment", "House", "Commercial", "Land", "villa"],
    },
    location: {
      type: String,
      required: [true, "Property Location is required"],
    },
    price: { type: Number, required: [true, "Property Price is required"] },
    description: {
      type: String,
      required: [true, "Property Description is required"],
    },
    PropertyStatus: {
      type: String,
      default: "Not Sold",
      enum: ["Not Sold", "Property Sold"],
    },
    images: [{ type: String }],
  },
  {
    collection: "Properties",
    versionKey: false,
  }
);

const PropertyModel = mongoose.model("Properties", PropertySchema);

export default PropertyModel;
