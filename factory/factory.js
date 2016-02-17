angular.module("factoryApp")
  .factory("factory", function() {
  	var data = 'foo';
    return {
    	check: function() {

    	},
    	set: function(x){
    		data = x;
    	}
    }
  })
