'use strict';

var underscore = require('underscore');

var internal_options= {prefix:'', separator:'_', callback: null};

function flatJson_internal(prefix, json){
   var rst = {};
   if(prefix) {
      prefix += internal_options.separator;
   }
   underscore.each( Object.keys(json), function(elem){
      if( typeof json[elem] === 'object' && json[elem]!==null ) {
         underscore.extend(rst, flatJson_internal(prefix+elem, json[elem]));
      }
      else {
         if(internal_options.callback) {
            internal_options.callback(prefix+elem, json[elem])
         }
         rst[prefix+elem] = json[elem];
      }
   });
   return rst;
}

exports = module.exports = {
   flatJson: function(json, options) {
      underscore.extend(internal_options, options);
      return flatJson_internal(internal_options.prefix, json);
   }
}

