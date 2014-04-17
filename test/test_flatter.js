var jsonFlatter = require('../jsonFlatter.js'),
    assert = require('assert');

describe('Json Flatter test', function () {
   it('should flatten given json', function (done) {
      var json = {
         a:1,
         b:{
            a:1,
            b:2
         },
         c:{
            a:[1,2,3],
            b:{},
            c:['',null, undefined, true]
         }
      };
      var expected = {
         'a': 1,
         'b#a': 1,
         'b#b': 2,
         'c#a#0': 1,
         'c#a#1': 2,
         'c#a#2': 3,
         'c#c#0': '',
         'c#c#1': null,
         'c#c#2': undefined,
         'c#c#3': true
      };
      var rst1, rst2={};
      rst1 = jsonFlatter.flatJson(json, {
         prefix:'',
         separator:'#',
         callback: function(key, value) {
            rst2[key]=value;
         }
      });

      console.log('input json=', json);
      console.log('output json=', rst1);

      assert(JSON.stringify(rst1) === JSON.stringify(expected), 'result ok');
      assert(JSON.stringify(rst1) === JSON.stringify(rst2), 'callback ok');

      done();
   });
});
