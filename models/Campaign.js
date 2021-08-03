const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    conversion: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    bid: [
      {
        currency: { type: String, required: true },
        cost: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Campaign", CampaignSchema);
