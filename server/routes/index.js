import express from "express";
// import {getPosts,createPost,getPost,updatePost,deletePost,likePost} from "../controllers/posts.js"

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('workssssssssssssssss')
} );
router.post('/',);
router.get('/:id', );
router.patch('/:id', );
router.delete('/:id',);
router.patch('/:id/likePost',);

export default router;
