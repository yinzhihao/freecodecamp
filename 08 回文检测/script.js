const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultEle = document.getElementById("result");

const checkIsPalindrome = (text) => {
    let str = text;
    // 清除数字输入框的+-空格
    const regex = /[-,.()\s\/\\]|_/g;
    str = str.replace(regex, '');
    str = str.toLowerCase();
    console.log('处理后的字符：', str);
    if (str.length === 1) {
        return true;
    }
    let result = true;
    const len = str.length / 2;
    for (let i = 0; i < str.length / 2; i++) {
        /*
        ab      0 === 1 / 0 === 2 - 1 - 0 / i === len - 1 - i
        aba     0 === 2 / 0 === 3 - 1 - 0 / i === len - 1 - i
                1 === 1 / 1 === 3 - 1 - 1 / i === len - 1 - i
        abba    0 === 3 / 0 === 4 - 1 - 0
                1 === 2 / 1 === 4 - 1 - 1
        */
        if (str[i] !== str[str.length - 1 - i]) {
            result = false;
        }
    }
    return result;
}

checkButton.addEventListener('click',() => {
    const value = textInput.value;
    if (value) {
        const isPalindrome = checkIsPalindrome(value);
        if (isPalindrome) {
            console.log('YES');
            result.innerText = `${value} is a palindrome`;
        } else {
            console.log('NO');
            result.innerText = `${value} is not a palindrome`;
        }
    } else {
        alert("Please input a value");
    }
});