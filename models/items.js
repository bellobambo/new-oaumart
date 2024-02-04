import mongoose, { Schema, models } from 'mongoose';

const addItemSchema = new Schema(
    {
        itemName: {
            type: String,
            required: [true, 'Item Name is Required'],
        },
        brandName: {
            type: String,
            required: [true, 'Item Name is Required'],
        },
        itemPrice: {
            type: Number,
            required: [true, 'Item Name is Required'],
        },
        itemDesc: {
            type: String,
        },
        phone: {
            type: Number,
            required: [true, 'Phone Number is Required'],
        },
        image: {
            type: String,
            required: [true, 'Image is Required'],
        }
        // productType: {
        //     type: String,
        //     enum: ['Edible', 'Non-edible'],
        //     required: [true, 'Product Type is Required'],
        //   },
    },
    {
        timestamps: true,
    }
);

const AddItem = models.AddItem || mongoose.model('AddItem', addItemSchema);
export default AddItem;
