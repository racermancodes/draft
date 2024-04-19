import three from './three.js';
class Scene {
    constructor(width, height, to = "#scene") {
        var _a;
        this.light = new three.HemisphereLight(0xffffff, 0x1040f, 2);
        this.objects = new Map();
        const renderer = new three.WebGLRenderer();
        renderer.setSize(width, height);
        (_a = document.querySelector(to)) === null || _a === void 0 ? void 0 : _a.appendChild(renderer.domElement);
        this.camera = new three.PerspectiveCamera(50, width / height);
        this.camera.position.z = 10;
        this.camera.position.y = 0;
        this.renderer = renderer;
        this.scene = new three.Scene();
        this.scene.add(this.light);
    }
    addLight(light) {
        this.light = light;
        this.scene.add(this.light);
    }
    getLight() {
        return this.light;
    }
    addObject(alias, object) {
        this.objects.set(alias, object);
        for (const obj of object.getObjects()) {
            this.scene.add(obj);
        }
    }
    getScene() {
        return this.scene;
    }
    getObject(alias) {
        return this.objects.get(alias);
    }
    getCamera() {
        return this.camera;
    }
    setPosCamera(xyz) {
        if (xyz.x)
            this.camera.position.x = xyz.x;
        if (xyz.y)
            this.camera.position.y = xyz.y;
        if (xyz.z)
            this.camera.position.z = xyz.z;
    }
    getRenderer() {
        return this.renderer;
    }
    renderLoop() {
        setInterval(() => this.render(), 10);
    }
    render() {
        for (const obj of this.objects.values())
            obj.animate();
        this.renderer.render(this.scene, this.camera);
    }
}
export default Scene;
