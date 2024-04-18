
import Object3D from "../object3d/Object3D.js";
import { xyz } from "../object3d/xyz.js";

interface AnimationInterface {
    animate():void,
    setAnimation(alias:string, animation:Animation):void
}

interface dataI {
    addPosition?:xyz,
    addRotation?:xyz,
    addScale?   :xyz
}

interface AnimationSimpleData {
    from:dataI,
    to:dataI
}

interface AnimationArrayData {
    [step:number]:dataI
}

interface AnimationData {
    duration:number,
    delay?:number,
    infinity?:boolean,
    animation:AnimationSimpleData|AnimationArrayData
}

class Animation {

    private object3d:Object3D
    private data:AnimationData|undefined

    constructor(obj:Object3D, data?:AnimationData){
        this.object3d = obj 
        this.data = data
    }

    animate(){
        if(this.data == undefined) return
    }

}


export { Animation, AnimationInterface }