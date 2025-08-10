const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const port=3000;
app.use(bodyparser.json());
let books=[{id:1,title:'The Great Gatsby', author: 'F. Scott Fitzgerald'},
    {id:2,title:'1984', author: 'George Orwell' }
];
app.get("/books",(req,res)=>{res.json(books);});
app.get("/books/:id",(req,res)=>{
    const book=books.find(b=>b==parseInt(req.params.id));
    if(!book){
        return res.status(404).json({message:"book not found"});
    }
    res.json(book);
});
app.post("/books",(req,res)=>{
    const {title,author}=req.body;
    if(!title||!author){
       return res.status(404).json({message:"title and author are required"});
    }
    const newbook={id: books.length ? books[books.length-1].id+1:1,title,author};
    books.push(newbook);
    res.status(201).json(newbook);
});
app.put("/books/:id",(req,res)=>{
    const book=books.find(b=>b.id==parseInt(req.params.id));
    if(!book){
        return res.status(404).json({message:"Book not found"});
    }
    const{title,author}=req.body;
    if(title)
        book.title=title;
    if(author)
        book.author=author;
    res.json(book);
});
app.delete("\books\:id",(req,res)=>{
    const book =books.filter(b=>b.id!==parseInt(req.params.id));
    res.status(204).send();
})
app.listen(()=>{console.log(`Books API runnung at http://localhost:${port}`);
});