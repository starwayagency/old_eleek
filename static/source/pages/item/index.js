!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=56)}([,,function(t,e,n){"use strict";n(3)},function(t,e,n){},function(t,e,n){"use strict";n(5)},function(t,e,n){},function(t,e,n){"use strict";n(7);$(".btn-lean_more").on("mouseenter",(function(){$(this).addClass("is-focus-over"),$(this).removeClass("is-focus-out")})),$(".btn-lean_more").on("mouseleave",(function(){$(this).addClass("is-focus-out"),$(this).removeClass("is-focus-over")})),$(".absolute_product_arrow").hover((function(){$(this).removeClass("out").addClass("over")}),(function(){$(this).removeClass("over").addClass("out")})),$(".btn_standart_black").hover((function(){$(this).removeClass("out").addClass("over")}),(function(){$(this).removeClass("over").addClass("out")})),$(".btn_standart_yellow").hover((function(){$(this).removeClass("out").addClass("over")}),(function(){$(this).removeClass("over").addClass("out")})),$(".btn_standart_transparent").hover((function(){$(this).removeClass("out").addClass("over")}),(function(){$(this).removeClass("over").addClass("out")}))},function(t,e,n){},function(t,e,n){"use strict";var a,o;n(9);switch($('input[type="tel"]').length>0&&$('input[type="tel"]').mask("+38(999) 99 99 999"),i()){case"uk":a="Поле повинно містити лише букви",o="Поле повинно містити більше 6 символів";break;case"ru":a="Поле должно содержать только буквы",o="Поле должно содержать более 6 символов";break;case"en":a="The field must contain only letters",o="Field must contain more than 6 characters";break;default:a="Поле повинно містити лише букви.",o="Поле повинно містити більше 6 символів"}function i(){return location.pathname.split("/")[1]}function s(t,e,n){var a=!1,o=(n=n,!0);if(o=!$(t).hasClass("change_profile"),console.log("check_pass: ",o),$(t).length>0){var s={};switch(i()){case"uk":s.required="Поле обов'язково для заповнення",s.email="Поле має містити email";break;case"ru":s.required="Поле обязательно для заполнения",s.email="Поле должно содержать email";break;case"en":s.required="The field is required",s.email="The field must contain an email";break;default:s.required="Поле обов'язково для заповнення.",s.email="Поле має містити email."}$(t).validate({errorPlacement:function(t,n){console.log(n),$(n).parents(e).append($(t))},rules:{email:{required:!0,email:!0},name:{required:!0,lettersonly:!0},first_name:{required:!0,lettersonly:!0},contact_name:{required:!0,lettersonly:!0},username:{required:!0},adress:{required:!0},old_password:{required:!0},pass1:{required:o,minLength:o},password2:{required:o,minLength:o},address:{required:!0,lettersonly:!0},phone_number:{required:!0},phone:{required:!0},password:{required:!0},pas1:{required:!0},pas2:{required:!0}},messages:{email:{required:s.required,email:s.email},name:{required:s.required},first_name:{required:s.required},address:{required:s.required},adress:{required:s.required},old_password:{required:s.required},pass1:{required:s.required},username:{required:s.required},phone_number:{required:s.required},phone:{required:s.required},password:{required:s.required},password2:{required:s.required},pas1:{required:s.required},pas2:{required:s.required}},submitHandler:function(t){console.log("form: ",t),event.preventDefault(),$(".load_spin").addClass("load_spin_active");var e=$(t).serializeArray(),o=t.action,i={};$(e).each((function(t,e){i[e.name]=e.value}));var s=!0;1==$(".login_pass2").length&&(console.log("(1",$(".login_pass").val().length),console.log("(2",$(".login_pass2").val().length),$(".login_pass").val().length>=1?(s=!1,$(".login_pass").val()==$(".login_pass2").val()?$(".login_pass").val().length<6&&$(".login_pass2").val().length<6?(s=!1,event.preventDefault(),$(".load_spin").removeClass("load_spin_active"),$.fancybox.close(),$(".pass_checked_error").text("ваш пароль повинен містити не меньше 6 симовлів")):($(".pass_checked_error").text(""),s=!0):(s=!1,event.preventDefault(),$(".load_spin").removeClass("load_spin_active"),$.fancybox.close(),$(".pass_checked_error").text("паролі не співпадають"))):($(".pass_checked_error").text(""),s=!0));if(console.log(i),""!=o&&1==s){console.log("url_form: ",o);var r="POST";$(t).hasClass("PATCH")?(r="PATCH",a=!0):(r="POST",a=!1),fetch(o,{method:r,body:new URLSearchParams($.param(i))}).then((function(t){return t.json()})).then((function(e){console.log("data: ",e),console.log("tut?"),"OK"==e.status&&void 0!==e.status&&function(){console.log(133313),console.log("modal: ",a),$(".load_spin").removeClass("load_spin_active"),1==a?(console.log("tut"),$.fancybox.open({src:"#modal_form_change_profile"}),setTimeout((function(){$.fancybox.close({src:"#modal_form_change_profile"})}),1500)):$.fancybox.close();if(!0===n){$.fancybox.open({src:"#modal-form_true"}),setTimeout((function(){$.fancybox.close({src:"#modal-form_true"})}),1500);var e=$(t)[0].querySelectorAll("input");if(e.length>0){for(var o in e)e.hasOwnProperty(o)&&/^0$|^[1-9]\d*$/.test(o)&&o<=4294967294&&"submit"!==e[o].type&&(e[o].value="");var i=$(t)[0].querySelectorAll("textarea");i.length>0&&(i[0].value="")}}}(),"BAD"==e.status&&void 0!==e.status&&($(".load_spin").removeClass("load_spin_active"),$(".error_block_false").text("Невірний логін або пароль"),$(".login_checked_error").text(e.error_fields.username),$(".login_checked_error").text(e.error_fields.email),console.log("$(): ",$(".login_checked_error"))),void 0!==e.url&&""!=e.url&&(location.href=e.url)}))}else console.log("forn_not_actions")}})}}jQuery.validator.addMethod("lettersonly",(function(t,e){return this.optional(e)||/[^0-9]+$/i.test(t)}),a),jQuery.validator.addMethod("minLength",(function(t,e){return!(t.length<6)}),o),$((function(){s(".footer_form",".inp-vak-wrap",!0),s("#comment_form",".inp-vak-wrap",!1),s(".registery_form",".inp-vak-wrap",!1),s(".drive__form_last",".inp-vak-wrap",!0),s(".drive__form",".inp-vak-wrap",!0),s(".form_cons",".inp-vak-wrap",!0),s("#form_qustion",".inp-vak-wrap",!0),s("#form_cons",".inp-vak-wrap",!0),s("#order__form_constructor",".inp-vak-wrap",!0)}))},function(t,e,n){},function(t,e,n){"use strict";n(11);sessionStorage.setItem("admin_panell",1),console.log("finish");var a=!0,o=document.querySelectorAll(".db_content"),i=sessionStorage.getItem("admin_panell");console.log("admin_check: ",i),0==i&&(a=!1,$(".admin_button").attr("data-title","Виключити редагування"),$(".admin_checkbox").attr("checked",""),$(".db_content").addClass("db_content_active"),i=sessionStorage.getItem("admin_panell"),o.forEach((function(t,e,n){var a=document.createElement("div");a.classList.add("db_hidden_content");var o=document.createElement("span");o.classList.add("db_hidden_link"),o.textContent="Редагувати",a.appendChild(o),t.appendChild(a)}))),$(".svg_power").on("click",(function(){a?(a=!1,$(".admin_button").attr("data-title","Виключити редагування"),$(".db_content").addClass("db_content_active"),sessionStorage.setItem("admin_panell",0),i=sessionStorage.getItem("admin_panell"),o.forEach((function(t,e,n){var a=document.createElement("div");a.classList.add("db_hidden_content");var o=document.createElement("span");o.classList.add("db_hidden_link"),o.textContent="Редагувати",a.appendChild(o),t.appendChild(a)}))):($(".admin_button").attr("data-title","Включити редагування"),$(".db_content").removeClass("db_content_active"),a=!0,sessionStorage.setItem("admin_panell",1),i=sessionStorage.getItem("admin_panell"),o.forEach((function(t,e,n){$(".db_hidden_content").remove()})))})),$(".db_content").on("click",(function(){if($(this).hasClass("db_content_active")){var t=$(this).attr("data-admin_url");window.open(t)}}))},function(t,e,n){},function(t,e,n){"use strict";n(13);function a(t,e){var n,a;document.addEventListener("mousemove",(function(e){n=e.clientX/10,a=e.clientY/10,t.setAttribute("style","margin-top: ".concat(a,"px; margin-right: ").concat(n,"px;"))})),e.addEventListener("mouseenter",(function(){t.style.opacity=1})),e.addEventListener("mouseleave",(function(){t.style.opacity=0}))}function o(){var t,e=this,n=$(this);n.val()>0||(n.val()<=0||""==n.val())&&$(n).val(1);var a=$(this).attr("data-quantity_item_id");t=$(this).val(),console.log("quantity_id: ",t),fetch("/api/cart_item/".concat(Number(a),"/"),{method:"PATCH",body:JSON.stringify({quantity:Number(t)}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){console.log("data: ",t),$(e).parents(".basket_content_profile").find(".basket_summ").text("".concat(Math.round(t.cart_item_total_price)," ").concat(t.cart_currency)),$(".basket_all_result").text("".concat(t.cart_currency," ").concat(Math.round(t.cart_total_price)))}))}function i(){var t=this,e=$(this).parents(".basket_content_profile");$(e).css("right","-100vw"),$(e).css("max-height","0px"),setTimeout((function(){$(e).remove(),0==$(".basket_content__block").find(".basket_content_profile").length?($(".none_content_send").text("Ваша корзина порожня"),$(".none_content_send").addClass("none_content_send_active"),$(".discount__block").css("opacity","0"),$(".basket_nobtn_wrap").css("display","block"),$(".basket_btn_wrap").css("display","none")):($(".none_content_send").text(""),$(".none_content_send").removeClass("none_content_send_active"),$(".discount__block").css("opacity","1"),$(".basket_nobtn_wrap").css("display","none"),$(".basket_btn_wrap").css("display","block"))}),300);var n=$(this).attr("data-quantity_item_id");fetch("/api/cart_item/".concat(n),{method:"DELETE"}).then((function(t){return t.json()})).then((function(e){console.log("data: ",e),$(t).parents(".basket_content_profile").find(".basket_summ").text("".concat(Math.round(e.cart_item_total_price)," ").concat(e.cart_currency)),$(".basket_all_result").text("".concat(e.cart_currency," ").concat(Math.round(e.cart_total_price)))}))}function s(t,e){console.log("data: ",e);var n=document.createElement("div");n.classList.add("basket_content_profile");var a=document.createElement("div");a.classList.add("basket_profile_img");var s=document.createElement("img");s.classList.add("basket_profile_img"),s.setAttribute("src",e.item.image_url);var l=document.createElement("div");l.classList.add("basket_right_content");var _=document.createElement("div");_.classList.add("basket_title__block");var d=document.createElement("div");d.classList.add("basket_title","main__title","main__title_5"),d.textContent=e.item.title;var u=document.createElement("img");u.classList.add("basket_del","remove_prod_card"),u.setAttribute("data-quantity_item_id",e.id),u.setAttribute("src","/static/source/img/index/trash.svg");var m=document.createElement("div");m.classList.add("basket_bottom__wrap");var p=document.createElement("div");p.classList.add("basket_counter__block");var v=document.createElement("div");v.classList.add("basket_text","sub_title","sub_title_2"),v.textContent="Кількість";var h=document.createElement("div");h.classList.add("basket_counter");var b=document.createElement("div");b.setAttribute("data-quantity_item_id",e.id),b.classList.add("basket_prep","basket_count","sub_title","sub_title_21"),b.textContent="-";var f=document.createElement("input");f.setAttribute("type","number"),f.setAttribute("value",e.quantity),f.setAttribute("data-quantity_item_id",e.id),f.classList.add("basket_input","basket_count","main__title","main__title_5","cart_counter","quan_cart_sum");var g=document.createElement("div");g.setAttribute("data-quantity_item_id",e.id),g.classList.add("basket_next","basket_count","sub_title","sub_title_21"),g.textContent="+";var k=document.createElement("div");k.classList.add("basket_sum__block");var C=document.createElement("div");C.classList.add("basket_text","sub_title","sub_title_2"),C.textContent="Ціна";var y=document.createElement("div");return y.classList.add("basket_summ","main__title","main__title_5"),y.textContent=e.prices.price_with_coupons_with_attributes_with_discount+""+e.chosen_currency,console.log("data::",e),n.appendChild(a),a.appendChild(s),n.appendChild(l),l.appendChild(_),_.appendChild(d),_.appendChild(u),l.appendChild(m),m.appendChild(p),p.appendChild(v),p.appendChild(h),h.appendChild(b),h.appendChild(f),h.appendChild(g),m.appendChild(k),k.appendChild(C),k.appendChild(y),$(u).on("click",i),$(g).on("click",c),$(b).on("click",r),$(f).on("blur",o),n}function r(){var t=this,e=$(this).parents(".basket_counter").find(".cart_counter").val();if(1==e)console.log("меньше не може бути");else{$(this).parents(".basket_counter").find(".cart_counter").val(Number(e)-1);var n=$(this).attr("data-quantity_item_id"),a=$(this).parents(".basket_counter").find(".quan_cart_sum").val();fetch("/api/cart_item/".concat(Number(n),"/"),{method:"PATCH",body:JSON.stringify({quantity:Number(a)}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(e){var n=e.cart_currency,a=e.cart_total_price,o=e.cart_item_total_price,i=e.cart_currency;console.log("data patch minus: ",e),$(t).parents(".basket_content_profile").find(".basket_summ").text("".concat(Math.round(o)," ").concat(i)),$(".basket_all_result").text("".concat(n," ").concat(Math.round(a)))}))}}function c(){var t=this,e=$(this).parents(".basket_counter").find(".cart_counter").val();if(99999==e)console.log("більше не може бути");else{$(this).parents(".basket_counter").find(".cart_counter").val(Number(e)+1);var n=$(this).attr("data-quantity_item_id"),a=$(this).parents(".basket_counter").find(".quan_cart_sum").val();fetch("/api/cart_item/".concat(Number(n),"/"),{method:"PATCH",body:JSON.stringify({quantity:Number(a)}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(e){console.log("data patch plus: ",e),$(t).parents(".basket_content_profile").find(".basket_summ").text("".concat(Math.round(e.cart_item_total_price)," ").concat(e.cart_currency)),$(".basket_all_result").text("".concat(e.cart_currency," ").concat(Math.round(e.cart_total_price)))}))}}window.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("arrow_1"),e=document.getElementById("button_1"),n=document.getElementById("arrow_2"),o=document.getElementById("button_2"),i=document.getElementById("arrow_3"),s=document.getElementById("button_3"),r=document.getElementById("arrow_4"),c=document.getElementById("button_4"),l=document.getElementById("arrow_5"),_=document.getElementById("button_5");a(t,e),a(n,o),a(i,s),a(r,c),a(l,_)})),$("#menu-toggle").click((function(){$(this).toggleClass("open"),$(".scroll_menu").toggleClass("scroll_menu_active"),$("body").toggleClass("body_active"),$(".nav_menu__block").toggleClass("nav_menu__block_active"),$(".header_logos").toggleClass("header_logos_active"),$(".scroll_top__block").toggleClass("scroll_top__block_active"),$(".scroll_bottom__block").toggleClass("scroll_bottom__block_active"),$(".logo__wrap").hasClass("logo_wrap_active")?($(".logo__wrap").removeClass("logo_wrap_active"),$(".logo__wrap").addClass("logo_wrap_native")):($(".logo__wrap").addClass("logo_wrap_active"),$(".logo__wrap").removeClass("logo_wrap_native"))})),$(".modal_search").on("click",(function(){$(".search_menu").toggleClass("search_menu_active"),$("body").toggleClass("body_active")})),$(".modal_basket").on("click",(function(){$(".basket_menu").toggleClass("basket_menu_active"),$(".black_bg").toggleClass("black_bg_active"),$("body").toggleClass("body_active"),$(".basket_content__block").find(".basket_content_profile").remove(),fetch("/api/cart_items/",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){console.log("data: ",t),$(".basket_all_result").text("₴ ".concat(Math.round(t.cart_total_price))),console.log("data: ",t.cart_items.length);for(var e={img_src:"/static/source/img/index/lite.png",name_basket:"Вилка VEPR-H123",quantity:"1",price:"2500"},n=0;n<t.cart_items.length;n++)$(".basket_content__block")[0].appendChild(s(e,t.cart_items[n]));var a=$(".basket_content__block").find(".basket_content_profile").length;console.log("checked: ",a),0==a?($(".none_content_send").text("Ваша корзина порожня"),$(".none_content_send").addClass("none_content_send_active"),$(".discount__block").css("opacity","0"),$(".basket_nobtn_wrap").css("display","block"),$(".basket_btn_wrap").css("display","none")):($(".none_content_send").text(""),$(".none_content_send").removeClass("none_content_send_active"),$(".discount__block").css("opacity","1"),$(".basket_nobtn_wrap").css("display","none"),$(".basket_btn_wrap").css("display","block"))}))})),$(".basket_input").on("blur",o),$(".basket_del").on("click",i)},function(t,e,n){},function(t,e,n){"use strict";n(15);$(".footer_btn").on("click",(function(){var t=$(this).parents(".footer_accordeon__block");$(this).hasClass("footer_btn_active")?(console.log(1),$(this).removeClass("footer_btn_active"),$(t).find(".footer_accordeon_content").removeClass("footer_accordeon_content_active")):(console.log(2),$(t).find(".footer_accordeon_content").addClass("footer_accordeon_content_active"),$(this).addClass("footer_btn_active"))}));var a=$(".input_focus");a.on("focus",(function(){$(this).parents(".inp-vak-wrap").find(".label__style").addClass("label__style_active")})),a.on("blur",(function(){($(this).val().length<1||"+38(___) __ __ ___"==$(this).val())&&$(this).parents(".inp-vak-wrap").find(".label__style").removeClass("label__style_active")}))},function(t,e,n){},,,,,,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var a,o;n(2),n(4),n(6),n(8),n(10),n(12),n(14),n(36),n(37);function i(){var t=$(".absolute_additional__block");$(t).css("right","0px"),setTimeout((function(){$(t).css("right","-100%")}),1e3)}function s(){var t=$(".current_attribute_change__wrap"),e=[];$.each(t,(function(t,n){var a=$(n).attr("data-item_attribute_id"),o=$(n).attr("data-item_attribute_value_id");e.push({item_attribute_id:a,item_attribute_value_id:o})}));var n=$(".only_color_change__wrap");$.each(n,(function(t,n){var a=$(n).attr("data-item_attribute_id"),o=$(n).attr("data-item_attribute_value_id");e.push({item_attribute_id:a,item_attribute_value_id:o})}));var a=$(".option_content__block").find(".option_content_prof_active"),o=[];return $.each(a,(function(t,e){var n=$(e).attr("data-item_attribute_value_id");o.push(n)})),e.push({item_attribute_id:$(".option__wrap").find(".item_char_title").attr("data-item_attribute_id"),item_attribute_value_ids:o}),console.log("attr_mass: ",e),null==e[0].item_attribute_id?[]:e}$(".main_item_btn").on("click",(function(){$(this).hasClass("NoActiveBtn")||($(this).addClass("NoActiveBtn"),$(this).removeClass("item_btn_price"),$(this).removeClass("btn_standart_black"),$(this).text("Куплено"))})),$(".fast_btn").fancybox({touch:!1,scrolling:"hidden"}),$(".item_slider__block").length>=1&&($(".main_card_slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".mini_slider"}),$(".mini_slider").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".main_card_slider",arrows:!1,dots:!1,focusOnSelect:!0,responsive:[{breakpoint:660,settings:{slidesToShow:2}}]})),$(".color_change_btn").on("click",(function(){var t=$(this).parents(".color_change__wrap").find(".color_change_content");$(this).hasClass("color_change_btn_active")?($(this).removeClass("color_change_btn_active"),$(t).removeClass("color_change_content_active")):($(this).addClass("color_change_btn_active"),$(t).addClass("color_change_content_active"))})),$(".color_change_select").on("click",(function(){var t=$(this).parents(".color_change__wrap"),e=$(this).attr("data-color"),n=$(this).find(".hidden_color_attr").data("item_attribute_value_id");$(t).attr("data-item_attribute_value_id",n),$(this).hasClass("white_color_change_oval")?$(t).find(".main_color_change_oval").addClass("border_for_oval"):$(t).find(".main_color_change_oval").removeClass("border_for_oval"),$(t).find(".main_color_change_oval").css("background","".concat(e)),$(t).find(".main_color_change_oval").attr("data-color","".concat(e)),$(t).find(".color_change_select").find(".success_color").removeClass("success_color_active"),$(this).find(".success_color").addClass("success_color_active")})),$(".change_attribute").on("click",(function(){var t=$(this).parents(".color_change__wrap"),e=$(this).find(".hidden_color_attr").attr("data-item_attribute_value_id"),n=$(this).find(".hidden_color_attr").val();$(t).find(".color_change_name").text(n),$(t).attr("data-item_attribute_value_id",e)})),a=$(".current_attribute_change__wrap"),o=0,$.each(a,(function(t,e){console.log("value: ",$(e)[0]);var n=$(e).find(".option_content_prof_active").attr("data-price-option");console.log("current_sum: ",n),o+=Number(n)})),$(".additional_price").text(o),$(".absolute_additional_price").text(o),$(".item_tab_link").on("click",(function(){$(this)[0].dataset.tab;var t=$(this)[0].dataset.tab;console.log(t),$(".item_tab_link").removeClass("item_tab_link_active"),$(this).addClass("item_tab_link_active"),$(".item_tab_content").removeClass("item_tab_content_active"),$("#"+$(this)[0].dataset.tab).addClass("item_tab_content_active")})),$(".item_tab_link_3").on("click",(function(){var t;t=$(".comment_profile__wrapper"),0==$(t)[0].childElementCount?($(".none_comments_text").removeClass("none_comments_text_hidden"),$(".comment_kredit__block").addClass("kredit__block_none")):($(".none_comments_text").addClass("none_comments_text_hidden"),$(".comment_kredit__block").removeClass("kredit__block_none"))})),$(".add_comment_btn").on("click",(function(){$.fancybox.open({src:"#comment_form",touch:!1})})),$(".modal_comm").on("click",(function(){$.fancybox.close({src:"#comment_form"})})),$(".rating_item").length>0&&($(".rating_item")[0].addEventListener("mouseout",(function(){$(".rating_item").removeClass("rating_item_hover")})),$(".rating_item")[0].addEventListener("mouseover",(function(t){var e=t.target;console.log(e.tagName),"IMG"!=e.tagName?console.log(1):console.log(2)}))),$(".modal-review__rating-order-wrap > span").click((function(){$(this).addClass("active").siblings().removeClass("active"),$(this).parent().attr("data-rating-value",$(this).data("rating-value"))})),$(".rating_review").on("click",(function(){var t=$(this).attr("data-rating-value");$(".hidden_rating_review").val(t)})),$(".generate_comment").on("click",(function(){var t=$(this).parents(".comment_form"),e={name:$(t).find(".comment_name").val(),email:$(t).find(".comment_email").val(),send:$(t).find(".comment_send").val(),rating:$(t).find(".hidden_rating_review").val()};console.log("comment_json: ",e),$(".comment_profile__wrapper")[0].prepend(function(t){var e=document.createElement("div");e.classList.add("comment_profile");var n=document.createElement("div");n.classList.add("comment_name__block");var a=document.createElement("div");a.classList.add("comment_name","color_black","standart_title","standart_title_4"),a.textContent=t.name;var o=document.createElement("div");o.classList.add("comment_star");var i=document.createElement("div");i.classList.add("comment_text","color_black","sub_title","sub_title_2"),i.textContent=t.send,e.appendChild(n),n.appendChild(a),n.appendChild(o);for(var s=t.rating,r=5-t.rating,c=0;c<s;c++){(_=document.createElement("div")).classList.add("svg_rating__wrap"),_.innerHTML='\n            <svg class="rating_svg rating_svg_active" xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17">\n                <path fill-rule="evenodd" d="M9 16.5L3.71 19.281 4.72 13.391 0.44 9.219 6.355 8.359 9 3 11.645 8.359 17.56 9.219 13.28 13.391 14.29 19.281z" transform="translate(0 -3)"/>\n            </svg>                    \n            ',o.appendChild(_)}for(var l=0;l<r;l++){var _;(_=document.createElement("div")).classList.add("svg_rating__wrap"),_.innerHTML='\n            <svg class="rating_svg" xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17">\n                <path fill-rule="evenodd" d="M9 16.5L3.71 19.281 4.72 13.391 0.44 9.219 6.355 8.359 9 3 11.645 8.359 17.56 9.219 13.28 13.391 14.29 19.281z" transform="translate(0 -3)"/>\n            </svg>                    \n            ',o.appendChild(_)}return e.appendChild(i),e}(e))})),$(".price_option").on("click",(function(){i();var t=$(".additional_price"),e=$(".absolute_additional_price"),n=Number($(t).text());console.log("all_summ: ",n);var a=$(this).attr("data-price-option");console.log("current_sum: ",a),$(this).hasClass("option_content_prof_active")?($(t).text(n-Number(a)),$(e).text(n-Number(a))):($(t).text(n+Number(a)),$(e).text(n+Number(a)))})),$(".price_multiple_option").on("click",(function(){$(this).toggleClass("option_content_prof_active")})),$(".price_simple_option").on("click",(function(){var t;i();var e=$(".additional_price"),n=$(".absolute_additional_price"),a=Number($(e).text()),o=$(this).attr("data-price-option"),s=$(this).parents(".color_change_content_wrap");t=1==$(s).find(".option_content_prof_active").length?$(s).find(".option_content_prof_active").attr("data-price-option"):0,$(this).hasClass("option_content_prof_active")||($(s).find(".option_content_prof").removeClass("option_content_prof_active"),$(this).addClass("option_content_prof_active"),$(e).text(a-Number(t)+Number(o)),$(n).text(a-Number(t)+Number(o)))})),$(".item_btn_price").on("click",(function(){var t=s(),e=$(".item_name").attr("data-id-name"),n={item_id:Number(e),attributes:JSON.stringify(t)};fetch("/api/cart_items/",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json",Accept:"application/json"}})})),$(".sale_one_click").on("click",(function(){$(".hidden_product_attr").val(JSON.stringify(s()))})),$(".three_de__block").on("click",(function(){var t=s(),e=$(".item_name").attr("data-id-name"),n={item_id:Number(e),attributes:JSON.stringify(t)};fetch("/constructor_middleware/",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){console.log("body: ",t),location.href=t.url}))})),$(".best-sales-block").length>=1&&($(".best-sales-block").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,arrows:!0,prevArrow:'<div class="slick-first"><</div>',nextArrow:'<div class="slick-second">></div>',lazyLoad:"ondemand",responsive:[{breakpoint:1220,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:750,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:452,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slick-first").click((function(){$(".best-sales-block").slick("slickPrev")})),$(".slick-second").click((function(){$(".best-sales-block").slick("slickNext")})))}]);