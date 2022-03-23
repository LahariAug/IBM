var day ="monday";
// ==, ===

enum daysOfTheWeek {
    sun,mon,tues,wed,thurs,fri = 100,sat
}
let dayIs : daysOfTheWeek;
dayIs = daysOfTheWeek.fri;

console.log(dayIs);

if(dayIs ===daysOfTheWeek.fri ){
    console.log(" weekend starts");
}

// enum :
// when u have bunch of value/ constants that u want to manage in code, then use enum