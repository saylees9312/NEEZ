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
    autoAlpha: 0,
    y: 1500,
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

  introTl.set($menuList, {
    autoAlpha: 1,
  });

  gsap.to($intro, {
    scrollTrigger: {
      trigger: $intro,
      start: 'top 0',
      end: '+=300',
      pin: true,
    },
  });

  gsap.set($logo, {
    position: 'absolute',
  });

  gsap.to($logo, {
    scrollTrigger: {
      trigger: $logo,
      start: 'top 40%',
      toggleActions: 'play none none reverse',
    },
    scale: 0.2,
    top: '10%',
    left: '5%',
    duration: 1,
    position: 'fixed',
  });

  introTl.to($header, {
    scrollTrigger: {
      trigger: $headerWrap,
      start: 'bottom 15%',
    },
    position: 'fixed',
    height: 114,
  });

  introTl.to($headerInner, {
    scrollTrigger: {
      trigger: $headerWrap,
      start: 'bottom 15%',
      toggleActions: 'play none none reverse',
    },
    height: '100%',
    backgroundColor: '#fff',
    height: 114,
  });

  introTl.to(
    $logo,
    {
      scrollTrigger: {
        trigger: $headerWrap,
        start: 'bottom 15%',
      },
      position: 'absolute',
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
    },
    '<'
  );

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
    duration: 1,
  });

  aniTl.to(
    $normalLeft,
    {
      x: -330,
      duration: 1,
    },
    '<'
  );

  aniTl.to(
    $normalRight,
    {
      x: 360,
      duration: 1,
    },
    '<'
  );

  aniTl.to($animation1, {
    y: -100,
    autoAlpha: 0,
    duration: 1,
  });

  aniTl.from($animation2, {
    y: 100,
    autoAlpha: 0,
    duration: 1,
  });

  aniTl.to(
    $normalLeft,
    {
      x: -400,
      duration: 1,
    },
    '<'
  );

  aniTl.to(
    $normalRight,
    {
      x: 420,
      duration: 1,
    },
    '<'
  );

  aniTl.to($animation2, {
    y: -100,
    autoAlpha: 0,
    duration: 1,
  });

  aniTl.from($animation3, {
    y: 100,
    autoAlpha: 0,
    duration: 1,
  });

  aniTl.to(
    $normalLeft,
    {
      x: -280,
      duration: 1,
    },
    '<'
  );

  aniTl.to(
    $normalRight,
    {
      x: 330,
      duration: 1,
    },
    '<'
  );

  aniTl.to($animation3, {
    y: -100,
    autoAlpha: 0,
    duration: 1,
  });

  aniTl.to($normalLeft, {
    x: 0,
    duration: 1,
  });

  aniTl.to(
    $normalRight,
    {
      x: 0,
      duration: 1,
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
