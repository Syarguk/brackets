module.exports = function check(str, bracketsConfig) {
    let stack = [], openBr = [], closeBr = [];
    for (let br of bracketsConfig) {openBr.push(br[0]); closeBr.push(br[1])};
    for (let i = 0; i < str.length; i++) {
        if(openBr.includes(str[i]) && !closeBr.includes(str[i])) { stack.push(str[i]) };
        if(!openBr.includes(str[i]) && closeBr.includes(str[i])) {
            if(!stack[0]) { return false;
            } else {
                let posOpenBr = openBr.indexOf(stack[stack.length-1]);
                if(str[i] == bracketsConfig[posOpenBr][1]) { 
                    stack.pop();
                } else { return false};
            }
        }
        if(openBr.includes(str[i]) && closeBr.includes(str[i])) {
            if(!stack[0]) { stack.push(str[i]);
            } else {
                let posOpenBr2 = openBr.indexOf(stack[stack.length-1]);
                if(str[i] == bracketsConfig[posOpenBr2][1]) {
                    stack.pop();
                } else { stack.push(str[i]) };
            }
        }
    }
    return stack.length === 0;
}
