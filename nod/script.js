function f(inStr, k) {
    let answer = "";
    let numLetters = 0;
    let arr = [];

    for (let i = 0; i < inStr.length; i++) {
        if (inStr[i] === "1") {
            for (let m = i; numLetters < k && m < inStr.length; m++) {
                answer += inStr[m];
                if (inStr[m] === "1") {
                    numLetters++;
                }
            }
            if (answer.length >= k) {
                let j = 0;
                for (let n = 0; n < answer.length; n++) {
                    if (answer[n] === "1") {
                        j++;
                    }
                }
                if (j >= k) {
                    arr.push(answer);
                }
            }
            answer = "";
            numLetters = 0;
        }
    }
    let ans = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < ans.length) {
            ans = arr[i];
        }
    }
    return ans;
}

console.log(f("101001011101001", 3));
