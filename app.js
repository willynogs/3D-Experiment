(function init(){
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer({alpha: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement );
  var shape = [];
  geometry = new THREE.SphereGeometry(5, 40, 40);
  THREE.ImageUtils.crossOrigin = 'file://';
  var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('group.jpg',THREE.SphericalRefractionMapping) } );

  /*
  var texture = new THREE.ImageUtils.loadTexture('group.jpg', {}, function(){
    console.log('success');
  }, function(){
    console.log('failure');
  });
  */
  //material = new THREE.MeshBasicMaterial({map: texture});
  shape[0] = new THREE.Mesh(geometry, material);
  shape[0].position.set(0,5,0);
  scene.add(shape[0]);
  var light = new THREE.PointLight(0x5CFD4A);
  light.position.set(0,250,0);
  scene.add(light);
  camera.position.set(3,4,10);
  function render(){
    requestAnimationFrame( render );
    shape[0].rotation.x += 0.0035;
    shape[0].rotation.y += 0.0035;
		renderer.render(scene, camera);
	}
	render();
})();
