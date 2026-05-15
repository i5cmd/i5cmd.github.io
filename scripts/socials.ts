export interface socialData {
    name: string,
    icon: string,
    link: string
}

export class SocialManager {
    constructor(
        private socialLinks: socialData[],
        private buttonContainer: HTMLDivElement
    ) {};

    addButtons() {
        this.socialLinks.forEach((e) => {
            this.createButton(e.icon, e.link, e.name);
        })
    }
    private createButton(icon: string, link: string, name: string) {
        let button = document.createElement("button");
        button.setAttribute("id", "linkbutton");

        let img: HTMLImageElement = document.createElement("img");
        img.setAttribute("draggable", "false");
        img.src = icon;

        let p: HTMLParagraphElement = document.createElement("p");
        p.textContent = name;

        button.append(img);
        button.append(p);

        this.buttonContainer.append(button);

        button.addEventListener("click", () => {
            window.open(link, "_blank")
        })
    }
}