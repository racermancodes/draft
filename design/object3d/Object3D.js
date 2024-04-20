import Animation from '../events/Animation.js';
class Object3D {
    constructor(mesh, animationFromParent = false) {
        this.objects3d = [];
        this.animations = {};
        this.atualAnimation = 'default';
        this.mesh = mesh;
        this.animationFromParent = animationFromParent;
    }
    addObject(obj) {
        this.objects3d.push(obj);
    }
    haveAnimationFromParent() {
        return this.animationFromParent;
    }
    setAnimation(alias, animation) {
        this.animations[alias] = new Animation(this, animation);
    }
    animate(alias) {
        let _alias = alias ? alias : this.atualAnimation;
        if (this.animations[_alias] != undefined)
            this.animations[_alias].animate();
        this.objects3d.forEach(obj => {
            if (this.animations[_alias] != undefined && obj.haveAnimationFromParent()) {
                obj.animateWith(_alias, this.animations[_alias]);
            }
            obj.animate(_alias);
        });
    }
    animateWith(alias, animation) {
        if (this.animations[alias] == undefined) {
            const data = animation.getData();
            this.setAnimation(alias, data);
        }
    }
    moveTo(move) {
        if (move.x)
            this.mesh.position.x = move.x;
        if (move.y)
            this.mesh.position.y = move.y;
        if (move.z)
            this.mesh.position.z = move.z;
        this.objects3d.forEach(obj => obj.moveTo(move));
    }
    rotateTo(rotate) {
        if (rotate.x)
            this.mesh.rotation.x = rotate.x;
        if (rotate.y)
            this.mesh.rotation.y = rotate.y;
        if (rotate.z)
            this.mesh.rotation.z = rotate.z;
        this.objects3d.forEach(obj => obj.rotateTo(rotate));
    }
    scaleTo(scale) {
        if (scale.x)
            this.mesh.scale.x = scale.x;
        if (scale.y)
            this.mesh.scale.y = scale.y;
        if (scale.z)
            this.mesh.scale.z = scale.z;
        this.objects3d.forEach(obj => obj.scaleTo(scale));
    }
    moveAdd(move) {
        if (move.x)
            this.mesh.position.x = move.x;
        if (move.y)
            this.mesh.position.y = move.y;
        if (move.z)
            this.mesh.position.z = move.z;
        this.objects3d.forEach(obj => obj.moveAdd(move));
    }
    rotateAdd(rotate) {
        if (rotate.x)
            this.mesh.rotation.x = rotate.x;
        if (rotate.y)
            this.mesh.rotation.y = rotate.y;
        if (rotate.z)
            this.mesh.rotation.z = rotate.z;
        this.objects3d.forEach(obj => obj.rotateAdd(rotate));
    }
    scaleAdd(scale) {
        if (scale.x)
            this.mesh.scale.x = scale.x;
        if (scale.y)
            this.mesh.scale.y = scale.y;
        if (scale.z)
            this.mesh.scale.z = scale.z;
        this.objects3d.forEach(obj => obj.scaleAdd(scale));
    }
    getMesh() {
        return this.mesh;
    }
    getObjects() {
        const objs = [];
        objs.push(this.mesh);
        this.objects3d.forEach(obj => {
            const listmeshs = obj.getObjects();
            listmeshs.forEach(mesh => {
                objs.push(mesh);
            });
        });
        return objs;
    }
}
export default Object3D;
