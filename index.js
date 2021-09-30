const express=require('express')
const app=express()

//middleware
// const midleware=(req,res,next)=>{
// console.log('this is a text from the middelwaree')
// next()
// }
//app.use(midleware)
app.use(express.json())
app.use(express.static('public'))
//routes
app.get('/', (req,res)=>{
    res.sendStatus(200)
} )
//app.use(midleware)
app.get('/about', (req,res)=>{
    res.sendFile(__dirname+'/public/about.html')
} )
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
} )
const port=5000
app.listen(port,()=>{
console.log(`the server is running on ${port}...`)
} )

//routes 
const booksRouter=require('./routes/books') 
app.use('/books',booksRouter )


//init the app
//install express+nodemon 
//create the server 
//create our first route 
// how to send files to the browser :res.sendFile(__dirname+'/public/home.html')
//custom middleware
//built in middleware