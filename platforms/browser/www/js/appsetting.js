var appSettings = {
  getApplicationSetting: function (o) {
    var t = request.ajaxSettings(
      utility.get_application_setting,
      o,
      utility.base_url_api
    );
    $.ajax(t).done(function (o) {
      var t = [];
      1 == o.IsActive
        ? ($("#mainSlider").css("display", "block"),
          $(".latest-blog").css("display", "block"))
        : ($("#mainSlider").css("display", "none"),
          $(".latest-blog").css("display", "none"));
      var a = o.RowDisplay;
      1 == a
        ? t.push("s12")
        : 2 == a
        ? t.push("s6")
        : 3 == a
        ? t.push("s4")
        : 4 == a && t.push("s3");
      var r = o.Log.split("~");
      (r = utility.base_url + r[1]),
        $("#logo_src").attr("src", r),
        $(".model_logo_img").attr("src", r);
      var i = o.LayoutBackGround.split("~");
      (i = utility.base_url + i[1]),
        $(".complete").css("background-image", "url(" + i + ")"),
        $(".getname").html(o.Title),
        "" == o.Discraption || null == o.Discraption
          ? $(".descriptionDiv .entry").css("display", "none")
          : $("#descriptionId").html(o.Discraption),
        $(".navbar").css("display", "block"),
        $(".descriptionDiv").css("display", "block"),
        $(".backgroundClor").css("background-color", o.ActionBarColor),
        $("body").css("background-color", o.ListingItemBackgroundColor),
        $(".slider-slick .overlay").css(
          "background",
          "linear-gradient(to left," + o.ActionBarColor + ", #c4c4c4)"
        ),
        $(".slider-slick .overlay").css(
          "background",
          "-webkit-linear-gradient(to left," + o.ActionBarColor + ", #c4c4c4)"
        ),
        $(".w3-bar").css("background-color", o.ActionBarColor),
        StatusBar.backgroundColorByHexString("#000");
      var s = "5px solid  " + o.ActionBarColor;
      $("#backbutton .main_bar").css("border-bottom", s),
        $(".my_lazy_loader .getname").css(
          "border-bottom",
          "2px solid  " + o.ActionBarColor
        ),
        $(".my_lazy_loader .getname").css("color", o.ActionBarColor),
        $(".exit_app").html(o.Title),
        $(".exit_app").css("color", o.ActionBarColor);
      var l = "-webkit-linear-gradient(#000," + o.ActionBarColor + ")";
      $(".lazy_loader_text").css("background", l),
        $("#searchModel").css("background", l);
      var c = o.NotificationOneSignalId;
      t.push(c);
      var e = o.AdMobLimit;
      t.push(e);
      var n = o.AdMobBannerId;
      t.push(n);
      var d = o.AdMobInterstitialId;
      t.push(d),
        1 == o.IncludeHeader ? t.push("includeTitle") : t.push("withoutTitle");
      var u = o.YouTubeApiKey;
      "" != u ? t.push(u) : t.push("AIzaSyBJYIzXYEbGuYQz303OtNCqtko41QnmpK8"),
        1 == o.AdMob ? t.push("admobRunning") : t.push("admobStop");
      var p = { replace_package: o.ReplacePkg },
        g = o.IsYoutubePost;
      localStorage.setItem("isYoutubePost", g),
        localStorage.setItem("item", JSON.stringify(t)),
        localStorage.setItem("replacePackage", JSON.stringify(p));
    });
  },
};
function appSettingInterval(o) {
  var t = request.ajaxSettings(
    utility.get_application_setting,
    o,
    utility.base_url_api
  );
  $.ajax(t)
    .done(function (o) {
      var t = o.Log.split("~");
      (t = utility.base_url + t[1]),
        o.RowDisplay,
        $("#logo_src").attr("src", t),
        $(".model_logo_img").attr("src", t),
        $(".getname").html(o.Title),
        "" == o.Discraption || null == o.Discraption
          ? $(".descriptionDiv .entry").css("display", "none")
          : $("#descriptionId").html(o.Discraption),
        $(".backgroundClor").css("background-color", o.ActionBarColor),
        $("body").css("background-color", o.ListingItemBackgroundColor),
        $(".slider-slick .overlay").css(
          "background",
          "linear-gradient(to left," + o.ActionBarColor + ", #c4c4c4)"
        ),
        $(".slider-slick .overlay").css(
          "background",
          "-webkit-linear-gradient(to left," + o.ActionBarColor + ", #c4c4c4)"
        ),
        $(".w3-bar").css("background-color", o.ActionBarColor);
    })
    .error(function (o) {
      window.location.href = "ajaxissue.html";
    });
}
