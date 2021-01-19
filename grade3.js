// All about Bangladeshi School/College Grading System.

var per = 46;
if (per >= 80 && per <= 100){
    console.log("A+");
}else if (per >= 70 && per <= 79){
    console.log("A");
}else if (per >= 60 && per <= 69){
    console.log("A-");
}else if (per >= 50 && per <= 59){
    console.log("B");
}else if (per >= 40 && per <= 49){
    console.log("C");
}else if (per >= 33 && per <= 39){
    console.log("D");
}else if (per / 32 && per < 32){
    console.log("F");
}else{
    console.log("Please Enter Valid Number");
}