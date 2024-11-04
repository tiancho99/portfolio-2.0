# My Personal Portfolio
This is the repository of my web page portfolio to showcase some of my projects and blog posts I've written. It is a Single Page Application (SPA) created using React, which consumes from a WordPress API.

Check my [web](HTTP://sebastiandev.com)

To use this template, you can clone this repository:
```git clone https://github.com/tiancho99/portfolio-2.0.git```

Then go to the root directory
```cd portfolio-2.0```

And build the docker image
```docker build -t your_image_name .```

Finally create a container using the image you just created
```docker run -d --name container_name -p host_port:container_port your_image_name```

Now, the application will be consuming from your WordPress API and showcasing them on the web.

