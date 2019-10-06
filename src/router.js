const express=require('express');
const router=new express.Router();
const PostController=require('../src/controllers/PostController');
const LikeController=require('../src/controllers/LikeController');
const multer=require('multer');
const uploadConfig=require('../src/config/upload');
const upload=multer(uploadConfig)
router.get('/',(req,res)=>
{
    res.send(`${req.query.nome}`);
});
router.get('/listar',PostController.index);
router.post('/posts',upload.single('image'),PostController.store);
router.post('/posts/:id/like',LikeController.store);
module.exports=router;