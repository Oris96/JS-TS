//const getLengths1 = require("./1task");


//1
function filterByCategory1(
    items: { id: number; category: string }[], 
    category: string): 
        { id: number; category: string }[] {
            return items.filter(item => item.category === category);
}

const itemsToFilter = [
    { id: 1, category: "Fruit" },
    { id: 2, category: "Vegetable" },
    { id: 3, category: "Fruit" },
];

const responseHappyPath = [
    { id: 1, category: "Fruit" },
    { id: 3, category: "Fruit" },
];

const responseEmpty = new Array();

test('filterByCategory HappyPath', () => {
    expect(filterByCategory1(itemsToFilter, "Fruit")).toEqual(responseHappyPath);
});

test('filterByCategory Empty response', () => {
    expect(filterByCategory1(itemsToFilter, "Abrakadabra")).toEqual(responseEmpty);
});

test('filterByCategory array doesn\'t change', () => {
    const originalArray = [...responseHappyPath]; // Копируем массив
    filterByCategory1(responseHappyPath, "Fruit")
    expect(responseHappyPath).toEqual(originalArray); 
});


