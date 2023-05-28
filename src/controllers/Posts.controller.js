import Post from '../models/Post.js'

// GET POSTS FROM DB
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()

        res.sendStatus(204).json(posts)
    }
    catch (err) {console.error(err)}
}
// GET ONE POST FROM DB
export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        res.sendStatus(204).json(post)
    }
    catch (err) {console.error(err)}
}
// ADD POST TO DB
export const addPost = async (req, res) => {
    try {
        const post = await new Post(req.body)
        const postSaved = await post.save()
         res.sendStatus(200).json({message: 'Post saved!'})
    }
    catch (err) {console.error(err)}
}
// UPDATE POST FROM DB
export const updatePost = async (req, res) => {
    try {
        Post.findByIdAndUpdate(req.body, req.params.id, {})
    }
    catch (err) {console.error(err)}
}
// DELETE POST FROM DB
export const deletePost = async (req, res) => {
    try {

    }
    catch (err) {console.error(err)}
}