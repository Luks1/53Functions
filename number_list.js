//creating a function
module.exports = function(n){
  //creating an empty array for number_list
var number_list = [];
//creating a for loop for the number_list
 for(j=1; j<=n; j++){
//pushing my number_list
   number_list.push(j);


};
//creating console.log to show numbers in array
console.log(number_list);
//returning number_list to pass my test
return number_list;
};
