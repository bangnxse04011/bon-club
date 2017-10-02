$(function() {
	var $main = $(".main"),
		slideArr,
		gamelistArr;

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
			let $bannerItem;

			$bannerItem = $("<div class='bannerItem'></div>");

			$bannerItem
				.css({
					backgroundImage: `url(/imgs/banner/${slideArr[i].name})`
				})
				.click(event => {
					window.open(slideArr[i].href);
				});

			$(".bannerSlide").append($bannerItem);
		}

		nextSlide();

		function nextSlide() {
			if (slideIndex < slideArr.length - 1) {
				slideIndex++;
			}
			else {
				slideIndex = 0;
			}

			$('.bannerSlide').css("marginLeft", -slideIndex * $('.bannerCtn').width());

			setTimeout(nextSlide, 2000);
		}
	}

	gamelistArr = [
		{
			img: "taiXiu",
			clickFn: taiXiuFn,
			isEnabled: true
		}, {
			img: "chemHoaQua",
			clickFn: chemHoaQuaFn,
			isEnabled: true
		}, {
			img: "miniPoker",
			clickFn: miniPokerFn,
			isEnabled: true
		}, {
			img: "tienLen",
			clickFn: tienLenFn,
		}, {
			img: "xocDia",
			clickFn: xocDiaFn
		}, {
			img: "mauBinh",
			clickFn: mauBinh
		}, {
			img: "chimDien",
			clickFn: chimDienFn,
			isEnabled: true
		}, {
			img: "pokemon",
			clickFn: pokemonFn,
			isEnabled: true
		}, {
			img: "caoThap",
			clickFn: caoThapFn,
			isEnabled: true
		}, {
			img: "baCay",
			clickFn: baCayFn
		}, {
			img: "poker",
			clickFn: pokerFn
		}
	];

	$(".gamelistSlide").css("width", Math.ceil(gamelistArr.length / 2) * 160);

	for (let gamelistObj of gamelistArr) {
		let $gamelistItem;

		$gamelistItem = $("<div class='gamelistItem'></div>");

		$gamelistItem
			.css("backgroundImage", `url(/imgs/gamelist/${gamelistObj.img + (gamelistObj.isEnabled ? "" : "-comingSoon")}.png)`)
			.click(() => {
				if (gamelistObj.isEnabled) {
					gamelistObj.clickFn();
				}
				else {}
			});

		$(".gamelistSlide").append($gamelistItem);
	}

	function taiXiuFn() {}

	function chemHoaQuaFn() {}

	function miniPokerFn() {}

	function tienLenFn() {}

	function xocDiaFn() {}

	function mauBinhFn() {}

	function chimDienFn() {}

	function pokemonFn() {}

	function caoThapFn() {}

	function baCayFn() {}

	function pokerFn() {}
});
