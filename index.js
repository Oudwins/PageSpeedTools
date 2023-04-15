const Image = require("@11ty/eleventy-img");
const path = require("path");
const fs = require("fs/promises");

// resizes images to x different sizes & places them in output dir.

const sourceDir = "./src/images/";

const outputDir = "./dist/images/";

(async () => {
  const files = await fs.readdir(sourceDir);

  for (let file of files) {
    let url = sourceDir + file;
    let stats = await Image(url, {
      widths: [300, 640, 768, 1024, 1280, 1536],
      formats: ["webp", "auto"],
      outputDir,
      filenameFormat: function (id, src, width, format, options) {
        // id: hash of the original image
        // src: original image path
        // width: current width in px
        // format: current file format
        // options: set of options passed to the Image call
        const originalName = path.basename(src).split(".")[0];
        if (format === "svg") return `${originalName}.${format}`;
        return `${originalName}-${width}.${format}`;
      },
      svgShortCircuit: true,
    });

    console.log(stats);
  }
})();
