function randomtext(length) {
   var result           = "";
   var characters = "!\"#$%&'()*+,-./0123456789:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
   for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}

// // var element = document.getElementById("title");
// // element = "New Heading";

// console.log(makeid(5));
// console.log(42);

// function randomtext() {
//     var randomtxt=[
//         'Beautiful People are not always Good but Good people are always Beautiful!',
//         '50% + 50% off <a href="/offers.html">check here</a>',
//         'New Arrivals <a href="/new.html">Click here<img src="http://mastimix.in/pictures/icon-new.gif"/></a>',
//         'We changed our terms and conditions > <a href="my link"> check </a>'
//     ];
//     return randomtxt[Math.floor((Math.random() * 3.99))];
// }