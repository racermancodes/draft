import three from "../../three.js";
import Object3D from "../../object3d/Object3D.js";


class Box extends Object3D {

    constructor(data?:{ color?:number, material?:three.Material, width?: number, height?: number, depth?: number, widthSegments?: number, heightSegments?: number, depthSegments?: number}, animationFromParent:boolean = false){
        const geometry = new three.BoxGeometry( data.width, data.height, data.depth,  data.widthSegments, data.heightSegments, data.depthSegments); 
        const material = !data.material ? new three.MeshLambertMaterial( {color: data.color} ) : data.material; 
        const cube = new three.Mesh( geometry, material ); 
        super(cube,animationFromParent)
    }

}

export default Box