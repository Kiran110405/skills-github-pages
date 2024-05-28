Title: My first post: 3D Modeling
Date: 2024-05-21

# These are my experiments with Images within the p5js.editor

The reason for why I wanted my second blog post to be experimentations with images within the p5js.editor is because i enjoy editing pictures such as adding filters to them, collages and just making the original photo seem similar but also distinctly different to the new image thatI was able to produce with it. As well as this, I also enjoy the idea of playing with images and manipulating their properties to see what I am able to and not able to change about them.

# First Image experiment within p5js.editor (Filters)


[My Working with images example](/skills-github-pages/creativeCode/Image-work-2/index.html)

[My Working with images example](/skills-github-pages/creativeCode/Image-work-3/index.html)

[My Working with images example](/skills-github-pages/creativeCode/Image-work-4/index.html)

[My Working with images example](/skills-github-pages/creativeCode/Image-work-5/index.html)

This is my first attempt/ experiences with playing with images within the p5js.editor. As you xan see from this link above is my images of the different filters that I used to demonstrate examples that a made witha wide variety of different filters that I had added to the images.

In the first link that I provided was a "posterize" filter that dramatically changes the texture and color vibrancy of the image making the colours appear much lighter and vibrant and the actually texture of the image looks alot less realistic, which is what the aim of the original image was, and created a more doodle like, thick type of texture. The code that was able to do this is seen below:

,,

function draw() {
  background(220);
  image(img,0,0)
       filter(POSTERIZE, 3);
  
}

,,

You can see from these lines of code that I have pulled fromt eh first example, how I have been able to add the "POSTERIZE" filter to the image of the Avengers. To do this I added the element "filter" and within brackets added the filter that I wanted to use (those that were available within the p5js.editor. The number within the brackets, the 3, allows me to be able to choose how much or how little I was to POSTERIZE the image, 3 being so that the FIlter is clearly visible but if it was to be any higher the PASTERIZE would be alot more significant.

Now I am going to choose another example of code that shows one of my favourite filters out of them all and the one that really got me attracted to using the filters in the first place was the blur filter:

,,

function draw() {
  background(220);
  image(img,0,0)
       filter(BLUR, 6);
}

,,

As you can see that this is exaclty the same from the last line of code that I had demonstrated accept from the fact that the word inside of the brackets is no longer POSTERIZE but is now rather BLUR. This shows how I have now added the blur element to the image. 

my inspiration for this work of using different filters on images stems from a youtube tutorial that I saw, where a creator was using p5js.editor to add filters to their own images. As well as work that we had done with images in lessons/ worksops together.

reference: Thompson, J. (24th Febuary 2021), CP2: Other Image Filters – Image Filters, https://www.youtube.com/watch?v=oR-v9mnyLIs, accessed 21tst May 2024



## Second Image eperiment within p5js.editor (Multiple filter)

[My Working with images example](/skills-github-pages/creativeCode/Image-work-1/index.html)

In this example of my work, you can see how i have altered an image in a way where the image is still the exact same, but there is a property of the image that was not there before, the flashing colours. Showing my experiments with graphical techniques in p5js.editor. My starting point and inspiration for this piece of work is work that we had done in class where we workied with filters, along with my first peice of work and changed how the image looked. Where as i wanted to go a step further within this example and give the image multiple flashing colours.

<img src="/skills-github-pages/Images/Car-image-1.png" alt="alt text" width="600" height="100">

In this screenshot that I have taken directly from my code, this is a representation of how I have been able to, first of all, implement the image that I wanted to use so that I could edit and add filters upon it. The "loadImage" tag is how I am able to grab my image that I have saved from the file and able to bring it all the way to the p5js.editor and edit.

<img src="/skills-github-pages/Images/Car-image-2.png" alt="alt text" width="600" height="100">

This is another screenshot that I have taken from my code for this work of mine and what this code is showing you is how i have actually managed to give the photo of the car a unique property/ filter. The "tint" element is the tag that allows me to start adding the filters that I wanted to add to the image. Whether I wanted to add a blue, green or yellow filter. However, once I first added the filter, I thought about how I could make the filter of the photo more creative.

The idea that I came up with was "what if I had the filter change into multiple colours?". The reason for why I came up with this idea is because I remembered that is the early stages of our creative coding lessons, one thing we were taught was how we could give an object multiple colours, aswell as this, I had also used the same technqiue in my 3D modelling examples witht ehc ube and how I made that change into multiple colours. 

<img src="/skills-github-pages/Images/Car-image-3.png" alt="alt text" width="600" height="100">

This screen shot is that same i had shown before but more focusing on the part of the code that actually allows the filter colours to change from one to another. How this is done is that the "frameCount" element that is there connects the filter/colours to the framecount within the p5js.editor. The 10 controls how quickly I want the filter to switch between the colours so that it doesnt change too fast or too slow.

So this was my first experimentation with images and was mostly a task for me to understand how images work within the p5js.editor and to get a grasp on the concept, to see what is and what isnt possible.

## My third Image eperiment within p5js.editor

[My Working with images example](/skills-github-pages/creativeCode/Image-work-6/index.html)

In this image experiment using the p5js.editor, I had taken it a much bigger step further than the original prieces of work that I had alreadu done. In this example that you can see above, I have created something that is completely new and unique. What this does is, I havent gotten the image from anywhere, that it actually takes the image from what the camera on the computer/laptop has in its view, and with that image, it slowly brings the image together by creating little pixels that slowly bring the image together. However, once the image is created, it isnt a fuly realistic high quality picture, but rather a more dotted image, a picture that was painted rather than photographially replicated.

,,

 capture.loadPixels();
 
 ,,

This line of code from this piece of work that I made allows me to, in a way, call to the pixels so that I can put them into an array and give them a job to do in my code, in this case it would be the pixels coming together to re-create the image that is being captured from the computers camera.

,,

 let x1 = random(capture.width);
 let y1 = random(capture.height);
  
 let c = capture.get(x1, y1);
 
,,

 The first two lines of code from above, that are also in the actual code of my work, shows how I have decided to place each pixel and how I wanted the do move randomly abd appear in different places without them being given any orders in how they should form together to create the picture that the camera is capturing. This can be seen being implemented when I had put "random(capture.width)". Allowing the pixels to spawn in at random imgaes within the canvas.

 ,,

  cg.noStroke()
  cg.fill(c);
  cg.ellipse(x1,y1,10,10)

  ,,

  Here, these lines of code show how I have designed the small objects that work with the pixels to create the image. The first line of code saying "noStroke". What this line of code means that the objects that are spawning in to create the image are not given an outline. The reason for why I have added noStroke is because I still want the image to look like a picture and to be still clear of what the user is seeing, where as if I was to add a Stroke, the objects will have outlines and the image wont be as clear to the user as I intend it to be as lines and colours would be breaking the image up.

The other line of text that says "ellipse(x1,y1,10,10) is the object that I wanted to use that would appear on the canvas and gradually bring the image together. The "ellipse" element is how you would render in circles using the p5js.editor, and as you can see from my working example, the objects that come together to create the image are circles. Along with this, within the brackets you can see that I have added more code/ detail to the ellipses. For example, within the bracket, it says "x1, y1". If you look back to the first lines of code that I have already shown, I have set "x1" and "y1" to "random", so the "x1" and "y1" gives the ellipses the instrucions to spawn in at random places within the canvas to create the overall image. 

However, with this experiment, the overall picture/image that is produced just changes, this is caused my the actions that are happening by the person/ object on the camera in real time, So the image that is being conjured isnt of what was there once, but rather the overall image/ picture that is being created is taking in all real-time events that are happening and using all of that to create one image. Through my experimentations I have tried to find ways that I would be able to fix this problem.

So, this example that I have produced aims and does in fact take to seprate techniques together, where i use the p5js.editor to use the camera on the device using video element in the p5js.editor:

''

capture = createCapture(VIDEO)

,,

to produce a picture as the end result. I thought that this would be a new way of working with images along with a different perpsepective on how I could tackle this task that I have set myself. Using a video to create a picture that is formed with effects that I have implemented myself. 


My inspiration for this coding technique came from and online tutorial that I had found on YouTube.

reference: Xin Xin (7th April 2020), 1.2: Pointillist Filter - Experimental Camera - p5.js Tutorial, https://www.youtube.com/watch?v=aza-3oZjY4g, accessed 21tst May 2024







