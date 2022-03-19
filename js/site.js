$(document).ready(function () {
	skipContents();

	//msieversion()
	$.exists = function (selector) {
		return $(selector).length > 0;
	};

	//GNB
	$("#lnb").on("mouseenter ", function () {
		$(".nav-menu ").addClass("selected");
		$("header").addClass("focused");
	});

	$(".nav-item ").on("mouseenter", function () {
		var idx2;

		idx2 = $(this).index();
		$(".nav-item ").removeClass("over");
		$(this).addClass("over");

		$(".subnav-depth01 > li").removeClass("on");
		$(".subnav-depth01 > li").eq(idx2).addClass("on");
	});
	$(".subnav-depth01 > li ").on("mouseenter", function () {
		$(".subnav-depth01 li ").removeClass("on");

		var idx = $(this).index();
		$(this).addClass("on");

		$("#lnb .nav-item").removeClass("over");
		$("#lnb .nav-item").eq(idx).addClass("over");
	});

	$("#lnb ").on("mouseleave", function () {
		$(".nav-menu ").removeClass("selected");
		$("#lnb .nav-item").removeClass("over");
		$("header").removeClass("focused");
		$(".subnav-depth01 > li").removeClass("on");
	});

	//mobile nav-item click
	$(".m-nav-item > a").on("click", function (e) {
		e.preventDefault();

		$(".m-nav-item").removeClass("on");
		$(this).parent().addClass("on");
		$(".m-sub-nav").stop().slideUp();
		$(this).stop().siblings(".m-sub-nav").stop().slideDown();
	});

	//nav icon click
	$(".m-nav-ico").on("click", function () {
		if ($(this).hasClass("m-open")) {
			$(".m-nav").hide();
		} else {
			$(".m-nav").show();
		}
	});

	//close icon click
	$(".close-allmenu, .close-mobilenav").on("click", function (e) {
		e.preventDefault();
		$(".m-nav").hide();
	});

	$(window).on("resize", function () {
		subNav();
	});

	//IE VERSION CHECK
	//aos plugin IE10 이하는 AOS 스크롤이펙트 적용 안함 default - visible
	//AOS.init();
	function msieversion() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");

		if (msie > 0) {
			$("[data-aos^=fade][data-aos^=fade]").css({
				opacity: 1,
				transform: "none",
			});
			//console.log("IE10");
		} else {
			AOS.init({
				startEvent: "DOMContentLoaded",
				once: false,
				duration: 800,
				//offset: 200,
				delay: 150,
				anchorPlacement: "top-bottom",
			});
		}
	}

	//TAB
	if ($.exists(".tab-top")) {
		tabs();
	}

	//SUBPAGE NAVIGATION
	subNav();

	//--SUBPAGE NAVIGATION
	var mainVisual = new Swiper(".main-visual", {
		effect: "fade",
		autoplay: {
			delay: 3000,
		},
		speed: 500,
		loop: true,
		navigation: {
			nextEl: ".v-next",
			prevEl: ".v-prev",
		},
		pagination: {
			el: ".v-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				var idxCustom = "0" + (index + 1);
				//console.log(idxCustom);
				return '<span class="' + className + '">' + idxCustom + "</span>";
			},
		},
	});

	var mainPrd = new Swiper(".prd-slider", {
		observer: true,
		observeParents: true,
		speed: 500,
		loop: true,
		centeredSlides: false,
		navigation: {
			nextEl: ".prd-next",
			prevEl: ".prd-prev",
		},
		slidesPerView: 1,
		breakpoints: {
			1200: {
				slidesPerView: 3,
				centeredSlides: true,
			},

			860: {
				slidesPerView: 2,
				centeredSlides: true,
			},
		},
	});

	var subPrdThumb = new Swiper(".prd-thumblist", {
		//spaceBetween: 10,
		slidesPerView: 2,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var subPrdList = new Swiper(".prd-thumb-slider", {
		//spaceBetween: 10,
		thumbs: {
			swiper: subPrdThumb,
		},
	});

	//--SUBPAGE NAVIGATION
	var mainVisual = new Swiper(".philosophy", {
		effect: "fade",
		autoplay: {
			delay: 3000,
		},
		speed: 500,
		loop: true,
		navigation: {
			nextEl: ".ph-next",
			prevEl: ".ph-prev",
		},
	});

	$(".btn-top").on("click", function () {
		$("html, body").stop().animate(
			{
				scrollTop: 0,
			},
			500
		);
	});

	//ALLMENU
	var allmenu = document.querySelector(".m-nav");
	$(".mobile-all").on("click", function () {
		$(".m-nav").stop().fadeIn();
	});

	$(".pc-all").on("click", function () {
		$(".sitemap").stop().fadeIn();
	});

	$(".close-sitemap").on("click", function () {
		$(".sitemap").stop().fadeOut();
	});

	$(window).on("click", function (e) {
		if (e.target === allmenu) {
			$(".m-nav").stop().fadeOut();
		}
	});

	$(".m-nav-item").on("click", function () {
		$(".m-nav-sub").stop().slideUp();
		$(this).addClass("on").find(".m-nav-sub").stop().slideDown();
	});

	//header-search
	$(".search-icon").on("click", function () {
		$(".main-search").stop().fadeIn();
	});
	$(".close-search").on("click", function () {
		$(".main-search").stop().fadeOut();
	});

	//lang select

	$(".lang-select").on("click", function () {
		$(this).toggleClass("on");
	});
});

//SKIP TO CONTENT
function skipContents() {
	$(".skiptoContent").focusin(function () {
		$(this).animate(
			{
				top: 0,
				height: 30,
				opacity: 1,
			},
			0
		);
	});
	$(".skiptoContent").focusout(function () {
		$(this).animate(
			{
				top: -30,
				height: 0,
				opacity: 0,
			},
			150
		);
	});
}
//Notice
function tabs() {
	$(".tab-top li").click(function (e) {
		if ($(".tab-top li").length != $(".tab-cnt").length) return;

		e.preventDefault();
		var thisIndex = $(this).parent().find("li").index(this);
		$(this)
			.parent()
			.parent()
			.parent()
			.find("div.tab-cnt")
			.removeClass("active");

		$(this).parent().find("li").removeClass("active");
		$(this)
			.parent()
			.parent()
			.parent()
			.find("div.tab-cnt")
			.eq(thisIndex)
			.addClass("active");
		$(this).addClass("active");
		return false;
	});
}

function subNav() {
	if ($(window).width() > 641) {
		$(".sub-depth .current").on("mouseenter focusin", function (e) {
			e.preventDefault();
			$(this).parent().find("ul").stop().slideDown(200);
			$(this).parent().addClass("on");
		});
		$(".sub-depth").on("mouseleave", function () {
			if ($(this).hasClass("on")) {
				$(this).find("ul").stop().slideUp(200);
				$(this).removeClass("on");
			}
		});
	}
}
