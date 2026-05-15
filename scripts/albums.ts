export interface Albums {
    name: string,
    link: string,
    cover: string
}

export class AlbumList {
    constructor(
        private albums: Albums[]
    ) {}

    addCovers(albumContainer: HTMLDivElement) {
        this.albums.forEach(e => {
            this.createButton(albumContainer, e.name, e.link, e.cover)
        })
    }

    private createButton(albumContainer: HTMLDivElement, name: string, link: string, cover: string) {
        let album: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
        album.classList.add("album");
        album.style.backgroundImage = `url(${cover})`;
        album.setAttribute("data-album", name)
        albumContainer.appendChild(album);
        
        album.addEventListener("click", function() {
            window.open(link, "_blank");
        })
    }
}