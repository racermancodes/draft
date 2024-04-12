import Dynamic3D from "./Dynamic3D.js";
import Object3D from "./Object3D.js";
import { Colision } from "../events/Colision.js";

class Scaffold extends Object3D implements Colision {


}

class DynamicScaffold extends Dynamic3D implements Colision {

}

export { Scaffold, DynamicScaffold }