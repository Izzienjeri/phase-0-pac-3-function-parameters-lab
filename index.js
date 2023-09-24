let name = "Aki"
function introduction (name) {
    return `Hi, my name is ${name}.`;
}
let language = "Ember.js"
function introductionWithLanguage (name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
} 
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
 // console.log (introductionWithLanguageOptional ('Gracie')); 


