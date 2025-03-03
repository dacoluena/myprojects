const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['police', 'citizen'], default: 'citizen' },
    plateNumber: { type: String, required: function() { return this.role === 'citizen'; }, default: '' }, 
    surname: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
