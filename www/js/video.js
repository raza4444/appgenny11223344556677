cordova.define("cordova/plugin/videoplayer", function (o, i, e) {
  var n = o("cordova/exec"),
    l = function () {};
  l.prototype.play = function (o) {
    n(null, null, "VideoPlayer", "playVideo", [o]);
  };
  var d = new l();
  e.exports = d;
}),
  window.plugins || (window.plugins = {}),
  window.plugins.videoPlayer ||
    (window.plugins.videoPlayer = cordova.require(
      "cordova/plugin/videoplayer"
    ));
