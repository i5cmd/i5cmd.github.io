export class SoftwareContainer {
    program;
    softwareContainer;
    constructor(program, softwareContainer) {
        this.program = program;
        this.softwareContainer = softwareContainer;
    }
    createProgramContainer() {
        this.program.forEach(e => {
            this.create(e);
        });
    }
    create(element) {
        let container = document.createElement("div");
        container.classList.add("program-container");
        this.softwareContainer.append(container);
        let image = document.createElement("img");
        image.setAttribute("src", element.icon);
        image.classList.add("program-icon");
        container.append(image);
        let title = document.createElement("h3");
        title.textContent = element.name;
        container.append(title);
        let description = document.createElement("p");
        description.classList.add("no-margin");
        description.textContent = element.description;
        container.append(description);
        container.addEventListener("click", () => {
            window.open(element.link, "_blank");
        });
        container.addEventListener("pointerenter", () => {
            image.setAttribute("data-hovered", "yes");
        });
        container.addEventListener("pointerleave", () => {
            image.removeAttribute("data-hovered");
        });
    }
}
