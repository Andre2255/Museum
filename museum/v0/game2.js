var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xcccccc );

// Crear la cámara
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 10, 20 );

// Crear el renderizador
var renderer = new THREE.WebGLRenderer( { canvas: canvas } );
renderer.setSize( window.innerWidth, window.innerHeight );

var ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 );
scene.add( ambientLight );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set( 0, 1, 0 );
scene.add( directionalLight );

// Agregar geometría
var floorGeometry = new THREE.PlaneGeometry( 100, 100, 10, 10 );
var floorMaterial = new THREE.MeshStandardMaterial( { color: 0x808080 } );
var floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add( floor );

var ceilingGeometry = new THREE.PlaneGeometry( 100, 100, 10, 10 );
var ceilingMaterial = new THREE.MeshStandardMaterial( { color: 0x808080 } );
var ceiling = new THREE.Mesh( ceilingGeometry, ceilingMaterial );
ceiling.rotation.x = Math.PI / 2;
ceiling.receiveShadow = true;
scene.add( ceiling );




const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  
  animate();