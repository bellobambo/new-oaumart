import mongoose, { Schema, models } from 'mongoose';

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique : [true, 'Email Already Exist'],
            required: [true , 'Email is Required'],
        },
        name: {
            type: String,
            required:  [true , 'Name is Required'],
        },
        image : {
            type : String,
        }
    },
    {
        timestamps: true,
    }
);

const User = models.User || mongoose.model('User', userSchema);
export default User;