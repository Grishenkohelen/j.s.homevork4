// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calcRect(a, b){
    return a*b

}
let result = calcRect(9, 2);
alert( result );

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calcRound(r){
    return Math.PI*Math.pow(r,2)
}
let result = calcRound(9);
alert(result);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calcCilindr(r,h){
    return 2*Math.PI*r*h
}
let result = calcCilindr(5,2);
alert(result);

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr= ['prais', 897, 567, true, false, 78, ];
function printArray (arr) {
    for (const item of arr) {
       document.write(arr)
    }
}
printArray(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
let text='Функция может вернуть результат, который будет передан в вызвавший её код.'
createP(text)
function createP(text){
    alert(`<p>${text}</p>`)
}
// не пойму как не выводить <p> в alert??????????????

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function creatT(text){
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
function  createT2(text,size){
    document.write(`<ul>`)
    for(let i=0; i<size; i++ ){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
let size=3;
let text='Мы можем передать внутрь функции любую информацию, используя параметры (также называемые аргументами функции).'

 document.write(createT2(text,size));

// Почему undefaind в конце выводит?????????????

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function printArray2(arr){
    document.write(`<ul>`)
    for(const item of arr){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
printArray2([true, false, 456, 789, 'Функции являются основными «строительными блоками» программы.'])


//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let printArray = [{id: 1, name: 'Vasia', age: 15}, {id: 2, name: 'Valia', age: 32}, {id: 3, name: 'Vlad', age: 23}];
function  printArrObjects(arr){

    for(const item of arr){
        document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`)
    }
}
printArrObjects(printArray)