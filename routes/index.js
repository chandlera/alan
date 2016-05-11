exports.index = function (req, res) {
  res.render('index', { title: 'Home' });
};
exports.projects = function (req, res) {
  res.render('projects', { title: 'Projects' });
};
exports.contact = function (req, res) {
  res.render('contact', { title: 'Contact' });
};
