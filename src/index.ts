// 1. Создай переменные age1/title1/isReady1 с типами number/string/boolean
// @ts-ignore

let age1: number;
let title1: string;
let isReady1: boolean;

// 2. Опиши литеральный тип Mode, который может иметь значения "light или "dark"
// и переменную currentMode этого типа

type Mode = "light" | "dark";
let currentMode: Mode;
currentMode = "light";

// 3. Создай тип ID как объединение number | string и две переменные с разными значениями
type ID = string | number;
let idNumber: ID = 21;
let idString: ID = "String";

// 4. Создай переменные nums (массив чисел) и names (массив строк). Явно их типизируй
let nums: number[] = [1, 2, 3, 4];
let names: string[] = ['Vasja', 'John'];
// 5. Создай объект product и задай тип «на месте»: product имеет id (число), name (строка), price (число)
let product: { id: number, name: string, price: number; } = {id: 1, name: "Igor", price: 32323};
console.log(product)

// 6. Дай имя типу Person, у которого id число, name строка и создай переменную p этого типа
type Person = {
    id: number,
    name: string,
}

let p: Person = {
    id: 1,
    name: 'Igor'
}

console.log(p);

// 7. Напиши функцию sizeOf: принимает string | number → возвращает number (длина строки или само число)
function sizeOf(s: string | number): number {
    if (typeof s === "string") {
        return s.length;
    } else {
        return s;
    }
}

console.log(sizeOf('hah'));
console.log(sizeOf(32));
// 8. Опиши тип User: id — number, name — string, nickname — опционально (string)
type User = {
    id: number,
    name: string,
    nickname?: string // answer
};

let u1 = {
    id: 1,
    name: "Igor",
    nickname: 'terminator'
}
let u2 = {
    id: 2,
    name: "Igor",
}


// 9. Функция hello: принимает User → возвращает "Hi, Ann (@ann)" или "Hi, Ann" (если нет nickname). Реализуй ее

function hello(u: User) {
    if (u.nickname !== undefined) {
        console.log(`Hi, ${u.name} (@${u.nickname})`);
    } else {
        console.log(`Hi, ${u.name}`);
    }
}

hello(u1);
hello(u2);


// 10. Типизируй стрелочную функцию lower: принимает string → возвращает string
let lower = (s: string): string => {
    return s;
}
// 11. Опиши тип функции Calc: принимает 2 аргумента number (a, b), возвращает number
type Calc = (a: number, b: number) => number;

// 12. Реализуй 2 функции: add (складывает 2 числа) и mul (перемножает) с типом Calc
const add: Calc = (a, b) => a + b;
const mul: Calc = (a, b) => a * b;

// 13. Напиши функцию log: принимает message (строка), ничего не возвращает (void). Просто логирует message в консоль
function log(message: string): void {
    console.log(message);
}

// 14. Напиши и типизируй функцию firstEven: принимает массив чисел
// и возвращает первое четное число или undefined (если в массиве нет четных)
function firstEven(nums: number[]): number | undefined {
    return nums.find((n) => n % 2 === 0);
}

console.log(firstEven([1, 2, 3, 4]));
console.log(firstEven([1, 3, 5]));
// 15. Опиши тип Profile2 (id число, name: строка, age опциональное поле число);
// напиши функцию ageLabel(p:Profile2):string (с проверкой undefined)

type Profile2 = {
    id: number,
    name: string,
    age?: number
}

function ageLabel(p: Profile2): string {
    return p.age !== undefined ? p.age.toString() : "undefined";
}

let p2 = {
    id: 1,
    name: 'Igor',
    age: 32,
}

console.log(ageLabel(p2));

// 16. Напиши и типизируй функцию createPagination. Принимает 3 аргумента page число, pageSize число
// sortBy строка со значением по умолчанию 'createdAt'.
// Функция возвращает объект
// { page: number;
//   pageSize: number,
//   sortBy: string }

function createPagination(page: number, pageSize: number, sortBy: string = 'createdAt'): {
    page: number,
    pageSize: number,
    sortBy: string
} {
    return {
        page,
        pageSize,
        sortBy
    }
}

// 17. Создай литеральный тип Result и функцию isOk которая принимает Result
// и возвращает boolean (true если "ok" и false если "fail")

type Result = "ok" | "fail";

function isOk(r: Result): boolean {
    return r === "ok";
}

console.log(isOk("fail"));
console.log(isOk("ok"));