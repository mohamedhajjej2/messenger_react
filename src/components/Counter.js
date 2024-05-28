function findNumbersWithSumFive() {
    let count = 0;
    for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 9; b++) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 0; d <= 9; d++) {
                    for (let e = 0; e <= 9; e++) {
                        if (a + b + c + d + e === 5) {
                            count++;
                        }
                    }
                }
            }
        }
    }
    return count;
}

const result = findNumbersWithSumFive();
console.log(`عدد الأعداد المكونة من خمسة أرقام ومجموعها يساوي 5 هو: ${result}`);