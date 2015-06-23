var camera;
var scene;
var renderer;
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

  light = new THREE.PointLight( 0x111111, 1, 1000 );
  light.position.set( 50, 50, 50 );
}

var render = function () {
  requestAnimationFrame( render );  // setTimeout

  renderer.render(scene, camera);
}

var cube = function(h, w, l) {
  var geometry = new THREE.BoxGeometry( h||10, w||10, l||10 );
  var material = new THREE.MeshLambertMaterial({ color: 0xcccccc, shading: THREE.SmoothShading} );
  var cube = new THREE.Mesh( geometry, material );  
  return cube;
}

var cylinder = function(x, y, z, height, radius, color) {
  x = x || 0;
  y = y || 0; 
  z = z || 0;
  height = height || 20;
  radius = radius || 5;
  var cGeometry = new THREE.CylinderGeometry( radius, radius, height, 32 );
  var cMaterial = new THREE.MeshLambertMaterial( {color: color, shading: THREE.SmoothShading} );
  var cylinder = new THREE.Mesh( cGeometry, cMaterial );
  cylinder.position.x = x;
  cylinder.position.y = y;
  cylinder.position.z = z;

  return cylinder;  
}

var cylinderBasic = function(x, y, z, height, radius) {
  x = x || 0;
  y = y || 0; 
  z = z || 0;
  height = height || 20;
  radius = radius || 5;
  var cGeometry = new THREE.CylinderGeometry( radius, radius, height, 32 );
  var cMaterial = new THREE.MeshBasicMaterial( {color: 0x000000} );
  var cylinder = new THREE.Mesh( cGeometry, cMaterial );
  cylinder.position.x = x;
  cylinder.position.y = y;
  cylinder.position.z = z;

  return cylinder;  
}

init();
// controls
controls = new THREE.OrbitControls( camera, renderer.domElement );

// left column
scene.add(cylinder(0, 0, -15, 2, 5, 0x6DCFF6));
scene.add(cylinder(0, 0, 0, 2, 5, 0x6DCFF6));
scene.add(cylinder(0, 0, 15, 2, 5, 0x6DCFF6));

// right column
scene.add(cylinder(15, 0, -15, 2, 5, 0x6DCFF6));
scene.add(cylinder(15, 0, 0, 2, 5, 0x6DCFF6));
scene.add(cylinder(15, 0, 15, 2, 5, 0xcccccc));

//P for Point
scene.add(cylinderBasic(15, 0, 15, 2, 3.5));
var p = cube(10, 2, 2);
p.position.x = 11;
p.position.y = 0;
p.position.z = 19;
p.rotation.y = 1.55;
scene.add(p);

//light
scene.add( light );
scene.add(new THREE.AmbientLight(0xffffff));



render();

