  
//   //function to enter the user gender
//   function genderFunction(){
//     var gender=prompt("Please Enter Your Gender","Gender");
//     return gender;
//   }
//   var  Name = prompt("Please Enter Your Name" ,"");
  
//   if ( Name != null){
//     //call function
//     var gender=genderFunction();
// //EX2 LOOPS 
//    while (gender.toLocaleLowerCase() !== "female" && gender.toLocaleLowerCase() !== "male"  ){
//     gender=prompt("ERROR : please enter your gender again ","Gender");
//   }
//    if(gender.toLocaleLowerCase() =="female"){
//     alert("Welcome To CaffeZ Ms "+Name);
//    }
//    else if (gender.toLocaleLowerCase() =="male" ){
//     alert("Welcome To CaffeZ Mr "+Name);
//    } 

//  }
//    var drink =prompt("You want to drink (hot drink ) or (cold drink)","hot/cold");
//     if(drink !=null){
//    var drinkName =prompt("Write the name of your drink please ","Drink name here");
//           if(drinkName !=null){
//             alert("Your Drink is getting prepared :) ")
//           }else {
//             alert("you didn't Enter your drink name :( ")
//           }
//     }
// console.log("The Order for " +Name+" is "+drinkName );
// //EX2 LOOPS 
// var arr=[Name,gender,drink,drinkName];
// for(var i=0;i<4;i++){
//   console.log(arr[i]);
// }



//DOM task
 var Name =document.getElementById("name");
 var Gender =document.getElementById("Gender");
 var drink =document.getElementById("Drink");
 var type1=document.getElementById("t1");
 var type2 =document.getElementById("t2");
 var info =document.getElementById("info");
 var submit=document.getElementById("submit");



 submit.addEventListener("click",function(e){
    if(Name.value !="" && Gender.value !="" && drink.value !="" && (type1.checked  || type2.checked )){ 
        if(Gender.value.toLowerCase() ==="female" || Gender.value.toLowerCase() ==="male" ){ 
   e.preventDefault();
   var ul=document.createElement('ul');
   var pa=document.createElement('p');
   var para=info.appendChild(pa);
   var ul=info.appendChild(ul);

   para.textContent="Name : "+Name.value;

    var li1=document.createElement('li');
    ul.appendChild(li1);
    li1.textContent="gender : "+Gender.value;
 
    var li3=document.createElement('li');
     ul.appendChild(li3);
    
 if(type1.checked){
    li3.textContent="DrinkType : "+type1.value;}
    else if(type2.checked){
     li3.textContent="DrinkType : "+type2.value;
    } 
 
  var li2=document.createElement('li');
  ul.appendChild(li2);
 li2.textContent="drink name : "+drink.value;
}else{
    alert("The gender is wrong please enter the right gender");
}
}else {
    alert("you should fill all feilds ");
}

 
});

