import * as three from 'three'
import { Animation } from '../events/Animation'

class Object3D implements Animation {
    
    private mesh:three.Mesh

    constructor(mesh:three.Mesh){
        this.mesh = mesh
    }

    setAnimation(alias: string, animation: (obj: Object3D) => void): void {
        
    }

    animate(): void {
        
    }

}


export default Object3D