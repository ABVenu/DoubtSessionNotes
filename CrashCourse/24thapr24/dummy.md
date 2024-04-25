<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #cont {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 10px;
      }
      #cont > div {
        border: 1px solid black;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <button id="ck">RUN</button>
    <label for="select">Sort By Population</label>
    <select name="" id="select">
      <option value="asc">ASC</option>
      <option value="desc">DSC</option>
    </select>

    <div id="cont"></div>
  </body>
  <script>
    // const school = {
    //   name: "XYZ School",
    //   establishYear: 1990,
    //   departments: {
    //     math: { teachers: 5, students: 150 },
    //     science: { teachers: 4, students: 120 },
    //     history: { teachers: 3, students: 100 },
    //     english: { teachers: 4, students: 130 },
    //   },
    //   courses: ["math", "science", "history", "english"],
    //   students: [
    //     {
    //       name: "Alice",
    //       className: "Grade 5",
    //       scores: { math: 95, science: 88, history: 85, english: 92 },
    //     },
    //     {
    //       name: "Bob",
    //       className: "Grade 4",
    //       scores: { math: 80, science: 78, history: 92, english: 85 },
    //     },
    //     {
    //       name: "Charlie",
    //       className: "Grade 5",
    //       scores: { math: 88, science: 90, history: 78, english: 88 },
    //     },
    //     {
    //       name: "Diana",
    //       className: "Grade 4",
    //       scores: { math: 92, science: 85, history: 88, english: 90 },
    //     },
    //   ],
    // };

    // function findTopStudent(obj, sub) {
    //   let max = obj.students[0];
    //   //console.log(max)
    //   obj.students.forEach((el, i) => {
    //     /// my target el.scores.math
    //     if (el.scores.math > max.scores.math) {
    //       max = el;
    //     }
    //   });
    //   return max;
    // }
    // console.log(findTopStudent(school, "math"));

    // function addNewDept(obj, deptName) {
    //   obj.departments = { ...obj.departments, ...deptName };
    //   return obj;
    // }
    // console.log(addNewDept(school, { hindi: { teachers: 4, students: 130 } }));
    // let cont = document.getElementById("cont");
    // document.getElementById("ck").addEventListener("click", function () {

    //   async function fetchData(url) {
    //     let res = await fetch(url);
    //     let data = await res.json();
    //     // console.log(data.data);
    //     displayData(data.data);
    //   }

    //   function displayData(arr) {
    //     cont.innerHTML = "";
    //     arr.map((el, i) => {
    //       let card = document.createElement("div");
    //       let h4 = document.createElement("h4");
    //       h4.textContent = `Name: ${el.country}`;
    //       let h5 = document.createElement("h5");
    //       h5.textContent = `Popultn:- ${el.population}`;
    //       card.append(h4, h5);
    //       cont.append(card);
    //     });
    //   }
    //  let sel = document.getElementById("select")
    //  let url =
    //     `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${sel.value}`;

    //   fetchData(url);
    // console.log(url)
    //   let num = [23, 12, 45, 65, 2, 8, 16, 20,12];
    //   // ... => breaks the array/object and gives single piece

    //   console.log(...num)
    //   // with inbuilt
    //  // console.log("min",Math.min(...num),"max",Math.max(...num))
    //   // without using inbuilt
    //   let min = num[0]; // this is min
    //   let max = num[0]  // this is assuming as max
    //   for (let i = 0; i < num.length; i++) {
    //     if (num[i] < min) {
    //       min = num[i];
    //     }

    //     if(num[i]>max){
    //         max = num[i]
    //     }
    //   }
    //console.log("min",min,"max",max)

    // Reverse Array Traversal
    //   let arr = ["venu", "anoop", "dheerendra", "pawan"];
    //   // ["nawap","ard....", "poona", "unev"]
    //   /// with inbuilt
    //   // reverse()==> array
    //   let rev = arr.reverse().map((el, i) => {
    //     // el each and every string in the array
    //     // convert string to array, then reverse, then again convert to string
    //     return el.split("").reverse().join("");
    //   });
    //   console.log(rev);
    // without inbuilt
    //   let rev = [];
    //   for (let i = arr.length - 1; i >= 0; i--) {
    //     let str = arr[i];
    //     let bag = "";
    //     for (let j = str.length - 1; j >= 0; j--) {
    //       bag = bag + str[j];
    //     }
    //     rev.push(bag);
    //   }
    //   console.log(rev.join(" "));
    //   let arr = [12, 23, 34, 56, 67, 89, 90];
    //   // 90, 89,67,34,23,12
    //   let bag = [];
    //   for (let i = arr.length - 1; i >= 0; i--) {
    //     bag.push(arr[i]);
    //   }
    //   console.log(bag.join(""));
    // print the characters at odd position in array
    // print the characters which are odd
    // print the characters which are odd in position but even
    // find atleast one prime number in the array ,
    //if not found, then print false
    //   let arr = [22, 4, 6,7, 9, 10, 12, 14 ];
    //   for (let i = 0; i < arr.length; i++) {
    //     let num = arr[i];
    //     let ans = checkPrime(num);
    //     if (ans) {
    //       console.log("Yes", arr[i]);
    //    return
    //     }
    //   }
    //   console.log("No")
    //   function checkPrime(num) {
    //     let count = 0;
    //     for (let i = 1; i <= num; i++) {
    //       if (num % i == 0) {
    //         count++;
    //       }
    //     }
    //     if (count == 2) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    //     let str = "capstudents"
    //     // print the characters at odd position
    //     // we know the string has index, which is position
    //    let bag = ""
    //     for(let i=0;i<str.length;i++){
    //         if(i%2==1){
    //             // console.log(str[i],i)
    //             bag = bag+str[i]+" ";
    //         }
    //     }
    //     console.log(bag)
    //   let n = 22;
    //   // Two
    //   //n= 13==> 3
    //   //n=14==> 4
    //   // n=15==>5
    //   // n=35==> 5
    //   let ans = n % 10;
    //   switch (ans) {
    //     case 1:
    //       console.log("One");
    //     case 2:
    //       console.log("Two");
    //   }
    // });
  </script>
</html>

