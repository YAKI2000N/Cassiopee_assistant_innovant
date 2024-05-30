export const propertyProperties = {
  type: "object",
  properties: {
    property_id: { type: "string" },
    name: { type: "string" },
    address: { type: "string" },
    description: { type: "string" },
    type: { type: "string" },
    position: {
      type: "object",
      properties: { lat: { type: "number" }, lng: { type: "number" } },
    },
    Distance: { type: "number" },
    enquiries: { type: "array" },
    profileImage: { type: "string" },
    images: { type: "array" },
    unite: { type: "string" },
    contactNumber: { type: "string" },
    contactEmail: { type: "string" },
    createdAt: { type: "string" },
    updatedAt: { type: "string" },
    user_id: { type: "string" },
  },
};
Object.freeze(propertyProperties);