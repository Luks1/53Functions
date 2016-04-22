module.exports = function(numlist){

  var lowestN = 1000;

  numlist.forEach(function(final){

    if(final < lowestN){

      lowestN = final;

      console.log(lowestN);
    }

  })
return lowestN;
}
