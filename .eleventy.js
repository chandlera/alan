const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const HtmlMin = require('html-minifier');
const ErrorOverlay = require('eleventy-plugin-error-overlay');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const PostCSSPlugin = require("eleventy-plugin-postcss");
const { config } = require('dotenv');

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(['md']);
  eleventyConfig.addPlugin(ErrorOverlay);

  // eleventyConfig.addWatchTarget("./src/_tmp/index.css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/css");
  // eleventyConfig.addPassthroughCopy({ "./src/_tmp/index.css": "./css/index.css" });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      let minified = HtmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  const MarkDownIt = new markdownIt(options);
  
  eleventyConfig.addFilter('markIt', (content) => {
    return MarkDownIt.render(content);
  });

  eleventyConfig.addFilter('stringify', (content) => {
    return JSON.stringify(content, null, 2);
  });

  eleventyConfig.addPlugin(PostCSSPlugin)

  return {
    dir: {
      input: "src",
      output: "public",
      includes: '_templates',
      data: '_data',
    }
  };
};
