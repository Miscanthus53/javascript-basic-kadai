// calc.jsファイルに、以下のように条件分岐するプログラムをif文で記述してください。

// 変数numが3の倍数の場合： “3の倍数です”
// 変数numが5の倍数の場合： “5の倍数です”
// 変数numが3と5の倍数の場合： “3と5の倍数です”
// それ以外の場合： 変数numを出力する
// 変数numに1以上の正の数を代入して、プログラム内で使用してください。

// 例：let num = 15;

let num = Math.ceil(Math.random() * 100);

if (num % 3 === 0 && num % 5=== 0) {
    console.log(num + 'は3と5の倍数です')
}
else if (num % 3 === 0) {
    console.log(num + 'は3の倍数です');
}
else if (num % 5 === 0) {
    console.log(num + 'は5の倍数です');
}
else {
    console.log(num);
}