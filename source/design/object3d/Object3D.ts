import * as three from 'three'
import { Animation, AnimationInterface } from '../events/Animation.js'
import { xyz } from "./xyz.js";

interface dataObject {
    position:xyz,
    rotation:xyz,
    scale:xyz
}

abstract class Object3D implements AnimationInterface {
    
    protected objects3d:Object3D[] = []
    protected mesh:three.Mesh
    protected animations:{ [alias:string]:Animation } = {}
    protected atualAnimation:string = 'default'

    protected positionInit:dataObject

    constructor(mesh:three.Mesh){
        this.mesh = mesh
        /*
        this.positionInit = {
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
        */
        if(this.animations['default'] == undefined)
            this.animations['default'] = new Animation(this)
    }

    addObject(obj:Object3D){
        this.objects3d.push(obj)
    }

    setAnimation(alias: string, animation: Animation): void {
        this.animations[alias] = animation
    }

    animate(alias?:string): void {
        let _alias = alias ? alias : this.atualAnimation
        this.animations[_alias].animate()
        this.objects3d.forEach(obj => obj.animate(_alias))
    }

    moveTo(move:xyz){
        if(move.x) this.mesh.position.x = move.x
        if(move.y) this.mesh.position.y = move.y
        if(move.z) this.mesh.position.z = move.z
    }

    rotateTo(rotate:xyz){
        if(rotate.x) this.mesh.rotation.x = rotate.x
        if(rotate.y) this.mesh.rotation.y = rotate.y
        if(rotate.z) this.mesh.rotation.z = rotate.z
    }

    scaleTo(scale:xyz){
        if(scale.x) this.mesh.scale.x = scale.x
        if(scale.y) this.mesh.scale.y = scale.y
        if(scale.z) this.mesh.scale.z = scale.z
    }

    getObjects() {
        const objs:three.Mesh[] = []
        this.objects3d.forEach(obj => {
            const listmeshs:three.Mesh[] = obj.getObjects() 
            listmeshs.forEach(mesh => {
                objs.push(mesh)
            })
        })
        return objs
    }

}


export default Object3D