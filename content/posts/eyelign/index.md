---
title: "Introducing 'eyelign'"
summary: "A command line tool to align multiple portrait photos by eye position."
date: 2022-06-25
---

[eyelign](https://github.com/dullage/eyelign) is a command line tool to align multiple portrait photos by eye position.

<div class="flex justify-center mb-8">
  <video src="blue.mp4" autoplay loop playsinline></video>
</div>

When my daughter was born, I decided to take a portrait photo of her every week with the idea of creating a timelapse when she is older.

I started out using an iOS app tailored for this purpose but I wasn't a fan of being locked into the app and the backup options were limited.

I then switched to simply using _any_ app or camera to take the photos and set out to find something that could create the timelapse. There were a few considerations:

- **I was looking for an open-source solution.**  
  This is to avoid app lock-in.
- **The source images would be varied in size and aspect ratio.**
- **I wanted the eyes to be aligned in each frame.**  
  This type of timelapse is much more pleasant to watch when the eyes are aligned.
- **The position of my daughter's eyes would vary between photos.**  
  As I write this she's 4 and it's hard enough to keep her still for 5 seconds let alone get the photo perfectly aligned!
- **The rotation of my daughter's face would vary between photos.**

At the time I couldn't find anything that fit these needs so I started to piece eyelign together.

## Workflow

The top-level workflow is as follows:

1. Find all jpg/jpeg files in the `INPUT_DIR`.
2. Look for a `.eyelign` file. This is used to cache eye positions so that they don't need to be found each run.
3. Loop through all of the files. For any file not in the cache, use the Python package '[face_recognition](https://github.com/ageitgey/face_recognition)' to attempt to automatically find the eye positions.

Then, loop through all of the files again and for each one:

1. Rotate the image so that the eyes are level.
2. Resize the image so that in all images, the eyes are the same distance apart.
3. Crop the image to the required size using the eyes as an anchor point.
4. Save the image to the `OUTPUT_DIR`.

If the automatic eye position detection fails for any reason, the file is still added to the cache but with `null` values for the eye positions. This is for 2 reasons:

1. It means that eyelign won't try again the next time it is run.
2. It allows users to manually enter the eye positions. I generally do this by finding the xy values using MS Paint (visible in the bottom left corner of the app).

This example `.eyelign` file has 2 images saved, one with eye positions and one without:

```json
{
  "2020-01-01.jpg": {
    "find_eyes_attempted": true,
    "lx": 1194,
    "ly": 1817,
    "rx": 1651,
    "ry": 1820
  },
  "2020-01-08.jpg": {
    "find_eyes_attempted": true,
    "lx": null,
    "ly": null,
    "rx": null,
    "ry": null
  }
}
```

The output images can then be used to create a timelapse using any tool that supports it. I use [ffmpeg](https://ffmpeg.org/) to create the timelapse.

Please see [the GitHub repo](https://github.com/dullage/eyelign) for further details and usage instructions.
