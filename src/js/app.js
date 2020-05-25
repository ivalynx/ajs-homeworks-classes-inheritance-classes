import Bowerman from './bowerman';
import Swordsman from './swordsman';
import Magician from './magician';
import Daemon from './daemon';
import Undead from './undead';
import Zombie from './zombie';

const bowerman = new Bowerman('ar');
const swordsman = new Swordsman('ss');
const magician = new Magician('ee');
const daemon = new Daemon('asd');
const undead = new Undead('asdf');
const zombie = new Zombie('as');

const team = [bowerman, swordsman, magician, daemon, undead, zombie];
team.reverse();
