const comb = (arr, depth) => {
    const res = new Set();
    if (depth === 0) res.add([]);
    else {
        for (const pc of comb(arr, depth - 1)) {
            for (const e of arr) {
                if (pc.indexOf(e) !== -1) break;
                    res.add([e, ...pc].sort((a, b) => a - b));
            }
        }
    }
    return res;
}

// https://ru.stackoverflow.com/questions/1297678/%D0%A0%D0%B0%D0%B7%D0%B1%D0%B8%D1%82%D1%8C-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2-%D0%BD%D0%B0-%D0%BF%D0%BE%D0%B4%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D1%8B-%D0%B2%D1%8B%D0%B2%D0%B5%D1%81%D1%82%D0%B8-%D0%B8%D1%85-%D1%81%D1%83%D0%BC%D0%BC%D1%83

const chooseOptimalDistance = (t, k, ls) => {
    const result = [...comb(ls, k)].map(e => [e, e.reduce((a, b) => a + b, 0)]);
    let max_value = -1;

    for(let i = 0; i < result.length; i++) {
        const current_sum = result[i][1];
        if(current_sum > max_value && current_sum <= t) {
            max_value = current_sum;
        }
    }
    
    return max_value === -1 ? null : max_value;
};

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseOptimalDistance(163, 3, [50])); // null
