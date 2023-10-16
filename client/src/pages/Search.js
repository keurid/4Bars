import React,{useState} from "react";
import { useNavigation } from "react-router-dom";
const key = "523532";
export default function Search() {
    const[search,setSearch] = useState("")
    const[albums,setAlbums] = useState([])
    const navigate = useNavigation();
    function handleLocalStorage(id){
        localStorage.setItem("selectedAlbum",id);
        navigate("/album");
    }
    function handleSearch() {
        console.log(search)
        fetch("https://www.theaudiodb.com/api/v1/json/"+key+"/searchalbum.php?s=" + search)
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            //localStorage.setItem("selectedAlbum",data.album.)
            //when album name is clicked
            //use on click function to save album id into local storage
            //then redirect to to album page
            setAlbums(data.album)

        }).catch(err =>
            console.log(err)) 
    }

    return(
        <div>
        <input onChange={(e) =>setSearch(e.target.value.toLowerCase())} type ="text" placeholder ="Search"></input>
        <button onClick={handleSearch}>Submit</button>
        <div>
            {albums.map(album => (
                <div>
                    <p onClick={() =>handleLocalStorage(album.idAlbum)}>{album.strAlbum}</p>
                </div>
            ))}
        </div>
        </div>
    )

}

