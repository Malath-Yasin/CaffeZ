  
  var  Name = prompt("Please Enter Your Name" ,"");
  
 if ( Name != null){
   var gender=prompt("Please Enter Your Gender","Gender");
  
   if(gender =="female" || gender =="Female" ){
    alert("Welcome To CaffeZ Ms "+Name);
   }
   else if (gender =="male" ||gender =="Male"){
    alert("Welcome To CaffeZ Mr "+Name);
   } else{
    alert("Welcome To CaffeZ "+Name);
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