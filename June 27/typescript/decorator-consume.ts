import { skill } from "./decorator";


@skill('dfghjk')
class player{
    skill;
}

var myPlayer = new player();

console.log(myPlayer.skill);