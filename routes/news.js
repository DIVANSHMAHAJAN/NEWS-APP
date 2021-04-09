const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')


newsr.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=61356459f34943d490827ed7e0f3253c';

        const news_get =await axios.get(url)
         console.log("data");
        console.log(news_get);
        console.log("data");
        res.render('news',{articles:news_get.data.articles})




    } catch (error) {

        if(error.response){
             console.log("mmmmm");
            console.log(error)
        }

    }
})

newsr.post('/search',async(req,res)=>
{
    const search=req.body.search
     console.log(req.body)

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=61356459f34943d490827ed7e0f3253c`
        
        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})





    } catch (error) {
        if(error.response){
            console.log("lllllll");
            console.log(error)
        }

    }
})


module.exports=newsr