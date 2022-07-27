// export function checkWinner (arr = []) {
//     const winnerList = [
//         [1,2,3],
//         [1,4,7],
//         [1,5,9],
//         [2,5,8],
//         [3,6,9],
//         [3,5,7],
//         [4,5,6],
//         [7,8,9]
//     ]

//     let brr = [...arr]
//     brr.sort((a,b)=>{return (a-b)})

//     for(let i of winnerList){
//         if (JSON.stringify(i) === JSON.stringify(brr)) {
//             return true
//         }
//     }

//     return false
// }











function elementInArray (x , arr) {
    for (let i of arr) {
        if (i === x) {
            return true
        }
    }
    return false
}


export function checkWinner (aa, bb) {
    const winnerList = [
        [1,2,3],
        [1,4,7],
        [1,5,9],
        [2,5,8],
        [3,6,9],
        [3,5,7],
        [4,5,6],
        [7,8,9]
    ]
    let a = [...aa];
    a.sort((a,b) => {return (a-b)})
    for (let i of winnerList) {
        for (let j of i) {
            if (!elementInArray(j , a)) {
                break
            }
            else if (j === i[2]) {
                if (elementInArray(j , a)){
                    return "Player 1"
                }
            }
        }
    }
    
    let b = [...bb];
    b.sort((a,b) => {return a-b})
    for (let i of winnerList) {
        for (let j of i) {
            if (!elementInArray(j , b)) {
                break
            }
            else if (j === i[2]) {
                if (elementInArray(j , b)){
                    return "Player 2"
                }
            }
        }
    }
    
    return "None"

}

// console.log(checkWinner([1,2,34,5] , [1,7,9,6,33]));
