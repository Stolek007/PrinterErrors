function printerError(s) {
  let passingLetters = ("abcdefghijklm").split(""); // Divide the string into an array and by the required letters
  let a = s.length; // array's length
  let i = 0;
  let count = 0;

  while (i<a)
  {
    if (passingLetters.indexOf(s[i])===-1) {
      count++;
    }
    i++;
  }
  return (count + "/" + a);
}
