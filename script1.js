
var includepasswordLengthElement = document.getElementById ('includepasswordLength')
var includeuppercaseElement = document.getElementById ('includeuppercase')
var includelowercaseElement = document.getElementById ('includenumbers')
var includespecialCharactersElement = document.getElementById ('includespecialCharacters')


var uppercase_Code = arrayFromHighToLow (65, 90)
var lowercase_Code = arrayFromHighToLow (97, 122)
var numbers_Code = arrayFromHighToLow (48, 57)
var specialCharacter_Code = arrayFromHighToLow (33, 47).concat(arrayFromHighToLow (58,64)
).concat(arrayFromHighToLow(91, 96)
).concat(arrayFromHighToLow(123, 126))

var form = document.getElementById (passwordGeneratorForm)
var passwordDisplay = document.getElementById ('passwordDisplay')

form.addEventListener ('generate', e => {
    e.preventDefault()
    var includepasswordLength = passwordLength.value
    var includeuppercase = includeuppercaseElement.checked
    var includelowercase = includelowercaseElement.checked
    var includenumbers = includenumbersElement.checked
    var includeSpecialCharacters = includeSpecialCharactersElement.checked
    var password = generatePassword (passwordLength, includeUppercase, includeLowercase, IncludeNumbers, ImcludeSpecialCharacters)
    passwordDisplay.innerText = password
})



function generatePassword (passwordLength, includenumbers, includeuppercase, includelowercase, includespecialCharacters) {
    let charCodes = lowercase_Code
    if (includeuppercase) charCodes = charCodes.concat(uppercase_Code)
    if (includenumbers) charCodes = charCodes.concat(numbers_Code)
    if (includespecialCharacters) charCodes = charCodes.concat(specialCharacter_Code)
    
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