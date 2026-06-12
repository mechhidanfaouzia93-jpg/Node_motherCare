    const mongoose = require("mongoose");

    const PregnancySchema = new mongoose.Schema({
    week: {
        type: Number,
        default: 0,
    },

    babyWeight: {
        type: Number,
        default: 0,
    },

    babyHeight: {
        type: Number,
        default: 0,
    },
    });

    module.exports = mongoose.model("Pregnancy", PregnancySchema);