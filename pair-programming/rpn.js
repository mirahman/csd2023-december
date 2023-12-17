var evalRPN = function(tokens) {
    var resultStack = [];
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].isNumeric()) {
            resultStack.push(tokens[i]);
        } else {
            var a = resultStack.pop();
            var b = resultStack.pop();
            if (tokens[i] === "+") {
                resultStack.push(parseInt(a) + parseInt(b));
            } else if (tokens[i] === "-") {
                resultStack.push(parseInt(b) - parseInt(a));
            } else if (tokens[i] === "*") {
                resultStack.push(parseInt(a) * parseInt(b));
            } else if (tokens[i] === "/") {
                resultStack.push(parseInt(parseInt(b) / parseInt(a)));
            }         
        }
    }

    if (resultStack.length > 1) {
        return "error";
    } else {
        return resultStack.pop();
    }
};

String.prototype.isNumeric = function () {
    return !isNaN(parseFloat(this)) && isFinite(this);
}