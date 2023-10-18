import React, { useState } from "react";
import "../components/AlbumCard/search.css"
import { Button, Modal, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AlbumCard from "../components/AlbumCard/AlbumCard";
import AlbumModal from "../components/AlbumModal/AlbumModal";
const key = "523532";

export default function Search() {
  const ref = React.createRef();
  const [searchForm, setSearchForm] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState({});

  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState([]);

  const handleOpen = id => {
    setIsClicked(searchResults.find(x => x.id === id));
    setOpen(true);
  }

  const handleClose = id => {
    setOpen(false);
    setIsClicked([]);
  }


  const headingStyle = {
    fontFamily: "Satisfy, cursive",
    color: "#c5f7ff",
  };
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const searchData = await fetch(
        `https://www.theaudiodb.com/api/v1/json/${key}/searchalbum.php?s=${searchForm}`
      );
      const searchResultsJSON = await searchData.json();
      console.log("searchResults");
      console.log(searchResultsJSON.album);
      setSearchResults(searchResultsJSON.album);
      setLoading(false);
    } catch (e) {
      console.error("Error in search handler");
      console.error(e);
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSearch} style={{ display: "flex" }}>
          <input
            className="search"
            onChange={(e) => setSearchForm(e.target.value.toLowerCase())}
            type="text"
            placeholder="Search"
          />
          <div style={{ marginLeft: "10px" }}>
            <Button
              icon={<SearchOutlined />}
              onClick={handleSearch}
              style={{
                border: "1px solid rgba(252, 252, 252, 0.4)",
                backgroundColor: "rgba(252, 252, 252, 0.2)",
                height: "43px",
                fontFamily: "Alata, sans-serif",

                fontSize: "15px",
                color: "white",
              }}
            >
              Search
            </Button>{" "}
          </div>
        </form>
      </div>
      <div className="container" style={{ textAlign: "center" }}>
       
        <Row gutter={16}>
          {isLoading ? (
            <h1 style={headingStyle}>Please enter an artist name!</h1>
          ) : (
            searchResults.map(album => {
              return (
                <AlbumCard
                  album={album}
                  key={album.idAlbum}
                  id={album.idAlbum}
                  handleOpen={handleOpen}
                />
              )

            })
          )}
        </Row>
        <pre>{JSON.stringify(isClicked, null, 2)}</pre>

        {/* code to show modal  */}

        <Modal
          open={open}
          onClose={handleClose}
          onOk={handleClose}
          onCancel={handleClose}
          title="DEEZ"
        >
          <h1>NUTZ</h1>
          {isClicked && (
            <AlbumModal
              id={`${isClicked.idAlbum}-${isClicked.strAlbum}`}
              album={isClicked}
              ref={ref}
            />
          )}
        </Modal>

      </div>
    </>
  );
}
