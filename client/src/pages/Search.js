import React,{useState} from "react";
const key = "2";
export default function Search() {
    const[search,setSearch] = useState("")
    function handleSearch() {
        console.log(search)
        fetch("https://www.theaudiodb.com/api/v1/json/"+key+"/search.php?s=" + search)
        .then(res =>res.json())
        .then(data =>{
            console.log(data)

        }).catch(err =>
            console.log(err)) 
    }

    return(
        <div>
        <input onChange={(e) =>setSearch(e.target.value.toLowerCase())} type ="text" placeholder ="Search"></input>
        <button onClick={handleSearch}>Submit</button>
        </div>
    )

}

