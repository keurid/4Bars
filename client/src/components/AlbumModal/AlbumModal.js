import React from "react";
import { Modal } from "antd";

const AlbumModal = React.forwardRef(({ album }, ref) => {
    console.log(album)
    Modal.info({
        title: 'deez nutz'
    })
    return (

        <div className="album-modal" ref={ref}>
            <img src={album.strAlbumThumb} alt={album.strAlbum}></img>
            <p className="album-name" data-album={album.idAlbum}>{album.strAlbum}</p>
            <p className="album-artist" data-artsist={album.idArtist}>{album.strArtist}</p>
            <p className="album-release" >{album.intYearReleased}</p>
        </div>


    );
});

export default AlbumModal;
