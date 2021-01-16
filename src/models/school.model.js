import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const SchoolSchema = new Schema(
    {
        _id: {
            type: mongoose.ObjectId,
        },
        name: {
            type: String,
            required: true,
        },
        address: {
            street: {
                type: String,
                required: true
            },
            suburb: {
                type: String,
                required: true
            },
            postcode: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            }
        },
        registedStudents: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

SchoolSchema.index({ name: 'text' });
SchoolSchema.plugin(mongoosePaginate);


export default mongoose.model("School", SchoolSchema);
