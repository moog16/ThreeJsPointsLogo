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

  light = new THREE.PointLight( 0xffffff, 1, 1000 );
  light.position.set( 50, 50, 50 );
}

var render = function () {
  requestAnimationFrame( render );  // setTimeout

  // cube.rotation.x += 0.001;
  // cube.rotation.y += 0.1;

  renderer.render(scene, camera);
}

var cube = function(h, w, l) {
  var geometry = new THREE.BoxGeometry( h||10, w||10, l||10 );
  var material = new THREE.MeshLambertMaterial({ color: 0xcccccc, shading: THREE.SmoothShading} );
  var cube = new THREE.Mesh( geometry, material );  
  return cube;
}

// var makeCrazyCube = function() {
//   var cube = new THREE.CubeGeometry(100, 100, 100);

//   var texture = THREE.ImageUtils.loadTexture('../techMeme.jpeg');
//   texture.anisotropy = renderer.getMaxAnisotropy();
   
//   var material = new THREE.MeshBasicMaterial({ map: texture });
//   var mesh = new THREE.Mesh(cube, material);
//   return mesh;
// }

// var getTorus = function() {
//   var geometry = new THREE.TorusKnotGeometry(50, 10, 50, 20);
//   var matColor = new THREE.MeshPhongMaterial(0x111111)
//   var mesh1 = new THREE.Mesh(geometry, matColor);
//   return mesh1;
// }

var cylinder = function(x, y, z, height, radius, color) {
  x = x || 0;
  y = y || 0; 
  z = z || 0;
  height = height || 20;
  radius = radius || 5;
  var cGeometry = new THREE.CylinderGeometry( radius, radius, height, 32 );
  var cMaterial = new THREE.MeshLambertMaterial( {color: color, shading: THREE.SmoothShading} );
  // var cMaterial = new THREE.MeshBasicMaterial( {color: 0x6DCFF6, wireframe: true} );
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

var getTorus = function() {
  // THREE.TorusGeometry( radius, tubeRadius, radialSegments, tubularSegments )
  var torusGeometry = new THREE.TorusGeometry( 5, 2, 3, 32 );
  var torusMaterial = new THREE.MeshLambertMaterial({color: 0x6DCFF6, shading: THREE.SmoothShading});
  var torus = new THREE.Mesh(torusGeometry, torusMaterial);
  return torus;
}


init();
// controls
controls = new THREE.OrbitControls( camera, renderer.domElement );

var ring = getTorus();
ring.position.x = 15;
ring.position.y = 0;
ring.position.z = 15;
ring.rotation.x = 1.6;
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

scene.add( light );
scene.add(new THREE.AmbientLight(0x000000));



render();