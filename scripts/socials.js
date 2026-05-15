export class SocialManager {
    socialLinks;
    buttonContainer;
    constructor(socialLinks, buttonContainer) {
        this.socialLinks = socialLinks;
        this.buttonContainer = buttonContainer;
    }
    ;
    addButtons() {
        this.socialLinks.forEach((e) => {
            this.createButton(e.icon, e.link, e.name);
        });
    }
    createButton(icon, link, name) {
        let button = document.createElement("button");
        button.setAttribute("id", "linkbutton");
        let img = document.createElement("img");
        img.setAttribute("draggable", "false");
        img.src = icon;
        let p = document.createElement("p");
        p.textContent = name;
        button.append(img);
        button.append(p);
        this.buttonContainer.append(button);
        button.addEventListener("click", () => {
            window.open(link, "_blank");
        });
    }
}
