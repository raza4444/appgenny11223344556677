function openVideoModel(e) {
  var t = (100 + 100 * localStorage.getItem("counterAds")) / 100;
  localStorage.setItem("counterAds", t);
  var o = (i = JSON.parse(localStorage.getItem("item")))[7],
    a = i[2];
  if ((console.log("admobLimit" + a), "admobRunning" == o && a > 0)) {
    var i = JSON.parse(localStorage.getItem("item"));
    if (localStorage.getItem("counterAds") == (a = i[2])) {
      var l = $(e).attr("id");
        localStorage.setItem("openVideoModelId", l),
          localStorage.setItem("counterAds", "0"),
          showIndustrialAd();
    } else {
      openModel((l = $(e).attr("id")));
    }
  } else {
    openModel((l = $(e).attr("id")));
  }
}
function openModel(e) {
  $("#img_link").css("display", "none"),
    $("#video_list").css("display", "none"),
    $(".my_lazy_loader").removeClass("hide"),
    $(".my_lazy_loader").show(),
    $("#myModal").animate({ width: "toggle" }, 50);
  var t = request.ajaxSettings(
    utility.get_post_description,
    e,
    utility.base_url_api2
  );
  $.ajax(t).done(function (e) {
    if (null != e.Keyword && 0 == e.RedirectLink) {
      $("#myModal .modal-content").css("background-color", "#fff"),
        $(".post_title").html(e.Title);
      var t = e.Keyword.split(" ").join("+");
      if (0 == e.Limit || null == e.Limit) var o = 5;
      else o = e.Limit;
      0 != localStorage.getItem("isYoutubePost")
        ? getDailymotionBySearch(t, o)
        : "" != t
        ? getyoutubeVideoBySearch(t, "video", o)
        : 1 == e.PlayList && getyoutubeVideoByplaylistSearch(e.BaseApi.Code, o);
    }
  });
}
