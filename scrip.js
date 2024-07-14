// import swal from 'sweetalert';

// var names="ali"
// console.log(names)
// const number =2134;
// console.log(number)
// console.log(typeof names)
// console.log(typeof number)

// a=20
// console.log(typeof a)

// const b=100
// console.log(b)

// var firstName="saif"
// var lastname="araiin"
// console.log(firstName)
// console.log(lastname)

// let saIf='what'
// const zia='is';
// var haider='your';
// var lenovo=100
// const lenovos=100
// alert("welcome to javascrip")
// console.log(saIf,zia,haider,lenovo,lenovos);
// console.log(59+34)
// let names=`saif`
// let d= `what a problem`
// let areyouhappy=false
// let c=34+names+`haider`
// console.log(c)
// alert('i am a procoder')
// var num1=345;

// console.log(num1++)
// num1=10;
// console.log(++num1)

// var num2 =30
// num2=30

// console.log(num2--)
// console.log(num2)

// var C=a++ - b-- + --a + --a
//10- 19+10+11
//   console.log(C)
// a++
//   console.log(a)
//   for (let i= 0; 4 < i;4++) {
//     const element = array[4];
//     console.log(i)
//   }
// alert('you are not e
// var a = 20,
//     b = 30,
//     c = 40;

// var d = a++ - --b + c++ ;
// //20-29+40

// console.log(b)
// console.log(d);

// prompt

// var userName=prompt(`enter your firstname`);
// var lastName=prompt('enter your last name');

// var fullName=userName+lastName;
// console.log(`fullname`,fullName);
// if else
// var a = `hell`
// if (a == `hel`) {
//     console.log(`you are doing write`)
// }
// var b;
// var b = prompt(`sex`, `male`)
// if (b === `male`,c==`female`) {
//     alert(`hello brother`)
// }
// else {
//     console.log(`youare on wrong track`)
// }

// three conditions working with one alert
// var gender=prompt(`enter your gender`,`male`)
// var message=`not matcha`
// if (gender===`male`) {
//     message=(`hello sir`)
// }if (gender===`female`) {
//     message=(`hello sister`)
// }
// alert(message)

// var lang = `javascrip`, loca = `karachi`, exp = `2years`, developer;

// var lang = prompt(`language qualify`, `javascrip`)
// if (lang !== `javascrip`) {
//     developer = (`we need javascrip developer`)
//     prompt(`location`, `karachi`)
//     if (loca != `karachi`) {
//         developer = (`we need in karachi location`)
//         prompt(`experience`, `developer`)

//         if (exp = `2years`) {
//             developer = (`for this job developer must have atleast 2 years experience`)
//         }
//     }
// }
//  else {
//     alert(`sorry for inconvince`)
// }

// var lang, loca=`2 years`, exp, developer;


// if (lang == `javascrip`) {
//     console.log(`thank you java`)
//     if(lang !== `javascrip`){
// alert(`we need javascrip develooper`)
//     }
// }
// else if (loca == `karachi`) {
//     console.log(`your are on right place`)
// } else if (exp == `2 years`) {
//     console.log(`your are on riglllllllllht place`)
// }
// var lang = prompt(`enter your language`, `javascrip`)
// if (lang === 'javascrip') {

//     var exp = prompt(`enter your experience`, `2 years`)
//     if (exp === `2 years`) {
//         var loca = prompt(`enter your location`, `hyderabad`)
//         if (loca === `hyderabad`) {
//             console.log(`congratulation your are hired`)
//         } else {
//             console.log(` we need hyderabad location`)
//         }
//     } else {
//         console.log(` experience is less than 2 years`)
//     }
// } else {
//     console.log(`scrip sikho`)
// }


// swal({
//     title: "Are you sure?",
//     text: "Once deleted, you will not be able to recover this imaginary file!",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       swal("Poof! Your imaginary file has been deleted!", {
//         icon: "success",
//       });
//     } else {
//       swal("Your imaginary file is safe!");
//     }
//   });
var a = prompt("enter value ")

console.log(a)

var leftFivethousand = a%5000; //rupees: left 
var notesFiveThouand = (a/5000).toString().split(".")[0]
//2

console.log("left 5000 thousand :",leftFivethousand) //500
console.log("Five Thousand : ",notesFiveThouand)

var leftThousand = leftFivethousand%1000;
var noteThousand = (leftFivethousand/1000).toString().split(".")[0]

console.log(leftThousand)
console.log(noteThousand)

var leftFiveH = leftThousand %500
var FiveHundred = (leftThousand/500).toString().split(".")[0]

console.log(leftFiveH)
console.log(FiveHundred)


var leftHundred = leftFiveH%100
var HundredNotes = (leftFiveH/100).toString().split(".")[0]

console.log(leftHundred)
console.log(HundredNotes)
