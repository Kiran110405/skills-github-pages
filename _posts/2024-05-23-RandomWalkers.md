Title: My first post: Random Walkers
Date: 2024-05-22

# My Experiments with Random Walkers

The reasom for why I have chosen random walkers for my third blog post of different experimentaions within the p5js.editor is because I love how unpredicatble they are, I love the idea of coding events that happen randomly but somehpw create some sort of art that you are both in control off and not in control off. You get to see what the actualy computer makes itself with the instructions that you have given it.

## My first experiment with Random Walkers

[My Working with images example](/skills-github-pages/creativeCode/Random-walker-1/index.html)

In the link above you are able to view my first experiment that I have done in the p5js.editor in regards to creating "Random Walkers". In the experiment I have started with something simple but which also has a unique property. I created a singulare line that moves in any random direction in which it pleases and while it does this, it was chooses random colours that the line wants to become while the line moves itself around the canvas.

<img src="/skills-github-pages/Images/Random-walkers-1.png" alt="alt text" width="1000" height="500">

This screenshot taken from the code from this Random Walkers work shows how I have started the ocde by setting some variables. The reason for this is so that I can, at all, at the inststructions of code needed for this random walker to work, so plays a significant role in starting the code.

<img src="/skills-github-pages/Images/Random-walkers-2.png" alt="alt text" width="600" height="100">

In this screenshot you can see how I added the colours to my random walker experiment, implementing different colours and occur and also blend together as the random walker continues to play. I had done this by adding max colours (225) to the "r", "g" and "b" elements that I had implemented into the code. So that I could have all the colours mixed together rather than having just one colour for the whole length that the code plays out for. 

<img src="/skills-github-pages/Images/Random-walkers-3.png" alt="alt text" width="600" height="100">

In this screenshot is, what could be considered, the core of the of the whole code for the random walkers. This is because these two lines of code allow the point that is displayed in the final product to move randomly around the page of the canvas overtime. Giving the line random positions to move too.

<img src="/skills-github-pages/Images/Random-walkers-5.png" alt="alt text" width="600" height="100">

Here you can see how I have actually created the point that moves randomly along the canvas. In the stroke I have used the variables "r,g and b", which are the variables that contain the colours that I want to use, so this is how I am going to implement these colours and make them appear and blend together as the point moves.

## My second experiment with Random Walkers

[My Working with images example](/skills-github-pages/creativeCode/Random-walker-2/index.html)

This example of Random Walkers is something that is completely different from my previous example. The example that I made is intended to seem like that of waves in the ocean, a smooth, fluid like motion that you be big or small at any point in time. This image is a mix between the random walkers technique and also perlin motion.

Perlin motion: a procedural texture primitive, a type of gradient noise used by visual effects artists to increase the appearance of realism in computer graphics. Hence the reason for why the motion of the waves are not blocky but rather silky and smooth almost as if they are real waves.

reference: wikipedia, last edited:28 May 2024, at 22:54, https://en.wikipedia.org/wiki/Perlin_noise#:~:text=significant%20directional%20artifacts.-,Uses,details%20are%20the%20same%20size.

``

let yIncrement = 0.01;

let timeIncrement = 0.01;

let timeOffset = 0;

``

These lines of code that are visible above allow me to control the waves and how I want them too look and act, but still in a randomised pattern that is unpredictable.

the first line (yIncrement) controls how rigid and sharp I want the waves to look. So this is controlled between 0 and 1 and here in my code I have set the yIncrement very low (0.01) so that the waves are more fluid and smooth and rperesent that of and actuall wave that you would find in a ocean instead of sharp and jaggedy.

the second line (timeIncrement) controls how fast I want the waves to move during time. The same rules apply to this increment the same as it does with he first, I want the motions of the waves to be nice and slow so I have set the number to be very very low onece again (0.01) to give it more that real-life effect.

The final increment (timeOffset) is so that the frame shifts so it gives it the look that the wave is moving.

``

 fill(0,50,200);
  noStroke();
  beginShape();

``

These lines of code show how i added the colour to the wave (blue) to make it look like that of an ocean, and I also added noStroke so that the wave doesnt have an outline around it to make it look cartoonish, but so that it doesnt havent an out line and looks more natural and well implemented into the canvas.

## My third experiment with Random Walkers

[My Working with images example](/skills-github-pages/creativeCode/Random-walker-4/index.html)

this code experiment that I have made is a different variation of a technique that is also related to working with random walkers. This code is a mixture of both random and noise working together to create a subtlte yet vibrant piece of work. The reason for why I call this wordk subtle is by the way that the colours and shapes slowly disapear once they have moved and that they do this repetitively as they move around. Along with the way that there are a variety different shapes and the shapes are nice and round rather than sharp and blovky making the movenments of the shapes seem smooth.

Where I mad got my inspiration for this piece of work was from both my first random walkers experiment but also work that we have gone over and reviewed in lesson time aswell. For example, I had gotten the inspiration for the colours from my first work where the line changes colours and the actual function of the code being similar to that of the work reviewed in class.

``
 background(0,8);

``

An integral part of the code that makes this experiment work is actually how I edit the background of the canvas. What I have done to the background is I have made it almost transparent like. To explain, I have made the background have almost this second layer wear you can see the shapes slowly fading away behind as they move around. I have done this by making the background colour black (0) and adding an extra number to choose how transparent I wish the background to be (8). This gives the effect of the shapes slowly disapearing.

``

translate(mx, my);
  rect(x, y, w, h, r, g, b);

,,

These two lines of code here do two different things. The first line of code "translate (mx, my)" is what allows the shapes to move around the page and how we can translate the instructions to work that the shapes all move around the page randomly. The second line of code, this is how I have designed the rectangles that are on display, you can see that within the brackets are alot of different letters, the reason for this is because I wanted to give the rectangles the properties that I have already implemented for them in the code. I needed to add these variables so that they attach to the shapes. 

,,

 let w=random(5,40);
  let h=random(5,40);
  let x=random(-50,50);
  let y=random(-50,50);

 ,,

 These lines of code are for the shapes and objects and how I want to make them look during the working example and I will explain what each line of code does here:

let w=random(5,40): this line, the first, line of code determines how wide I want the skhapes to be displayed will the code is working. So if I was to change the 5 to something much higher, such as 100, the shapes would be alot wider than they are now. The second number (40) controls how far the shapes are spaces out from each other, so again, if they number is much higher, then the space between the shapes are going to be much greater.

let h=random(5,40): This line of code is different from the first, the reason for this is because instead of changing the width of the shape, it changes the height that the shape is going to be. So again, if I was to change the number 5 to something greater, the height of the shapes being displayed would increase.

 let x=random(-50,50), let y=random(-50,50): These two lines of code do almost the same thing, they change how spread out the shaoes are going to be from one another. So if I was to change the -50 to something like 50, the shapes would be much more closer together than they would normally be. If I was to make the number something like -500, the shapes would be much more spread out. 

 These are my experiments that I have carried out with RandomWalkers and and tried a variety of different ways in which I could express these ideas. I went from a point moving randoly around a canvas to a relaistic wave effect and finally to multiple shapes randomly moving around with a multi-colour property and fading effects that occur behind them.

 What I had found most difficult with the randomwalkers experiments was trying to work with the variables and how I would code them so that they fit each other and make the actual code run well. But what I found the easiest part of the code was just adding the fill colour and adding the strokes to the images to give them more of a creative effect and simplistic, yet quality, designs.
 













