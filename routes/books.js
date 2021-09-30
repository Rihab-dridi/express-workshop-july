const express = require("express");
const router = express.Router();
let books = require("../data");

//test
//Create
//Read
//Update
//Delete

//@role:test
//@url:http://localhost:5000/books/test
//private/public
router.get("/test", (req, res) => {
  res.send("hello from the router testing");
});

//@role:get all the books
//@url:http://localhost:5000/books/data
//private/public
router.get("/data", (req, res) => {
  res.send(books);
});

//@role:add a new book
//@url:http://localhost:5000/books/add
//private/public
router.post("/add", (req, res) => {
  const newBook = {
    ...req.body,
    id: Math.random()
  }
  if(!req.body) {return res.json({msg:'empty fields'}) }
  books.push(newBook)
  res.status(200).json({msg:'user added'})

})

//@role:delete a specific book
//@url:http://localhost:5000/books/delte/:id
//private/public
router.delete('/delte/:id',(req,res)=>{
  const idt=req.params.id //reccupérer la valeur du l'id dans l'url
 books= books.filter(el=>el.id==idt) //chercher le livre avec l'id réccupérée
res.status(200).json({msg:"user has been deleted" }) //send a respond to the client 
})

//@role:edit a  specific book
//@url:http://localhost:5000/books/edit/:id
//private/public
router.put('/edit/:id',(req,res)=>{
  const idt=req.params.id //reccupérer la valeur du l'id dans l'url
  let bookToEdit=books.find(el=>el.id==idt)// chercher le "book" 
  let editedBook={  ... bookToEdit,...req.body}  // update the book (the new data will replace the previous data)
  books= books.map(el=>el.id==idt? editedBook:el ) //  upsate the list of books 
  res.status(200).json({msg:'the book is updated'}) //send a respond to the client 
} )


module.exports = router;

//rquire express
//require router
//export router
//index.js ( app.use(url path,file path))
