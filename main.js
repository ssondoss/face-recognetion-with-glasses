const THREE = window.MINDAR.FACE.THREE;
import { loadGLTF } from './assets/libs/loader.js'
document.addEventListener('DOMContentLoaded', () => {
    const start = async () => {
        debugger;
        const mindarThree = new window.MINDAR.FACE.MindARThree({ container: document.body });
        const { renderer, scene, camera } = mindarThree;
        const geometry = new THREE.SphereGeometry(0.1, 32, 16);
        const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(light);
        const glasses = await loadGLTF('./assets/glasses1/scene.gltf');
        glasses.scene.scale.multiplyScalar(0.01);


        const anchor = mindarThree.addAnchor(168);
        
        anchor.group.add(glasses.scene);
        await mindarThree.start();

        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera)
        });
    }
    start();
})
