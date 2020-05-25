---
layout: post
title: "How to Align and Extract a face from an image?"
permalink: '/posts/how-to-align-and-extraxt-a-face-from-an-image.html'

before_rotation_image_path: ../assets/images/gabriel_before_rotation.png
on_rotation_image_path:  ../assets/images/gabriel_on_rotation.png
after_rotation_image_path: ../assets/images/gabriel_face_extraction.png
beta_image_path:
face_rotation_notebook_url: https://github.com/victorhausen/computer-vision-toolkit/blob/master/notebooks/face_rotation_and_extraction.ipynb
computer_vision_toolkit_url: https://github.com/victorhausen/computer-vision-toolkit

---

This is a very simple task in image processing. The alignment happens in two easy steps: first you computer the facial landmarks using your algorithm of choice. Then you take two points that should be parallel, such as the eyes' outer corners, and rotate the image <i>beta</i> degrees, in order to align these points in the X axis (and the image as a whole).

beta = equation

In order to demonstrate it, I asked my friend Gabriel, If I could use he's profile picture(he said yes, thanks Gabs).

|Before|Rotating|After|
|---|---|---|
| ![before]({{page.before_rotation_image_path}}) | ![on]({{ page.on_rotation_image_path}}) |![after]({{page.after_rotation_image_path}})|

You can check <a href="{{page.face_rotation_notebook_url}}" target="_blank"><i>this</i></a> and others implementation in my <a href="{{page.computer_vision_toolkit_url}}" target="_blank"><i>Computer Vision Toolkit</i></a> repository.
