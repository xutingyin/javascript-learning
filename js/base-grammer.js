'use strict'
// // 如果浏览器支持strict模式，
// 下面的代码将报ReferenceError错误:

// JavaScript 语法规则：
/*
* 1、JavaScript 严格区分大小写
* 2、JavaScript 每一句以英文分号结尾
*
*/
 
console.log("Hello,JavaScript!");
// 数据类型	Number|字符串|布尔值
//-----------------Number----------------------------
// 不区分整数和浮点数，数值类型统一用Number表示
console.log(122);//整数
console.log(0.75);//浮点数
console.log(-122);//负整数
console.log(0.1234e3);//科学计数表示，等价于123.4
// 还有一个特殊的Number类型，NaN,它和它自己都不相等，判断此类型，只能使用isNaN(NaN)
console.log(NaN == NaN);//false
console.log(isNaN(NaN));

//-------------字符串---------------------------------
// 使用"" 或者 '' 括起来的任何字符
console.log("Hello");
console.log('Hi');

 // -------------布尔类型-----------------------------
// 布尔类型只有true|false 两种类型
console.log(true);
console.log(false);
console.log(2 > 0);
console.log(2 < 0);

//---------------比较运算符--------------------------
// > , < , == , ===,<=,>=
console.log(10==10);
console.log(true===true);
//== 比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
//===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。


// 浮点运算的比较
console.log(1 / 3 === (1 - 2 / 3));//false,因为浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：
console.log(Math.abs(1 / 3 - (1 - 2 / 3)) < 0.00000000001); // true

//---------------特殊数据类型------------------
//null、undefined
var array = [1,2,'hello',null,9.9];
console.log(array[2]);//hello
console.log(array[3]);//null
console.log(array[5]);//undefined,array数组有5个元素，但是在JavaScript中，数组下标是从0,开始的，所以array[5]就不存在，所以返回undefined

// ----------------对象-----------------------
var person={
	name:"susan",
	age:20,
	sex:'female'
}
console.log("姓名：" + person.name);
console.log("年龄：" + person.age);
console.log("性别：" + person.sex);
// ---------------变量-----------------------
// 2、使用var 申明变量，如果没有使用var 申明变量，则该变量为全局变量
// 1、变量是大小写英文字母、数字、$、_等组合，且不能以数字开头。也不能使用JavaScript的关键字，例如if、var、while等。


//-----------strict模式----------------------
//启用strict模式的方法是在JavaScript代码的第一行写上： 'use strict'
// 不用var申明的变量会被视为全局变量，为了避免这一缺陷，所有的JavaScript代码都应该使用strict模式。

