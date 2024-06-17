/* 클라이언트 ui 스크립트 */
/*var sessionUserId = '';

if(sesseionUserId == ""){
   //로그인 안했을때
	console.log("로그인x");
} else {
   //로그인 했을때
	console.log("로그인o");
}*/

// 헤더 메뉴 반응형
function responsiveStyle() {
	var windowWidth = $(window).outerWidth();
	var didScroll;
	var lastScrollTop = 0;
	var delta = 0; // 동작의 구현이 시작되는 위치

	// header 스크롤시
	// 스크롤시 클래스 추가
	$(window).scroll(function (event) {

		didScroll = true;

		setInterval(function() {
			if (didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 10);
	});

	// 동작을 구현
	function hasScrolled() {
		// 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
		var st = $(this).scrollTop();

		// 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
		if(Math.abs(lastScrollTop - st) <= delta){
			return;
		}

		// 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
		if (st > lastScrollTop){
			// Scroll Down
			$('body').addClass('scrolly');
		} else {
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('body').removeClass('scrolly');
			}
		}

		// lastScrollTop 에 현재 스크롤위치를 지정한다.
		lastScrollTop = st;
	}

	if (windowWidth < 1025) {
		//console.log('모바일,태블릿');

		//PC 이벤트 제거
		//$('.btn_searchunified, .btn_menu, .gnb_2depth > .gnb_tit').off('click');
		$('body').removeClass('on');
		$('.btn_menu').removeClass('on');
		//$('.search_area').stop().slideUp(200);
		$('.gnb_1depth > li > a').off();
		$('.gnb_submenu .gnb_2depth').off();
		$('.gnb_submenu .gnb_2depth').removeAttr('style');
		$('.gnb_2depth .grid_content').removeClass('on');
		$('.gnb_submenu .gnb_2depth .grid_content > ul').removeAttr('style');
		$('.sitemap').hide();

		// 기본 설정
		$(".btn_member").prependTo($(".gnb_submenu"));
		$(".btn_admin").prependTo($(".gnb_submenu"));
		$(".btn_log").prependTo($(".gnb_submenu"));

		// gnb
		$('.btn_menu').on('click', function(e){
			e.stopImmediatePropagation();

			if( $(this).hasClass('on') ){
				$('body').removeClass('on');
				$(this).removeClass('on');
			} else {
				$('body').addClass('on');
				$(this).addClass('on');
			}
			$('.gnb_submenu .gnb_2depth .grid_content').removeClass('on');
			//$('.gnb_submenu .gnb_2depth .grid_content > ul').stop().slideUp(200);
		});

		// 2depth
		$('.gnb_2depth .gnb_tit').on('click', function(e){
			e.stopImmediatePropagation();
			$('.gnb_2depth .grid_content').removeClass('on');
			if( $(this).next('ul').is(':visible') ){
				$(this).parent().removeClass('on').children('ul').stop().slideUp(200);
			} else {
				$('.gnb_2depth .grid_content').children('ul').stop().slideUp(200);
				$(this).parent().addClass('on').children('ul').stop().slideDown(200);
			}
		});

		// 검색창 (mobile, tablet)
		//$('.btn_searchunified').on('click', function(){
		//	// gnb 열려있을때
		//	if( $('.gnb_submenu').is(':visible') ){
		//		$('body').removeClass('on');
		//		$('.btn_menu').removeClass('on');
		//	}
		//	$('.search_area').stop().slideDown(200);
		//});
		//$('.search_area .btn_searchclose').on('click', function(){
		//	$('.search_area').stop().slideUp(200);
		//});

	} else {
//		console.log("PC");

		//TABLET,MOBILE 이벤트 제거
		//$('.btn_searchunified, .btn_menu, .gnb_2depth > .gnb_tit').off('click');
		$('body').removeClass('on');
		$('.btn_menu').removeClass('on');
		//$('.search_area').stop().slideUp(200);
		$('.gnb_submenu .gnb_2depth').removeAttr('style');
		$('.gnb_submenu .gnb_2depth .grid_content > ul').removeAttr('style');
		$('.sitemap').hide();

		// 기본 설정
		$(".btn_member").appendTo($(".header_content > .grid_content"));
		$(".btn_admin").appendTo($(".header_content > .grid_content"));
		$(".btn_log").appendTo($(".header_content > .grid_content"));

		// 1depth
		// 마우스오버시 하위메뉴 show/hide :
		$('.gnb_1depth > li').on({
			'mouseenter focus':function(){
				$('.gnb_1depth > li > a').removeClass('on');
				$(this).children('a').addClass('on');
				$('.gnb_submenu .gnb_2depth').hide();
				$('.gnb_submenu > div').eq($(this).index()).stop().slideDown(200);
			},
			'mouseleave blur':function(){
				$('.gnb_submenu .gnb_2depth').stop().slideUp(200);
				$('.gnb_1depth > li > a').removeClass('on');
			}
		})
		$('.gnb_submenu .gnb_2depth').on({
			'mouseenter focus':function(){
				$(this).stop().slideDown();
				$('.gnb_1depth > li').eq($(this).index()).addClass('on');
			},
			'mouseleave blur':function(){
				$(this).stop().slideUp();
				$('.gnb_1depth > li > a').removeClass('on');
				$('.gnb_1depth > li').removeClass('on');
			}
		})

		// gnb
		$('.btn_menu').on('click', function(e){
			//e.stopImmediatePropagation();

			$('body').addClass('on');
			//if( $('.search_area').is(':visible') ){
			//	$('.search_area').stop().slideUp(200);
			//}
			$('.sitemap').stop().slideDown(200);
		});

		$('.btn_sitemap').on('click', function(){
			$('body').removeClass('on');
			$('.btn_menu').removeClass('on');
			$('.sitemap').stop().slideUp(200);
		});

		// 검색창 (pc)
		//$('.btn_searchunified').on('click', function(){
		//	// gnb 열려있을때
		//	if( $('.gnb_submenu .gnb_2depth').is(':visible') ){
		//		$('body').removeClass('on');
		//		$('.gnb_submenu .gnb_2depth').stop().slideUp();
		//		$('.btn_menu').removeClass('on');
		//	}
		//	$('.search_area').stop().slideDown(200);
		//});
		//$('.search_area .btn_searchclose').on('click', function(){
		//	$('.search_area').stop().slideUp(200);
		//});

	}

	// gnb_3depth 있으면 클래스 추가
	$('.gnb_2depth .grid_content > ul > li').each(function(){
		var target = $(this).children('a');
		if ( target.next('.gnb_3depth').length ) {
			target.addClass('off');
		}
	});

	var scrollChk;
	var _pathLength;
	$(function(){
		$(window).scroll(function(){
			var windowWidth = $(window).outerWidth();
			var svg = $('.move_top svg');
			var top = $(this).scrollTop();
			if($(".move_top").length > 0){
				scrollChk = $(this).scrollTop();

				if(windowWidth < 480 ){
					_pathLength = 145;
					svg.width(50);
					svg.height(50);
					document.getElementById("cir").setAttribute("r", 23);
					document.getElementById("cir").setAttribute("cx", 25);
					document.getElementById("cir").setAttribute("cy", 25);
				}else {
					_pathLength = 214;
					svg.width(70);
					svg.height(70);
					document.getElementById("cir").setAttribute("r", 34);
					document.getElementById("cir").setAttribute("cx", 35);
					document.getElementById("cir").setAttribute("cy", 35);
				}
				
				$(".move_top circle").css("stroke-dasharray", _pathLength + Math.floor(($(window).scrollTop() / ($(document).height() - $(window).height())) * _pathLength));
				$(".move_top .percent").text(Math.floor($(window).scrollTop() / ($(document).height() - $(window).height()) * 100) + "% 스크롤 진행");
			}
		}).scroll();
	});
}


var resizeTimer;
$( window ).on( 'resize', function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(resizeEnd, 1000);
} );

function resizeEnd() {
	responsiveStyle();
}

// lnb 메뉴
function lnbMenu(){
	
	// // 서브 lnb 있을 경우 : 
	$(".lnb_list > ul").children('li').each(function(){
		var target = $(this);
		target.children('a').children('span').hide();
		if ( target.find('.lnb_depth2').length ) {
			$('<span>펼쳐보기</span>').appendTo( target.children('a') );
		} 
	});
	
	// // 마우스오버시 하위메뉴 show/hide :
	$(".lnb_list > ul").children('li').on({
		'mouseenter focus':function(){
			$(this).addClass('on');
			$(this).children('a').next().stop().slideDown(300);
		},
		'mouseleave blur':function(){
			$(this).removeClass('on');
			$(this).children('a').next().stop().slideUp(300);
		}
	})
	
}

// toggle class 'on'
function toggleOn(){
	$('.on_js').on('click',function(e){
		e.preventDefault();
		$(this).toggleClass('on');
	});
}

//페이지 상단 이동
function moveTop() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.move_top').addClass('on');
		} else {
			$('.move_top').removeClass('on');
		}
	});
	$('.move_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	$('.main_move_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
}

//퀵메뉴 모바일 토글버튼
function quickMenuBtn() {
	// class 'on' 붙으면 메뉴닫힘
	$('.btn_quickmenu').on('click', function(){
		$(this).parent().toggleClass('on'); 
	});
}

// tab : '.tab_js' 안에 '.tab_list_js' 와 '.tab_cnt_js'로 구분지어 사용.
function tab(){
	$('.tab_js').each(function(){
		var tabs = $(this).children('.tab_list_js').children('li');
		var panels = $(this).children('.tab_cnt_js').children('div');
		var lastTab = tabs.filter('.on');
		var lastPanel = $(lastTab.children('a').attr('href'));
		panels.hide();
		lastPanel.show();
		tabs.on('click',function(e){
			e.preventDefault();
			var thisTab = $(this);
			var thisPanel = $(thisTab.children('a').attr('href'));
			lastTab.removeClass('on');
			thisTab.addClass('on');
			lastPanel.hide();
			thisPanel.show();
			lastTab = thisTab;
			lastPanel = thisPanel;
		});
	})
}

// tab 모양만
function tabSwitch(){
	$('.tab_switch_js').each(function(){
		var tab = $(this).children('li');

		tab.on('click',function(e){
			e.preventDefault();
			tab.removeClass('on');
			$(this).addClass('on');
		})
	})
}

// 클릭한 영역으로 이동
function gotoin() {
	$('.goto_js').each(function(){
		var gotoTit = $(this).find('a');

		gotoTit.on('click',function(e){
			e.preventDefault();
			gotoTit.removeClass('on');

			var target = $(this).attr('href');

			if (target.length) {
				$(this).addClass('on');
				$('html,body').animate({
					scrollTop: $(target).offset().top - 220
				}, 'slow');
			}
		})
	})
}

// accordion : '.accordion_js' 안에 '.acd_list_js' 와 '.acd_cnt_js'로 구분지어 사용.
function accordion(){
	$('.accordion_js').each(function(){
		var tabs = $(this).find('.acd_list_js');

		$(this).find('.acd_cnt_js').hide();

		// '.on'이 붙은 아이는 페이지 진입시 열어놓기
		tabs.filter('.on').next('.acd_cnt_js').show();

		tabs.on('click',function(e){
			e.preventDefault();

			var thisTab = $(this);
			var thisPanel = thisTab.next('.acd_cnt_js');
			var notThisTab = tabs.not(thisTab);
			var notThisPanel = notThisTab.next();

			if(notThisTab){
				notThisTab.removeClass('on');
				notThisPanel.slideUp(300);
			}

			thisTab.toggleClass('on');
			thisPanel.stop().slideToggle(300);
		});
	})
}

// 상세검색창
function searchDetails(){
	var windowWidth = $(window).outerWidth();
	
	if (windowWidth < 768) {
		// console.log('tablet,mobile');
		$('.search_box3 .btn_detail').each(function(){
			var wrapper = $(this).parents('.search_box3');
			$(this).appendTo(wrapper);
		});
		$('.search_box3 .btn_detail').on('click', function(){
			$(this).prev('.search_detail').slideToggle(300);
		});
	}
	
	$('.search_box3 .btn_detail').on('click', function(){
		$(this).toggleClass('on');
		$(this).parent().next('.search_detail').slideToggle(300);
	});
}

// selectbox
function selectBox() {
	$('.select_form').each(function(){
		var label = $(this).children('label');
		var target = $(this).children('.select_custom');
		var targetName = target.children('option:selected').text();

		label.text(targetName);
		target.on('change',function(){
			var targetName = $(this).children('option:selected').text();
			label.text(targetName);
		});
	});
}

// 체크박스 토글(row) : 검색창 셀렉트박스
function checkToggleRow(){
	// 클릭시 셀렉트 박스 보여졌다 사라지는 동작
	$('.show_checktxt').on('click',function(){
		$('.check_row_wrap').slideToggle(300);
	})

	var checkBox = $('.show_checktxt');
	var check = $('input:checkbox[name=check_row]');
	var checkAll = $('input:checkbox[name=checkall_row]');
	var checkAllSelected = $('input:checkbox[name=checkall_row]:checked');
	var checkTotalCnt = $('input:checkbox[name=check_row]').length;
	var checkTxt = $('.check_row_wrap').children('.check_row').children('input:checked').next().text();

	checkBox.text(checkTxt);

	// '전체'외 나머지 선택시
	check.on('change', function(){
		var checkSelected = $('input:checkbox[name=check_row]:checked');
		var checkAllSelected = $('input:checkbox[name=checkall_row]:checked');
		var showCheck = checkSelected.next().html();

		checkBox.text(showCheck);

		if(checkSelected.length == checkTotalCnt){
			check.prop('checked',false);
			checkAll.prop('checked',true);
			checkBox.text('전체');
		}else if(checkSelected.length >= 2){
			checkAllSelected.prop('checked',false);
			checkBox.text('다중선택');
		}else if(checkSelected.length >= 1){
			checkAllSelected.prop('checked',false);
			checkBox.text(showCheck);
		}else{
			checkAll.prop('checked',true);
			checkBox.text('전체');
		}
	});

	// '전체' 선택시
	checkAll.on('change', function(){
		checkAll.prop('checked',true);
		checkBox.text('전체');
		check.prop('checked',false);
	});
}

//체크박스 토글(col) : 체크박스 버튼
function checkToggleCol(){
	$('.check_col_wrapper').each(function(){
		var checkAll = $(this).find('input[name="checkall_col"]');
		var check = $(this).find('input[name="check_col"]');
		var checkTotalCnt = check.length;

		checkAll.on('change',function(){
			check.prop('checked',false);
			$(this).prop('checked',true);
		})

		check.on('change',function(){
			var checkSelected =  check.filter(':checked');

			checkAll.prop('checked',false);
			//$(this).prop('checked',true);

			if(checkSelected.length >= checkTotalCnt){
				checkAll.prop('checked',true);
				check.prop('checked',false);
			}

			if(checkSelected.length == 0){ 
				checkAll.prop('checked',true); 
			   } 
			
		})
	})
}

//라디오 토글
function radioToggle() {
	$(".radio_toggle>input[type='radio']").click(function () {
		var previousRadio = $(this).data('storedRadio');
		if (previousRadio) {
			$(this).prop('checked', !previousRadio);
			$(this).data('storedRadio', !previousRadio);
		} else {
			$(this).data('storedRadio', true);
			$(".radio_toggle>input[type=radio]:not(:checked)").data("storedRadio", false);
		}
		if ($(this).is(":checked")){
			$(".radio_toggle").removeClass("on");
			$(this).parent().addClass("on");
		} else {
			$(this).parent().removeClass("on");
		}
	});
}

// checkbox button - 찜목록 버튼
function checkBtn(){
	$('.check_btn_wrap').each(function(){
		$(this).find('input[type="checkbox"]').change(function(){
			$(this).next().toggleClass('on');
		})
	})
}

// 클릭시 on/off 버튼 : 찜하기 버튼
function toggleBtn(){
	$('.btn_toggle').each(function(){
		$(this).on('click',function(){
			$(this).toggleClass('on');
		});
	});
}

// 글자수 표기
function letterCount(){
	$('#letter_count').keyup(function(){
		var content = $(this).val();
		$('#letter_counter').html(content.length + '/100');
	});
	$('#letter_count').keyup();
}

// 테이블 스크롤 커스텀
function tableScroll() {
	// 모바일 기기 접속 여부 체크 후 PC일때만 스크롤 mCustomScrollbar 실행
	var filter = "win16|win32|win64|mac|macintel";
	if (navigator.platform) {
		if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
			//alert('모바일');
			//테이블 스크롤  커스터마이징 해제
			$(".scrollx_tbl_xxl, .scrollx_tbl_xl, .scrollx_tbl_lg, .scrollx_tbl_md, .scrollx_tbl_sm, .scrollx_tbl_xs").mCustomScrollbar("destroy");
		} else {
			//alert('PC');
			//테이블 스크롤  커스터마이징
			$(".scrollx_tbl_xxl, .scrollx_tbl_xl, .scrollx_tbl_lg, .scrollx_tbl_md, .scrollx_tbl_sm, .scrollx_tbl_xs").mCustomScrollbar({
				axis: "x",
				theme: "dark",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				}
			});
		}
	}
}

// 브라우저 알림창
function browserAlert(){
	$(".browseralert_close").on("click", function() {
		$("#browseralert").slideUp();
	});
}

// 메인 슬라이드 - 메인 갤러리 
function gallerySlide1() {
	var mainSwiper = new Swiper('.main_swiper_startup .swiper-container', {
		slidesPerView: 3.3,
		spaceBetween: 30,
		speed: 500,
		navigation: {
			nextEl: '.main_wrap .mainpro_right',
			prevEl: '.main_wrap .mainpro_left',
		}, 
		pagination: {  
			el: '.main_swiper_startup .swiper-pagination', 
			type : 'progressbar'
		},
		breakpoints: {
			1024: {
				slidesPerView: 2.5,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			480: {
				slidesPerView: 1.2,
				spaceBetween: 10,
			}
		}
	});
}

//FAQ
function faqList() {
	$('.faq_tit').on('click', function () { 
		$(this).parents().children('.faq_box').not($(this).parent()).find('.faq_tit').removeClass('on');
		$(this).parents().children('.faq_box').not($(this).parent()).find('.faq_cnt').slideUp();

	});
} 

//footer 버튼
function footerBtn() {
	$('.footer_infowrap .btn_footer').on('click', function () { 
		if ($(this).parent().next().is(':hidden')) {
			$(this).addClass('on');
			$(this).parent().next().slideDown();
		} else {
			$(this).removeClass('on');
			$(this).parent().next().slideUp();
		}
	});
}

//찾아오시는길 버튼
function businessBtn() {
	$('.business_intro_box .btn_detail').on('click', function () { 
		if ($(this).next().is(':hidden')) {
			$(this).addClass('on');
			$(this).next().slideDown();
		} else {
			$(this).removeClass('on');
			$(this).next().slideUp();
		}
	});
}

// IE 버전 체크 (UserAgent)
var ua = navigator.userAgent.toLowerCase();
// IE7엔 브라우저 엔진명인 Trident가 없고 IE11엔 MSIE란 문자열이 없으므로 두 가지 경우를 모두 체크.
if( ua.indexOf( 'msie' ) != -1 || ua.indexOf( 'trident' ) != -1 ) {
	var version = 11;
	ua = /msie ([0-9]{1,}[\.0-9]{0,})/.exec( ua );
	if( ua )
	{
		version = parseInt( ua[ 1 ] );
	}
	var classNames = '';
	// 기존 방식에 is-ie 라는 클래스 추가
	classNames += ' is-ie';
	// 기존 방식에 현재 버전 클래스 추가
	classNames += ' ie' + version;
	for( var i = version + 1; i <= 11; i++ ) {
		classNames +=  ' lt-ie' + i;
	}
	// html 태그에 클래스 추가
	document.getElementsByTagName( 'html' )[ 0 ].className += classNames;
}

$(document).ready(function () {

	// toggle class 'on' : sitemap
	toggleOn();

	//gnb 메뉴 반응형 동작
	responsiveStyle();

	//페이지 상단으로 이동
	moveTop();

	//퀵메뉴 모바일 토글버튼
	quickMenuBtn(); 

	//lnb 메뉴
	lnbMenu();

	//tab
	/*tabList();*/

	// tab 기본
	tab();

	// tab 모양만
	tabSwitch();

	// 클릭한 영역으로 이동
	gotoin();

	// accordion
	accordion();

	//tab 연동
	/*tabgoto();*/

	// 상세검색창
	searchDetails();

	// selectbox
	selectBox();

	// 체크박스 토글(row) : 검색창 셀렉트박스
	checkToggleRow();

	//체크박스 토글(col) : 체크박스 버튼
	checkToggleCol();

	//라디오 토글
	radioToggle();

	// checkbox button - 찜목록
	checkBtn();

	// 클릭시 on/off 버튼 : 찜하기 버튼
	toggleBtn();

	// 글자수 표기
	letterCount();

	//FAQ
	faqList();

	//footer 버튼
	footerBtn();

	//찾아오시는길 버튼
	//businessBtn();

	// 브라우저 알림창
	browserAlert();

	// 메인 슬라이드 - 메인 갤러리 
	//gallerySlide1();

	// select2 설정
	$(".sel_search_row select").select2({
		formatNoMatches: function() {
			return '결과가 없습니다.';
		}
	});

	// 이미지 라이트박스
	$('.openimg').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		callbacks: {
			resize: changeImgSize,
			imageLoadComplete: changeImgSize,
			change: changeImgSize
		}
	});

	function changeImgSize() {
		var img = this.content.find('img');
		img.css('max-height', '100%');
		img.css('height', 'auto');
		img.css('width', 'auto');
		img.css('max-width', '810px');
	}

});

$(window).on("load", function () {
	tableScroll();
});

// outline 설정 - 키보드로 접근시엔 아웃라인을 보여주고 마우스로 접근할때는 아웃라인을 없애줌
(function (d) {
	var style_element = d.createElement('STYLE'),
		dom_events = 'addEventListener' in d,
		add_event_listener = function (type, callback) {
			// Basic cross-browser event handling
			if (dom_events) {
				d.addEventListener(type, callback);
			} else {
				d.attachEvent('on' + type, callback);
			}
		},
		set_css = function (css_text) {
			// Handle setting of <style> element contents in IE8
			!!style_element.styleSheet ? style_element.styleSheet.cssText = css_text : style_element.innerHTML = css_text;
		};

	d.getElementsByTagName('HEAD')[0].appendChild(style_element);

	// Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
	/*add_event_listener('mousedown', function () {
		set_css(':focus{outline:0}::-moz-focus-inner{border:0;}');
	});*/
	add_event_listener('keydown', function () {
		set_css(':focus{outline:dotted 1px #193296}::-moz-focus-inner{border:dotted 1px #193296;}');
	});
})(document);


