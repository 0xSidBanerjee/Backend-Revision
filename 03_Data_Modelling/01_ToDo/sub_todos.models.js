import mongoose from 'mongoose'

const sub_todoSchema = new mongoose.Schema(
    {

    }, {timestamps: true})

export const SubTodo = mongoose.model('SubTodo', sub_todoSchema);
