//check and print even or odd ...........using............> if statement
let x=567;
if(x%2==0){
    console.log("even number",x);
}
if(x%2!==0){
    console.log("odd number:",x);
}



//check and print adult or not an adult..........using............>if else statement
let age=25;
if(age>=18){
    console.log("you are adult");
}
else{
    console.log("you are not adult");
}

// question 1  the number is said to be magical if it is greater than 10. if n is greater than 10 then print "magical"
//note- "happy ending "is default printing.do not remove this line.
   //         using only if statement

let no=8;
if(no>10){
    console.log("Magical");
}
  console.log( " happy ending");


  //question 2 the number is said to be magical if it is  greater than 10.
  //if n greater than 1o print"magical" else "not magical"
  //  using if else statement.

let num=78;
if(num>10){
    console.log("Magical");
}
else{
  console.log( " happy ending");
}

// question 3 write a program to print largest number of two number .
let a=34;
   b=89;
   if(a>b){
    console.log("Greater number is a:",a);
   }else{
    console.log("Greater number is b:",b);
   }


// using nested if statement.
// Question 4   write aprogram to check that he/she are eligible for driving .
let _age=12;
let haslicense=true;
if(_age>=18){
    if(haslicense){
        console.log("you can drive");
    }
    console.log("you need a license to drive ");
}
else{
    console.log("you are too young to drive");
}


// using if else ladder
/* question in tcs 
if salary is greater than and equal to 15lakh then tax ix 30.
if salary is greater than and equal to 10lakh and less than 15lakh then tax is 20.
if salary is greater than and equal to 5lakh and less than 15lakh then tax is 10.
otherwise tax will be 0.  */
 

let s=20;
var tax;
if(s>=15){
    tax=30;
}
else if(s>=10){
    tax=20;
}
else if(s>=5){
    tax=10;
}
else{
    tax=0;
}
console.log(tax);

//   using logical operator.
// largest among three number.
//write aprogram to print largest among three number.
let p=23;
q=34;
r=36;
if(p>=q&&p>=r){
    console.log("the greater number is p:",p);
}
else if(q>=r&&q>=p){
    console.log("the greater number is q:",q);
}
else{
    console.log("the greater number is r:",r);
}



// these question ask in tcs interview for 11.75 lakh package
//using if else ladder
/*Given a variable distance (D) write aprogram to print the cost associsted with it as shown  below.
Assign a value to double variable disatnce as follow;
       distance(D)                                          cost
       0 through 100                                 5.00
       more than 100 but not more than 500           8.00
       more than 500 but less than 1000              10.00
       1000 or more                                  12.00*/

       let D=700;
       if(D>=0&&D<=100){
        console.log("to travel the distance we required= 5.00");
       }
      else if(D<100&&D<=500){
        console.log("to travel the distance we required= 8.00");
       }
      else if(D>500&&D<1000){
        console.log("to travel the distance we required= 10.00");
      }
      else if(D>100){
        console.log("to travel the distance we required= 12.00");
      }
      