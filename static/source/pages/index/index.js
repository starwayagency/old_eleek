/*! For license information please see index.js.LICENSE.txt */
!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=36)}([function(e,t,n){"use strict";n(1)},function(e,t,n){},function(e,t,n){"use strict";n(3)},function(e,t,n){},function(e,t,n){"use strict";n(5);$(".btn-lean_more").on("mouseenter",(function(){$(this).addClass("is-focus-over"),$(this).removeClass("is-focus-out")})),$(".btn-lean_more").on("mouseleave",(function(){$(this).addClass("is-focus-out"),$(this).removeClass("is-focus-over")})),$(".absolute_product_arrow").hover((function(){$(this).removeClass("out").addClass("over")}),(function(){$(this).removeClass("over").addClass("out")})),$(".btn_standart_black").hover((function(){$(this).removeClass("out").addClass("over")}),(function(){$(this).removeClass("over").addClass("out")})),$(".btn_standart_yellow").hover((function(){$(this).removeClass("out").addClass("over")}),(function(){$(this).removeClass("over").addClass("out")})),$(".btn_standart_transparent").hover((function(){$(this).removeClass("out").addClass("over")}),(function(){$(this).removeClass("over").addClass("out")}))},function(e,t,n){},function(e,t,n){"use strict";var a;n(7);switch($(".mobile").mask("+38(999) 99 99 999"),o()){case"uk":"Поле повинно містити лише букви",a="Поле повинно містити більше 6 символів";break;case"ru":"Поле должно содержать только буквы",a="Поле должно содержать более 6 символов";break;case"en":"The field must contain only letters",a="Field must contain more than 6 characters";break;default:"Поле повинно містити лише букви.",a="Поле повинно містити більше 6 символів"}function o(){return location.pathname.split("/")[1]}function i(e,t,n){var a=!1;n=n;if($(e).length>0){var i={};switch(o()){case"uk":i.required="Поле обов'язково для заповнення",i.email="Поле має містити email";break;case"ru":i.required="Поле обязательно для заполнения",i.email="Поле должно содержать email";break;case"en":i.required="The field is required",i.email="The field must contain an email";break;default:i.required="Поле обов'язково для заповнення.",i.email="Поле має містити email."}$(e).validate({errorPlacement:function(e,n){console.log(n),$(n).parents(t).append($(e))},rules:{email:{required:!0,email:!0},name:{required:!0,lettersonly:!0},first_name:{required:!0,lettersonly:!0},contact_name:{required:!0,lettersonly:!0},username:{required:!0},adress:{required:!0},old_password:{required:!0},pass1:{required:!0,minLength:!0},address:{required:!0,lettersonly:!0},phone_number:{required:!0},phone:{required:!0},password:{required:!0},password2:{required:!0,minLength:!0},pas1:{required:!0},pas2:{required:!0}},messages:{email:{required:i.required,email:i.email},name:{required:i.required},first_name:{required:i.required},address:{required:i.required},adress:{required:i.required},old_password:{required:i.required},pass1:{required:i.required},username:{required:i.required},phone_number:{required:i.required},phone:{required:i.required},password:{required:i.required},password2:{required:i.required},pas1:{required:i.required},pas2:{required:i.required}},submitHandler:function(e){console.log("form: ",e),event.preventDefault(),$(".load_spin").addClass("load_spin_active");var t=$(e).serializeArray(),o=e.action,i={};$(t).each((function(e,t){i[t.name]=t.value}));var r=!0;1==$(".login_pass2").length&&(r=!1,$(".login_pass").val()==$(".login_pass2").val()?($(".pass_checked_error").text(""),r=!0):(r=!1,event.preventDefault(),$(".load_spin").removeClass("load_spin_active"),$.fancybox.close(),$(".pass_checked_error").text("паролі не співпадають")));if(console.log(i),""!=o&&1==r){console.log("url_form: ",o);var s="POST";$(e).hasClass("PATCH")?(s="PATCH",a=!0):(s="POST",a=!1),fetch(o,{method:s,body:new URLSearchParams($.param(i))}).then((function(e){return e.json()})).then((function(t){console.log("data: ",t),console.log("tut?"),"OK"==t.status&&void 0!==t.status&&function(){console.log(133313),console.log("modal: ",a),$(".load_spin").removeClass("load_spin_active"),1==a?(console.log("tut"),$.fancybox.open({src:"#modal_form_change_profile"}),setTimeout((function(){$.fancybox.close({src:"#modal_form_change_profile"})}),1500)):$.fancybox.close();if(!0===n){$.fancybox.open({src:"#modal-form_true"}),setTimeout((function(){$.fancybox.close({src:"#modal-form_true"})}),1500);var t=$(e)[0].querySelectorAll("input");if(t.length>0){for(var o in t)t.hasOwnProperty(o)&&/^0$|^[1-9]\d*$/.test(o)&&o<=4294967294&&"submit"!==t[o].type&&(t[o].value="");var i=$(e)[0].querySelectorAll("textarea");i.length>0&&(i[0].value="")}}}(),"BAD"==t.status&&void 0!==t.status&&($(".load_spin").removeClass("load_spin_active"),$(".error_block_false").text("Невірний логін або пароль"),$(".login_checked_error").text(t.error_fields.username),$(".login_checked_error").text(t.error_fields.email),console.log("$(): ",$(".login_checked_error"))),void 0!==t.url&&""!=t.url&&(location.href=t.url)}))}else console.log("forn_not_actions")}})}}jQuery.validator.addMethod("minLength",(function(e,t){return!(e.length<=6)}),a),$((function(){i(".footer_form",".inp-vak-wrap",!0),i("#comment_form",".inp-vak-wrap",!1),i(".registery_form",".inp-vak-wrap",!1),i(".drive__form_last",".inp-vak-wrap",!0),i(".form_cons",".inp-vak-wrap",!0),i("#form_qustion",".inp-vak-wrap",!0),i("#form_cons",".inp-vak-wrap",!0)}))},function(e,t,n){},function(e,t,n){"use strict";n(9);sessionStorage.setItem("admin_panell",1),console.log("finish");var a=!0,o=document.querySelectorAll(".db_content"),i=sessionStorage.getItem("admin_panell");console.log("admin_check: ",i),0==i&&(a=!1,$(".admin_button").attr("data-title","Виключити редагування"),$(".admin_checkbox").attr("checked",""),$(".db_content").addClass("db_content_active"),i=sessionStorage.getItem("admin_panell"),o.forEach((function(e,t,n){var a=$(e).data("admin_url"),o=document.createElement("div");o.classList.add("db_hidden_content");var i=document.createElement("a");i.classList.add("db_hidden_link"),i.setAttribute("href",a),i.textContent="Редагувати",o.appendChild(i),e.appendChild(o)}))),$(".svg_power").on("click",(function(){a?(a=!1,$(".admin_button").attr("data-title","Виключити редагування"),$(".db_content").addClass("db_content_active"),sessionStorage.setItem("admin_panell",0),i=sessionStorage.getItem("admin_panell"),o.forEach((function(e,t,n){var a=$(e).data("admin_url"),o=document.createElement("div");o.classList.add("db_hidden_content");var i=document.createElement("a");i.classList.add("db_hidden_link"),i.setAttribute("href",a),i.textContent="Редагувати",o.appendChild(i),e.appendChild(o)}))):($(".admin_button").attr("data-title","Включити редагування"),$(".db_content").removeClass("db_content_active"),a=!0,sessionStorage.setItem("admin_panell",1),i=sessionStorage.getItem("admin_panell"),o.forEach((function(e,t,n){$(".db_hidden_content").remove()})))})),$(".db_content").on("click",(function(){if($(this).hasClass("db_content_active")){var e=$(this).attr("data-admin_url");window.open(e)}}))},function(e,t,n){},function(e,t,n){"use strict";n(11);function a(e,t){var n,a;document.addEventListener("mousemove",(function(t){n=t.clientX/10,a=t.clientY/10,e.setAttribute("style","margin-top: ".concat(a,"px; margin-right: ").concat(n,"px;"))})),t.addEventListener("mouseenter",(function(){e.style.opacity=1})),t.addEventListener("mouseleave",(function(){e.style.opacity=0}))}function o(){var e,t=this,n=$(this);n.val()>0||(n.val()<=0||""==n.val())&&$(n).val(1);var a=$(this).attr("data-quantity_item_id");e=$(this).val(),console.log("quantity_id: ",e),fetch("/api/cart_item/".concat(Number(a),"/"),{method:"PATCH",body:JSON.stringify({quantity:Number(e)}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("data: ",e),$(t).parents(".basket_content_profile").find(".basket_summ").text("".concat(Math.round(e.cart_item_total_price)," ").concat(e.cart_currency)),$(".basket_all_result").text("".concat(e.cart_currency," ").concat(Math.round(e.cart_total_price)))}))}function i(){var e=this,t=$(this).parents(".basket_content_profile");$(t).css("right","-100vw"),$(t).css("max-height","0px"),setTimeout((function(){$(t).remove(),0==$(".basket_content__block").find(".basket_content_profile").length?($(".none_content_send").text("Ваша корзина порожня"),$(".none_content_send").addClass("none_content_send_active"),$(".discount__block").css("opacity","0"),$(".basket_nobtn_wrap").css("display","block"),$(".basket_btn_wrap").css("display","none")):($(".none_content_send").text(""),$(".none_content_send").removeClass("none_content_send_active"),$(".discount__block").css("opacity","1"),$(".basket_nobtn_wrap").css("display","none"),$(".basket_btn_wrap").css("display","block"))}),300);var n=$(this).attr("data-quantity_item_id");fetch("/api/cart_item/".concat(n),{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){console.log("data: ",t),$(e).parents(".basket_content_profile").find(".basket_summ").text("".concat(Math.round(t.cart_item_total_price)," ").concat(t.cart_currency)),$(".basket_all_result").text("".concat(t.cart_currency," ").concat(Math.round(t.cart_total_price)))}))}function r(e,t){console.log("data: ",t);var n=document.createElement("div");n.classList.add("basket_content_profile");var a=document.createElement("div");a.classList.add("basket_profile_img");var r=document.createElement("img");r.classList.add("basket_profile_img"),r.setAttribute("src",t.item.image_url);var l=document.createElement("div");l.classList.add("basket_right_content");var d=document.createElement("div");d.classList.add("basket_title__block");var _=document.createElement("div");_.classList.add("basket_title","main__title","main__title_5"),_.textContent=t.item.alt;var u=document.createElement("img");u.classList.add("basket_del","remove_prod_card"),u.setAttribute("data-quantity_item_id",t.id),u.setAttribute("src","/static/source/img/index/trash.svg");var m=document.createElement("div");m.classList.add("basket_bottom__wrap");var p=document.createElement("div");p.classList.add("basket_counter__block");var f=document.createElement("div");f.classList.add("basket_text","sub_title","sub_title_2"),f.textContent="Кількість";var b=document.createElement("div");b.classList.add("basket_counter");var v=document.createElement("div");v.setAttribute("data-quantity_item_id",t.id),v.classList.add("basket_prep","basket_count","sub_title","sub_title_21"),v.textContent="-";var h=document.createElement("input");h.setAttribute("type","number"),h.setAttribute("value",t.quantity),h.setAttribute("data-quantity_item_id",t.id),h.classList.add("basket_input","basket_count","main__title","main__title_5","cart_counter","quan_cart_sum");var k=document.createElement("div");k.setAttribute("data-quantity_item_id",t.id),k.classList.add("basket_next","basket_count","sub_title","sub_title_21"),k.textContent="+";var g=document.createElement("div");g.classList.add("basket_sum__block");var C=document.createElement("div");C.classList.add("basket_text","sub_title","sub_title_2"),C.textContent="Ціна";var y=document.createElement("div");return y.classList.add("basket_summ","main__title","main__title_5"),y.textContent=t.item.price+" "+t.item.currency.code,n.appendChild(a),a.appendChild(r),n.appendChild(l),l.appendChild(d),d.appendChild(_),d.appendChild(u),l.appendChild(m),m.appendChild(p),p.appendChild(f),p.appendChild(b),b.appendChild(v),b.appendChild(h),b.appendChild(k),m.appendChild(g),g.appendChild(C),g.appendChild(y),$(u).on("click",i),$(k).on("click",c),$(v).on("click",s),$(h).on("blur",o),n}function s(){var e=this;console.log(123);var t=$(this).parents(".basket_counter").find(".cart_counter").val();if(1==t)console.log("меньше не може бути");else{$(this).parents(".basket_counter").find(".cart_counter").val(Number(t)-1);var n=$(this).attr("data-quantity_item_id"),a=$(this).parents(".basket_counter").find(".quan_cart_sum").val();console.log("quantity_id: ",a),fetch("/api/cart_item/".concat(Number(n),"/"),{method:"PATCH",body:JSON.stringify({quantity:Number(a)}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log("data: ",t),$(e).parents(".basket_content_profile").find(".basket_summ").text("".concat(Math.round(t.cart_item_total_price)," ").concat(t.cart_currency)),$(".basket_all_result").text("".concat(t.cart_currency," ").concat(Math.round(t.cart_total_price)))}))}}function c(){var e=this,t=$(this).parents(".basket_counter").find(".cart_counter").val();if(console.log("current_quan_sum: ",t),99999==t)console.log("більше не може бути");else{$(this).parents(".basket_counter").find(".cart_counter").val(Number(t)+1);var n=$(this).attr("data-quantity_item_id"),a=$(this).parents(".basket_counter").find(".quan_cart_sum").val();console.log("quantity_id: ",a),fetch("/api/cart_item/".concat(Number(n),"/"),{method:"PATCH",body:JSON.stringify({quantity:Number(a)}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log("data: ",t),$(e).parents(".basket_content_profile").find(".basket_summ").text("".concat(Math.round(t.cart_item_total_price)," ").concat(t.cart_currency)),$(".basket_all_result").text("".concat(t.cart_currency," ").concat(Math.round(t.cart_total_price)))}))}}window.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("arrow_1"),t=document.getElementById("button_1"),n=document.getElementById("arrow_2"),o=document.getElementById("button_2"),i=document.getElementById("arrow_3"),r=document.getElementById("button_3"),s=document.getElementById("arrow_4"),c=document.getElementById("button_4"),l=document.getElementById("arrow_5"),d=document.getElementById("button_5");a(e,t),a(n,o),a(i,r),a(s,c),a(l,d)})),$("#menu-toggle").click((function(){$(this).toggleClass("open"),$(".scroll_menu").toggleClass("scroll_menu_active"),$("body").toggleClass("body_active"),$(".nav_menu__block").toggleClass("nav_menu__block_active"),$(".header_logos").toggleClass("header_logos_active"),$(".scroll_top__block").toggleClass("scroll_top__block_active"),$(".scroll_bottom__block").toggleClass("scroll_bottom__block_active"),$(".logo__wrap").hasClass("logo_wrap_active")?($(".logo__wrap").removeClass("logo_wrap_active"),$(".logo__wrap").addClass("logo_wrap_native")):($(".logo__wrap").addClass("logo_wrap_active"),$(".logo__wrap").removeClass("logo_wrap_native"))})),$(".modal_search").on("click",(function(){$(".search_menu").toggleClass("search_menu_active"),$("body").toggleClass("body_active")})),$(".modal_basket").on("click",(function(){$(".basket_menu").toggleClass("basket_menu_active"),$(".black_bg").toggleClass("black_bg_active"),$("body").toggleClass("body_active"),$(".basket_content__block").find(".basket_content_profile").remove(),fetch("/api/cart_items/",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("data: ",e),$(".basket_all_result").text("₴ ".concat(Math.round(e.cart_total_price))),console.log("data: ",e.cart_items.length);for(var t={img_src:"/static/source/img/index/lite.png",name_basket:"Вилка VEPR-H123",quantity:"1",price:"2500"},n=0;n<e.cart_items.length;n++)$(".basket_content__block")[0].appendChild(r(t,e.cart_items[n]));var a=$(".basket_content__block").find(".basket_content_profile").length;console.log("checked: ",a),0==a?($(".none_content_send").text("Ваша корзина порожня"),$(".none_content_send").addClass("none_content_send_active"),$(".discount__block").css("opacity","0"),$(".basket_nobtn_wrap").css("display","block"),$(".basket_btn_wrap").css("display","none")):($(".none_content_send").text(""),$(".none_content_send").removeClass("none_content_send_active"),$(".discount__block").css("opacity","1"),$(".basket_nobtn_wrap").css("display","none"),$(".basket_btn_wrap").css("display","block"))}))})),$(".basket_input").on("blur",o),$(".basket_del").on("click",i)},function(e,t,n){},function(e,t,n){"use strict";n(13);$(".footer_btn").on("click",(function(){var e=$(this).parents(".footer_accordeon__block");$(this).hasClass("footer_btn_active")?(console.log(1),$(this).removeClass("footer_btn_active"),$(e).find(".footer_accordeon_content").removeClass("footer_accordeon_content_active")):(console.log(2),$(e).find(".footer_accordeon_content").addClass("footer_accordeon_content_active"),$(this).addClass("footer_btn_active"))}));var a=$(".input_focus");a.on("focus",(function(){$(this).parents(".inp-vak-wrap").find(".label__style").addClass("label__style_active")})),a.on("blur",(function(){($(this).val().length<1||"+38(___) __ __ ___"==$(this).val())&&$(this).parents(".inp-vak-wrap").find(".label__style").removeClass("label__style_active")}))},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);n(0),n(2),n(4),n(6),n(8),n(10),n(12),n(16),n(17),n(18),n(19),n(20),n(21);function a(e,t){$(e).each((function(e,n){var a=$(n);$(window).scroll((function(e){var n=a.offset().top-$(this).scrollTop();a.visible(!0)?a.addClass("moving-target").css({transform:"translateY("+n/t+"px)","-webkit-transform":"translateY("+n/t+"px)","-moz-transform":"translateY("+n/t+"px)"}):a.removeClass("moving-target")}))}))}if($.fn.visible=function(e){var t=$(this),n=$(window),a=n.scrollTop(),o=a+n.height(),i=t.offset().top,r=i+t.height();return(!0===e?i:r)<=o&&(!0===e?r:i)>=a},a(".absolute_product_profile_1",5),a(".absolute_product_profile_2",7),a(".absolute_product_profile_3",5),a(".absolute_product_profile_4",7),a(".absolute_product_profile_5",5),a(".eleek_title__wrap",10),function(e){var t=function(e){return e.split("").reverse().join("")},n={numberStep:function(t,n){var a=Math.floor(t);e(n.elem).text(a)}},a=function(e){var t=e.elem;if(t.nodeType&&t.parentNode){var a=t._animateNumberSetter;a||(a=n.numberStep),a(e.now,e)}};e.Tween&&e.Tween.propHooks?e.Tween.propHooks.number={set:a}:e.fx.step.number=a;e.animateNumber={numberStepFactories:{append:function(t){return function(n,a){var o=Math.floor(n);e(a.elem).prop("number",n).text(o+t)}},separator:function(n,a,o){return n=n||" ",a=a||3,o=o||"",function(i,r){var s=i<0,c=Math.floor((s?-1:1)*i).toString(),l=e(r.elem);if(c.length>a){var d=function(e,t){for(var n,a,o,i=e.split("").reverse(),r=[],s=0,c=Math.ceil(e.length/t);s<c;s++){for(n="",o=0;o<t&&(a=s*t+o)!==e.length;o++)n+=i[a];r.push(n)}return r}(c,a);c=function(e){var n=e.length-1,a=t(e[n]);return e[n]=t(parseInt(a,10).toString()),e}(d).join(n),c=t(c)}l.prop("number",i).text((s?"-":"")+c+o)}}}},e.fn.animateNumber=function(){for(var t=arguments[0],a=e.extend({},n,t),o=e(this),i=[a],r=1,s=arguments.length;r<s;r++)i.push(arguments[r]);if(t.numberStep){var c=this.each((function(){this._animateNumberSetter=t.numberStep})),l=a.complete;a.complete=function(){c.each((function(){delete this._animateNumberSetter})),l&&l.apply(this,arguments)}}return o.animate.apply(o,i)}}(jQuery),$(".bike_trailer__block").length>=1){$(".bike_trailer__block").on("init",(function(e,t){$(".slick-active .slide-name").removeClass("anim_text"),$(".slick-active .slide-img").removeClass("anim_img")})),$(".bike_trailer__block").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!0,prevArrow:'<div class="slick-first"><</div>',nextArrow:'<div class="slick-second">></div>',lazyLoad:"ondemand",speed:1e3,cssEase:"linear",swipe:!1}),$(".slick-first").click((function(){$(".bike_trailer__block").slick("slickPrev")})),$(".slick-second").click((function(){$(".bike_trailer__block").slick("slickNext")})),function(){var e,t=$(".bike_trailer__block").find(".slick-cloned").length,n=$(".bike_trailer__block").find(".slick-slide").length-t;e=n<=9?"0"+n:n;$(".last_click_num").text(e),$(".line_active").css("width","".concat(100/n,"%"))}(),$(".bike_trailer__block").on("afterChange",(function(e,t,n,a){var o=$(".bike_trailer__block").find(".slick-cloned").length,i=100/($(".bike_trailer__block").find(".slick-slide").length-o)*(n+1);$(".line_active").css("width","".concat(i,"%"))})),$(".bike_trailer__block").on("beforeChange",(function(e,t,n,a){$(".slide-name").css("left","0%"),$(".slick-active .slide-name").css("left","-150%")}));var o=0,i=0;$(".bike_trailer__block").on("afterChange",(function(e,t,n){(i=n)!==o&&($(".slick-active .slide-name").removeClass("animated zoomIn"),$(".slick-active .slide-name").addClass("anim_text"),$(".slick-active .slide-img").addClass("anim_img"))})),$(".bike_trailer__block").on("setPosition",(function(e,t,n){i!==o&&($(".slick-active .slide-name").removeClass("anim_text"),$(".slick-active .slide-img").removeClass("anim_img"),$(".slick-active .slide-name").addClass("animated zoomIn")),$.each($(".slick-slide"),(function(){"true"==$(this).attr("aria-hidden")?($(this).find(".slide-name").addClass("anim_text"),$(this).find(".slide-img").addClass("anim_img")):($(this).find(".slide-name").removeClass("anim_text"),$(this).find(".slide-img").removeClass("anim_img"))}))})),$(".bike_trailer__block").on("beforeChange",(function(e,t,n){o=n}))}if($(".eleek_slider__wrap").length>=1){function r(){var e=$(".eleek_prev_arrow").find('.slick-slideshow__slide[aria-hidden="false"]');$(e).each((function(){$(this).css("opacity",1)})),$(e).first().prev().css("opacity",0)}$(".eleek_slider__wrap").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,autoplay:!0,centerMode:!0,centerPadding:"450px",arrows:!0,prevArrow:'<div class="eleek_prev_arrow"></div>',nextArrow:'<div class="eleek_next_arrow"></div>',lazyLoad:"ondemand",responsive:[{breakpoint:1710,settings:{centerPadding:"250px"}},{breakpoint:1e3,settings:{centerPadding:"150px"}},{breakpoint:650,settings:{slidesToShow:1,centerPadding:"0px"}}]}),$(".eleek_slider__wrap").slick("slickGoTo",1),r(),$(".eleek_slider__wrap").on("afterChange",(function(){r()})),$(".eleek_prev_arrow").click((function(){$(".eleek_slider__wrap").slick("slickPrev")})),$(".eleek_next_arrow").click((function(){$(".eleek_slider__wrap").slick("slickNext")})),$(".complect__wrap").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,centerMode:!0,centerPadding:"200px",lazyLoad:"ondemand",responsive:[{breakpoint:934,settings:{centerPadding:"150px"}},{breakpoint:676,settings:{centerPadding:"100px"}},{breakpoint:419,settings:{slidesToShow:2,centerPadding:"0"}}]}),$(".complect__wrap").slick("slickGoTo",1),r(),$(".complect__wrap").on("afterChange",(function(){r()}))}new WOW({boxClass:"preferens__wrap",animateClass:"preferens_anim",offset:85,mobile:!0,live:!0,scrollContainer:null,resetAnimation:!0}).init(),new WOW({boxClass:"down_wrap",animateClass:"fadeInUp",offset:85,mobile:!0,live:!0,scrollContainer:null,resetAnimation:!0}).init();var s=setInterval((function(){if(console.log(1),$(".preferens__wrap").hasClass("preferens_anim")){console.log("!!!"),$({blurRadius:5}).animate({blurRadius:0},{duration:2e3,easing:"swing",step:function(){$(".lines").css({"-webkit-filter":"blur("+this.blurRadius+"px)",filter:"blur("+this.blurRadius+"px)"})}});var e=$.animateNumber.numberStepFactories.separator(" ");$(".lines").each((function(){var t=$(this).data("count");$(this).animateNumber({number:t,easing:"easeInQuad",numberStep:e},2e3)})),clearInterval(s)}}),500);$(window).resize((function(){})),$(".btn_standart_transparent").hover((function(){$(this).removeClass("out").addClass("over")}),(function(){$(this).removeClass("over").addClass("out")}))}]);