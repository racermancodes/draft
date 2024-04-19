import { xyz } from "../object3d/xyz.js";

interface AnimationInterface {
    animate():void,
    setAnimation(alias: string, animation: AnimationData): void 
}

interface dataI {
    position?:xyz,
    rotation?:xyz,
    scale?   :xyz
}

interface addDataI {
    addPosition?:xyz,
    addRotation?:xyz,
    addScale?:xyz
}

interface AnimationAddSimpleData {
    addPosition?:xyz,
    addRotation?:xyz,
    addScale?:xyz
}

interface AnimationArrayData {
    [step:number]:dataI|addDataI
}

interface AnimationData {
    duration?:number,
    delay?:number,
    infinity?:boolean,
    reversive?:boolean,
    animation:AnimationAddSimpleData
}

export { AnimationInterface, AnimationData, dataI }