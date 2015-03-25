!
    function() {
        function t(t) {
            var e = $(t.currentTarget),
                a = e.data("type"),
                r = {
                    id: e.data("id"),
                    img: e.data("img"),
                    title: encodeURIComponent(e.data("title")),
                    description: encodeURIComponent(e.data("description")),
                    url: e.data("url"),
                    docTitle: document.title,
                    platform: e.data("platform")
                },
                o = "";
            a && (/^\/\//.test(r.img) && (r.img = "http:" + r.img), r.img = encodeURIComponent(r.img) && (r.url = n(r.url, r.platform)), r.url = encodeURIComponent(r.url), o = i(a, r), window.open(o, "", ""))
        }
        function e() {
            o.fadeIn()
        }
        function a() {
            o.hide()
        }
        function i(t, e) {
            var a = "";
            switch (t) {
                case "twitter":
                    a = "//twitter.com/intent/tweet?url=" + e.url + "&text=" + e.description;
                    break;
                case "facebook":
                    a = "//www.facebook.com/sharer/sharer.php?u=" + e.url;
                    break;
                case "ggplus":
                    a = "//plus.google.com/share?url=" + e.url;
                    break;
                case "weibo":
                    a = "//service.weibo.com/share/share.php?url=" + e.url + "&title=" + e.title + " " + e.description + "&pic=" + e.img + "&searchPic=false";
                    break;
                case "txwb":
                    a = "//share.v.t.qq.com/index.php?c=share&a=index&url=" + e.url + "&title=" + e.description + "&pic=" + e.img;
                    break;
                case "qzone":
                    a = "//sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + e.url
            }
            return a
        }
        function n(t, e) {
            var a = /(\?[^#.]*)/,
                i = /(#.*)/,
                n = i.test(t),
                r = "",
                e = e ? e: "copy";
            return n && (t = t.replace(i,
                function(t) {
                    return r = t,
                        t = ""
                })),
                a.test(t) ? t = t.replace(a, "$1&r=" + "&p=" + e) : t += "?r=" + "&p=" + e,
            t + r
        }
        var r = $(document),
            o = $(".popup.invite-friend");
        r.on("click", ".share-icon", t),
            r.on("click", ".share-email", e),
            r.on("click", "#cancel-email", a),
            window._getInvitationURL = n
    } (),
    function() {
        function t() {
            var t = !0;
            return u.hide(),
            n.val().trim() || (r.show(), t = !1),
            o.val().trim() || (c.show(), t = !1),
                t
        }
        function e() {
            t() && a()
        }
        function a() {
            if (!f) {
                var t = l.data("url");
                (t = _getInvitationURL(t, "email")),
                    l.text(d),
                    i(),
                    f = $.ajax({
                        url: l.data("api"),
                        type: "POST",
                        dataType: "json",
                        data: {
                            email: n.val().split(","),
                            accept_url: t,
                            img_url: l.data("img"),
                            content: o.val(),
                            slug: l.data("slug")
                        }
                    }).success(function(t) {
                        f = null,
                            0 == t.status ? l.text(p) : l.text(g),
                            setTimeout(function() {
                                    n.importTags(""),
                                        i(),
                                        o.val(m),
                                        l.text(s)
                                },
                                2e3)
                    })
            }
        }
        function i() {
            $("#email-input_tag").removeClass("not_valid").val("").blur()
        }
        var n = $("#email-input"),
            r = n.next(".err"),
            o = $("#email-textarea"),
            c = o.next(".err"),
            l = $("#send-email"),
            u = $(".err"),
            s = ($(".invite-target"), l.data("def")),
            d = l.data("sending"),
            p = l.data("sent"),
            m = o.data("cont"),
            g = l.data("err"),
            f = null;

        o.val(m),
            l.off("click").on("click", e)
    } ();


$("#hezuohuoban_select").change(function(e){
    var url = $("#hezuohuoban_select").find("option:selected").data("url");
    //window.location.href = url;
    self.location = url;
});
$(".control").click(function(e){
    var a = $(e.currentTarget);
    if(a.hasClass( "dakai" )){
        a.removeClass("dakai").addClass("guanbi")
        a.attr("src","./image/guanbi.png");

        a.parent().parent().parent().children(".head_info").hide()
    }else{
        a.removeClass("guanbi").addClass("dakai")
        a.attr("src","./image/dakai.png");
        a.parent().parent().parent().children(".head_info").show();
    }

});

//$(".one_putong_zhuanjia").click(function(e){
//    var b = $(e.currentTarget)
//        a = $(".control")
//    console.log(a)
//    if(a.hasClass( "dakai" )){
//        a.removeClass("dakai").addClass("guanbi")
//        a.attr("src","./image/guanbi.png");
//
//        a.parent().parent().parent().children(".head_info").hide()
//    }else{
//        a.removeClass("guanbi").addClass("dakai")
//        a.attr("src","./image/dakai.png");
//        a.parent().parent().parent().children(".head_info").show();
//    }
//
//});