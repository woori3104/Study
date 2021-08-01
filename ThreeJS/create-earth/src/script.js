import './style.css'
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let renderer, camera, scene;
let controls;
let moon, space, stars, earth;

const clock = new THREE.Clock();

function createControls() {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 5;
    controls.maxDistance = 10;
}

function createSpace() {
    const geometry = new THREE.SphereGeometry(10, 50, 50);
    const material = new THREE.MeshBasicMaterial({
       map: new THREE.TextureLoader().load("./space.jpeg"),
       // 뒷면
       side: THREE.BackSide,
    });
    return new THREE.Mesh(geometry, material);
}

function createEarth() {
    // 우주보다 반지름은 작게^__^
    const geometry = new THREE.SphereGeometry(2, 20, 20);
    const material = new THREE.MeshBasicMaterial({
       map: new THREE.TextureLoader().load("./earth.jpeg"),
       // 뒷면
       side: THREE.BackSide,
    });
    return new THREE.Mesh(geometry, material);
}

function createMoon() {
    const geometry = new THREE.SphereGeometry(0.25, 20, 20);
    const material = new THREE.MeshBasicMaterial({
       map: new THREE.TextureLoader().load("./moon.jpeg"),
       // 뒷면
       side: THREE.BackSide,
    });
    return new THREE.Mesh(geometry, material);
}

function createStars() {
    const stars = new THREE.Group();
    const geometry = new THREE.SphereGeometry(0.05, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
  
    for (let i = 0; i < 500; i++) {
      const star = new THREE.Mesh(geometry, material);
  
      const randomScale = Math.random();
      star.scale.set(randomScale, randomScale, randomScale);
  
      star.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      stars.add(star);
    }
  
    return stars;
}

function postProcessing() {
    composer = new EffectComposer(renderer);
    composer.setSize(window.innerWidth, window.innerHeight);
  
    renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
  
    outlinePass = new OutlinePass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      scene,
      camera,
      selectedObjects
    );
    outlinePass.renderToScreen = true;
    outlinePass.selectedObjects = selectedObjects;
    outlinePass.edgeStrength = 4;
    outlinePass.edgeGlow = 0;
    outlinePass.edgeThickness = 2.2;
    outlinePass.pulsePeriod = 2;
    outlinePass.visibleEdgeColor.set(new THREE.Color("rgba(255, 255, 255)"));
    composer.addPass(outlinePass);
  }
{}
function init() {
    renderer = new THREE.WebGL1Renderer();

    // 캔버스의 사이즈 지정
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setPixelRatio(window.devicePixelRatio);
    // 캔버스에 배경색 지정
   // renderer.setClearColor('blue');

    // 캔버스를 추가함
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene;

    // 원근기법이 들어간 카메라를 사용하겠다. 
    camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth/ window.innerHeight, 
        0.1, 
        1000
        );
    
    camera.position.set(0, 0, 10);

    createControls();

    space = createSpace();
    earth = createEarth();
    stars = createStars();
    moon = createMoon();
    scene.add(space);
    scene.add(earth);
    scene.add(stars);
    scene.add(moon);
    //postProcessing();
    render();
    window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
}

function render() {

    // 단발성이 아니라 계속 이미지를 입히는 작업이 필요함
    requestAnimationFrame(render);

    const elaspedTime = clock.getElapsedTime();
    //postProcessing();
    // 달의 공전
    moon.position.set(
        Math.cos(elaspedTime) * 3,
        Math.sin(elaspedTime) * 3,
        Math.cos(elaspedTime)
    );

    // rotation
    space.rotation.set(0, elaspedTime, elaspedTime*0.1);
    //earth.rotation.set(elaspedTime * 0.1, elaspedTime * 0.5, 0);
    moon.rotation.set(elaspedTime * 0.5, elaspedTime * 0.01, 0);
    stars.rotation.set(elaspedTime * 0.2, elaspedTime * -0.1, elaspedTime * -0.2);


    controls.update();
    renderer.render(scene, camera);
}
  
init();