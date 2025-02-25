// Задача 101
// Имитация classList

// Напишите код, который имитирует работу classList.

const p = document.getElementById('101');
const list = p.classList;

console.log(list);

class MyElement {
    constructor() {
        this.classes = [];
    }

    add(className) {
        if(!this.classes.includes(className)) {
            this.classes.push(className);
        }
    }
    remove(className) {
        this.classes = this.classes.filter(cls => cls !== className);
    }

    getList() {
        return this.classes.join(' ');
    }
}

const myElement = new MyElement();

myElement.add('active');
myElement.add('hidden');
console.log(myElement.getList());

// Задача 102
// Перемещение блоков в место клика

// На странице есть блоки. Сделайте так, чтобы можно было кликнуть на блок, а затем кликнуть на свободное место экрана и центр этого блока перемещался бы в место клика.


// Задача 2
// Отделение троек цифр в числе

// Дано число, например такое:
// '12345678'

// Отделите пробелом каждую тройку чисел с конца. То есть у нас должно получится:
// '12 345 678'

let str = '1233338';
let gap = ' ';

const str_arr = str.split('');
const length = str_arr.length;

let period;

if (length % 3 === 0) {
    period = length / 3 - 1;
    
}
else {
    period = (length - (length%3)) / 3;
}

let items = 3;

for (let i = 0; i < period; i++) {
    console.log(items);
    str_arr.splice(length-items, 0, ' ');
    items += 3;
}

str = str_arr.join('');

console.log(str);


