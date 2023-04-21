const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

// * determines how much processing time it will take to perform the hash
const SALT_ROUNDS = 6

// unique: Although technically not a validator, unique: true creates a unique index in the database which will trigger an error if violated.
// trim: This transform causes Mongoose to trim spaces before and after the string before saving.
// lowercase: This transform causes Mongoose to convert the string to lowercase before saving.
const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            required: true
        },
        password: {
            type: String,
            trim: true,
            minLength: 3,
            required: true,
        }
    },
    {
        timestamps: true,
        toJSON:
        {
            transform: function (doc, ret)
            {
                delete ret.password
                return ret
            }
        }
    });

// * Pre Hook
userSchema.pre('save', async function (next)
{
    // * 'this' is the user doc
    // * if password was NOT modified continue to the next middleware
    if (!this.isModified('password')) return next()

    // * update the password with the computer hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
    return next()
})

module.exports = mongoose.model('User', userSchema)