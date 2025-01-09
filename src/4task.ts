import { array } from "yargs";

type Merge<T, U> = T extends object
  ? U extends object
    ? { [K in keyof T | keyof U]: K extends keyof T ? (K extends keyof U ? Merge<T[K], U[K]> : T[K]) : K extends keyof U ? U[K] : never }
    : U
  : T;

function deepMerge<T extends object, U extends object>(obj1: T, obj2: U): Merge<T, U> {
    const result: any = { ...obj1 };

    for (const key of Object.keys(obj2) as Array<keyof U>) {
        if (typeof obj2[key] === 'object' && obj2[key] !== null && typeof result[key] === 'object' && result[key] !== null) {
            // Если оба значения - объекты, вызываем deepMerge рекурсивно
            result[key] = deepMerge(result[key], obj2[key]);
        } else {
            // Если одно из значений не объект, просто заменяем
            result[key] = obj2[key];
        }
    }

    return result;
}

// Пример использования:
const obj1 = { a: 1, b: { c: 2, d: 3 }, e: 4 };
const obj2 = { b: { d: 10, f: 5 }, e: null };

const result = deepMerge(obj1, obj2);
//console.log(result);
// Ожидаемый результат: { a: 1, b: { c: 2, d: 10, f: 5 }, e: null }


//2
interface TreeNode {
    id: number;
    name: string;
    children?: TreeNode[];
}

function flattenTree(tree: TreeNode[]): TreeNode[] {
    let result: TreeNode[] = [];

    for (let node of tree) {
        result.push({ id: node.id, name: node.name }); // Добавляем текущий элемент
        if (node.children && node.children.length > 0) {
            result = result.concat(flattenTree(node.children)); // Рекурсивно обрабатываем дочерние элементы
        }
    }

    return result;
}

const tree = [
    {
        id: 1,
        name: 'root',
        children: [
            { id: 2, name: 'child1', children: [] },
            { id: 3, name: 'child2', children: [
                { id: 4, name: 'child2-1', children: [] }
            ] }
        ]
    }
];

console.log(flattenTree(tree));