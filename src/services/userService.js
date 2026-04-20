const User = require('../models/User');
const jwt = require('jsonwebtoken');

const register = async (data) => {
    const user = await User.create(data);

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );

    return { user, token };
};

const login = async (email, password) => {
    const user = await User.findOne({ email });
    if(!user) throw new Error('Invalid credentials');

    const match = await user.comparePassword(password);
    if(!match) throw new Error('Invalid credentials');

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );

    return { user, token };
};

module.exports = { register, login };