require.ensure(['./utils'], function() {
  var $ = require('jquery');
  
  $(document).on('click', 'button', function(e) {
    var util = require('./utils');
    console.log('btn clicked showd from: ', util);  
  });
  console.log('modal loaded');
});
