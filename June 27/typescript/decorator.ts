export function skill(param){
    return function(target){
        target.prototype.skill = param;
    }
}