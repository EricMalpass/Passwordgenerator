
var includePasswordLengthElement=document.getElementById ('includePasswordLength')
var includeUppercaseElement=document.getElementById ('includeUppercase')
var includeNumbersElement=document.getElementById ('includeNumbers')
var includeSpecialCharactersElement=document.getElementById ('includeSpecialCharacters')
var includeLowercaseElement=document.getElementById ('includeLowercase')

var passwordLength=document.getElementById ('passwordLength')
var uppercaseCode=arrFromHighToLow (65, 90)
var lowercaseCode=arrFromHighToLow (97, 122)
var numbersCode=arrFromHighToLow (48, 57)
var specialCharacterCode=arrFromHighToLow (33, 47).concat(arrFromHighToLow (58,64)
).concat(arrFromHighToLow(91, 96)
).concat(arrFromHighToLow(123, 126))

var btn=document.getElementById('generate')
var passwordDisplay=document.getElementById('passwordDisplay')

btn.addEventListener('click', function(e){
    e.preventDefault()
    var includePasswordLength=passwordLength.value
    var includeUppercase=includeUppercaseElement.checked
    var includeNumbers=includeNumbersElement.checked
    var includeSpecialCharacters=includeSpecialCharactersElement.checked
    var password=generatePassword (passwordLength.value, includeUppercaseElement.checked, includeNumbersElement.checked, includeSpecialCharactersElement.checked)
    passwordDisplay.innerText=password
})

function generatePassword(passwordLength, includeNumbers, includeUppercase, includeSpecialCharacters) {
    let charCodes=lowercase_Code
    console.log (charCodes)
    if (includeUppercase) charCodes=charCodes.concat(uppercaseCode)
    console.log ('hello2')
    if (includeNumbers) charCodes=charCodes.concat(numbersCode)
    console.log ('hello3')
    if (includeSpecialCharacters) charCodes=charCodes.concat(specialCharacterCode)
    console.log ('hello4')
    
    var passwordCharacters = []
    for (let i = 0; i < passwordLength; i++) {
        var character=charCodes[Math.floor(Math.random() * passwordLength)]
        passwordCharacters.push (String.fromCharCode(character))
    }
    return passwordCharacters.join('')
}
function arrFromHighToLow (low, high){
    var arr=[]
    for (let i=low; i<=high; i++){
        array.push(i)
    }
    return arr
}