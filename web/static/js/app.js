require('../css/app.scss')
require('../vendor/js/fulltilt')

import GyroNorm from "gyronorm"

let gn = new GyroNorm()

gn.init().then(function() {
  gn.start(function(data) {
    document.getElementById('alpha').innerHTML = data.do.alpha
    document.getElementById('beta').innerHTML = data.do.beta
    document.getElementById('gamma').innerHTML = data.do.gamma
    document.getElementById('absolute').innerHTML = data.do.absolute
  })
}).catch(function(e) {
  // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
  console.log('DeviceOrientation is not supported by your browser')
})
