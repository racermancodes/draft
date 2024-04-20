import three from "../three.js";
import Object3D from "../object3d/Object3D.js";
import { AnimationData, dataI } from '../events/Animation.d.js'


const animationSimple = (mesh:three.Mesh, data:AnimationData, isReverse:boolean) => {

    if(data.animation.addPosition){
        if(data.animation.addPosition.x)
            mesh.position.x += isReverse ? data.animation.addPosition.x * -1 : data.animation.addPosition.x
        if(data.animation.addPosition.y)
            mesh.position.y += isReverse ? data.animation.addPosition.y * -1 : data.animation.addPosition.y
        if(data.animation.addPosition.z)
            mesh.position.z += isReverse ? data.animation.addPosition.z * -1 : data.animation.addPosition.z
    }
    
    if(data.animation.addRotation){
        if(data.animation.addRotation.x)
            mesh.rotation.x += isReverse ? data.animation.addRotation.x * -1 : data.animation.addRotation.x
        if(data.animation.addRotation.y)
            mesh.rotation.y += isReverse ? data.animation.addRotation.y * -1 : data.animation.addRotation.y
        if(data.animation.addRotation.z)
            mesh.rotation.z += isReverse ? data.animation.addRotation.z * -1 : data.animation.addRotation.z
    }
    
    
    if(data.animation.addScale){
        if(data.animation.addScale.x)
            mesh.scale.x += isReverse ? data.animation.addScale.x * -1 : data.animation.addScale.x
        if(data.animation.addScale.y)
            mesh.scale.y += isReverse ? data.animation.addScale.y * -1 : data.animation.addScale.y
        if(data.animation.addScale.z)
            mesh.scale.z += isReverse ? data.animation.addScale.z * -1 : data.animation.addScale.z
    }
    
}

class Animation {

    private object3d:Object3D
    private data:AnimationData|undefined
    private atualStep:number = 0 
    private steps:number = 0
    private infinity = false
    private reversiveStatus = false
    private reversive = false
    private dataDefault:dataI
    private delayfinal = 0
    private delayAtual = 0

    constructor(obj:Object3D, data:AnimationData){

        this.object3d = obj 
        this.data = data

        if(this.data){
            this.steps = Math.round(this.data.duration / 10)
        }

        const mesh = obj.getMesh()

        this.dataDefault = {
            position:{
                x:mesh.position.x,
                y:mesh.position.y,
                z:mesh.position.z
            },
            rotation:{
                x:mesh.position.x,
                y:mesh.position.y,
                z:mesh.position.z
            },
            scale:{
                x:mesh.scale.x,
                y:mesh.scale.y,
                z:mesh.scale.z
            }
        }

        if(data && data.infinity != undefined){
            this.infinity = data.infinity
        }

        if(data && data.reversive != undefined){
            this.reversive = data.reversive
        }

        if(data && data.delay != undefined){
            this.delayfinal = data.delay
        }
   
    }

    getData(){
        return this.data
    }

    animate(){
        
        if(this.data == undefined) return

        if(this.delayfinal > 0 && this.delayAtual < this.delayfinal){
            this.delayAtual += 10
            return
        }

        if( !this.infinity &&
                (
                    (!this.reversive && this.steps == this.atualStep) ||
                    (this.reversive && this.reversiveStatus && this.atualStep == 0)
                )
            ) return  

        if(this.reversive && this.reversiveStatus && this.atualStep == 0){
            this.reversiveStatus = false
        }

        if(this.reversive && !this.reversiveStatus && this.atualStep == this.steps){
            this.reversiveStatus = true
        }

        animationSimple(this.object3d.getMesh(), this.data, this.reversiveStatus)

        this.atualStep += this.reversiveStatus ? -1 : 1
    }

}


export default Animation