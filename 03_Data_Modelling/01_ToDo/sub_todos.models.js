import mongoose, { Mongoose } from 'mongoose'

const sub_todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            required: true,
            default: false
        },
        createdBy: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }, {timestamps: true})

export const SubTodo = mongoose.model('SubTodo', sub_todoSchema);
