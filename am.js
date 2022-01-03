let name = "amjed", age = 26 , isMarried = false             

console.log(age)
console.log(name);

let color = 'red';
console.log(color);

const yesrOfbirth = 1925
console.log(yesrOfbirth);
age = 27
console.log(age)

/*للجمع +
للطرح -
للضرب*
للقسمة/
للمتبقي من القسمة%
للمقارنة بالتساوي ==
للمقارنة بعدم التساوي !=
الاكبر والاصغر ><
اكبر من او يساوي =>
اصغر من او يساوي =<
 إذا كانت متساوية من حيث القيمة و نوع البيانات ===
 إذا كانتا غير متساويتين من حيث القيمة ونوع البيانات !==
 let result = 1!=="1";//لا تساوي 1 "1

console.log(result);*/

let number2 = 5;
number2 ++;//Increment
number2--;//Decrement
console.log(number2);

let number = 2;
let result = number++ + 4; // postfix
console.log(result);
console.log(number);

let number1 = 2;
let result1 = ++number1 + 4; // prefix
console.log(result1);
console.log(number1);

let notRaining = true;//And : تكون النتيجة true في حالة واحدة فقط، وهي إذا كانت القيمتين left و right تساويان true
let notFoggy = true;
let isSunny = notRaining && notFoggy;
console.log(isSunny);

let notRaining1 = true;
let notFoggy1 = false;//Or : تكون النتيجة false في حالة واحدة فقط، وهي إذا كانت القيمتين left و right تساويان false
let isSunny1 = notRaining1 || notFoggy1;
console.log(isSunny1);

let isStudent = true;
console.log(!isStudent);//Not : يقوم بعكس قيمة right في حال كانت right تساوي true فستكون النتيجة هي false، والعكس صحيح.

let first = true, second = false;
let andResult = first && second; // false
let orResult = first || seocnd;  // true
let notResult = !first // false
console.log(andResult);
console.log(orResult);
console.log(notResult); 

let homeAddress = null
console.log(homeAddress);//: يدل هذا النوع على عدم وجود قيمة

let phoneNumber
console.log(phoneNumber)//يدل هذا النوع على أن القيمة غير معرفة.


let name1 = "Khalid"// يمثل هذا النوع البيانات النصيّة مثل characters والنصوص strings.
let age1 = 18;// يمثل هذا النوع البيانات الرقميّة مثل الأعداد الصحيحة integers والأعداد ذات النقطة العشرية double و float.
let isStudent1 = true// يمثل هذا النوع إحدى القيمتين إما true أو false
console.log (typeof name1);
console.log(typeof age1);
console.log(typeof isStudent1);

let language = 'c++';
let message= `welcime to ${language}`;
console.log(typeof message);
console.log(message);

let value = 5;
console.log(value*5);

console.log(value *'javascript');//NaN تعني ان المعادلة ليست رقم
let nano = null;
console.log(nano);
console.log(100%5);

let price = 5.75;
let message6 = `The price is ${price}`; 
console.log(message6);

console.log(`The sum is ${1 + 2}`);

let name4 = 'Nasser';//معرفة عدد الأحرف يمكن حساب عدد الأحرف في نص معين عن طريق استخدام خاصيّة length 
console.log(name4.length);//للتنبيه، يتم احتساب المسافات والرموز عند حساب طول النص

console.log('Saudi'.length);//بشكل مباشر


let password = '1234678';//هذا هو الرمز
if(password.length >= 8){//الامر if تعني اذا كان الباسوورد اكبر من 8 ف تجيه رسالة الرمز صحيح
   console.log("The password is accepted");
}

if(password.length <=8){//تستخدم if للتحقق من صحة شرط معين،
   console.log("the password is wrong") ;
}

let language1 = 'JavaScript';//يُعرف رقم الخانة والذي نضعه بين الأقواس المربعة بمفهوم Index.
console.log(language1[2]);/*يتم ترقيم الحروف في النص في لغة JavaScript من اليسار إلى اليمين 
بحيث يبدأ تعداد أول حرف من صفر، أي أن الحرف الأول J ستكون قيمة خانته صفر ورقم 
خانة الحرف الثاني a هي 1 وهكذا*/

let name5 = 'Mishal';
name5[0] = 'R';//لايمكنك تحديث قيمة عنصر معين داخل النص باستخدام Bracket Notation 
console.log(name5);

console.log ( 'Welcome to ' + 'JavaScript');/* لدمج النصوص نستعمل + و نلاحظ
 أننا وضعنا مسافة واحدة في آخر النص الأول، وتحديدًا بعد كلمة toوذلك لتلافي إلتصاق النصين ببعضهما
  البعض بشكل مباشر ودون وجود مسافة.
 */

  let language2 = 'JavaScript';
console.log('Welcome to ' + language2);

let title = 'Mr.';
title += 'Ali'; // title = title + 'Ali'; طريقة اخرى طويلة
console.log(title);

console.log('A\tB\tC\tD\tE');//إضافة عدة مسافات بين العناصر التي وضع بينها

console.log('A\nB\nC');//بوضع سطر جديد بعده


console.log('It\'s such an interesting language');/*لو لم نقم باستخدام الحرف \' واكتفينا بكتابة علامة 
التنصيص مباشرة داخل النص، فإننا سنحصل على رسالة خطأ لأن البرنامج سيُنهي النص بمجرد وصوله لعلامة التنصيص الثانية. */

console.log("Welcome to \"JavaScript\"");

console.log('The \\ character is called backslash.')

let cours = 'المصفوفات';
console.log(cours);

let colors = ["red", "green", "blue"];
console.log(colors);
console.log(colors.includes('green'));//اذا كان includes بعد تبديل القيمة مثل بلاك فستصبح خاطئ لان قيمة 1 قد استبدلت وخذه الامر للتاكد من وجوجد المطلوب
colors[1] = 'black';//قمنا في السطر الثاني بتحديث القيمة الموجودة في index رقم 1 وهي القيمة green وجعلناها blac; console.log(colors.length);//لاحظ أنه تم طباعة الرقم 3 وذلك لأن المصفوفة تحتوي على 3 قيم وهي red، green، blue.

console.log(colors.includes('black'));
console.log(colors[1]);//يبدأ العد من رقم 0 لو أردنا الوصول للقيمة red لطباعتها مثلًا، فسنجد أن رقم index الخاص بها هو 0 لذلك

let colors1 = ["red", "green", "blue"];
colors1.push('black');
console.log(colors1);

let colors2 = ["red", "green", "blue"];
colors2.pop();//pop()يقوم بحذف اخر عنصر
console.log(colors2);
let blueColor = colors.pop();//مكننا الاستفادة من ()pop أيضا بحفظ القيمة المحذوفة وتخزينها في متغير، وذلك بالطريقة التالية:
console.log(blueColor); 

let colors3 = ['red', 'green', 'blue'];//تُستخدم unshift مع مصفوفة ما بغرض إضافة عنصر جديد في بداية تلك المصفوفة
colors3.unshift('black');//unshift لإضافة اي شي في البداية
console.log(colors3);
colors3.unshift('white');
console.log(colors3);

let colors4 = ['red', 'green', 'blue'];//shift لحذف اول عنصر
colors4.shift();
console.log(colors4);

let colors5 = ['red', 'green', 'blue'];//نحتفظ بالعنصر المحذوف
const redColor = colors5.shift();
console.log(colors5);
console.log(redColor);

let color2 = 'black';//لمعرفة هل المعطيات عبارة عن مصقفوفة ام لا نضيف امر isArrya
let colors6 = ['red', 'green', 'blue'];
console.log(Array.isArray(color2))
console.log(Array.isArray(colors6))

const values = [[1,2,3], true, 'java'];
console.log(values);
console.log(values[0]);
console.log(values[0] [1]);//من اجل الحصول عبى رقم 2داخل مصفوفة اخرى نفتح [] مرة اخرى

const kps = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(kps [1] [2]);

let mas = "hello to my web";/**
 تستخدم split لتقسيم النصوص وعشان نقسمها على حسب الى نبيه
  نحط (" ")أي ما بين كل مسافة نص لوحدها وتطلع النتيجة ك مصفوفات
 */
let res = mas.split(' ');
console.log(res);

let mass = [ 'hello', 'to', 'my',  'web' ];//اذا ابي ادمجهم استعمل join
let resl = mass.join(' ');//يمديني اضيف ما بين المسافة ركز لاحظ
console.log(resl);

let masas = [ 'hello', 'to', 'my', 'web' ];
let resle = masas.join(' ');//يجب ان تكون التنصيص نفسه
console.log(resle);

let age2 = 13;
if (age2 < 12) {
console.log('Sorry, you are not old enough to play this game.');

}
else{
console.log("Welcome to the game");  /*تستخدم else بعد جملة if، وتقوم else بتنفيذ مجموعة 
من الأوامر فقط في حال عدم تحقق الشرط في الجملة if */
}

let number3 = -1;
if (number3 > 0) {
console.log('+');
}else if (number3 < 0) {
console.log('-');
}else {
console.log('Zero');/* سنقوم بكتابة
 برنامج يقوم بطباعة + في حال كانت قيمة المتغيّر number أكبر من 1 ويقوم بطباعة - في حال كان أصغر من 
ويقوم بطباعة zero كخيار بديل في حال لم يتحقق أي من الشرطين السابقين*/
}

const colors7 = ['red', 'black', 'green'];
let colornumber = 5
switch (colornumber) {
   case 1:// بدال نكتب if  كل مره نختصرها هنا
      console.log(colors7 [0]);
      break;
   case 2: 
      console.log(colors7[1]);
   break;
   case 3:
      console.log(colors7[2]);
      break;
   case 4:// اختصار
   case 5:
      console.log('blue');
      break;
   default:
      console.log('white');
      break;
}
for (let i = 5; i > 0; i--) {
   console.log(i);
}
/*يمثل begin في الغالب 
التعبير الذي
 يتم فيه إنشاء قيمة المتغير الأولية التي يقوم عليها الشرط ويتم تنفيذها مرة واحدة فقط قبل البدء في عملية التكرار. وتمثل 
condition الشرط الذي ستستمر عملية التكرار بناء عليه إن كانت نتيجته تساوي true أو تتوقف إن كانت نتيجته تساوي false 
وعندها تنتهي عملية التكرار ويتم التحقق من الشرط في كل مرة بعد تنفيذ جميع التعليمات البرمجيّة، وأخيرًا يمثل step
 التعبير الذي يتم تنفيذه في كل مرة بعد تنفيذ كتلة التعليمات البرمجيّة، ويستخدم في الغالب
 تحديث قيمة المتغير التي يقوم عليها الشرط حيث أنه في كل مرة يتم تحديث هذا المتغير تقترب
 نتيجة condition إلى أن تكون false. يوضح المثال التالي كيفية طباعة الأرقام من 5 إلى 1 باستخدام جملة for : */


//هيكل while (condition) {
  // code} تمثل condition الشرط الذي بناءً عليه تستمر عملية التكرار
  //أو تتوقف، وتكتب الأكواد البرمجيّة المراد تكرارها بين القوسين { }.

  let number4 = 5;
  while (number4 > 0) {
      console.log(number4);
       number4--;
  }

  for (let index = 1; index <= 10; index++) {
   if(index % 2 == 0){
       console.log("Next");
       continue;
   }
   console.log(index);
}/* في المثال السابق قمنا بتكرار
 مجموعة تعليمات برمجيّة لكل عدد
  من الأعداد من 1 إلى 10 وفي كل مرة يقوم البرنامج بالتحقق مما إذا كانت قيمة index تقبل القسمة على 2 فإن لم
 تكن تقبل القسمة ستتم طباعتها وإن كانت تقبل القسمة فستتم طباعة عبارة Next ثم استدعاء continue والتي ستقوم
  بالانتقال إلى العدد التالي
  في النطاق.*/

  for(let index = 1; index <= 10; index++){
   if(index % 2 == 0){
       console.log("Stop");
       break;
   }
   console.log(index);
}/*التحقق مما إذا كانت قيمة index تقبل القسمة على 2 فإن لم تقبل القسمة ستتم طباعة 
القيمة وإن كانت تقبل القسمة فستتم طباعة عبارة 
Stop ثم سيتم استدعاء break والتي سوف تقوم بإنهاء عملية التكرار بشكل كامل. */


const colors8=['red', 'blue', 'green', 'black']//اذا ما كنا نعرف عدد المصفوفات نحط الاسم وlength
for (let i= 0; i < colors8.length; i++) {
   console.log(colors8 [i]);
}


const masseg ='welcome my brthr';//اذا ابغاه يطبع الكلمة حرف حرف نستخدم of والي قبل ال of يخزن الهرجه كلها

for(let cari of masseg){
   console.log(cari);
}
const massee= 'tap';
let i=5;//do تطبع مره على الاقل لان 5 مساويه ف اذا خليتها زي while حقت اول ما رح يطبع لان الامر تحقق
do{
   console.log(massee);
   i++;
}while(i<5);

const masx = [1, 2, 3, 4, 0, 5, 6,];

for (let i = 0; i < masx.length; i++){
   if(masx[i]== 0){//اذا ابغاه يوقف عند رقم ويوقف اسوي كذا
   break;//اذا ابغاه يتجاوز الرقم احط Continue
   }
   console.log(masx [i]);
}


function printthis(){
   console.log(1);
   console.log(2);
   console.log('am');
}// ويتم تنفيذ الدالة عند استدعائها باسمها

printthis();

function pi(to){//اذا ابغى اغير الرقم في كل مره اسوي كذا
   for(let i=1; i <=to; i++){
      console.log(i);
   }
}
 pi(4);//يمدينا نغير بدال الرقم كتابة
 pi(3);

 function paa(nob, kup){
    let resulr = nob+ kup;
    return resulr;//ارجاع
 }// يمديني احط return قبل العملية وتلغيها
  
let vav= paa(2,6);
console.log(vav);//مافهمت الشرح
//يمديني امزج الدوال باني احط اسم الدالة واحط بين القوسين المربوطة فيه مثال pi(vav);
//ويمديني احط بدال vav احط المعادلة حقت paa


function printYourName(name) {
   return "Your name is " + name
}
let functionOutput = printYourName("Reem")
console.log(functionOutput)


function myFunc(number) {
   console.log(`${number} x ${number} = ` + number * number)
   return number * number
 }
 myFunc(2)

 function myFunc1(number) {
   console.log(number * number)
   return number 
 }
 myFunc1(2)



console.log(process.argv
   )




   if (process.env.NODE_ENV === "test") app.set("port", 3001);
   else app.set("port", process.env.PORT || 3000);


