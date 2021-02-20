
var includepasswordLengthElement = document.getElementById ('includepasswordLength')
var includeuppercaseElement = document.getElementById ('includeuppercase')
var includenumbersElement= document.getElementById ('includenumbers')
var includeSpecialCharactersElement = document.getElementById ('includeSpecialCharacters')
var includelowercaseElement = document.getElementById ('includelowercase')

var passwordLength = document.getElementById ('passwordlength')
var uppercase_Code = arrayFromHighToLow (65, 90)
var lowercase_Code = arrayFromHighToLow (97, 122)
var numbers_Code = arrayFromHighToLow (48, 57)
var specialCharacter_Code = arrayFromHighToLow (33, 47).concat(arrayFromHighToLow (58,64)
).concat(arrayFromHighToLow(91, 96)
).concat(arrayFromHighToLow(123, 126))

var btn = document.getElementById('generate')
var passwordDisplay = document.getElementById('passwordDisplay')

btn.addEventListener('click', function(e){
    e.preventDefault()
    var includepasswordLength = passwordLength.value
    var includeuppercase = includeuppercaseElement.checked
    var includenumbers = includenumbersElement.checked
    var includeSpecialCharacters = includeSpecialCharactersElement.checked
    var password = generatePassword (passwordLength.value, includeuppercaseElement.checked, includenumbersElement.checked, includeSpecialCharactersElement.checked)
    passwordDisplay.innerText = password
})

function generatePassword(passwordLength, includenumbers, includeuppercase, includespecialCharacters) {
    let charCodes = lowercase_Code
    console.log ('hello')
    if (includeuppercase) charCodes = charCodes.concat(uppercase_Code)
    console.log ('hello2')
    if (includenumbers) charCodes = charCodes.concat(numbers_Code)
    console.log ('hello3')
    if (includespecialCharacters) charCodes = charCodes.concat(specialCharacter_Code)
    console.log ('hello4')
    
    var passwordCharacters = []
    for (let i = 0; i < passwordLength; i++) {
        var character = charCodes[Math.floor(Math.random() * passwordLength)]
        passwordCharacters.push (String.fromCharCode(character))
    }
    return passwordCharacters.join('')
}
function arrayFromHighToLow (low, high){
    var array =[]
    for (let i = low; i<= high; i++){
        array.push(i)
    }
    return array
}