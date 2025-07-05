//1
function isPalindrome(word: string): boolean {
    word = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let wordArray = word.split('');
    let reversedArray = [ ...wordArray].reverse();

    return reversedArray.join("") === word;
}

console.log(isPalindrome("level")); // Ожидаемый результат: true
console.log(isPalindrome("hello")); // Ожидаемый результат: false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Ожидаемый результат: true


//2
function getUniqueValues<T>(arr1: T[], arr2: T[]): T[] {
    return arr1
        .filter((item) => !arr2.includes(item))
        .concat(arr2.filter((item) => !arr1.includes(item)));
}

console.log(getUniqueValues([1, 2, 3], [2, 3, 4])); // Ожидаемый результат: [1, 4]
console.log(getUniqueValues(['a', 'b', 'c'], ['b', 'c', 'd'])); // Ожидаемый результат: ['a', 'd']


//3
function groupBy1<T>(arr: T[], category: keyof T): Record<string, T[]> {
    return arr.reduce((acc, item) => {
        const key = item[category] as string;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {} as Record<string, T[]>);
}

const items3 = [
    { id: 1, category: "Fruit", name: "Apple" },
    { id: 2, category: "Vegetable", name: "Carrot" },
    { id: 3, category: "Fruit", name: "Banana" },
];

console.log(groupBy1(items, "category"));
/* Ожидаемый результат:
{
    Fruit: [
        { id: 1, category: "Fruit", name: "Apple" },
        { id: 3, category: "Fruit", name: "Banana" },
    ],
    Vegetable: [
        { id: 2, category: "Vegetable", name: "Carrot" },
    ],
}
*/