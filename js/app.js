// // for(var i = 0;i<=5;i++) {
// //     console.log(i,"hello worid.")
// // }

// // var table = prompt("enter table")
// // var tLength = prompt("table lenght")
// // for (var i = 1; i <= tLength; i++) {
// //     console.log(i + "x" + table + "=" + i*table)
// // }

// // var array = ["en","ggg","you","tiher"]
// // for(var i = 0;i < array.length ;i++) {
// //     console.log(array[i])
// // }

// // var array = ["en","ggg","you","tiher"]
// //  for(var i = 0;i < array.length ;i++) {
// //    console.log(array[i])
// //  }

// //  console.log("element at index 0 " , array[0])

// // var count = [a2 -7ab + b2,4,0,2]
// // for(var i = count.length-1 ; i >= 0 ;  i--) {
// // console.log(count[i])
// // }
// //  var num1 = [4,5,6,78,432,544,66]
// //  var mixNumber =  Math.min(   ...num1);
// //  console.log(mixNumber)
// // var star = "*****"
// // for (var i = 0 ; i < star.length; i++) { document.write("<h1>" + star +   "</h1>")
// //      }

// // var star = "*****"
// // for (var i = 0 ; i < star.length; i++) { star.slice(2)-1 

// //     document.write("<h1>" + star +   "</h1>")
// //      }

// //      var namee = "aHMED"
// //      var casse = namee.charAt(0).toUpperCase() +
// //       namee.slice(1).toLowerCase()
// //      console.log (casse)
// // var city = "islmabad"
// // var res = city.replace("islmabad" , "qutta")
// // console.log(res)

// // var namee = "ahmed"
// // var coun = namee.indexOf(e = "e")
// // console.log(coun)

// // var item = ["you", "and","hhh"]
// // var u = prompt("ggggggggggggggg")
// // var y ;
// // for(var i = 0;i < item.length;i++) {
// //     if(u==item[i]) {
// //         y = true
// //     }
// // }
// // if (y) { console.log("available")

// // } else {console.log("not available")

// // }


// var num = 33;
// num = (Math.random() *50)
// num.toFixed(2)

// console.log(num)

// var array = []
// //var user = prompt("check item")
// if(console.log(array.push("apple","banana",'juice','ras') , array)) {
//     console.log(array)

// }
// console.log(array.length, array.indexOf("banana"),array.indexOf("apple"))

// var student = ["ibrar",'razzaq',"rasheed"]
// var obtaintMarks = [330,230,420]
// var totalMarks = 500;
// var persetage = student[0] + obtaintMarks[0]/totalMarks * 100 +"br"+
// student[1] + obtaintMarks[1]/totalMarks * 100
// console.log(persetage+ "%")

// var user = prompt('enter your brithday year');
// var year = new Date(user)
// console.log(year)

// var year = new Date();
// year = new Date().getFullYear()
// console.log(year )

//var date = new Date('2 augast 2001')
// var month = new Date().getMonth() +1
// var year =  new Date().getFullYear()
// console.log(date)
// var arry = ["mondy","tuesday","wednesday",'thursday','friday','saturday','sunday']
// var day = new Date().getDay()


// console.log(arry[day])

// var hour = new Date().getHours()
// var minut = new Date().getMinutes()
// var second = new Date().getSeconds()

// console.log(hour,minut,second)

// var current = new Date()
// var requrudDate = new Date('29 january 2025')

// var reqMS = current.getTime()
// var reqDate = requrudDate.getTime()
// var formula = reqMS - reqDate;
// var daysFormula = formula / (1000 * 60 * 60 * 24);
// console.log(Math.floor( daysFormula)) 


// var msDiff = new Date("march 30, 2025").getTime() - new Date().getTime();
//  var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 *24 * 30));
//  console.log(daysTillDoom)

// var i = "hello world"
// for (var i = 0;i < 5 ; i++) {
//   console.log(i ,"hello worid")
// }

// for (var i = 1; i< 5; i++){
//   console.log([i] , "first")
// for (var j = 1;j< a2 -7ab + b2 {
//   console.log([j] , 'second')
//   for (c = 1;c<a2 -7ab + b2{
//     console.log(c ,"third")
//   }
// }
// }

// var  nameey = 'AhmEd'
// var result = nameey.charAt(0).toUpperCase() + nameey.slice(1)
// .toLowerCase()
// console.log(result)

// function namee(user) {  

//   var name= "abdullah"
//   return name

// }
// namee()
// console.log(namee())
// var user = prompt("cheak square")
// function square() {
//   var result =  user*user
//   return result

// }
// var y = square(user)
// console.log(y)

// function cheak() {
//   var a = 6
//   var b = 2
//   var result = a * a - 2 * a * b + b * b
//   return result

// }
// var output = cheak()
// console.log(output)

// var date = new Date()
// console.log(date)
// var time = new Date().getHours() ; 
//  var min = new Date().getMinutes()  
//  var sec = new Date().getSeconds();
// console.log(time , min,sec)

//var user = prompt("enter your brithday")
// var brith = new Date(user)
// console.log(brith)

// var current = new Date(" 2001").getFullYear()
// var timee = new Date().getFullYear()
// console.log( Math.ceil (timee - current) )

var num = Math.ceil(Math.random()* 4)
// var num = prompt("cheak value")

switch (String (num)) {
  case '0':
    console.log("sunday")
    break;
    case '1':
      console.log("monday")
      break;
      case '2':
    console.log("tuesday")
    break;
  default:
    console.log('not found')
    break;
}

function input(data) {
  var a = 4
  var b = 5
  var multiple = a * 2 - 7 *  a * b * b * 2;
  return multiple;
}
// var result = input();
// console.log(Math.ceil(result))

// var cheak = prompt("try this")
// function h (cheak) {
//   console.log("HOPE YOU WELL")
    
//   }
// h()

// var array = +prompt("enter table")
// var table = +prompt("enter table lenght")
// for (var i = 1;i <= table; i++) {
//   console.log(table[i] )
// }

// var val ,val2 ,  opr , min ,mul
// function num1(v1) {
//   console.log(v1);
//   if(v1) { val=v1
//   }
// } 

// function num2(v2) {
//   console.log(v2);
//   if(v2){ val2=v2 
//   }  
// } 

// function operator(opr1 ) {
//   console.log(opr1 );
//   if(opr1 ){opr 
//     = opr1 
//       }
//       function operator1(op2) {
//        console.log(op2)
//        if(op2) {
//         min = op2
//        }
//       }
//       function operator2(opr3) {
//         console.log(opr3) 
         
//         if(opr3) {
//           mul = opr3
//         }
//         }
      
    
      

// function calculate() {
//   if(!val | !val2 | !opr | min | mul) {
//     console.log('error');
    
//   }else{var result = Number(val) + Number(val2) 
//     console.log(result)
//      var m = Number(val) * Number(val2)
//      console.log(m)
//     var mi = Number(val) - Number(val2) 
    
//      console.log( mi)
//   }
// }

// var nameVl = document.getElementById("namee-full")
// var emailVl = document.getElementById("email")
// var passwordVl = document.getElementById("password")


// function userVl() { var name = nameVl.value  ;
//     var emailS = emailVl.value ;
//      var passwordS = passwordVl.value  ;  
    
//     if (name.length < 1 ) { alert("please fill the info")
      
//     } 
//     else if (emailS.length < 1 ) { alert("please fill the info")
      
//     }
//     else if (passwordS.length < 6) { alert("your password less than six charecter")
      
//     }
//     else { 
//       console.log('name:  ' + name + '  email: ' + emailS + '  password: ' + passwordS);
//      nameVl.value =  "";
//     emailVl.value = "";
//      passwordVl.value= "";
      
//     };
    
//    };
// var heading = document.getElementById('hh');

    
  
// function clic() {
//   heading.innerHTML="wellcome";
//   heading.className = "test"

  
// };

// var y = document.getElementById("image1")
// function  mose() {
//   var m = y ;
//   m.src = './image/own pic.jpg' 

// }

// function out() {
//   y.src = './image/own_pic-removebg-preview.png' 
//   y.alt = 'nwepic'
// }
// var playgame = document.getElementById("playgame")
// var user = document.getElementById("user")
// var userdice = document.getElementById("userdice")
// var computer = document.getElementById("computer")
// function game() {
//   playgame.style.display = 'block';
// }

// function value (){
//   var r = Math.ceil(Math.random()*6)
//   return r ;
// }

// function opengame() { 
//  var boss = value()
//  var m = user.value;
//  m.value = "";
// console.log(boss , m)
// var updadevalue = './image/dice'+ m + '.png';
// userdice.src = updadevalue;
// userdice.style.display="block";
// var computerValue = './image/dice' + boss + '.png'
// computer.src = computerValue;
// computer.style.display = "block";
// }
// var ulEL = document.getElementById("ul")
// var seco = document.getElementById("secondel")

//  var targer = ulEL.removeChild(seco

//  );
// console.log(targer)
function delBtn() {
  
}
  


var user = document.getElementById("user-input");
var ulEl = document.getElementById("ul")
function addItem() {
  var li = document.createElement("li")
  var delBtn = document.createElement('button');
  var liText = document.createTextNode(user.value);
  var delText = document.createTextNode("delete itam")
  delBtn.appendChild(delText)
  delBtn.setAttribute("onclick" , '')
  ulEl.appendChild( 
    delBtn  )
  li.appendChild(liText)
  ulEl.appendChild(li);
  user.value = "";
}


function start() {
  for ( var i = 0;i<= 10 ; i++) {
    console.log(i)
  }

}

function restart() {
  for (var j = 10 -1 ;j=>0;j-- ) {
    console.log(j)
  }

}