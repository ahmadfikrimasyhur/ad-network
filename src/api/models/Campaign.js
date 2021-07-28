const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema(
  {
    country: {
      type: String, // not required as i may not have an specific targeting (possibly a world-wide campaign?)
    },
    name: {
      type: String,
      required: true,
    },
    conversion: {
      type: String,
      required: true,
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