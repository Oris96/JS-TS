//2
function processArray(arr: number[]): number[] {
    let setWithoutDuplicates = new Set(arr);
    let arrWithoutDuplicates = Array.from(setWithoutDuplicates)
    return arrWithoutDuplicates.sort((a, b) => a - b);
}

console.log(processArray([4, 2, 2, 8, 4])); // Ожидаемый результат: [2, 4, 8]


//3
function generateTestData<T extends Record<string, any>>(count: number, template: T): T[] {
    const result: T[] = [];

    for (let i = 0; i < count; i++) {
        const prototype = { ...template }; // Создаем поверхностную копию объекта template

        for (const [key, value] of Object.entries(prototype)) {
            if (key === 'id') {
                (prototype as any)[key] = i + 1; // Уникальный id
            }
            else if (typeof value === 'string') {
                (prototype as any)[key] = `Name${i + 1}`; // Уникальное имя
            }
            else if (typeof value === 'number') {
                (prototype as any)[key] = Math.floor(Math.random() * 100); // Уникальное случайное число
            }
        }

        result.push(prototype);
    }

    return result;
}

const template = { id: 0, name: "", age: 0 };
const testData = generateTestData(3, template);

console.log(testData);
/*
Ожидаемый результат:
[
    { id: 1, name: "Name1", age: 23 },
    { id: 2, name: "Name2", age: 45 },
    { id: 3, name: "Name3", age: 30 }
]
*/


//4
interface User1 {
    id: number;
    name: string;
    email: string;
}

function validateData<T extends Record<string, unknown>>(data: any, schema: T): boolean {
    const schemaKeys = Object.keys(schema);

    return schemaKeys.every((key) => {
        // Проверяем, есть ли ключ в объекте данных
        if (!(key in data)) {
            return false;
        }

        // Проверяем соответствие типов значений
        const schemaType = typeof schema[key as keyof T];
        const dataType = typeof data[key];
        return schemaType === dataType;
    });
}

console.log(validateData({ id: 1, name: "Alice", email: "alice@example.com" }, { id: 0, name: "", email: "" }));
// Ожидаемый результат: true

console.log(validateData({ id: 1, name: "Alice" }, { id: 0, name: "", email: "" }));
// Ожидаемый результат: false

console.log(validateData({ id: 1, name: "Alice", email: "alice@example.com", asd: "asdwq" }, { id: 0, name: "", email: "" }));
// Ожидаемый результат: true


//5
function getIntersection<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter((item) => arr2.includes(item));
}

console.log(getIntersection([1, 2, 3], [2, 3, 4])); // Ожидаемый результат: [2, 3]
console.log(getIntersection(['a', 'b', 'c'], ['b', 'c', 'd'])); // Ожидаемый результат: ['b', 'c']
console.log(getIntersection([1, 2, 3], [4, 5, 6])); // Ожидаемый результат: []


//6
function removeDuplicates(arr: any[], category: string): Array<any> {
    let result = new Array();

    for (const item of arr) {
        if (!result.some((i) => i[category] === item[category])) {
            result.push(item);
        }
    }

    return result;
}

const items1 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' },
];

console.log(removeDuplicates(items1, 'id'));
// Ожидаемый результат: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]


//7
function sortByField<T>(arr: T[], category: keyof T): T[] {

    return [...arr].sort((a, b) => {
        const aValue = a[category];
        const bValue = b[category];
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
    });
}

const items2 = [
    { id: 3, name: 'Charlie' },
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

console.log(sortByField(items2, 'id'));
// Ожидаемый результат: [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' }
// ]