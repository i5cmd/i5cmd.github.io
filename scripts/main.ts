import { SocialManager, socialData } from "./socials.js";
import { PartLine, EducationSteps } from "./educationsteps.js";

const socialButtonContainer: HTMLDivElement = document.getElementById("buttons")! as HTMLDivElement;
const line: HTMLDivElement = document.getElementById("line")! as HTMLDivElement;

const data: socialData[] = [
    {name: "GitHub", icon: "assets/icons/gith.svg", link: "https://github.com/i5cmd"},
    {name: "GitLab", icon: "assets/icons/gitl.svg", link: "https://gitlab.com/i5cmd"}
]

const eduSteps: EducationSteps[] = [
    {year: 2024, language: 'Luau', main: false},
    {year: 2025, language: 'JavaScript', main: true},
    {year: 2025, language: 'Dart', main: false},
    {year: 2025, language: 'C#', main: true},
    {year: 2026, language: 'C++', main: false},
]

const socialManager: SocialManager = new SocialManager(data, socialButtonContainer);
const createSteps: PartLine = new PartLine(2024, eduSteps);

socialManager.addButtons();
createSteps.createBalls(line);
