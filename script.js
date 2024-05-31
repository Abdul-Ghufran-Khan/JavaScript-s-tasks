var list = [1, 3, 7, 5, 8, 6, 10, 20, 16, 15]
document.write(`Input:  [${list}]<br/>`)
for (let i = 0; i < list.length; i++) {
    if (list[i] % 5 == 0 && list[i] % 3 == 0) {
       list[i] = "ThreeFive"
    }
    else if (list[i] % 5 == 0) {
        list[i] = "Five"
    }
    else if (list[i] % 3 == 0) {
        list[i] = "Three"
    }
}
document.write(`Output:  [${list}]<br/>`)