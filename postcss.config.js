module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: true,
      browsers: ['last 2 versions', 'ie 6-8', 'Firefox > 20'],
    }),
  ],
};
