# car-track-notes

A crude tool to take notes of your racecar's behaviour while testing on Spa or Catalunya. It captures oversteer or understeer on turn entry, mid corner and exit-acceleration.

Please note that **there are no accounts, all information is saved on your device**. It uses localStorage so if you go to a different device or browser, no data will be saved. The good thing is that you don't need to register. 

## How to use

1. Drive your new car around Spa/Catalunya (choose from the menu)
2. When you encounter understeer or oversteer, pause the sim
3. Tap on that turn, annotate what you have discovered
4. When you're ready go back to the pits and change the setup
5. Start again

## Usage

This is a scratch-your-own-itch tool. Feel free to use it but don't expect any support. If you want to download it and use it on your computer, server, etc. feel free to do it. If you have any comments raise an issue or drop me a line. 

## How to add more tracks

This will be fairly obvious if you know front-end, but here's a rough how-to in case you want to use a different track:

1. Fork/download the repo
2. Duplicate index.html to whatever track you want (e.g. catalunya.html)
3. Use gulp if you know what it is. If not, ignore that and just modify the "docs" folder
4. Find a creative commons PNG or SVG map of the track. Wikipedia seems to have them
5. replace the line <img src="images/put_your_SVG_image_here.svg" usemap="#image-map">
6. Use a tool like https://www.image-map.net/ so generate all the circles on the turns you want to track (or rectangles, or polygons), making sure you use the turn number on the TITLE attribute. E.g. turn one should have title="1")
7. Copy and replace the AREA lines (29 to 44)
8. Publish it wherever you want, or run it locally on your computer
9. (optional) Let me know so, I can add your track to the list and make it available to everybody else!


Thanks to "Krusti":https://forum.studio-397.com/index.php?members/krusti.45090/ for adding Catalunya.
