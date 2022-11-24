window.onload = function ()
{
    document.querySelector("h1").style.color = 'green';
};

// single comment

/*
multi line comment
multi line comment
*/

// ctrl = / to comment and un comment



// window.alert("Hi from vsocde");

document.write("<h1>Header <span> 1 </span></h2>");

// document.createElement("")

console.log("HI Console");
console.error("Err");
console.table(["Ahmed", "Mo", "Ismail"]);

console.log("Hello from %cJS %cfile", "color: red; font-size: 40px", "color: blue; font-size: 30px");

// console is a web API

// ES6 ecma script version 6 (Standardization )

var myName = "Ahmed";
console.log("Hello " + myName);
console.log(`Hello ${myName}`); //baktek `` ذ 


// typeof

console.log(typeof("Ahmed"));
console.log(typeof "Ahmne");  //String
console.log(typeof 1000); // number
console.log(typeof 1000.54); // number
console.log(typeof [10, 15, 17]); // Array => Object
console.log(typeof ["a", "c", "b "]); // Array => Object
console.log(typeof {name: "Ahmed", age: 22, country: 'EG'}); //Object Key Value
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object


// variable is a container // for code resulabilty

var user = "Ali", age = 22;
console.log(user);
console.log(user);
console.log(age);
console.log(hello);

hello.innerHTML = "HI";

// loosely vs strongly typed languages
// js is loosely typed lang (Auto detect for data types )


// variable identifier
var $_us1_$ = "Ahm";
console.log($_us1_$);
//js is case sensitive

// js is camel case camelCase 

var x = 1;
var x = 2; // redeclare ok (no error)

let y = 1;
// let y = 1; (error no redeclaration)

const z = 1;
//const z = 1; (error no redeclaration)


console.log(xy); // undefined (can not access before initilization)
var xy  = 100;

// console.log(xx); // error (can not access before initilization)
// let xx  = 100;



// console.log(yy); // error (can not access before initilization)
// let yy  = 100;


// all variables with --var-- declaration is add to the window object accessed through window obj(cause variable scope drama ) 
var aabb = "AAA";

// variables with --let-- and --const-- are added to the global scope not the window scope and accessed directly
let n = "Global Scope";

console.log('Ah"m"');
console.log("Ah'm'");
console.log('Ah\'m\''); // escape char (\) backslash to inform the compiler that this char after \ does not mean any thing
console.log("Ahmed \Mo");
console.log("Ahmed \\Mo");
console.log("Ahmed \
Mohamed \
Ismail"); // (\)to escape the new line
console.log("Ahmed \nMohamed \nIsmail"); // (\n)to go to the new line (Line Continue)


let a = "I Love";
let b = "JS";
document.write(a + ' \'\' ' + b); // String concatenation
console.log(a, b);

console.log(`${a} '"/\\ ${100*2}
${b}`); // string interpolation using baktek and ES6


let title = "Ahmed";
let desc = "Ahmed Practice JS"

let markup = `
<div class="card">
    <div class="child">
        <h2>${title}</h2>
        <p> ${desc}</p>
    </div>
</div>
`;

document.write(markup); 

/////////////////////////////////////////////  Assignment  ///////////////////////////////////

let theTitle = "ElZero", theDesc = "ElZero Web School", dataToday = "22/11";
let markup2 = `
<div class="card">
    <div class="child">
        <h3>${theTitle}</h3>
        <p>${theDesc}</p>
        <span>${dataToday}</span>
    </div>
</div>
`;

document.write(markup2.repeat(4));
//////////////////////////////////////////////////////////////////////////


console.log(10 + 10);  // arthimatic
console.log(10 + "Ah"); // concat
console.log(10 - "Ah"); // NaN (not a number)
console.log(typeof NaN); // number
console.log(10 * -10);
console.log(10 * "Ah"); //NaN does not repeat
console.log(10 / 5);
console.log(13 / 5); // ouput a float point number if there is
console.log(2 ** 5); //  exponent 
console.log(13 % 5); // the remainant
let o = 1;
console.log(o++, ++o, o--, --o); // increment decrement (post - pre) 1 3 3 1

/////////////////////////////////////////////////////////

//Unary plus operator

console.log(+ 100); //Unary plus operator return the number if it is number 
console.log(+ "100"); // or the number as it is in the string 
console.log(+ "-100");
console.log(+ "Ahm"); // NaN if the string is not a num
console.log(+ "-100.55");
console.log(+ 0xff); // hexa decimal
console.log(+ true); //1
console.log(+ false); // 0
console.log(+ NaN); // 0




//Unary negation operator
console.log(- 100); //Unary negation operator return the negative number if it is number 
console.log(- "100"); // or the negative number in the string 
console.log(- "-100"); // +100
console.log(- "Ahm"); // NaN if the string is not a num
console.log(- "-100.55");
console.log(- 0xff); // -hexa decimal
console.log(- true); // -1
console.log(- false); // -0
console.log(- NaN); // -0

console.log(Number("100")); // using the constructor of the Number class to cast the string to number 

///////////////////////////////////////////////////

// type Coercion (Casting)

let r = "10";
let t = 2;
let q = true;

console.log(r + t); //concatenating
console.log(+r + t); //casting and summation
console.log(r - t); // casting  and minus
console.log("" - 2); // casting "" as 0 then result -2
console.log(false - true); // -1
console.log(t + q); //3
console.log(r + t + q); // casting the bool to string then concat result 102true 
console.log(+r + t + q); // cast to number then sum 

//////////////////////////////////////////////////////////

let g = 10;

g = g + 20;
g += 3;
g -= 50;
g /= 50;

console.log(g);


///////////////////////////////////////////////////

{
    let a = 10;
    let b = "20";
    let c = 80;
    
    console.log(++a + +b++ + +c++ - +a++); // 11 + 20 + 80 - 11 (100)
    console.log(++a + -b + +c++ - -a++ + +a);  // 13 - 21 + 81 + 13 + 14 (100)  
    console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 (100) 
}


{
    let d = "-100";
    let e = "20";         //  80 70 10 120 130 50 5 
    let f = 30;
    let g = true;

    console.log(-d * +e);  //2000
    console.log(++g * ++e + ++f + -d );  // 173
}


///////////////////////////////////////////////////////////////

// js store any number as double precision
// syntactic sugar (modefy syntax to be more readable) 

console.log(1000000); 
console.log(1_000_000);  // js ignore _ between numbers
console.log(1e6); // 1 and 6 zeros
console.log(10**6); 
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
///////////////////////////////////////////////


console.log((100).toString());
console.log(100..toString());

console.log(100.55555.toFixed(2)); //round and return string

console.log(parseInt("50")); // could return the number in the string
console.log(parseInt("50  Ahmed ")); // 50
console.log(parseInt("50.5  Ahmed ")); // 50

console.log(parseFloat("100.5 ahm")); // 100.5

console.log(Number.isInteger("100")); // false
console.log(Number.isInteger(100.50)); //false
console.log(Number.isInteger(100)); // true

console.log(Number.isNaN(100.50)); //false 
console.log(Number.isNaN("dd")); // false
console.log(Number.isNaN("Ahm"/100.50)); //true
///////////////////////////////////////////////////////////////////////////////

console.log(Math.round(99.2)); //99
console.log(Math.round(99.5)); //100

console.log(Math.ceil(99.2)); //100
console.log(Math.floor(99.9)); //99

console.log(Math.min(10, 55, 6556, 651, -100));
console.log(Math.max(10, 55, 6556, 651, -100));

console.log(Math.pow(2, 4));

console.log(Math.random()); // return a random num between 0 and 1
console.log(Math.trunc(99.9)); // return int part only
///////////////////////////////////////////////////////////////////////////

{
    //chalenge 3
    let a = 1_00;
    let b = 2_00.5;
    let c = 1e2;
    let d = 2.4;

    console.log(Math.round(Math.min(a, b, c, d)));

    console.log(Math.pow(a, Math.trunc(d))); // 10_000

    console.log(Math.trunc(d)); //2
    console.log(Number.parseInt(d)); //2
    console.log(Math.floor(d)); //2
    console.log(Math.round(d)); //2

    console.log((Math.trunc(b)/Math.ceil(d)).toFixed(2)); // 66.67  string
    console.log(Math.trunc(Math.trunc(b)/Math.ceil(d))); // 66  number

}

/////////////////////////////////////////////////////////
// number data type in console is displayed in blue color
// string data type in console is displayed in black color
/////////////////////////////////////////////////////////


let theName = "Ahmed"; //sequence data has index
let theList = [1, 2, 3, 4, 5];

console.log(theName);
console.log(theName[1]); // h
console.log(theName.charAt(1)); //h zero based indexing
console.log(theName.length); //5
console.log(theName[theName.length]); // undefined

let theNameWithSpace = "  Ahmed   "
console.log(theNameWithSpace.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

// chain methods
console.log(theNameWithSpace.trim().charAt(2).toUpperCase());

///////////////////////////////////////////////////////////

// IndexOf return the index of the first matching element
// lastIndexOf return the index of the last matching element

// IndexOf look forward
let k = "Ahmed@gmail@com"; 
console.log(k.indexOf("@")); // 5 return index of a string in a string if not exists return -1
console.log(k.indexOf("@", 6)); // 11 search start position

// lastIndexOf look backward and return the actual index
console.log(k.lastIndexOf("@")); // 11 return index of a string in a string if not exists return -1
console.log(k.lastIndexOf("@", 6)); // 5 search start position

console.log(k.slice(0)); // (the hole string)slice start included end not included start manadatory 
console.log(k.slice(0, 2)); // Ah 2 not included  

console.log(k.slice(0, -1)); // from the first position to the end and the end not included 
console.log(k.slice(-3)); // (com) start from the third position from the end and go forward till the end
console.log(k.slice(-3, -1)); //co

console.log(k.repeat(5)); // repeat and append at the end 
console.log(k.split()); //return an array contains one element that is the whole string 
console.log(k.split("")); // return an array contain each char as element 
console.log(k.split("@")); // separator  
console.log(k.split("@", 1)); // (Ahmed) separator and limt of split  


console.log(k.substring(5)); // from index 5 to the end
console.log(k.substring(5, 10)); // start, end not including the end 
console.log(k.substring(10, 5)); // if the end greater than the start it swaps them 
console.log(k.substring(-3, 10)); // negative num treated as zero 
console.log(k.substring(k.length-1)); // (m) from the last index to the end
console.log(k.substring(k.length-9, k.length-4));

// substr take the start and the number (length) of chars need to be returned 

console.log(k.substr(0));
console.log(k.substr(5));
console.log(k.substr(5, 7)); // from index 5 give me 7 chars
console.log(k.substr(5, 7)); //
console.log(k.substr(70)); // empty string
console.log(k.substr(-3)); // (com) from the third index from the end till the end
console.log(k.substr(-3, 2)); // (co) from the third index from the end give me 2 chars

console.log(k.includes("@")); // true return true or false
console.log(k.includes("@", 14)); // search start position 

console.log(k.startsWith("a")); // (false) t or f case sensitive 
console.log(k.startsWith("h", 1)); // (true) search start position

console.log(k.endsWith("m")); // true --- t or f for the entire length of the string 
console.log(k.endsWith("@", 7)); // does the first 7 chars end with @ ----  7 is length not index 
//////////////////////////////////////////////////////////////

// template literal `${}` ES6

// strings challenge 

{
    let a = "Elzero Web School";

    console.log(`${a.charAt(2).toUpperCase()}${a.slice(3, 6)}`); // Zero

    console.log(a.charAt(a.length-4).repeat(8).toUpperCase()); // H 8 times

    console.log(a.split(" ",1)); // array contain elzero

    console.log(`${a.substr(0, 6)} ${a.substr(-6, 6)}`); // Elzero School

    console.log(`${a.charAt(0).toLowerCase()}${a.slice(1, a.length-1).toUpperCase()}${a.charAt(a.length-1).toLowerCase()}`);


}


/////////////////////////////////////////////////////////////////////////////////////

// = assign  ////  == compare equality(use value only) //// === compare identical (use data type)

console.log(10 == "10"); //  true compare values only
console.log(10 != "10"); //  false compare values only
console.log(10 === "10"); //  false compare identicality (compare values and data type)
console.log(10 !== "10");  // true not identical 

console.log("Ahmed" === "Mohamed"); // use any operator to make the result true
console.log(typeof("Ahmed") === typeof("Mohamed")); // 

///////////////////////////////////////////////////////////////

// logical operators  (! && ||)
// | is pipeline 
console.log(true);
console.log(!true);
console.log(!(10 == "10")); //false

console.log(10 == "10" && 10 > 8); //true
console.log(10 == "10" || 10 < 8); //true

//////////////////////////////////////////////////////////////////////

let price = 100;
let discount = false;
let discountAmmount = 30;
let country = "Egypt";


if (discount === true)
{
    console.log(price -= discountAmmount);
}
else if (country === 'Egypt')
{
    console.log(price -= 40);
}
else 
{
console.log(price);
    
}

////////////////////////////////////////////////////

































