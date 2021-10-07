angular
    .module('MyFirstApp')
    .filter('order', NumberOrder);
function NumberOrder(){
    return function(num){
        if(!isNaN(num) && num){
            const digit = num % 10;
            let suffix = 'th';
            switch(digit){
                case 1:
                    suffix = 'st';
                    break;
                case 2:
                    suffix = 'nd';
                    break;
                case 3:
                    suffix = 'rd';
                    break;
            }
            return num + suffix;
        }
        return num;
    }
}