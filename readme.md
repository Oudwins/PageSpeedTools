# PageSpeed Tools

This is a collection of useful Pagespeed tools built by me or adapted from the internet.

## Image Optimization
```bash
node imageOptimize.js # See @11ty/eleventy-img docs. 
# Basically takes images from input folder & creates a bunch of optimized copies in output folder at varying sizes
# Makes images in 2 file types, original file type (should be png or jpg ideally) & webp
```

Image.jsx
- React component that renders bunch of template code for picture element to make use of the generated images
- takes src = 'image name', sizes?='per html attribute', passes rest of props to img


## Delay Third Party Code Execution
If you have lots of third party code slowing down the site. Simple fix is to delay it with a timeout for a few seconds so the rest of the website loads.

thirdPartyScriptDelay.ts
- Function that takes in a list of urls & injects the script tags after 2s.