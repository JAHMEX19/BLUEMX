import express from 'express';

const router = express.Router();

router.get("/",(req,res)=>{

    res.render('index.pug',{
        title:'MainView'
    });
})

export default router;