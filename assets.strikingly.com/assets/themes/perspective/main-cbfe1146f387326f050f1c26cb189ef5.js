(function() {
var e, t, n, o;
$B.setCustomization("pageKeybinding", !0), o = [], $.fn.adjustBg = function(e, t) {
var n, o;
return null == t && (t = 50), o = $(this), n = o.css("background-size"), o.attr("data-bg-offset") && (bgOffset += parseFloat(o.attr("data-bg-offset"))), 
o.css({
backgroundPosition:"49.5% " + e + "%"
});
}, n = function() {
var e, t;
return t = $(document).scrollTop(), e = 0, $(".slides .slide").each(function(n, i) {
return o[n] && o[n].top <= t && t <= o[n].bottom && ($(i).find(".widecontainer").adjustBg((t - o[n].top) / (o[n].bottom - o[n].top) * 100), 
e += 1, 2 === e) ? !1 :void 0;
});
}, t = function() {
var e, t, n;
return n = $(window).height(), e = Math.max(n, 480), t = 180, $(".resize").each(function() {
var o, i, r, a, s, l;
return s = $(this), l = 0, o = s.find(".container").eq(0), i = s.find(".container").eq(1), 
o.length && "" !== $.trim(o.text()) && (l += o.outerHeight(!1)), i.length && "" !== $.trim(i.text()) && (l += i.outerHeight(!1)), 
0 === s.find(".content-box").length && (l += t), a = parseInt(s.css("padding-top")) + parseInt(s.css("padding-bottom")), 
s.find(".box").removeClass("static"), l > e ? (s.find(".box").addClass("static"), 
s.css({
height:"auto",
"min-height":0
})) :Bobcat.TH.Util.isSmallScreen() ? (r = 0 === s.offset().top ? n - a :n - a - 100, 
s.css({
height:"auto",
"min-height":r
})) :s.css({
height:"auto",
"min-height":e - a
}), s.css("height", s.css("height"));
}), $('.box.vertical-middle:not(".static")').each(function() {
var e, t;
return e = $(this).find(".container").outerHeight(!1), t = $(this).closest(".resize").outerHeight(), 
$(this).css({
top:.5 * (t - e) + "px"
});
}), o = [], $(".slides .slide").each(function(t, i) {
var r, a;
return a = $(i), e = a.height(), r = a.offset().top, o[t] = {
top:r - n,
bottom:r + e
};
});
}, $(window).resize(t), e = function() {
var e;
return e = setInterval(function() {
var t;
if ($("#avpw_canvas_element").length) try {
return Aviary.Events.trigger("layout:resize");
} catch (n) {
t = n;
} finally {
clearInterval(e);
}
}, 200), setTimeout(function() {
return clearInterval(e);
}, 2e4);
}, window.runAfterDomBinding.add("perspective", function() {
return Bobcat.TH.Core.applyTouchNav(), $("#perspective-cover").css("opacity", 0), 
setTimeout(function() {
return $("#perspective-cover").hide();
}, 400), t(), setTimeout(t, 1e3), setTimeout(t, 2e3), $B.TH.Util.isMobile() || $B.TH.Util.isSmallScreen() ? $("ul.slides").addClass("mobile") :$(window).scroll(n), 
window.edit_page.Event.subscribe("Slide.afterAdd", function() {
return t();
}), window.edit_page.Event.subscribe("Slide.afterDelete", function() {
return t();
}), window.edit_page.Event.subscribe("Slide.afterReorder", function() {
return t();
}), window.edit_page.Event.subscribe("RichTextComponent.afterTextChange", function() {
return t();
}), window.edit_page.Event.subscribe("Site.recalculateLayout", function() {
return t();
}), window.edit_page.Event.subscribe("ImageComponent.openEditImagePanel", e), window.edit_page.Event.subscribe("Iframe.Resized", function() {
return $(window).resize();
});
});
}).call(this);