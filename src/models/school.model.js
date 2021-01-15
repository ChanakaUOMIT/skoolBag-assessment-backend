import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schoolSchema = new Schema(
    {
        _id: {
            type: mongoose.ObjectId,
        },
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
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


export default mongoose.model("School", schoolSchema);
