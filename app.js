  
  var  Name = prompt("Please Enter Your Name" ,"");
  
 if ( Name != null){
   var gender=prompt("Please Enter Your Gender","Gender");
//EX2 LOOPS 
   while (gender.toLocaleLowerCase() !== "female" && gender.toLocaleLowerCase() !== "male"  ){
    gender=prompt("ERROR : please enter your gender again ","Gender");
  }
   if(gender.toLocaleLowerCase() =="female"){
    alert("Welcome To CaffeZ Ms "+Name);
   }
   else if (gender.toLocaleLowerCase() =="male" ){
    alert("Welcome To CaffeZ Mr "+Name);
   } 

 }
   var drink =prompt("You want to drink (hot drink ) or (cold drink)","hot/cold");
    if(drink !=null){
   var drinkName =prompt("Write the name of your drink please ","Drink name here");
          if(drinkName !=null){
            alert("Your Drink is getting prepared :) ")
          }else {
            alert("you didn't Enter your drink name :( ")
          }
    }
console.log("The Order for " +Name+" is "+drinkName );
//EX2 LOOPS 
var arr=[Name,gender,drink,drinkName];
for(var i=0;i<4;i++){
  console.log(arr[i]);
}