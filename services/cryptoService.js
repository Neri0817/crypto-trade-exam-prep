const Crypto = require("../models/Crypto");

exports.getAll = () => Crypto.find({});

exports.create = (ownerId, cryptoData) =>
  Crypto.create({
    ...cryptoData,
    owner: ownerId,
  });
