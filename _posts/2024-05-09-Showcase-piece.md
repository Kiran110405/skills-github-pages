Title: My first post: Showcase Piece
Date: 2024-26-09

# Showcase Piece

This blog is intended to demonstrate my final showcase piece, where I decide to choose which techniques that I have previously used in my other blog posts to use as inspiration or an idea for my final showcase piece. After working with the 3D modelling, randomwalkers and Images, and experimented with them all, I decided that I wanted my showcase piece to be worked with my 3D modelling techniques. 

The reason for why I have chosen 3D modelling is because I find them to the most interesting out of them all. That I was able to produce a psinning 3D like image on a flat, 2D, screen. While working with the 3D shapes they stood out to me more so than the random walkers or images and though that the 3D shapes had more to express out of them and that I could do more creative work with them and work with these shapes in different ways. 

[My Showcase piece](/skills-github-pages/creativeCode/3D modelling_3/index.html)

Through this link that is above, you will be able to access my final showcase piece. As you can see, via the link, I used the idea of 3D modelling to create something that I is extremely different to work/experiments that I have already done in my 3D modelling blog post. For my final showcase I have made a piece of work whereby there are multiple, small 3D shapes that are placed in formation and take a particilar shape. The shape that I have made was almost an atom like structure as I wanted to make this piece of work resemble an atom. As the idea that I am working with in the p5js.editor is 3D modelling and all 3D objects in life are all made up of atoms, so I thought that for my showcase piece, it would be a good idea to create an atom like structure using 3D shapes. 

Along with this, I have also added the feature where you are able to spin and zoom in and out of the actually structure itself. I had gotten this inspiration from the actual p5js webiste itself as i thought that it would be a new and interesting technique that I could try and implement into my work.

Another feature that you can see that I have added to this showcase piece is I have made it so the structure spins by itself as a whole, which is a technique that I have previously used in my other pieces of work in my 3D modelling blog post. Along with the 3D shapes having an ambient lighting texture that have multiple different colours where you can really see the shapes 3D properties. 

``

let radius = width * 1.5;

,,

This line of code is how I am able to size each sphere as this is the radius property of the shape and I am multiplying the width by 1.5. The reason for this is because so that I can have the whole structure fit in the canvas and the spheres wont be to spread out from one another making it more noticable what the structure is actually meant to be (an atom).

``

orbitControl();

``

This line of code is simple yet plays a vital role to the end product. This code allows the user, who is viewing the code, to be able to zoom in in out and also allow the them to move the entire of the atom struture so that they are able to look at it at different angles and perspectives.

``

rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);

``

These lines of code are used to set the speed that the structured atoms moves at which is intune with the framecount. So rotateX and rotateY control the speed that the x and y axis of the shape moves at, so here I have set the speed to "framecount * 0.01" so that the structutr moves at a slow pace where you can see the object turning. If I was to change the 0.01 to a higher number, the pace that the structure moves at on its axis would move alot faster.

``

   let a = (j / 12) * PI;
      let b = (i / 12) * PI;

``

What this code does is basically form the shape of the structure. This part of the code here, I had used it from a reference page on p5js.editor where there was a piece of work that did something very similar to this is the sense that it also had its own structure also. So, after playing with this line of code, I could straight away see a huge difference in what could happen to the structure. If I was to change the 12 variable on the first line the shape would almost squeeze back into itself and create a whole new structure which is visible from the image below:

 


