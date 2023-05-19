import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Particule from "./Particule/Particule.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Particule: new Particule({
    x: 228,
    y: -167,
    direction: -60.28743442411675,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
