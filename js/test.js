var camera;
var scene;
var renderer;
var ambientLight;
var light;

var init = function() {
  renderer = new THREE.WebGLRenderer();
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 1, 1000 );
  
  // renderer
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  // camera
  camera.position.y = 80;

  light = new THREE.PointLight( 0xffffff, 1, 1000 );
  light.position.set( 50, 50, 50 );
  ambientLight = new THREE.AmbientLight(0xbbbbbb);
}

var render = function () {
  requestAnimationFrame( render );  // setTimeout

  renderer.render(scene, camera);
}

var cube = function(h, w, l) {
  var geometry = new THREE.BoxGeometry( h||10, w||10, l||10 );

  THREE.ImageUtils.crossOrigin = '';
  var material = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('crate.jpg')} );
  var cube = new THREE.Mesh( geometry, material );  
  return cube;
}

init();
// controls
controls = new THREE.OrbitControls( camera, renderer.domElement );

//cube
scene.add(cube());

//light
scene.add( light );
scene.add(ambientLight);



render();

