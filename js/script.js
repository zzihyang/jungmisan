$(function () {

  //헤더 스크립트

  const header = $('#header')
  const gnb = $('#gnb')
  const gnbLi = gnb.children('li')
  const depth1 = gnbLi.children('a.depth1')
  const depth2 = gnbLi.children('.depth2')

  console.log(depth2)

  gnbLi.on('mouseenter', function () {
    header.addClass('on');
    depth2.stop().slideDown(200)
  })
  gnbLi.on('mouseleave', function () {
    header.removeClass('on');
    depth2.stop().slideUp(200)
  })



  /* 소식알림 탭 메뉴 */

  const tabLi = $('#news_wrap .tab_menu li')
  const tabNewws = $('#news_wrap .tab_news .news')

  tabLi.on('click', function (e) {
    e.preventDefault();
    const href = $(this).children().attr('href')
    tabNewws.hide(200)
    $(href).show(200)

    tabLi.removeClass('on')
    $(this).addClass('on')
  })

  //aside 퀵메뉴 바 스크롤 시 나타내기
  const divAside = $('.aside')
  const aside = $('aside.quick_m')
  const asideBtn = aside.children('button')

  $(window).scroll(function () {
    const position = $(this).scrollTop();
    const vh = $(this).height();

    if (position >= vh) {
      divAside.stop().fadeIn()
    } else {
      divAside.stop().fadeOut()
    }
  })

    //aside 퀵메뉴 버튼 스크립트

    asideBtn.click(function () {
      console.log('e닫을래요')
      aside.toggleClass('close')

      const condition2 = $(this).children('span').text() == '퀵메뉴 열림';

      if (condition2) {
        $(this).children('span').text('퀵메뉴 닫힘')
      } else {
        $(this).children('span').text('퀵메뉴 열림')
      }
    })


  //메인 스와이퍼
  const swiper1 = new Swiper('#main_slide', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //프로그램 스와이퍼
  const swiper2 = new Swiper("#banner_swiper", {
    slidesPerView: 3,
    spaceBetween: 85,
    allowTouchMove: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    cssMode: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


})


