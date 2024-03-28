import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

var blogs = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.render("index.ejs", 
    {
        blogList: blogs,
    });
});

app.post("/submit", (req, res) => {
    let current_time = new Date();
    current_time = current_time.toString().split("+")[0];
    blogs.push( 
        {
            title: req.body.posttitle, 
            content: req.body.postcontent,
            time: current_time,
            modified: false,
        });
    res.render("index.ejs", 
    {
        blogList: blogs,
    });
});

app.post("/edit", (req, res) => {
    let current_time = new Date();
    current_time = current_time.toString().split("+")[0];
    let blog_id = req.body.blog_id;
    let edited_blog = {
        title: req.body.posttitle, 
        content: req.body.postcontent,
        time: current_time,
        modified: true,
    };
    blogs[blog_id] = edited_blog;
    res.render("index.ejs", 
    {
        blogList: blogs,
    });
});

app.post("/delete", (req, res) => {
    let blog_id = req.body.blog_id;
    blogs.splice(blog_id, 1);
    res.render("index.ejs", 
    {
        blogList: blogs,
    });
});

app.listen(3000, () => {
    console.log(`Server running and listening to port ${port}.`);
});