const express=require('express');
const app=express();
const port=3000;
const mongoose=require('mongoose');
const router=require('../src/router');
const path=require('path');
const cors=require('cors');

const server=require('http').Server(app);
const io=require('socket.io')(server);

app.use((req,res,next)=>
{
    req.io=io;
    next();
})
app.use(router);
app.use(cors());

mongoose.connect('mongodb://everton:evertonloko1@ds139956.mlab.com:39956/instagram',{
    useNewUrlParser:true,
});

app.use('/files',express.static(path.resolve(__dirname,'..','uploads','resized')));
server.listen(port,()=>
{
    console.log(`Rodando na porta ${port}`);
});