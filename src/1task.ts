//1
// Определите интерфейс для объекта User с полями: id (number), name (string), и опциональным age (number).
interface User {
    id: number;
    name: string;
}

const user: User = { id: 1, name: "Alice" };


//2
// Реализуйте функцию, которая принимает массив строк и возвращает их длины.
function getLengths(arr: string[]): number[] {
    return arr.map((s) => s.length);
}

console.log(getLengths(['2', '3', '123']));


//3
// Реализуйте функцию для обертки значения в массив.
function wrapInArray<T>(value: T): T[] {
    return [value];
}

console.log(wrapInArray<string>('123'));


//4
// Используя `Partial`, сделайте все поля объекта User опциональными.
interface User1 {
    id: number;
    name: string;
    age: number;
}
const partialUser: Partial<User1> = { name: "Bob" };


//5
// Напишите функцию, которая принимает параметр, который может быть строкой или числом, и возвращает длину строки или число + 1.
function processValue(value: string | number): number {
    if (typeof value === 'number') {
        return value + 1;
    }
    else {
        return value.length;
    }
}

console.log(processValue('adwws'));
console.log(processValue(45));


//6
interface Item {
    id: number;
    name: string;
    category: string;
}

function filterByField<T extends keyof Item>(items: Item[], field: T, value: Item[T]): Item[] {
    return items.filter((item) => item[field] === value);
}

// Пример использования:
const items: Item[] = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" },
];

console.log(filterByField(items, "category", "Fruit"));


module.exports = getLengths;