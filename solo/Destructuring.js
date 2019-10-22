function magic(...nums)
{
    let sum = 0;
    nums.filter(n => n%2 == 0).map(el => sum += el);
    return sum;
}

console.log(magic(1,2,3,4,5,6));
// var obj = {id: 42, name: "Jack"};

// let {id = 10, age = 20} = obj;

// console.log(id); // 42
// console.log(age); // 20

// var o = {h:42, s:true};
// var {h:foo, s:bar} = o;

// console.log(foo);
