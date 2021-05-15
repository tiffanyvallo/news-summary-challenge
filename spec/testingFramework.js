'use strict';

function expect(a) {
  return {
    toEqual: function(b){
      if(a == b) {
        console.log('PASS')
      } else {
        console.log('FAIL')
      }
    },
    notToEqual: function(b){
      if (a != b) {
        console.log('PASS: a is not the same as b' )
      } else {
        console.log('FAIL: a is the same as b')
      }
    },
    notToBeEmpty: function(){
      if(a.length > 0) {
        console.log('PASS: length is greater than 0')
      } else {
        console.log('FAIL: length is 0')
      }
    },
    toBeAnArray: function() {
      if(a.constructor.name == 'Array') {
        console.log('PASS: this is an array')
      } else {
        console.log('FAIL: this is not an array')
      }
    }
  }
  function it(label, callback){
    console.log(`TEST: ${label}`)
    callback()
  }
}