# Interpolation Syntax
- ejs.co --> html file ke andar JavaScript code run krna   --> ejs.co tag se


# Passing data to ejs 
- res.render("",{object }) {object bolte hai 2nd wale ko }
- take data as variable and render as object and then in html write variable name inside interpoation tag <%= >
- you can also  write object as key and value --> key value can be same so we usually keep object name only 
### backend se koi data ni aaya th usse frontend pr handel krna pdega in passing data 

# Conditional statement in Ejs
-  <% >  --> gives no output 
- - if dice = 6 then print html code
- <% JavaScript code %>
- <html code>
-<% JavaScriptcode( bracket ) %>


# Serving ststic files 
- html,js,css bht sari file render kranan res ke sath 
- app.use(express.static(folder_name))
- app.use(express.static(path.join(__dirname,"public")));
- - path.join(--dirname) --> taki globally server run krne pr pta chl jaye current directory me public folder dekhna hai 
- public -----> esme by default public hota hai jisme sare static folder hote hai jinko render krna hai jaise js css etc
- - logic similar to Templets find Views folder by default in same directory

# includes
- templets --> kise web page me lana 
- bht sare templets --> web page me la skte hai 
- by default folder name ---> includes --> then there templets like head.ejs ,,, or fotter.ejs  --- like so 
- > how to include 
- make folder and templets files --> jo bhe ess file me hoga oo hm khi bhe use kr skte hai 
- where have to show templets --> <%- include("includes/head.ejs") %>
<body> --> so on

