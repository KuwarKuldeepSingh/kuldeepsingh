/*   Write a code which can gives grades to students according to their score.
1) 90 to 100 , A
2) 70 to 89 , B
3) 60 to 69 , C
4) 50 to 59 , D
5) 0 to 49 ,F */

//Their are two method two find grade ........

// code----> Method -1

let score =78;
if(score>= 90&&score<= 100){
    console.log("According to your score grade was : A" );
}
else if(score>= 80&&score<= 89){
    console.log("According to your score grade was : B" );
}
else if(score>= 70&&score<= 79){
    console.log("According to your score grade was : C" );
} 
else if(score>= 60&&score<= 69){
    console.log("According to yourscore  grade was : D" );
}
else if(score>= 50&&score<= 59){
    console.log("According to your  score grade was : E" );
}
else if(score>= 0&&score<= 49){
    console.log("According to your score grade was : F" );
}



// Method -2   we can also create a prompt for data from user and make it more easier.
let no = prompt("Enter your score (0-100):");
let grade;
if(no>= 90&&no<= 100){
    grade="A";
}
else if(no>= 80&&no<= 89){
    grade="B";
}
else if(no>= 70&&no<= 79){
    grade="C";
} 
else if(no>= 60&&no<= 69){
    grade="D";
}
else if(no>= 50&&no<= 59){
    grade="E";
}
else if(no>= 0&&no<= 49){
    grade="F";
}
console.log("According to your score,grade was :",grade);