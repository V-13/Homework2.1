const Exp = require("express")
var app1 = new Exp();
app1.set('view engine','ejs');
 name =[
    {
      title:"War and peace",
      genre:"history",
      author:"Leo Tolstoy",
      DOP:"1867" 
},

{
    title:"Harry potter",
    genre:"fiction",
    author:"JK Rowling",
    DOP:"1997"
},

{
    title:"Wings of fire",
    genre:"autobiography",
    author:"APJ Abdul Kalam",
    DOP:"1999"
},

{
    title:"Lord of rings",
    genre:"Adventure",
    author:"JRR Tolkien",
    DOP:"1954"
},
{
    title:"Oliver Twist",
    genre:"Childrens novel",
    author:"Charles Dickens",
    DOP:"1839"
},
{
    title:"Angels & Demons",
    genre:"Sci-Fi",
    author:"Dan brown",
    DOP:"2000"
},
{
    title:"The Bourne Identity",
    genre:"Action",
    author:"Robert Ludlum",
    DOP:"1980"
},
{
    title:"The Alchemist",
    genre:"Inspiration",
    author:"Paulo Coelho",
    DOP:"1988"
},
{
    title:"A Brief History of Time",
    genre:"Science",
    author:"Stephen Hawking",
    DOP:"1988"
},
{
    title:"The Kite Runner",
    genre:"fiction",
    author:"Khaled Hosseini",
    DOP:"2003"
},




];
app1.get('/',(rq,rs)=>{
    rs.render("add");
});
app1.get('/view',(rq,rs)=>{
    rs.render("view",name);
});
app1.listen(process.env.PORT|| 3003,()=>{
    console.log("server running")
});