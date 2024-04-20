import three from "../design/three.js";
import Scene from "../design/Scene.js";
import Box from "../design/factories/geometries/Box.js";


const scene = new Scene(window.innerWidth, window.innerHeight)
const box1  = new Box({ 
    width:1,
    height:1,
    depth:1,
    material:new three.MeshLambertMaterial({ color: 0x82355, side: three.DoubleSide })
})

const box2  = new Box({ 
    width:1,
    height:1,
    depth:1,
    material:new three.MeshLambertMaterial({ color: 0xfffff, side: three.DoubleSide })
}, true)

box2.setAnimation("default", {
    duration:10,
    reversive:true,
    infinity:true,
    animation:{
        addPosition:{
            x:0.1
        }
    }
})

box2.moveAdd({
    y:1
})

box1.setAnimation("default", {
    duration:20000,
    reversive:true,
    infinity:true,
    animation:{
        addRotation:{
            x:0.01,
            y:0.01,
            z:0.01
        },
        addPosition:{
            x:0.01
        }
    }
})

box1.addObject(box2)

box1.moveAdd({
    x:-10
})

scene.addObject("box", box1)

scene.renderLoop()