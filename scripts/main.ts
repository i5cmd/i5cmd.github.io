import { SocialManager, socialData } from "./socials.js";
import { PartLine, EducationSteps } from "./educationsteps.js";
import { AlbumList, Albums } from "./albums.js";
import { SoftwareContainer, Program } from "./software.js";

const socialButtonContainer: HTMLDivElement = document.getElementById("buttons")! as HTMLDivElement;
const albumContainer: HTMLDivElement = document.getElementById("albumContainer")! as HTMLDivElement;
const programsContainer: HTMLDivElement = document.getElementById("software-container")! as HTMLDivElement;
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

const programs: Program[] = [
    {name: "Visual Studio Code", icon: "assets/icons/vsc.svg", "link": "https://code.visualstudio.com/", "description": "Used for JavaScript and Arduino C++"},
    {name: "Visual Studio 2026", icon: "assets/icons/vs.svg", "link": "https://visualstudio.microsoft.com/", "description": "Used for C# and general C++"},
    {name: "Zen Browser", icon: "assets/icons/zen.svg", "link": "https://zen-browser.app/", "description": "My personal choice for internet browser"}
]

const albums: Albums[] = [
    {name: "HYPERYOUTH", link: "https://music.apple.com/pl/album/hyperyouth/1824543248", cover: "assets/photos/hyperyouth.jpeg"},
    {name: "NO HANDS [Deluxe Edition]", link: "https://music.apple.com/pl/album/no-hands-deluxe-edition/1765628961", cover: "assets/photos/nohands.jpg"},
    {name: "PUNK TACTICS", link: "https://music.apple.com/pl/album/punk-tactics/1701719104", cover: "assets/photos/punktactics.jpg"}
]

const socialManager: SocialManager = new SocialManager(data, socialButtonContainer);
const createSteps: PartLine = new PartLine(2024, eduSteps);
const albumList: AlbumList = new AlbumList(albums);
const softwareContainer: SoftwareContainer = new SoftwareContainer(programs, programsContainer);

socialManager.addButtons();
createSteps.createBalls(line);
albumList.addCovers(albumContainer);
softwareContainer.createProgramContainer();
