const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
canvas5.width = 600;
canvas5.height = 600;

// declareglobal variables
// grid-based game. 1 imaginary cell in our grid will be 80x80px
const grid = 80;
//keys will hold whatever key is pressed on the keyboard
let keys = [];
let score = 0;
let collisionsCount = 0;
// we count our frames so we can add triggers and write statements like: do something every n number of frames
let frame = 0;
// gamespeed will increase slightly with every point earned
let gameSpeed = 1;
let safe = false;

// particlesArray will hold all particle objects for dust effects
const particlesArray = [];
// will limit how many we create to prevent performance issues
const maxParticles = 300;
// ripplesArray will hold water ripple particles objects
const ripplesArray = [];
// carsArray will contain our randomized cars
const carsArray = [];
// logsArray will contain turtles and frogs, basically things that are floating in the river
const logsArray = [];


//images
const background = new Image();
background.src = "./sprites-and-backgrounds/background.png";

const background_lvl2 = new Image();
background_lvl2.src = "./sprites-and-backgrounds/background_lvl2.png";

const grass = new Image();
grass.src = "./sprites-and-backgrounds/snipet-grass.png";

const collisions = new Image();
collisions.src = "./sprites-and-backgrounds/snippet-collisions.png"

const turtle = new Image();
turtle.src = "./sprites-and-backgrounds/snippet-turtles.png"

const log = new Image();
log.src = "./sprites-and-backgrounds/snippet-log.png"

const car = new Image();
car.src = "./sprites-and-backgrounds/snippet-cars.png"
let numberOfCars = 3;

const froggerSprite = new Image();
froggerSprite.src = "./sprites-and-backgrounds/frog_spritesheet.png"