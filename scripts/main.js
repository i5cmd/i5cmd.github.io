import { SocialManager } from "./socials.js";
import { PartLine } from "./educationsteps.js";
const socialButtonContainer = document.getElementById("buttons");
const line = document.getElementById("line");
const data = [
    { name: "GitHub", icon: "assets/icons/gith.svg", link: "https://github.com/i5cmd" },
    { name: "GitLab", icon: "assets/icons/gitl.svg", link: "https://gitlab.com/i5cmd" }
];
const eduSteps = [
    { year: 2024, language: 'Luau', main: false },
    { year: 2025, language: 'JavaScript', main: true },
    { year: 2025, language: 'Dart', main: false },
    { year: 2025, language: 'C#', main: true },
    { year: 2026, language: 'C++', main: false },
];
const socialManager = new SocialManager(data, socialButtonContainer);
const createSteps = new PartLine(2024, eduSteps);
socialManager.addButtons();
createSteps.createBalls(line);
