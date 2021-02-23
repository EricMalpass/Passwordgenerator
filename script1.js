/* the varibles get the values*/
var includePasswordLengthElement=document.getElementById ('includePasswordLength')
var includeUppercaseElement=document.getElementById ('includeUppercase')
var includeNumbersElement=document.getElementById ('includeNumbers')
var includeSpecialCharactersElement=document.getElementById ('includeSpecialCharacters')
var includeLowercaseElement=document.getElementById ('includeLowercase')
var passwordLength=document.getElementById ('passwordLength')

/* these variables set the character per the ASCII Character Set */ 
var uppercaseCode=arrCharChart (65, 90)
var lowercaseCode=arrCharChart (97, 122)
var numbersCode=arrCharChart (48, 57)
var specialCharacterCode=arrCharChart (33, 47).concat(arrCharChart (58,64)
).concat(arrCharChart(91, 96)
).concat(arrCharChart(123, 126))

/* these variable set the button and to display the password*/
var btn=document.getElementById('generate')
var passwordDisplay=document.getElementById('passwordDisplay')

/* this contols the event when the button is clicked*/ 
btn.addEventListener('click', function(e){
    e.preventDefault()
    var includePasswordLength=passwordLength.value   /* it is not reading these */
    var includeUppercase=includeUppercaseElement.checked
    var includeNumbers=includeNumbersElement.checked
    var includeSpecialCharacters=includeSpecialCharactersElement.checked
    var password=generatePassword (passwordLength.value, includeUppercaseElement.checked, includeNumbersElement.checked, includeSpecialCharactersElement.checked)
    passwordDisplay.innerText=password
})

/* this controls the character types and selects their values for the password*/
function generatePassword(passwordLength, includeNumbers, includeUppercase, includeSpecialCharacters) {
    let characters=lowercaseCode
    console.log (characters)
    if (includeUppercase) characters=characters.concat(uppercaseCode)
    console.log (characters=characters.concat(uppercaseCode))
    if (includeNumbers) characters=characters.concat(numbersCode)
    console.log (characters.concat(numbersCode))
    if (includeSpecialCharacters) characters=characters.concat(specialCharacterCode)
    console.log (characters.concat(specialCharacterCode))
    
    var passwordCharacters = []
    for (let i = 0; i < passwordLength; i++) {
        var newcharacter=characters[Math.floor(Math.random() * characters.length)] 
        passwordCharacters.push(String.fromCharCode(newcharacter)) 
    }
    return passwordCharacters.join('')
}
/* this pushes out the character types from the charter chart*/
function arrCharChart (low, high){
    var arr=[]
    for (let i=low; i<=high; i++){
        arr.push(i)
    }
    return arr
}