import mongoose, { Schema } from "mongoose";
import mongooseAggreatePaginate from "mongoose-aggregate-paginate-v2";

const productSchema = new Schema(
  {
    productImage: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    ratings: {
      type: Number,
      default: 0,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

productSchema.plugin(mongooseAggreatePaginate);
export const Product = mongoose.model("Product", productSchema);
