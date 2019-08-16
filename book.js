const Exp = require("express")
var app1 = new Exp();
app1.set('view engine','ejs');
app1.get('/',(rq,rs)=>{
    rs.render("add")
});
app1.get('/view',(rq,rs)=>{
    rs.render("view",{"names":["Wings of fire","Hobbit","Digital fortess","Motor cycle diaries","Harry potter","Oliwer Twist","War and Peace","Sherlock Holmes","Gulliver's Travels","Alchemist"]})
});
app1.listen(process.env.PORT|| 3003,()=>{
    console.log("server running")
});