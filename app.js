<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>GeoAR.js demo</title>
    <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
  </head>

  <body>
    <a-scene
      vr-mode-ui="enabled: false"
      arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
    >
      <a-gltf-model
        src="https://github.com/aARdeLife/Bridges/raw/e96f53de46d2c9dc6e6560734ad35a385ea95c18/polforweb%20(3).glb"
        scale="0.05 0.05 0.05"
        look-at="[gps-camera]"
        gps-entity-place="latitude: 53.453403; longitude: -2.299748;"
      ></a-gltf-model>
      <a-camera gps-camera rotation-reader> </a-camera>
    </a-scene>
  </body>
</html>
