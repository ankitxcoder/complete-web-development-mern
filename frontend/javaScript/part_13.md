# Axios
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