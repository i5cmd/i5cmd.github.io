import { GetFromServer } from "./getelements.js";
const server = new GetFromServer();
const pfp = document.getElementById("#pfp");
pfp.src = await server.pfp('https://github.com/i5cmd');
