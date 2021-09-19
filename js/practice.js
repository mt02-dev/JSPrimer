const bookTitle = "JavaScript Primer";


/*
同時定義可能
初期値設定なしの宣言不可
const 再代入できない変数を定義　※定数ではない！　: const bookTitle = "sample";
bookTitle = "sample2";  ←できない
*/

const BookTitle = "JavaScript Primer", bookCategory = "プログラミング";


let book = "JavaScript Primer";
let bookTitles; //初期値無し設定可能 ←undefinedという値が自動設定
console.log(bookTitles); // return undefined

//let, const は同じ変数名の定義不可、varは可能
//JavaScriptではオブジェクトもconstで宣言可能、
//オブジェクトの値は初期化した後も変更可能

const obj = {
    key: "値"
}

obj.key = "代入できる";
console.log(obj.key);

//値の評価とは、入力した値を評価してその結果を返すこと
 //プリミティブ型(基本型):真偽値、数値など
//オブジェクト型(複合型):複数のプリミティブ型の値、オブジェクトからなる集合

console.log(typeof null);

//Numeric Separetor
//数値リテラル内の区切り文字として"_"が利用できる
//変数の先頭、末尾には追加できない
const a = 1_000_000_000_000;
console.log(a); //return 1000000000000;

//_123; 変数として扱われる
//SyntaxError 3._14

//テンプレートリテラル 利用する際はバッククォート
const str = "practice";
console.log(`これは${str}です`);

//リテラルは変数名として利用できない予約語のようなものであるため、
//再定義しようとすると構文エラーになる

//var null ; => SyntaxError

//NaNはどのNaNとも一致しない特性
console.log(NaN === NaN); // false
console.log(typeof NaN); //Number
console.log(Number.isNaN(NaN)); //true


//nullとundefinedの比較は常にtrueを返す
console.log(null == undefined); // true

console.log(1 !== "1"); //true
console.log(1 != "1"); //false

function addPrefix(text, prefix) {
    //prefix nullまたはundefinedの時、デフォルト値を返す
    const pre = prefix ?? "defalut";
    return pre + text;
}

console.log(addPrefix("sample1"));
console.log(addPrefix("sample2", ""));
console.log(addPrefix("sample3", false));

/*
    falsyな値
    false
    NaN
    ""
    undefined
    0
    0n
    null
*/

function add(a, b) {
    return a + b;

}

const total = add(2, 4);

console.log(total);

//関数式に名前つけること可能（呼び出す際　関数名では呼び出せない）
const factorical = function innerFact(n) {
    //スコープの中では関数名で呼び出せる
    let array = [];
    let count = 3;
    if (count === 0) {
        return array;
    }


}

//console.log(innerFact(a)); ←できない
console.log(factorical("abc"));

const array = [3, 4, 5];

const double = array.map(function (value) {

    return value * 2;
})

console.log(double[2]);

const printNum = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printNum(double);

const methodObj = {
    method1: function () {
        console.log("method1");
    },
    method2: function () {
        console.log("method2");
    },
    method3: () => {
        console.log("ArrowVer method");
    }

}

methodObj.method1();
methodObj.method2();
methodObj.method3();

const newMethod = {
    method() {
        return console.log("a");
    },
    method2() {
        return console.log("b");
    }
};


//optional changing演算子
const optionalChangeing = {
    obj: {
        innerObj: "innerObj in obj"
    }
};

console.log(optionalChangeing?.obj?.innerObj);
console.log(optionalChangeing?.obj2?.innerObj);

console.log(undefined?.obj?.inner);


const printWidgetTitle = (widget) => {
    const title = widget?.window?.title ?? "NonTitle";
    console.log(`ウィジェットのタイトル${title}です`);
};

printWidgetTitle({
    window : {
        title : "js practice"
    }
}
);

const str2 = "test";
console.log(String(str2));

const obje = {};
const key1 = {keyA : "value1"};
const key2 = {keyB : "value2"};
obje[key1] = "a";
obje[key2] = "b";
console.log(obje);

const objec = {};
const keyObject1 = { a: 1 };
const keyObject2 = { b: 2 };
// どちらも同じプロパティ名（"[object Object]"）に代入している
objec[keyObject1] = "1";
objec[keyObject2] = "2";
console.log(objec); //  { "[object Object]": "2" }

//prototypeオブジェクト
//全てのオブジェクト作成時に自動的に追加される特殊なオブジェクト

const obj6= Object.create(Object.prototype);

//Object.prototype はすべてのオブジェクトの親となるオブジェクト

//配列かどうかを調べる場合
const obj1 = {};
const array1 = [];

console.log(Array.isArray(obj1)); //false
console.log(Array.isArray(array1)); //true
console.log(typeof array1); //object

const array3 = ["A", "B", "C", "D", "E"];
//Array#slice start から　endまで指定した範囲で取得可能
//endは含まれない　=> ["B", "C", "D"] また　endは省略可能
console.log(array3.slice(1,4));
console.log(array3.slice(3));

//array 要素を末尾に追加
array3.push("F");
console.log(array3);

//"S"を配列の先頭に追加
array3.unshift("S");
//配列の先頭を削除
array3.shift();

//配列の結合
const conArr = ["X", "Y", "Z"];

const newArray = array3.concat(conArr);
console.log(newArray);

//正規表現の評価のタイミングの違い
/*
正規表現の方法は２種
正規表現リテラルはソースコードのロード時に正規表現のパターンが評価される
mainを呼び出さなくても構文エラー発生

*/

//正規表現リテラル
const regex = /a+/;

//RegExpオブジェクト表現
const regexp = new RegExp("a+");

const strs = "ABC あいう DE えお";
const alphabetsPattern = /[a-zA-Z]+/g;
const matchesIterator = strs.matchAll(alphabetsPattern);
for(const match of matchesIterator){
    console.log(`match: "${match[0]}", index: ${match.index}, input: "${match.input}"`);

}

//Arrow Function におけるthisの参照
const Prefixer = {
    prefix : "pre",
    prefixArray(strings){
        return strings.map((str) => {
            return this.prefix + "-" + str;
        });
    }
}

const prefixedStrings = Prefixer.prefixArray(["a","b","c"]);
console.log(prefixedStrings);

class Counter {
    constructor(){
        this.count = 0;
    }

    increment(){
        this.count++;
    }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();

for(let i = 0; i < 5; i++){
    counterB.increment();
}

console.log(counterA.count);
console.log(counterB.count);

const numberregExp = /d+/;
numberregExp.test("23");


const value = undefined;

if(value === null || value === undefined){
    console.log("valueがnullまたはundefinedである場合の処理");

}

if(value == null){
    console.log("valueがnullまたはundefined");
}

let x;
let type = String(x);
console.log(typeof type);

function sum(...values){
    return values.reduce((total, value) => {
        if(typeof value !== "number"){
            throw new Error(`${value}はNumber型ではありません`);
        }
        return total + Number(value);
    }, 0);
}


