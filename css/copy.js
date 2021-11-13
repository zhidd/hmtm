!
function(e) {
	"use strict";
	 
	function r(e) {
		 console.log(99);
		var t = e.target || e.srcElement,
		o = document.documentElement.scrollTop;
		if (t.className.indexOf(m) > -1) {
			e.preventDefault();
			var n = document.getElementById("hljs-copy-el");
			n || (n = document.createElement("textarea"), n.style.position = "absolute", n.style.left = "-9999px", n.style.top = o + "px", n.id = "hljs-copy-el", document.body.appendChild(n)),
			n.textContent = e.currentTarget.innerText.replace(/[\u00A0]/gi, " "),
			a("#hljs-copy-el");
			try {
				var r = document.execCommand("copy");
				n.remove(),
				t.dataset.title = r ? g: f,
				r && setTimeout(function() {
					t.dataset.title = u
				},
				1e3)
			} catch(i) {
				t.dataset.title = f
			}
		}
	}
	function i(e) {
		var t = e.target || e.srcElement,
		o = document.documentElement.scrollTop;
		if (t.className.indexOf(m) > -1) {
			e.preventDefault();
			var n = document.getElementById("hljs-copy-el");
			n || (n = document.createElement("textarea"), n.style.position = "absolute", n.style.left = "-9999px", n.style.top = o + "px", n.id = "hljs-copy-el", document.body.appendChild(n)),
			n.textContent = e.currentTarget.parentNode.innerText.replace(/[\u00A0]/gi, " "),
			a("#hljs-copy-el");
			try {
				var r = document.execCommand("copy");
				n.remove(),
				t.dataset.title = r ? g: f,
				r && setTimeout(function() {
					t.dataset.title = u
				},
				1e3)
			} catch(i) {
				t.dataset.title = f
			}
		}
	}
	function a(e) {
		if (e = "string" == typeof e ? document.querySelector(e) : e, navigator.userAgent.match(/ipad|ipod|iphone/i)) {
			var t = e.contentEditable,
			o = e.readOnly;
			e.contentEditable = !0,
			e.readOnly = !0;
			var n = document.createRange();
			n.selectNodeContents(e);
			var r = window.getSelection();
			r.removeAllRanges(),
			r.addRange(n),
			e.setSelectionRange(0, 999999),
			e.contentEditable = t,
			e.readOnly = o
		} else e.select()
	}
	function c() {
		var e = document.createElement("style");
		e.type = "text/css",
		e.innerHTML = ["pre{position: relative}", "pre:hover .code-full-screen{display:block !important;}", ".code-full-screen{", "display: none !important;", "position: absolute;", "right: 4px;", "top: 4px;", "width: 24px !important;", "height: 24px !important;", "margin: 4px !important;", "}", "pre:hover .{0}{display: block}", ".{0}{", "display: none;", "position: absolute;", "right: 4px;", "top: 4px;", "font-size: 12px;", "color: #ffffff;", "background-color: #9999AA;", "padding: 2px 8px;", "margin: 4px !important;", "border-radius: 4px;", "cursor: pointer;", " box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05);", "}", ".{0}:after{", "content: attr(data-title)", "}", "code .{0}{", "margin: 2px 8px;", "}"].join("").format(m),

        //e.innerHTML = ["pre{position: relative}", "pre:hover .code-full-screen{display:none !important;}", ".code-full-screen{", "display: none !important;", "position: absolute;", "right: 4px;", "top: 3px;", "width: 24px !important;", "height: 24px !important;", "margin: 4px !important;", "}", "pre:hover .{0}{display: block}", ".{0}{", "display: none;", "position: absolute;", "right: 4px;", "top: 4px;", "font-size: 12px;", "color: #ffffff;", "background-color: #9999AA;", "padding: 2px 8px;", "margin: 8px;", "border-radius: 4px;", "cursor: pointer;", " box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05);", "}", ".{0}:after{", "content: attr(data-title)", "}", "code .{0}{", "margin: 2px 8px;", "}"].join("").format(m),
		document.getElementsByTagName("head")[0].appendChild(e)
	}
	function d() {
		"complete" === document.readyState ? l() : e.addEventListener("DOMContentLoaded", l)
			 
	}
	function l() {
		 
		try {
			var e;
			if ("ckeditor" == h) {
				e = document.querySelectorAll("code.hljs");
				for (var t in e) e.hasOwnProperty(t) && s(e[t].parentNode)
			} else {
				e = w;
				for (var t in e) e.hasOwnProperty(t) && s(e[t])
			}
		} catch(o) {
			console.error("CopyButton error: ", o)
		}
	}
	 
	function s(e) {
		var t = "1001.2101.3001.4259";
		if ("object" == typeof e && null !== e) {
			var o = ".signin(event)",
			n = "hljs",
			r = ".copyCode(event)";
			"mdeditor" === h && (n = "mdcp"),
			r = n + r,
			x && (r = n + o, t = "1001.2101.3001.4334"),
			// e.innerHTML = e.innerHTML + ('<img class="code-full-screen app_remove_content no-enlarge-img" src="' + blogStaticHost + 'dist/app/img/codeAmplify.png"><div class="{0} {2}" data-title="{1}" data-report-click=\'{"spm":"' + t + "\"}'></div>").format(m, u, y) 
             e.innerHTML = e.innerHTML + ('<div class="{0} {2}" data-title="{1}" data-report-click=\'{"spm":"' + t + "\"}'></div>").format(m, u, y),
			"hljs" === n ? e.querySelector(".hljs-button").setAttribute("onclick", r) : (e.setAttribute("onclick", r), e.style.position = "unset")
		}
	}
 

	var m = "hljs-button",
	u = "复制",
	f = "复制失败",
	g = "复制成功",
	h = void 0,
	y = "",
	x = !1;
	 
	String.prototype.format = String.prototype.f = function() {
		var e = arguments;
		return !! this && this.replace(/\{(\d+)\}/g,
		function(t, o) {
			return e[o] ? e[o] : t
		})
	};
			 
	var w = document.querySelectorAll("pre  code");
	//console.log(document.querySelectorAll("pre code"));
  
	document.querySelectorAll("div.htmledit_views").length > 0 ? (e.hljs.initCopyButtonOnLoad = d, e.hljs.addCopyButton = s, e.hljs.copyCode = i,  d(), c(), h = "ckeditor") :w.length > 0  && (window.mdcp ?window.mdcp : window.mdcp = {},
	window.mdcp.copyCode = r,  d(), c(), h = "mdeditor") 
} (window);



  

  !function(t,e,i){if(void 0===t.csdn&&(t.csdn={}),!jQuery)return!1;t.csdn.fixedSidebar=function(e){function o(){if("right"===r.direction)var e=r.mainBox.offset().left+r.mainBox.width()-i(t).scrollLeft()+parseInt(r.sidebarLeftMargin);else var e=10;!function(){var o=i(t).scrollTop();s+r.sidebar.height()<=i(t).height()?o>s?r.sidebar.css({position:r.position,top:parseInt(r.top)+"px","z-index":parseInt(r.zIndex),width:n,bottom:"auto"}):r.sidebar.removeAttr("style"):r.mainBox.height()>r.sidebar.height()?r.targetBox.height()<=i(t).height()&&r.targetBox.height()+s-o<=i(t).height()?o>s?r.sidebar.css({position:r.position,top:parseInt(r.top)+"px","z-index":parseInt(r.zIndex),width:n,bottom:"auto"}):r.sidebar.removeAttr("style"):r.targetBox.height()>i(t).height()&&r.targetBox.height()-o+r.mainBox.offset().top<=i(t).height()?r.sidebar.css({position:r.position,bottom:parseInt(r.bottom)+"px","z-index":parseInt(r.zIndex),width:n,top:"auto"}):r.sidebar.removeAttr("style"):r.sidebar.removeAttr("style"),a=!0}()}var r={targetBox:i(".persion_article"),mainBox:i("main"),sidebar:i("aside"),direction:"right",position:"fixed",top:0,bottom:0,zIndex:99,sidebarRightMargin:8,sidebarLeftMargin:15};e&&i.extend(r,e);var n=r.sidebar.width(),s=r.targetBox.offset().top,a=!0;o(),i(t).on("scroll",function(){a&&(setTimeout(o,100),a=!1)}),i(t).on("resize",function(){o()})}}(window,document,jQuery);

   $(document).ready(fixedSidebarInButton);
   function fixedSidebarInButton() {
    function t() {
        var t = $(".csdn-side-toolbar");
        if (0 === t.length)
            var e = setInterval(function() {
                t = $(".csdn-side-toolbar"),
                t.length > 0 && (t.css("left", i() + "px"),
                clearInterval(e))
            }, 200);
        else
            t.css("left", i() + "px")
    }
    function i() {
        return  $(".middle-column").offset().left + $(".middle-column").width() +$(".right-column").width()
    }
    window.csdn.fixedSidebar({
        targetBox: $(".blog_container_aside"),
        mainBox: $(".middle-column"),
        sidebar: $(".blog_container_aside"),
        direction: "left",
        position: "fixed",
        bottom: 0,
        zIndex: 99,
        sidebarRightMargin: 8,
        sidebarLeftMargin: 8
    }),
    t(),
    $(window).resize(function() {
        t()
    }) 
}
 
  
  function hh(){
  document.body.scrollTop=document.documentElement.scrollTop=0
  }
 