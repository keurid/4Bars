import React from "react";
import "./AlbumCard.css";
import { Card, Col } from "antd";

const AlbumCard = ({ album, handleOpen }) => {
  //console.log("AlbumCard Component");
  //console.log(album);

  const { idAlbum, idArtist, idLabel, intYearReleased, strAlbum, strAlbumThumb, strArtist } = album
  return (
    <Col span={6}>

      <Card title={strAlbum} className="card gridContainer" onClick={() => handleOpen(idAlbum)}>
        <ul className="overlay">
          <img
            className="albumImg"
            src={strAlbumThumb}
            alt={strAlbum}
          />
        </ul>
        <p className="album-name" data-album={idAlbum}>{strAlbum}</p>
        <p className="album-artist" data-artsist={idArtist}>{strArtist}</p>
        <p className="album-release" >{intYearReleased}</p>
        <p className="album-label"> {idLabel}</p>
      </Card>
    </Col>

  );
};
export default AlbumCard;

