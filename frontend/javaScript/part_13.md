# Axios
- Axios makes API requests easier than using fetch().
- Library to make HTTP reques 
- Why Axios
- inside fetch --> we got data but need to parse in json --> to read data
- but in axios we got json data --> so no need to parse data
- axios also return promise --> so then catch method can applied 
- code:-
        let url = "https://catfact.ninja/fact";
        async function getFacts()
        {
            try{
                let res= await axios.get(url);
                console.log(res.data.fact);
            } catch(err){
                console.log(err);
            }
        }
- Axios is a JavaScript library used to make HTTP requests (GET, POST, PUT, DELETE, etc.) from:
- ✔ Browser (Frontend JS)
- ✔ Node.js (Backend JS)
- It is often used to call APIs.
- To use axios -->
- <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
- or install for node --> see documentation


# Sending Headers with API request 
- headers are send --> to get data type --> like json or HTML data format
- send headers as a Object 
- we send headers inside function where we are geting url data thrugh axios
- EG :-
        async function getJokes(){
            try{

                // headers to get json data
                const config={ headers:{ Accept: "application/json"}};  --> headers

                // axios --> to call api
                let res= await axios.get(url,config);  ---> headers also passed here
                console.log(res.data)  ---> jdata will come in json format 

            }catch (err) {
               console.log("there no image found", err);
                return "/";
        }};


# 