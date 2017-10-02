$(function() {
	var $main = $(".main"),
		slideArr,
		gamelistArr,
		gamelistIndex = 0,
		footerArr;

	$(window)
		.on("resize", event => {
			$main.css("zoom", window.innerWidth / 1366);
		})
		.trigger("resize");

	slideArr = [
		{
			name: "banner_1.png",
			href: "http://tintuc.bon.club/than-tai-go-cua-x5-gia-tri-hu-tuong-minipoker/"
		}, {
			name: "banner_3.png",
			href: "http://tintuc.bon.club/san-chim-den-nhan-ngay-trieu-bon-cuc-khung/"
		}, {
			name: "banner_4.png",
			href: "http://tintuc.bon.club/phat-tai-cung-su-kien-x5-gia-tri-hu-thuong-pokemon/"
		}, {
			name: "banner_5.png",
			href: "http://tintuc.bon.club/du-day-tai-xiu-trung-ngay-iphone-8/"
		}, {
			name: "banner_6.png",
			href: "http://tintuc.bon.club/x5-hu-ninja-chem-tha-ga-mang-ve-day-qua/"
		}
	];

	createBanner(slideArr);

	function createBanner(slideArr) {
		let slideIndex = 0;

		for (let i = 0; i < slideArr.length; i++) {
			let $bannerItem, $bannerDot;

			$bannerItem = $('<div class="bannerItem"></div>');

			$bannerItem
				.css({
					backgroundImage: `url(/imgs/banner/${slideArr[i].name})`
				})
				.click(event => {
					window.open(slideArr[i].href);
				});

			$(".bannerSlide").append($bannerItem);

			$bannerDot = $('<div class="bannerDot"></div>');

			$(".bannerDots").append($bannerDot);
		}

		nextSlide();

		function nextSlide() {
			if (slideIndex < slideArr.length - 1) {
				slideIndex++;
			}
			else {
				slideIndex = 0;
			}

			$(".bannerSlide").css("transform", `translateX(${-slideIndex * $(".bannerCtn").width()}px)`);

			$(".bannerDot")
				.removeClass("act")
				.eq(slideIndex)
				.addClass("act");

			setTimeout(nextSlide, 2000);
		}
	}

	gamelistArr = [
		{
			imgName: "taiXiu",
			clickFn: taiXiuFn,
			isEnabled: true
		}, {
			imgName: "chemHoaQua",
			clickFn: chemHoaQuaFn,
			isEnabled: true
		}, {
			imgName: "miniPoker",
			clickFn: miniPokerFn,
			isEnabled: true
		}, {
			imgName: "xocDia",
			clickFn: xocDiaFn,
			isEnabled: true
		}, {
			imgName: "mauBinh",
			clickFn: mauBinhFn
		}, {
			imgName: "tienLenMienNam",
			clickFn: tienLenMienNamFn
		}, {
			imgName: "chimDien",
			clickFn: chimDienFn,
			isEnabled: true
		}, {
			imgName: "pokemon",
			clickFn: pokemonFn,
			isEnabled: true
		}, {
			imgName: "caoThap",
			clickFn: caoThapFn,
			isEnabled: true
		}, {
			imgName: "baCay",
			clickFn: baCayFn
		}, {
			imgName: "poker",
			clickFn: pokerFn
		}, {
			imgName: "sam",
			clickFn: samFn
		}
	];

	$(".gamelistSlide").css("width", Math.ceil(gamelistArr.length / 2) * 152);

	for (let gamelistObj of gamelistArr) {
		let $gamelistItem;

		$gamelistItem = $('<div class="gamelistItem"></div>');

		$gamelistItem
			.css("backgroundImage", `url(/imgs/gamelist/${gamelistObj.imgName + (gamelistObj.isEnabled ? "" : "-comingSoon")}-min.png)`)
			.click(() => {
				if (gamelistObj.isEnabled) {
					gamelistObj.clickFn();
				}
				else {}
			});

		$(".gamelistSlide").append($gamelistItem);
	}

	$(".gamelistPrev").click(event => {
		let transX,
			wView = $(".gamelistView").width();

		if (gamelistIndex > 0) {
			gamelistIndex--;
		}

		transX = -gamelistIndex * wView;

		if (transX > 0) {
			transX = 0;
		}

		$(".gamelistSlide").css("transform", `translateX(${transX}px)`);
	});

	$(".gamelistNext").click(event => {
		let transX,
			wView = $(".gamelistView").width(),
			wSlide = $(".gamelistSlide").width();

		if (gamelistIndex < Math.ceil(gamelistArr.length / 10) - 1) {
			gamelistIndex++;
		}

		transX = -gamelistIndex * wView;

		if (transX < -wSlide + wView) {
			transX = -wSlide + wView;
		}

		$(".gamelistSlide").css("transform", `translateX(${transX}px)`);
	});

	footerArr = [
		{
			imgName: "newsIcon",
			clickFn: footerNewsFn
		}, {
			imgName: "fanpageIcon",
			clickFn: footerFanpageFn
		}, {
			imgName: "guideIcon",
			clickFn: footerGuideFn
		}, {
			imgName: "callIcon",
			clickFn: footerCallFn
		}, {
			imgName: "groupIcon",
			clickFn: footerGroupFn
		}
	];

	for (let footerObj of footerArr) {
		let $footerItem;

		$footerItem = $('<div class="footerItem"></div>');

		$footerItem
			.css("backgroundImage", `url(/imgs/footer/${footerObj.imgName}.png)`)
			.click(footerObj.clickFn);

		$(".footer").append($footerItem);
	}

	function taiXiuFn() {}

	function chemHoaQuaFn() {}

	function miniPokerFn() {}

	function xocDiaFn() {}

	function mauBinhFn() {}

	function tienLenMienNamFn() {}

	function chimDienFn() {}

	function pokemonFn() {}

	function caoThapFn() {}

	function baCayFn() {}

	function pokerFn() {}

	function samFn() {}

	function footerNewsFn() {}

	function footerFanpageFn() {}

	function footerGuideFn() {}

	function footerCallFn() {}

	function footerGroupFn() {}
});
