export class AlbumList {
    albums;
    constructor(albums) {
        this.albums = albums;
    }
    addCovers(albumContainer) {
        this.albums.forEach(e => {
            this.createButton(albumContainer, e.name, e.link, e.cover);
        });
    }
    createButton(albumContainer, name, link, cover) {
        let album = document.createElement("button");
        album.classList.add("album");
        album.style.backgroundImage = `url(${cover})`;
        album.setAttribute("data-album", name);
        albumContainer.appendChild(album);
        album.addEventListener("click", function () {
            window.open(link, "_blank");
        });
    }
}
