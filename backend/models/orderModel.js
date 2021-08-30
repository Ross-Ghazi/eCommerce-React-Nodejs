import Mongoose from "mongoose";
const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectID,
      required: true,
      ref: "User",
    },

    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        name: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectID,
          required: true,
          ref: "Product",
        },
      },
    ],

    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      PostalCode: { type: String, required: true },
      Country: { type: String, required: true },
    },

    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },

    shippingPrice: {
      type: number,
      required: true,
      detault: 0.0,
    },

    totalPrice: {
      type: number,
      required: true,
      detault: 0.0,
    },

    isPaid: {
      type: Boolean,
      required: true,
      detault: false,
    },

    paidAt: {
      type: Date,
    },

    isDelivered: {
      type: Boolean,
      required: true,
      detault: false,
    },

    deliverAt: {
      type: Date,
    },
  },
  { timestaps: true }
);

const Order = mangoose.model("Order", orderSchema);

export default Order;
