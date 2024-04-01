function swapCase(String) {
    let swappedString = "";
    for (let i = 0; i < String.length; i++)  {
        let chara = String[i];
        if (chara === chara.toUpperCase()) {
            swappedString += chara.toLowerCase();
        } else if (chara === chara.toLowerCase()) {
            swappedString += chara.toUpperCase();
        } else {
            swappedString += chara;
        }
    }
    return swappedString;
}

// Example usage:
let inputStr = "The Quick Brown Fox";
console.log(swapCase(inputStr));  // Output: tHE qUICK bROWN fOX
