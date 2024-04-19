import three from "../design/three.js";
import Scene from "../design/Scene.js";
import Box from "../design/factories/geometries/Box.js";


const scene = new Scene(window.innerWidth, window.innerHeight)
const box   = new Box({ 
    width:1,
    height:1,
    depth:1,
    material:new three.MeshLambertMaterial({ color: 0x82355, side: three.DoubleSide })
})

box.setAnimation("default", {
    duration:5000,
    reversive:true,
    infinity:true,
    animation:{
        addRotation:{
            x:0.01,
            y:0.01,
            z:0.01
        },
        addScale:{
            x:0.01,
        },
    }
})

scene.addObject("box", box)

scene.renderLoop()