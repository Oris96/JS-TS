function sum_4_vars1(a: any, b: any, c: any, d: any): number {
    let sum = 0;
    [a, b, c, d].forEach((x) => typeof(x) == 'number' ? sum += x : null)
    return sum;
}

console.log(sum_4_vars1(1, 2, '3', 1));

const obj12 = {
    vadim: 'Vadim',
    andrei: 'Andrei',
    loh: 'Loh'
}

function get_key_by_value1(obj: object, val: string)
{
    let result;
    for (const [key, value] of Object.entries(obj)) {
        value == val ? result = key : null
    }    
    return result;
}


console.log(get_key_by_value1(obj12, 'Loh'));