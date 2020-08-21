'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },
    history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LootBox' }],
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true
    },
    role: {
      type: String,
      enum: ['User', 'Admin'],
      required: true,
      default: 'User'
    },
    deliveryAddress: {
      streetAddress: String,
      country: String,
      province: String,
      city: String,
      postalCode: { type: Number, min: 0 }
    },
    phone: String,
    completedProfile: { type: Boolean, default: false },
    picture: String,
    passwordHash: {
      type: String
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
      }
    ],
    feed: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
      }
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],

    githubToken: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: 'creationDate'
    }
  }
);

module.exports = mongoose.model('User', schema);
