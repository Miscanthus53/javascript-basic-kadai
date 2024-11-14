const calculatePower = (num) => {
    return num * num;
}
let num = Math.ceil(Math.random() * 100);
console.log(num + "の二乗は" + calculatePower(num));
