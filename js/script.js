$(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const $window = $(window);
  const $body = $('body');
  const $header = $('#header');
  const $introBg = $('.header-intro');
  const $introText = $('.header-intro span');
  const introTl = gsap.timeline();
  const $menu = $('.menu > li');
  const $subMenu = $('.sub-menu');

  const visualSwiper = new Swiper('.visual-slider', {
    loop: true,
    autoplay: true,
    duration: 4000,
    delay: 6000,
    effect: 'fade',
  });
});
