import * as three from 'three'
import { Animation, animateFunction } from '../events/Animation'

abstract class Object3D implements Animation {
    
    protected objects3d:Object3D[] = []
    protected mesh:three.Mesh
    protected animations:{ [alias:string]:animateFunction } = {}
    protected atualAnimation:string = 'default'

    constructor(mesh:three.Mesh){
        this.mesh = mesh
        this.animations['default'] = function(obj:Object3D){}
    }

    addObject(obj:Object3D){
        this.objects3d.push(obj)
    }

    setAnimation(alias: string, animation: (obj: Object3D) => void): void {
        this.animations[alias] = animation
    }

    animate(alias?:string): void {
        let _alias = alias ? alias : this.atualAnimation
        this.animations[_alias](this)
        this.objects3d.forEach(obj => obj.animate(_alias))
    }

    moveTo(move:{x?:number,y?:number,z?:number}){
        if(move.x) this.mesh.position.x = move.x
        if(move.y) this.mesh.position.y = move.y
        if(move.z) this.mesh.position.z = move.z
    }

    rotateTo(rotate:{x?:number,y?:number,z?:number}){
        if(rotate.x) this.mesh.rotation.x = rotate.x
        if(rotate.y) this.mesh.rotation.y = rotate.y
        if(rotate.z) this.mesh.rotation.z = rotate.z
    }

    scaleTo(scale:{x?:number,y?:number,z?:number}){
        if(scale.x) this.mesh.scale.x = scale.x
        if(scale.y) this.mesh.scale.y = scale.y
        if(scale.z) this.mesh.scale.z = scale.z
    }

    getObjects() {
        return this.objects3d
    }

}


export default Object3D