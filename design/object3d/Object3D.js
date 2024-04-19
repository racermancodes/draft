import Animation from '../events/Animation.js';
class Object3D {
    constructor(mesh) {
        this.objects3d = [];
        this.animations = {};
        this.atualAnimation = 'default';
        this.mesh = mesh;
        if (this.animations['default'] == undefined)
            this.animations['default'] = new Animation(this);
    }
    addObject(obj) {
        this.objects3d.push(obj);
    }
    setAnimation(alias, animation) {
        this.animations[alias] = new Animation(this, animation);
    }
    animate(alias) {
        let _alias = alias ? alias : this.atualAnimation;
        this.animations[_alias].animate();
        this.objects3d.forEach(obj => obj.animate(_alias));
    }
    moveTo(move) {
        if (move.x)
            this.mesh.position.x = move.x;
        if (move.y)
            this.mesh.position.y = move.y;
        if (move.z)
            this.mesh.position.z = move.z;
    }
    rotateTo(rotate) {
        if (rotate.x)
            this.mesh.rotation.x = rotate.x;
        if (rotate.y)
            this.mesh.rotation.y = rotate.y;
        if (rotate.z)
            this.mesh.rotation.z = rotate.z;
    }
    scaleTo(scale) {
        if (scale.x)
            this.mesh.scale.x = scale.x;
        if (scale.y)
            this.mesh.scale.y = scale.y;
        if (scale.z)
            this.mesh.scale.z = scale.z;
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
