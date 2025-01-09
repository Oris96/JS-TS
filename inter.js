function sum_4_vars(a, b, c, d) {
    let sum = 0;
    [a, b, c, d].forEach((x) => typeof(x) == 'number' ? sum += x : null)
    return sum
}

console.log(sum_4_vars(1, 2, '3', 1));

const obj1 = {
    vadim: 'Vadim',
    andrei: 'Andrei',
    loh: 'Loh'
}

function get_key_by_value(obj, val)
{
    let result;
    for (const [key, value] of Object.entries(obj)) {
        value == val ? result = key : null
    }    
    return result;
}


console.log(get_key_by_value(obj1, 'Loh'));