jQuery(document).ready(function(i){if(i(window).width()>1170){var s=i(".box-header").height();i(window).on("scroll",{previousTop:0},function(){var o=i(window).scrollTop();o<this.previousTop?o>0&&i(".box-header").hasClass("is-fixed")?i(".box-header").addClass("is-visible"):i(".box-header").removeClass("is-visible is-fixed"):(i(".box-header").removeClass("is-visible"),o>s&&!i(".box-header").hasClass("is-fixed")&&i(".box-header").addClass("is-fixed")),this.previousTop=o})}i(".box-primary-nav-trigger").on("click",function(){i(".box-menu-icon").toggleClass("is-clicked"),i(".box-header").toggleClass("menu-is-open"),i(".box-primary-nav").hasClass("is-visible")?i(".box-primary-nav").removeClass("is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){i("body").removeClass("overflow-hidden")}):i(".box-primary-nav").addClass("is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){i("body").addClass("overflow-hidden")})})});