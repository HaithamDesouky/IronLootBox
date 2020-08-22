"use strict";

const mongoose = require("mongoose");

const lootBoxSchema = new mongoose.Schema(
  {
    name: String,
    lootType: {
      type: String,
      enum: ["Gaming", "Anime", "Entertainment", "Event"],
    },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    picture: String,
    price: {
      amount: Number,
      currency: {
        type: String,
      },
    },
    basket: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
      },
    ],
    charge: String,
  },
  {
    timestamps: {
      createdAt: "creationDate",
    },
  }
);

module.exports = mongoose.model("LootBox", lootBoxSchema);
