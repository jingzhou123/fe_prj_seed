require(['./modal'], function() {
  var $ = require('jquery');
  
  $(document).on('click', 'button', function(e) {
    require('./angular-entry');
    var util = require('./utils');
    console.log('btn clicked showd from: ', util);  
  });
  
  console.log('app loaded');  
});
