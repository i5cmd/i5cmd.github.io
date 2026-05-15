export class PartLine {
    yearStarted;
    eduSteps;
    constructor(yearStarted, eduSteps) {
        this.yearStarted = yearStarted;
        this.eduSteps = eduSteps;
    }
    createBalls(line) {
        const date = new Date();
        const yearNow = date.getFullYear();
        for (let i = 0; i < (yearNow - this.yearStarted) + 1; i++) {
            let yearDiv = document.createElement("div");
            yearDiv.setAttribute("id", (this.yearStarted + i).toString());
            yearDiv.classList.add("step");
            let yearBigassDiv = document.createElement("div");
            yearBigassDiv.classList.add("year");
            yearDiv.append(yearBigassDiv);
            let yearName = document.createElement("p");
            yearName.textContent = (this.yearStarted + i).toString();
            yearName.style.fontWeight = '600';
            yearName.classList.add("yearName");
            yearBigassDiv.append(yearName);
            line.append(yearDiv);
            this.educationStep(this.yearStarted + i, yearBigassDiv);
        }
    }
    educationStep(year, yearDiv) {
        this.eduSteps.forEach(element => {
            if (element.year == year) {
                let languageName = document.createElement("p");
                languageName.textContent = element.language;
                languageName.classList.add("eduProcess", "no-margin");
                if (element.main == true) {
                    languageName.classList.add("main");
                }
                yearDiv.append(languageName);
            }
        });
    }
}
