const Exp = require("express")
var app1 = new Exp();
app1.set('view engine','ejs');
app1.use(Exp.static(__dirname+"/public"));
 name =[
    {
      title:"War and peace",
      picture:'/images/war.jpg',
      genre:"history",
      author:"Leo Tolstoy",
      DOP:"1867" ,
      price :"200 ₹",
      description:"War and Peace (pre-reform Russian: Война и миръ; post-reform Russian: Война и мир, romanized: Vojna i mir [vɐjˈna i ˈmʲir]) is a novel by the Russian author Leo Tolstoy, published serially, then in its entirety in 1869. It is regarded as a central work of world literature and one of Tolstoy's finest literary achievements"
},

{
    title:"Harry potter",
    picture:'/images/harry.jpg',
    genre:"fiction",
    author:"JK Rowling",
    DOP:"1997",
    price:"170 ₹ ",
    description:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. "
},

{
    title:"Wings of fire",
    picture:'/images/wings.jpg',
    genre:"autobiography",
    author:"APJ Abdul Kalam",
    DOP:"1999",
    price:"150 ₹ ",
    description:"Wings of Fire: An Autobiography of A P J Abdul Kalam (1999), former President of India. It was written by Dr. Kalam and Arun Tiwari.[1] Kalam examines his early life, effort, hardship, fortitude, luck and chance that eventually led him to lead Indian space research, nuclear and missile programs"
},

{
    title:"Lord of rings",
    picture:"/images/lord.jpg",
    genre:"Adventure",
    author:"JRR Tolkien",
    DOP:"1954",
    price:"250 ₹ ",
    description:"The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold."
},
{
    title:"Oliver Twist",
    picture:"/images/oliwer.jpg",
    genre:"Childrens novel",
    author:"Charles Dickens",
    DOP:"1839",
    price:"170 ₹ ",
    description:"Oliver Twist; or, the Parish Boy's Progress is Charles Dickens's second novel, and was first published as a serial from 1837 to 1839.[1] The story centres on orphan Oliver Twist, born in a workhouse and sold into apprenticeship with an undertaker. After escaping, Oliver travels to London, where he meets the Artful Dodger, a member of a gang of juvenile pickpockets led by the elderly criminal Fagin."
}
 ];


book =[{
    title:"Angels & Demons",
    picture:"/images/Angel.jpg",
    genre:"Sci-Fi",
    author:"Dan brown",
    DOP:"2000",
    price:"190 ₹",
    description:"Angels & Demons shares many stylistic literary elements with its sequels, such as conspiracies of secret societies, a single-day time frame, and the Catholic Church. Ancient history, architecture, and symbology are also heavily referenced throughout the book."

},
{
    title:"The Bourne Identity",
    picture:"/images/BI.jpg",
    genre:"Action",
    author:"Robert Ludlum",
    DOP:"1980",
    price:"200 ₹",
    description:"The Bourne Identity is a 1980 spy fiction thriller by Robert Ludlum that tells the story of Jason Bourne, a man with remarkable survival abilities who has retrograde amnesia, and must seek to discover his true identity."
},
{
    title:"The Alchemist",
    picture:"/images/alchemist.jpg",
    genre:"Inspiration",
    author:"Paulo Coelho",
    DOP:"1988",
    price:"150 ₹",
    description:"The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there."
},
{
    title:"A Brief History of Time",
    picture:"/images/time.jpg",
    genre:"Science",
    author:"Stephen Hawking",
    DOP:"1988",
    price:"200 ₹",
    description:"In A Brief History of Time, Hawking writes in non-technical terms about the structure, origin, development and eventual fate of the Universe, which is the object of study of astronomy and modern physics."
},
{
    title:"The Kite Runner",
    picture:"/images/Kite.jpg",
    genre:"fiction",
    author:"Khaled Hosseini",
    DOP:"2003",
    price:"150 ₹",
    description:"The story is set against a backdrop of tumultuous events, from the fall of Afghanistan's monarchy through the Soviet military intervention, the exodus of refugees to Pakistan and the United States, and the rise of the Taliban regime."
}
];





app1.get('/',(rq,rs)=>{
    rs.render("add");
});
app1.get('/view',(rq,rs)=>{
    rs.render("view",{name,book});
});
app1.listen(process.env.PORT|| 3003,()=>{
    console.log("server running")
});