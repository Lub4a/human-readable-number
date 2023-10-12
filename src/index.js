module.exports = function toReadable (number) {

    let word = " ";
    function getWordWithOneNumber(number){

    if (number === 0){
       word = 'zero';
    }

    switch (number) {
        case 1:
            word = "one";
            break;
        case 2:
            word = "two";
            break;
        case 3:
            word = "three";
            break;
        case 4:
            word = "four";
            break;
        case 5:
            word = "five";
            break;
        case 6:
            word = "six";
            break;
        case 7:
            word = "seven";
            break;
        case 8:
            word = "eight";
            break;
        case 9:
            word = "nine";
            break;
        case 10:
            word = "ten";
            break;
        case 11:
            word = "eleven";
            break;
        case 12:
            word = "twelve";
            break;
        case 13:
            word = "thirteen";
            break;
        case 14:
            word = "fourteen";
            break;
        case 15:
            word = "fifteen";
            break;
        case 16:
            word = "sixteen";
            break;
        case 17:
            word = "seventeen";
            break;
        case 18:
            word = "eighteen";
            break;
        case 19:
            word = "nineteen";
            break;
        case 20:
            word = "twenty";
            break;
        case 30:
            word = "thirty";
            break;
        case 40:
            word = "forty";
            break;
        case 50:
            word = "fifty";
            break;
        case 60:
            word = "sixty";
            break;
        case 70:
            word = "seventy";
            break;
        case 80:
            word = "eighty";
            break;
        case 90:
            word = "ninety";
            break;
    }
    return word;
 }
 getWordWithOneNumber(20);


      if (number >= 100) {
          word +=toReadable( Math.floor(number / 100))+ " hundred";
          number %= 100;
      }
      if (number > 0) {
          if (word !== "") words += " and ";
          if (number < 20) words += numbersToWords[number];
          else {
              word += numbersToWords[Math.floor(number / 10) * 10];

              if (number % 10 > 0) {
                  word += "-" + numbersToWords[number % 10];
                }
            }
        }
    return word;
    }

