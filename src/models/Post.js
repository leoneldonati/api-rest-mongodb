import { model, Schema } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    content: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
})

export default model('Post', postSchema)