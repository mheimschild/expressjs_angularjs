
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log("index called - but: " + req.path);
  res.render('index', { title: 'Express' });
};

exports.partials = function(req, res) {
  var name = req.params.name;

  res.render('partials/' + name);
}