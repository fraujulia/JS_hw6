function enterText() {
  const newArr = [];
  let text;
  while (true) {
    text = prompt("Enter text");

    if (text === 'break'){
      break;
    }

    if (text === null || text === '') {
      newArr.pop();
    } else {
      newArr.push(text);
    }
  }
  console.log(newArr)
}

enterText();



function multiplication() {
const arrNumb = [];
let newArrNumb = [];

  for (let i = 1; i <= 100; i++) {
    arrNumb.push(i);
  }
  console.log(arrNumb);
  newArrNumb = arrNumb.map(function (item, index, array) {
    return item * 3;
  })
  
  console.log(newArrNumb);
}

multiplication()


