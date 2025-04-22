const myset = new Set()
myset.add("a")
myset.add("a")
myset.add("b")
myset.add("c")
console.log(typeof myset);
console.log(myset instanceof Set);
for(let x of myset){
    console.log(x);
}
const values = myset.values()
for(let x of values){
    console.log(x);
}
console.log(values);
const keys = myset.keys()
console.log(keys);

const map = new Map()
map.set(100,200)
console.log(map);
console.table(
[map.get(100),map.size]
);
console.log();  
let person = {frist:"jnuaue"}
person =undefined
console.log(person);

