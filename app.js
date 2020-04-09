obj = {
    title : "good",
    isDone: true    
}

arr = [
    {

    },
    {
        title: "1st",
        isDone: false,
    },
    {
        title: "2st",
        isDone: false,
    },
    {
        title: "3st",
        isDone: true,
    }


]


// arr = [{4:1},5,6,6,7]
for (x in arr){
    if(!arr[x].isDone)  {   console.log(arr[x].title)}
}
// console.log(arr[0].isDone);
// array = [1,2,3,4]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console(element)
// }

// for ( x in arr){
//     if (x.isDone == true){
//         print(" this is true")
//     }
// }