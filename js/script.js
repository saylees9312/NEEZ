$(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const $window = $(window);
  const $body = $('body');
  const $header = $('#header');
  const $headerWrap = $('.header-wrap');
  const $headerInner = $('.head-inner');
  const $intro = $('.header-intro');
  const $introBg = $('.intro-bg');
  const $introText = $('.header-intro span');
  const $logo = $('.logo');
  const $gnb = $('.gnb');
  const introTl = gsap.timeline();
  const $menuList = $('.menu');
  const $menu = $('.menu > li');
  const $subMenu = $('.sub-menu');

  const visualSwiper = new Swiper('.visual-slider', {
    loop: true,
    autoplay: true,
    duration: 4000,
    delay: 6000,
    effect: 'fade',
  });

  gsap.set($logo, {
    autoAlpha: 0,
  });
  gsap.set($menuList, {
    autoAlpha: 0,
  });

  introTl.from($intro, { default: { duration: 0.5 } });
  introTl.to($intro, { default: { duration: 0.5 } });

  introTl.to($introBg, {
    autoAlpha: 1,
    duration: 1,
    delay: 2,
  });

  introTl.from(
    $introText,
    {
      autoAlpha: 0,
    },
    '<'
  );

  introTl.from(
    '.header-intro .span1',
    {
      y: 400,
    },
    '<'
  );
  introTl.from(
    '.header-intro .span2',
    {
      y: 400,
    },
    '<'
  );
  introTl.from(
    '.header-intro .span3',
    {
      y: -400,
    },
    '<'
  );
  introTl.from(
    '.header-intro .span4',
    {
      y: -400,
    },
    '<'
  );
  introTl.to('.header-intro .span2', {
    x: -1440,
  });
  introTl.to(
    '.header-intro .span3',
    {
      x: 1450,
    },
    '<'
  );
  introTl.to('.header-intro .span1', {
    y: 354,
  });
  introTl.to(
    '.header-intro .span2',
    {
      y: 354,
    },
    '<'
  );
  introTl.to(
    '.header-intro .span3',
    {
      y: -353,
    },
    '<'
  );
  introTl.to(
    '.header-intro .span4',
    {
      y: -353,
    },
    '<'
  );
  introTl.to($introBg, {
    autoAlpha: 1,
    y: 1000,
    duration: 1,
  });
  introTl.to('.header-intro .span1', {
    x: 566,
  });
  introTl.to(
    '.header-intro .span2',
    {
      x: -863,
    },
    '<'
  );
  introTl.to(
    '.header-intro .span3',
    {
      x: 848,
    },
    '<'
  );
  introTl.to(
    '.header-intro .span4',
    {
      x: -567,
    },
    '<'
  );
  introTl.to($logo, {
    autoAlpha: 1,
  });
  introTl.to($introText, {
    autoAlpha: 0,
  });
  introTl.to(
    $introBg,
    {
      autoAlpha: 0,
    },
    '<'
  );

  introTl.set($menuList, {
    autoAlpha: 1,
  });

  gsap.to($intro, {
    scrollTrigger: {
      trigger: $intro,
      start: 'top 0',
      end: '+=300',
      // pin: true,
    },
  });

  gsap.set($logo, {
    position: 'absolute',
  });

  gsap.to($logo, {
    scrollTrigger: {
      trigger: $logo,
      start: 'top 5%',
      toggleActions: 'play none none reverse',
      scrub: 1,
    },
    scale: 0.2,
    yPercent: 0,
    left: '6%',
    top: '5%',
    duration: 0.1,
    position: 'fixed',
  });

  // gsap.to($logo, {
  //   scrollTrigger: {
  //     trigger: $logo,
  //     start: 'top=+10 0',
  //     toggleActions: 'play none none reverse',
  //   },
  // });

  gsap.to($header, {
    scrollTrigger: {
      trigger: $headerWrap,
      start: 'bottom 15%',
      scrub: 2,
    },
    position: 'fixed',
    height: 114,
    backgroundColor: '#fff',
  });

  gsap.to($headerWrap, {
    scrollTrigger: {
      trigger: $headerWrap,
      start: 'bottom 15%',
    },
    height: 114,
    PointerEvents: 'none',
    userSelect: 'none',
  });

  introTl.to($headerInner, {
    scrollTrigger: {
      trigger: $headerWrap,
      start: 'bottom 15%',
      toggleActions: 'play none none reverse',
    },
    width: 1780,
    height: 114,
  });

  introTl.to($gnb, {
    scrollTrigger: {
      trigger: $headerWrap,
      start: 'bottom 15%',
      toggleActions: 'play none none reverse',
    },
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative',
  });

  introTl.to(
    $logo,
    {
      scrollTrigger: {
        trigger: $headerWrap,
        start: 'bottom 15%',
        toggleActions: 'play none none reverse',
      },
      position: 'absolute',
      top: '50%',
      y: '-50%',
      left: 62.5,
    },
    '<'
  );

  introTl.to(
    $menuList,
    {
      scrollTrigger: {
        trigger: $headerWrap,
        start: 'bottom 15%',
        toggleActions: 'play none play reverse',
      },
      position: 'static',
      pointerEvents: 'inithal',
      userSelect: 'inithal',
    },
    '<'
  );

  $menu.on('mouseenter', function () {
    $subMenu.stop().slideUp();
    $(this).find($subMenu).stop().slideToggle();
  });

  $menu.on('mouseleave', function () {
    $subMenu.stop().slideUp();
  });

  const $product = $('.product');
  const prodTl = gsap.timeline();
  const $productBanner = $('.product-banner');
  const $productList = $('.product-list');

  prodTl.from($productBanner, {
    x: -20,
    y: 20,
    autoAlpha: 0,
  });

  prodTl.from(
    $productList,
    {
      x: 20,
      y: 20,
      autoAlpha: 0,
    },
    '<'
  );

  const $info = $('.info');
  const infoTl = gsap.timeline();
  const $titleAni = $('.title-animation');
  const $normalLeft = $('.normal-left');
  const $normalRight = $('.normal-right');
  const $animation = $('.animation');
  const $animation1 = $('.animation .ani1');
  const $animation2 = $('.animation .ani2');
  const $animation3 = $('.animation .ani3');
  const $infoText = $('.info strong');
  const $infoMore = $('.info .more-b');
  const aniTl = gsap.timeline();

  gsap.set($animation, {
    autoAlpha: 1,
  });

  infoTl.from($titleAni, {
    scrollTrigger: {
      trigger: $info,
      start: 'top 70%',
    },
    y: 100,
    autoAlpha: 1,
    duration: 1,
  });

  infoTl.from($infoText, {
    y: 100,
    autoAlpha: 0,
    duration: 1,
    delay: 0.5,
  });

  infoTl.from(
    $infoMore,
    {
      scrollTrigger: {
        trigger: $info,
        start: 'top 90%',
      },
      y: 50,
      autoAlpha: 0,
      duration: 1,
    },
    '<'
  );

  aniTl.from($animation1, {
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
    delay: 1.3,
  });

  aniTl.to(
    $normalLeft,
    {
      x: -330,
      duration: 0.3,
    },
    '<'
  );

  aniTl.to(
    $normalRight,
    {
      x: 360,
      duration: 0.3,
    },
    '<'
  );

  aniTl.to($animation1, {
    y: -100,
    autoAlpha: 0,
    duration: 0.5,
  });

  aniTl.from($animation2, {
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });

  aniTl.to(
    $normalLeft,
    {
      x: -400,
      duration: 0.3,
    },
    '<'
  );

  aniTl.to(
    $normalRight,
    {
      x: 420,
      duration: 0.3,
    },
    '<'
  );

  aniTl.to($animation2, {
    y: -100,
    autoAlpha: 0,
    duration: 0.5,
  });

  aniTl.from($animation3, {
    y: 100,
    autoAlpha: 0,
    duration: 0.5,
  });

  aniTl.to(
    $normalLeft,
    {
      x: -280,
      duration: 0.3,
    },
    '<'
  );

  aniTl.to(
    $normalRight,
    {
      x: 330,
      duration: 0.3,
    },
    '<'
  );

  aniTl.to($animation3, {
    y: -100,
    autoAlpha: 0,
    duration: 0.5,
  });

  aniTl.to($normalLeft, {
    x: 0,
    duration: 0.3,
  });

  aniTl.to(
    $normalRight,
    {
      x: 0,
      duration: 0.3,
    },
    '<'
  );

  // Add onComplete callback to restart the animation
  aniTl.call(() => {
    aniTl.restart();
  });

  const $material = $('.material');
  const materialTl = gsap.timeline();
  const $materialBg = $('.material-bg');
  const $materialCon = $('.material-con');

  gsap.from($materialBg, {
    scrollTrigger: {
      trigger: $material,
      start: 'top 60%',
      end: '-=50',
      scrub: 1,
    },
    scaleX: 0.6,
    borderRadius: '20px 20px 0 0',
  });

  const $store = $('.store');
  const $storeCon = $('.store-con');
  const $storeMore = $('.store-more');
  const storeTl = gsap.timeline();

  storeTl.from($storeCon, {
    scrollTrigger: {
      trigger: $store,
      start: 'top 70%',
    },
    y: 150,
    duration: 1,
    autoAlpha: 0,
  });

  storeTl.from(
    $storeMore,
    {
      scrollTrigger: {
        trigger: $store,
        start: 'top 70%',
      },
      y: 100,
      duration: 1,
      autoAlpha: 0,
    },
    '<'
  );
});
