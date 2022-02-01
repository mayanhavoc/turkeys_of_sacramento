# Turkeys of Sacramento

ToS is basically set up as 5 different canvases, each with different elements. I created classes for different elements, such as the `Frogger` class, which has width and height properties in relation to the sprite, to the canvas and X and Y properties in relation to the grid. These properties are updated as the sprite moves along the canvas. The movements are defined by keyboard values. 

The `Obstacle` class is designed to move randomly across the X axis of the canvas. It uses a chain of `if else` statements to define which obstacle to `draw`. 
The `Obstacle` class also has a function to increase gameSpeed to make the game increasingly harder. 

The `Particle` class creates the ripple effect in the water when frogger falls in. It's created by assigning x and y values, a radius and a vector direction with a random value defined by `this.directionX` and `this.directionY`. 

Finally `utilities.js` handles the game logic. 
