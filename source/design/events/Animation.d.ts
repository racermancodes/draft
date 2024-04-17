import Object3D from "../object3d/Object3D.js";

type animateFunction = (obj:Object3D) => void;

interface Animation {
    animate():void,
    setAnimation(alias:string, animation:animateFunction):void
}

export { Animation, animateFunction }