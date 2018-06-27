import { skill } from "./decorator";

// classs decorator
@skill('dfghjk')
class player{
    skill;
}

var myPlayer = new player();

console.log(myPlayer.skill);