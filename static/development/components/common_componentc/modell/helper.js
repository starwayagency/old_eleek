import * as THREE from "three";

export const HelperCordinates = (scene, width_helper_line) => {
  var axesHelper = new THREE.AxesHelper(width_helper_line);
  scene.add(axesHelper);
};
export const HelperShadowCamera = (scene, shadow) => {
  // Create a helper for the shadow camera (optional)
  var helper = new THREE.CameraHelper(shadow);
  scene.add(helper);
};

export const HelperSphereShadows = (scene) => {
  //Create a sphere that cast shadows (but does not receive them)

  var sphereGeometry = new THREE.SphereBufferGeometry(5, 32, 32);
  var sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.castShadow = true; //default is false
  sphere.receiveShadow = false; //default
  scene.add(sphere);
};
export const HelperPlaneShadows = (scene,light) => {
  //Create a plane that receives shadows (but does not cast them)
  var planeGeometry = new THREE.PlaneBufferGeometry(20, 20, 32, 32);
  var planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;
  scene.add(plane);
  let dirLightHeper = new THREE.DirectionalLightHelper(light, 90);
  scene.add(dirLightHeper);
};

export const  addCircleToBacground = (inner_radius,outer_radius,number_particles)=>{
  // // create circle to begraund
  var geometry = new THREE.RingGeometry(inner_radius, outer_radius, number_particles);
  var material = new THREE.MeshBasicMaterial({
    color: 0x292929,
    side: THREE.DoubleSide,
  });
  var mesh = new THREE.Mesh(geometry, material);

  mesh.up.x = 1;
  mesh.up.y = 4;
  mesh.up.z = 5;
  mesh.rotateX( Math.PI/2);  



  return mesh;
}


export const  params = (data) => {

  // convert array => url
  return Object.keys(data).map(key => `${data[key].name}=${encodeURIComponent(data[key].value)}`).join('&');
}

export const colorBike=(model,config_model)=>{
  let bike = model;
  bike.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }

    if (o.name.indexOf("Rama_1") !== -1 || o.name.indexOf("Motor_2") !== -1) {
      // Рама і мотор
       o.material = new THREE.MeshPhongMaterial({
         color: parseInt(`0x${config_model.iframe_color}`),
         shininess: 90,
       })
      } else if ( o.name.indexOf("Rama_2") !== -1) {
            // Панелі на рамі
            o.material = new THREE.MeshPhongMaterial({
              color: parseInt(`0x${config_model.side_panels_colors}`),
              shininess: 90,
            });
      }else{

      }
  })
  return bike;
}