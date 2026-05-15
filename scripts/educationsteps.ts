export interface EducationSteps {
    year: number,
    language: string,
    main: boolean
}

export class PartLine {
    constructor(
        private yearStarted: number,
        private eduSteps: EducationSteps[]
    ) {}

    createBalls(line: HTMLDivElement) {
        const date: Date = new Date();
        const yearNow = date.getFullYear();
        for (let i = 0; i < (yearNow - this.yearStarted) + 1; i++) {
            let yearDiv: HTMLDivElement = document.createElement("div");
            yearDiv.setAttribute("id", (this.yearStarted + i).toString());
            yearDiv.classList.add("step");
            
            let yearBigassDiv: HTMLDivElement = document.createElement("div");
            yearBigassDiv.classList.add("year");
            yearDiv.append(yearBigassDiv);

            let yearName: HTMLParagraphElement = document.createElement("p");
            yearName.textContent = (this.yearStarted + i).toString();
            yearName.style.fontWeight = '600';
            yearName.classList.add("yearName");
            yearBigassDiv.append(yearName);

            line.append(yearDiv);
            this.educationStep(this.yearStarted + i, yearBigassDiv)
        }
    }

    private educationStep(year: number, yearDiv: HTMLDivElement) {
        this.eduSteps.forEach(element => {
            if (element.year == year) {
                let languageName: HTMLParagraphElement = document.createElement("p");
                languageName.textContent = element.language;
                languageName.classList.add("eduProcess", "no-margin");
                if (element.main == true) {
                    languageName.classList.add("main")
                }
                yearDiv.append(languageName);
            }
        });
    }
}