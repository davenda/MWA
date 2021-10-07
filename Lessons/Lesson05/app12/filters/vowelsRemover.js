angular
    .module('MyFirstApp')
    .filter('vowel', VowelRemover);
function VowelRemover(){
    return function(str, vowel){
        if(str && (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u')){
            let newStr = '';
            for(let ch of str){
                c = ch.toLocalLowerCase();
                if(c == vowel){
                    continue;
                }
                newStr += ch;
            }
            return newStr;
        }
        return str;
    }
}