import { GetFromServer } from "./getelements.js";

const server: GetFromServer = new GetFromServer();

const pfp: HTMLImageElement = document.getElementById("#pfp") as HTMLImageElement;

pfp.src = await (server.pfp('https://github.com/i5cmd') as Promise<string>);