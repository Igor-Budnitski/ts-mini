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
let nums: number[];
let names: string[];
// 5. Создай объект product и задай тип «на месте»: product имеет id (число), name (строка), price (число)

// 6. Дай имя типу Person, у которого id число, name строка и создай переменную p этого типа

// 7. Напиши функцию sizeOf: принимает string | number → возвращает number (длина строки или само число)

// 8. Опиши тип User: id — number, name — string, nickname — опционально (string)

// 9. Функция hello: принимает User → возвращает "Hi, Ann (@ann)" или "Hi, Ann" (если нет nickname). Реализуй ее

// 10. Типизируй стрелочную функцию lower: принимает string → возвращает string

// 11. Опиши тип функции Calc: принимает 2 аргумента number (a, b), возвращает number

// 12. Реализуй 2 функции: add (складывает 2 числа) и mul (перемножает) с типом Calc

// 13. Напиши функцию log: принимает message (строка), ничего не возвращает (void). Просто логирует message в консоль

// 14. Напиши и типизируй функцию firstEven: принимает массив чисел
// и возвращает первое четное число или undefined (если в массиве нет четных)

// 15. Опиши тип Profile2 (id число, name: строка, age опциональное поле число);
// напиши функцию ageLabel(p:Profile2):string (с проверкой undefined)

// 16. Напиши и типизируй функцию createPagination. Принимает 3 аргумента page число, pageSize число
// sortBy строка со значением по умолчанию 'createdAt'.
// Функция возвращает объект
// { page: number;
//   pageSize: number,
//   sortBy: string }

// 17. Создай литеральный тип Result и функцию isOk которая принимает Result
// и возвращает boolean (true если "ok" и false если "fail")