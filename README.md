jsonFlatter
===========

flatten a json object from multiple layer to one layer 
Usage: 
-------
   var jsonFlatter = require('../jsonFlatter.js');

   var orgChat = {
      boss:{
         name:'Bob',
         managers:[ {
            name:'Jack',
            workers:[
               {name:'Tom'},
               {name:'Jim'}
            ]
         }
         ]
      }
   };

   console.log(jsonFlatter.flatJson(orgChat));

The out put is:
   { boss_name: 'Bob',
       boss_managers_0_name: 'Jack',
       boss_managers_0_workers_0_name: 'Tom',
       boss_managers_0_workers_1_name: 'Jim' }

Author:
-------
Bingle (binarybb@hotmail.com)