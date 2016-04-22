module.exports = function(numlist){

  var highestN = 0;

  numlist.forEach(function(final){

    if(final > highestN){

      highestN = final;

      console.log(highestN);
    }

  })
return highestN;
}
