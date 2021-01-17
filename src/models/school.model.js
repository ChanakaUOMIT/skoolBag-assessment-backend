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

// SchoolSchema.index({ name: 'text' });
SchoolSchema.plugin(mongoosePaginate);
// SchoolSchema.statics = {
//     searchPartial: function (q, callback) {
//         return this.find({
//             $or: [
//                 { "name": new RegExp(q, "gi") }
//             ]
//         }, callback);
//     },

//     searchFull: function (q, callback) {
//         return this.find({
//             $text: { $search: q, $caseSensitive: true }
//         }, callback)
//     },

//     search: function (q, callback) {
//         this.searchFull(q, (err, data) => {
//             if (err) return callback(err, data);
//             if (!err && data.length) return callback(err, data);
//             if (!err && data.length === 0) return this.searchPartial(q, callback);
//         });
//     },
// }


export default mongoose.model("School", SchoolSchema);
