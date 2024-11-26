# Thermoptimal Website

This is the code of my first own React project, which is a fairly simple website for a local building services company. The live version of the website is available at https://thermoptimal.hu

Some key features:
- React Router 6 is used for navigation
- Responsive design optimized for moblie phones and for larger screens
- Dark and Light mode available, initial setup is based on client preferences
- The image carousel on the main site loads the images dynamically from a specified folder, which makes it possible to change the images simply by managing the content of the specified folder.
- The page contains an ImageGrid React component, which is used for displaying images stored in specified folders. Similarly to the Carousel component, images can be managed just by managing the folder contents. The image viewer component displays an image description that is based on the filename of the image.
- A Contact form that is used for requesting quotations. The form data is handled by a PHP backend, that sends it to the e-mail address of the website owner.
- Sliding animations for navigation