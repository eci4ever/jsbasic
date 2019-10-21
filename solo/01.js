function sum(x) {
    function add(y)
    {
        return x+y;
    }
    return add;
}

result = sum(5)(5);
console.log(result);