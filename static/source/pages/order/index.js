/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./order.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/common_componentc/admin_panel/index.js":
/*!************************************************************!*\
  !*** ../components/common_componentc/admin_panel/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/admin_panel/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

sessionStorage.setItem('admin_panell', 1);
console.log('finish'); // admin panel ============================>
// сторінка повина починатись по стандарту з admin_check = 1

var only_on_click = true;
var admin_panels = document.querySelectorAll('.db_content');
var admin_check = sessionStorage.getItem('admin_panell');
console.log('admin_check: ', admin_check);

if (admin_check == 0) {
  only_on_click = false;
  $('.admin_button').attr('data-title', 'Виключити редагування');
  $('.admin_checkbox').attr('checked', '');
  $('.db_content').addClass('db_content_active');
  admin_check = sessionStorage.getItem('admin_panell');
  admin_panels.forEach(function (item, index, array) {
    // var link_adress = $(item).data('admin_url');
    var hidden_panel = document.createElement('div');
    hidden_panel.classList.add('db_hidden_content');
    var hidden_link = document.createElement('span');
    hidden_link.classList.add('db_hidden_link'); // hidden_link.setAttribute(`href`, link_adress);

    hidden_link.textContent = 'Редагувати';
    hidden_panel.appendChild(hidden_link);
    item.appendChild(hidden_panel);
  });
}

$('.svg_power').on('click', function () {
  admin_func();
});
$('.db_content').on('click', function () {
  if ($(this).hasClass('db_content_active')) {
    var current_url = $(this).attr('data-admin_url');
    window.open(current_url);
  }
});

function admin_func() {
  if (only_on_click) {
    only_on_click = false;
    $('.admin_button').attr('data-title', 'Виключити редагування');
    $('.db_content').addClass('db_content_active');
    sessionStorage.setItem('admin_panell', 0);
    admin_check = sessionStorage.getItem('admin_panell');
    admin_panels.forEach(function (item, index, array) {
      // var link_adress = $(item).data('admin_url');
      var hidden_panel = document.createElement('div');
      hidden_panel.classList.add('db_hidden_content');
      var hidden_link = document.createElement('span');
      hidden_link.classList.add('db_hidden_link'); // hidden_link.setAttribute(`href`, link_adress);

      hidden_link.textContent = 'Редагувати';
      hidden_panel.appendChild(hidden_link);
      item.appendChild(hidden_panel);
    });
  } else {
    $('.admin_button').attr('data-title', 'Включити редагування');
    $('.db_content').removeClass('db_content_active');
    only_on_click = true;
    sessionStorage.setItem('admin_panell', 1);
    admin_check = sessionStorage.getItem('admin_panell');
    admin_panels.forEach(function (item, index, array) {
      $('.db_hidden_content').remove();
    });
  }
} // admin panel ============================>

/***/ }),

/***/ "../components/common_componentc/admin_panel/index.scss":
/*!**************************************************************!*\
  !*** ../components/common_componentc/admin_panel/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/footer/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/footer/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/footer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$('.footer_btn').on('click', function () {
  var wrap = $(this).parents('.footer_accordeon__block');

  if ($(this).hasClass('footer_btn_active')) {
    console.log(1);
    $(this).removeClass('footer_btn_active');
    $(wrap).find('.footer_accordeon_content').removeClass('footer_accordeon_content_active');
  } else {
    console.log(2);
    $(wrap).find('.footer_accordeon_content').addClass('footer_accordeon_content_active');
    $(this).addClass('footer_btn_active');
  }
});
var inputHasFocus = $('.input_focus');
inputHasFocus.on('focus', function () {
  var focusFinder = $(this).parents('.inp-vak-wrap').find('.label__style');
  focusFinder.addClass('label__style_active');
});
inputHasFocus.on('blur', function () {
  if ($(this).val().length < 1 || $(this).val() == '+38(___) __ __ ___') {
    var blurFinder = $(this).parents('.inp-vak-wrap').find('.label__style');
    blurFinder.removeClass('label__style_active');
  }
});

/***/ }),

/***/ "../components/common_componentc/footer/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/footer/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/header/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/header/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

window.addEventListener('DOMContentLoaded', function () {
  var arrow_1 = document.getElementById('arrow_1');
  var button_1 = document.getElementById('button_1');
  var arrow_2 = document.getElementById('arrow_2');
  var button_2 = document.getElementById('button_2');
  var arrow_3 = document.getElementById('arrow_3');
  var button_3 = document.getElementById('button_3');
  var arrow_4 = document.getElementById('arrow_4');
  var button_4 = document.getElementById('button_4');
  var arrow_5 = document.getElementById('arrow_5');
  var button_5 = document.getElementById('button_5');
  create_animation(arrow_1, button_1);
  create_animation(arrow_2, button_2);
  create_animation(arrow_3, button_3);
  create_animation(arrow_4, button_4);
  create_animation(arrow_5, button_5);
});

function create_animation(arrow, button) {
  var x;
  var y;
  document.addEventListener('mousemove', function (e) {
    x = e.clientX / 10;
    y = e.clientY / 10;
    arrow.setAttribute("style", "margin-top: ".concat(y, "px; margin-right: ").concat(x, "px;")); // arrow.style.top = y + 'px';
    // arrow.style.right = x + 'px';
  });
  button.addEventListener('mouseenter', function () {
    arrow.style.opacity = 1;
  });
  button.addEventListener('mouseleave', function () {
    arrow.style.opacity = 0;
  });
}

$('#menu-toggle').click(function () {
  $(this).toggleClass('open');
  $('.scroll_menu').toggleClass('scroll_menu_active');
  $('body').toggleClass('body_active');
  $('.nav_menu__block').toggleClass('nav_menu__block_active');
  $('.header_logos').toggleClass('header_logos_active');
  $('.scroll_top__block').toggleClass('scroll_top__block_active');
  $('.scroll_bottom__block').toggleClass('scroll_bottom__block_active');

  if ($('.logo__wrap').hasClass('logo_wrap_active')) {
    $('.logo__wrap').removeClass('logo_wrap_active');
    $('.logo__wrap').addClass('logo_wrap_native');
  } else {
    $('.logo__wrap').addClass('logo_wrap_active');
    $('.logo__wrap').removeClass('logo_wrap_native');
  }
});
$('.modal_search').on('click', function () {
  $('.search_menu').toggleClass('search_menu_active');
  $('body').toggleClass('body_active');
});
$('.modal_basket').on('click', function () {
  $('.basket_menu').toggleClass('basket_menu_active');
  $('.black_bg').toggleClass('black_bg_active');
  $('body').toggleClass('body_active');
  $('.basket_content__block').find('.basket_content_profile').remove();
  fetch("/api/cart_items/", {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(function (data) {
    return data.json();
  }).then(function (data) {
    console.log('data: ', data);
    $('.basket_all_result').text("\u20B4 ".concat(Math.round(data.cart_total_price)));
    console.log('data: ', data.cart_items.length);
    var card_json = {
      img_src: '/static/source/img/index/lite.png',
      name_basket: 'Вилка VEPR-H123',
      quantity: '1',
      price: '2500'
    };

    for (var index = 0; index < data.cart_items.length; index++) {
      $('.basket_content__block')[0].appendChild(create_basket_card(card_json, data.cart_items[index]));
    }

    var checked = $('.basket_content__block').find('.basket_content_profile').length;
    console.log('checked: ', checked);

    if (checked == 0) {
      $('.none_content_send').text('Ваша корзина порожня');
      $('.none_content_send').addClass('none_content_send_active');
      $('.discount__block').css('opacity', '0');
      $('.basket_nobtn_wrap').css('display', 'block');
      $('.basket_btn_wrap').css('display', 'none');
    } else {
      $('.none_content_send').text('');
      $('.none_content_send').removeClass('none_content_send_active');
      $('.discount__block').css('opacity', '1');
      $('.basket_nobtn_wrap').css('display', 'none');
      $('.basket_btn_wrap').css('display', 'block');
    }
  });
}); // корзина ===========+>

$('.basket_input').on('blur', basket_blur);

function basket_blur() {
  var _this = this;

  var curr_user_num = $(this);
  var quantity_id;

  if (curr_user_num.val() > 0) {} else if (curr_user_num.val() <= 0 || curr_user_num.val() == '') {
    $(curr_user_num).val(1);
  }

  var item_id = $(this).attr('data-quantity_item_id');
  quantity_id = $(this).val();
  console.log('quantity_id: ', quantity_id);
  fetch("/api/cart_item/".concat(Number(item_id), "/"), {
    method: 'PATCH',
    body: JSON.stringify({
      quantity: Number(quantity_id)
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(function (data) {
    return data.json();
  }).then(function (data) {
    console.log('data: ', data);
    $(_this).parents('.basket_content_profile').find('.basket_summ').text("".concat(Math.round(data.cart_item_total_price), " ").concat(data.cart_currency));
    $('.basket_all_result').text("".concat(data.cart_currency, " ").concat(Math.round(data.cart_total_price)));
  });
}

$('.basket_del').on('click', basket_delete);

function basket_delete() {
  var _this2 = this;

  var wrap = $(this).parents('.basket_content_profile');
  $(wrap).css("right", '-100vw');
  $(wrap).css("max-height", '0px');
  setTimeout(function () {
    $(wrap).remove();

    if ($('.basket_content__block').find('.basket_content_profile').length == 0) {
      $('.none_content_send').text('Ваша корзина порожня');
      $('.none_content_send').addClass('none_content_send_active');
      $('.discount__block').css('opacity', '0');
      $('.basket_nobtn_wrap').css('display', 'block');
      $('.basket_btn_wrap').css('display', 'none');
    } else {
      $('.none_content_send').text('');
      $('.none_content_send').removeClass('none_content_send_active');
      $('.discount__block').css('opacity', '1');
      $('.basket_nobtn_wrap').css('display', 'none');
      $('.basket_btn_wrap').css('display', 'block');
    }
  }, 300);
  var item_id = $(this).attr('data-quantity_item_id');
  fetch("/api/cart_item/".concat(item_id), {
    method: 'DELETE'
  }).then(function (data) {
    return data.json();
  }).then(function (data) {
    console.log('data: ', data);
    $(_this2).parents('.basket_content_profile').find('.basket_summ').text("".concat(Math.round(data.cart_item_total_price), " ").concat(data.cart_currency));
    $('.basket_all_result').text("".concat(data.cart_currency, " ").concat(Math.round(data.cart_total_price)));
  });
}

function number_to(id, from, to, duration) {
  var element = id;
  var start = new Date().getTime();
  setTimeout(function () {
    var now = new Date().getTime() - start;
    var progress = now / duration;
    var result = Math.floor((to - from) * progress + from);
    var test = from;
    test = progress < 1 ? result : to;

    if (test == 'NaN') {
      element.text(Math.floor((to - from) * progress + from));
    } else {
      element.text(test);
    }

    if (progress < 1) setTimeout(arguments.callee, 10);
  }, 10);
}

function create_basket_card(content, data) {
  console.log('data: ', data);
  var basket_content_profile = document.createElement('div');
  basket_content_profile.classList.add('basket_content_profile');
  var basket_profile_img = document.createElement('div');
  basket_profile_img.classList.add('basket_profile_img');
  var profile_img = document.createElement('img');
  profile_img.classList.add('basket_profile_img');
  profile_img.setAttribute("src", data.item.image_url);
  var basket_right_content = document.createElement('div');
  basket_right_content.classList.add('basket_right_content');
  var basket_title__block = document.createElement('div');
  basket_title__block.classList.add('basket_title__block');
  var basket_title = document.createElement('div');
  basket_title.classList.add('basket_title', 'main__title', 'main__title_5');
  basket_title.textContent = data.item.title; // початок доробок
  // let x = document.createElement('div');
  // x.classList.add('basket_title', 'main__title', 'main__title_5');
  // x.textContent = data.item.title;
  // let y = document.createElement('div');
  // y.classList.add('basket_title', 'main__title', 'main__title_5');
  // y.textContent = data.item.title;
  // let z = document.createElement('div');
  // z.classList.add('basket_title', 'main__title', 'main__title_5');
  // z.textContent = data.item.title;
  // кінець доробок

  var basket_del = document.createElement('img');
  basket_del.classList.add('basket_del', 'remove_prod_card');
  basket_del.setAttribute("data-quantity_item_id", data.id);
  basket_del.setAttribute("src", '/static/source/img/index/trash.svg');
  var basket_bottom__wrap = document.createElement('div');
  basket_bottom__wrap.classList.add('basket_bottom__wrap');
  var basket_counter__block = document.createElement('div');
  basket_counter__block.classList.add('basket_counter__block');
  var basket_text = document.createElement('div');
  basket_text.classList.add('basket_text', 'sub_title', 'sub_title_2');
  basket_text.textContent = 'Кількість';
  var basket_counter = document.createElement('div');
  basket_counter.classList.add('basket_counter');
  var basket_prep = document.createElement('div');
  basket_prep.setAttribute("data-quantity_item_id", data.id);
  basket_prep.classList.add('basket_prep', 'basket_count', 'sub_title', 'sub_title_21');
  basket_prep.textContent = '-';
  var basket_input = document.createElement('input');
  basket_input.setAttribute("type", 'number');
  basket_input.setAttribute("value", data.quantity);
  basket_input.setAttribute("data-quantity_item_id", data.id);
  basket_input.classList.add('basket_input', 'basket_count', 'main__title', 'main__title_5', 'cart_counter', 'quan_cart_sum');
  var basket_next = document.createElement('div');
  basket_next.setAttribute("data-quantity_item_id", data.id);
  basket_next.classList.add('basket_next', 'basket_count', 'sub_title', 'sub_title_21');
  basket_next.textContent = '+';
  var basket_sum__block = document.createElement('div');
  basket_sum__block.classList.add('basket_sum__block');
  var basket_price_title = document.createElement('div');
  basket_price_title.classList.add('basket_text', 'sub_title', 'sub_title_2');
  basket_price_title.textContent = 'Ціна';
  var basket_summ = document.createElement('div');
  basket_summ.classList.add('basket_summ', 'main__title', 'main__title_5');
  basket_summ.textContent = data.item.price + ' ' + data.item.currency.code;
  basket_content_profile.appendChild(basket_profile_img);
  basket_profile_img.appendChild(profile_img);
  basket_content_profile.appendChild(basket_right_content);
  basket_right_content.appendChild(basket_title__block);
  basket_title__block.appendChild(basket_title);
  basket_title__block.appendChild(basket_del);
  basket_right_content.appendChild(basket_bottom__wrap); // початок доробок
  // basket_right_content.appendChild(x);
  // basket_right_content.appendChild(y);
  // basket_right_content.appendChild(z);
  // кінець доробок

  basket_bottom__wrap.appendChild(basket_counter__block);
  basket_counter__block.appendChild(basket_text);
  basket_counter__block.appendChild(basket_counter);
  basket_counter.appendChild(basket_prep);
  basket_counter.appendChild(basket_input);
  basket_counter.appendChild(basket_next);
  basket_bottom__wrap.appendChild(basket_sum__block);
  basket_sum__block.appendChild(basket_price_title);
  basket_sum__block.appendChild(basket_summ);
  $(basket_del).on('click', basket_delete);
  $(basket_next).on('click', basket_plus);
  $(basket_prep).on('click', basket_minus);
  $(basket_input).on('blur', basket_blur);
  return basket_content_profile;
}

function counter_plus(name) {
  var count_var = $(name).text();
  count_num = Number(count_var);
  count_num++;
  $(name).text(count_num);
}

function counter_minus(name) {
  var count_var = $(name).text();
  count_num = Number(count_var);
  count_num--;
  $(name).text(count_num);
}

function basket_minus() {
  var _this3 = this;

  console.log(123);
  var current_quan_sum = $(this).parents('.basket_counter').find('.cart_counter').val();

  if (current_quan_sum == 1) {
    console.log('меньше не може бути');
  } else {
    $(this).parents('.basket_counter').find('.cart_counter').val(Number(current_quan_sum) - 1);
    var item_id = $(this).attr('data-quantity_item_id');
    var quantity_id = $(this).parents('.basket_counter').find('.quan_cart_sum').val();
    console.log('quantity_id: ', quantity_id);
    fetch("/api/cart_item/".concat(Number(item_id), "/"), {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: Number(quantity_id)
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(function (data) {
      return data.json();
    }).then(function (data) {
      console.log('data: ', data);
      $(_this3).parents('.basket_content_profile').find('.basket_summ').text("".concat(Math.round(data.cart_item_total_price), " ").concat(data.cart_currency));
      $('.basket_all_result').text("".concat(data.cart_currency, " ").concat(Math.round(data.cart_total_price)));
    });
  }
}

function basket_plus() {
  var _this4 = this;

  var current_quan_sum = $(this).parents('.basket_counter').find('.cart_counter').val();
  console.log('current_quan_sum: ', current_quan_sum);

  if (current_quan_sum == 99999) {
    console.log('більше не може бути');
  } else {
    $(this).parents('.basket_counter').find('.cart_counter').val(Number(current_quan_sum) + 1);
    var item_id = $(this).attr('data-quantity_item_id');
    var quantity_id = $(this).parents('.basket_counter').find('.quan_cart_sum').val();
    console.log('quantity_id: ', quantity_id);
    fetch("/api/cart_item/".concat(Number(item_id), "/"), {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: Number(quantity_id)
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(function (data) {
      return data.json();
    }).then(function (data) {
      console.log('data: ', data);
      $(_this4).parents('.basket_content_profile').find('.basket_summ').text("".concat(Math.round(data.cart_item_total_price), " ").concat(data.cart_currency));
      $('.basket_all_result').text("".concat(data.cart_currency, " ").concat(Math.round(data.cart_total_price)));
    });
  }
}

/***/ }),

/***/ "../components/common_componentc/header/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/header/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/normalize/index.js":
/*!**********************************************************!*\
  !*** ../components/common_componentc/normalize/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/normalize/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/normalize/index.scss":
/*!************************************************************!*\
  !*** ../components/common_componentc/normalize/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/button/index.js":
/*!***********************************************!*\
  !*** ../components/interface/button/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/button/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$('.btn-lean_more').on('mouseenter', function () {
  $(this).addClass('is-focus-over');
  $(this).removeClass('is-focus-out');
});
$('.btn-lean_more').on('mouseleave', function () {
  $(this).addClass('is-focus-out');
  $(this).removeClass('is-focus-over');
});
$(".absolute_product_arrow").hover(function () {
  $(this).removeClass('out').addClass('over');
}, function () {
  $(this).removeClass('over').addClass('out');
});
$(".btn_standart_black").hover(function () {
  $(this).removeClass('out').addClass('over');
}, function () {
  $(this).removeClass('over').addClass('out');
});
$(".btn_standart_yellow").hover(function () {
  $(this).removeClass('out').addClass('over');
}, function () {
  $(this).removeClass('over').addClass('out');
});
$(".btn_standart_transparent").hover(function () {
  $(this).removeClass('out').addClass('over');
}, function () {
  $(this).removeClass('over').addClass('out');
});

/***/ }),

/***/ "../components/interface/button/index.scss":
/*!*************************************************!*\
  !*** ../components/interface/button/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/grid/index.js":
/*!*********************************************!*\
  !*** ../components/interface/grid/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/grid/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/grid/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/grid/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/form_errors/index.js":
/*!*************************************************!*\
  !*** ../components/module/form_errors/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/module/form_errors/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


if ($('.mobile').length > 0) {
  $('.mobile').mask("+38(999) 99 99 999");
}

var lang_site;
var curr_lang;
var curr_lang_length;
;
lang_site = location_leng();

switch (lang_site) {
  case 'uk':
    curr_lang = "Поле повинно містити лише букви";
    curr_lang_length = "Поле повинно містити більше 6 символів";
    break;

  case 'ru':
    curr_lang = 'Поле должно содержать только буквы';
    curr_lang_length = "Поле должно содержать более 6 символов";
    break;

  case 'en':
    curr_lang = 'The field must contain only letters';
    curr_lang_length = "Field must contain more than 6 characters";
    break;

  default:
    curr_lang = "Поле повинно містити лише букви.";
    curr_lang_length = "Поле повинно містити більше 6 символів";
}

jQuery.validator.addMethod("lettersonly", function (value, element) {
  return this.optional(element) || /[^0-9]+$/i.test(value);
}, curr_lang);
jQuery.validator.addMethod("minLength", function (value, element) {
  if (value.length <= 6) {
    return false;
  } else {
    return true;
  }
}, curr_lang_length);
$(function () {
  Onload();
}); // /**
//  * valide_form - Валідація форм
//  * @param {selector form} ID Форми на яку підвішують валідацію
//  * @param {class name} class групи куди виводять помилки
//  * @param {bull} true Чи виводи вспливайку пісял відповіді ajax
//  *
//  **/

function Onload() {
  // var more_form = $('.mini-user-form');
  // for (var testz = 0; testz < more_form.length; testz++) {
  //     var tehas = more_form[testz];
  //     var dinamic_id = 'active_form' + testz;
  //     $(tehas).attr('id', dinamic_id);
  //     var dinamic_main_id = '#' + $(tehas).attr('id');
  //     console.log(dinamic_main_id);
  //     valide_form(dinamic_main_id, '.inp-mini-wrap', false);
  // }
  valide_form('.footer_form', '.inp-vak-wrap', true);
  valide_form('#comment_form', '.inp-vak-wrap', false);
  valide_form('.registery_form', '.inp-vak-wrap', false);
  valide_form('.drive__form_last', '.inp-vak-wrap', true);
  valide_form('.drive__form', '.inp-vak-wrap', true);
  valide_form('.form_cons', '.inp-vak-wrap', true);
  valide_form('#form_qustion', '.inp-vak-wrap', true);
  valide_form('#form_cons', '.inp-vak-wrap', true);
  valide_form('#order__form_constructor', '.inp-vak-wrap', true);
}

function location_leng() {
  return location.pathname.split('/')[1];
}

function valide_form(id_form, error_inp_wrap, check_request) {
  var modal = false;
  var check_request = check_request;

  if ($(id_form).length > 0) {
    var lang_site;
    var error_text = {};
    lang_site = location_leng();

    switch (lang_site) {
      case 'uk':
        error_text.required = 'Поле обов\'язково для заповнення';
        error_text.email = 'Поле має містити email';
        break;

      case 'ru':
        error_text.required = 'Поле обязательно для заполнения';
        error_text.email = 'Поле должно содержать email';
        break;

      case 'en':
        error_text.required = 'The field is required';
        error_text.email = 'The field must contain an email';
        break;

      default:
        error_text.required = 'Поле обов\'язково для заповнення.';
        error_text.email = 'Поле має містити email.';
    }

    $(id_form).validate({
      errorPlacement: function errorPlacement(event, validator) {
        console.log(validator);
        $(validator).parents(error_inp_wrap).append($(event));
      },
      rules: {
        email: {
          required: true,
          email: true
        },
        name: {
          required: true,
          lettersonly: true
        },
        first_name: {
          required: true,
          lettersonly: true
        },
        contact_name: {
          required: true,
          lettersonly: true
        },
        username: {
          required: true
        },
        adress: {
          required: true
        },
        old_password: {
          required: true
        },
        pass1: {
          required: true,
          minLength: true
        },
        address: {
          required: true,
          lettersonly: true
        },
        phone_number: {
          required: true
        },
        phone: {
          required: true
        },
        password: {
          required: true
        },
        password2: {
          required: true,
          minLength: true
        },
        pas1: {
          required: true
        },
        pas2: {
          required: true
        }
      },
      messages: {
        email: {
          required: error_text.required,
          email: error_text.email
        },
        name: {
          required: error_text.required
        },
        first_name: {
          required: error_text.required
        },
        address: {
          required: error_text.required
        },
        adress: {
          required: error_text.required
        },
        old_password: {
          required: error_text.required
        },
        pass1: {
          required: error_text.required
        },
        username: {
          required: error_text.required
        },
        phone_number: {
          required: error_text.required
        },
        phone: {
          required: error_text.required
        },
        password: {
          required: error_text.required
        },
        password2: {
          required: error_text.required
        },
        pas1: {
          required: error_text.required
        },
        pas2: {
          required: error_text.required
        }
      },
      submitHandler: function submitHandler(form) {
        console.log('form: ', form);
        event.preventDefault();
        $('.load_spin').addClass('load_spin_active');
        var form_input = $(form).serializeArray();
        var url_form = form.action;
        var form_json = {};
        $(form_input).each(function (index, obj) {
          form_json[obj.name] = obj.value;
        });
        var pass_checked = true;
        var pass_finder = $('.login_pass2').length;

        if (pass_finder == 1) {
          var pass_1 = $('.login_pass').val();
          var pass_2 = $('.login_pass2').val();
          pass_checked = false;

          if (pass_1 == pass_2) {
            $('.pass_checked_error').text('');
            pass_checked = true;
          } else {
            pass_checked = false;
            event.preventDefault();
            $('.load_spin').removeClass('load_spin_active');
            $.fancybox.close();
            $('.pass_checked_error').text('паролі не співпадають');
          }
        }

        console.log(form_json);

        if (url_form != '' && pass_checked == true) {
          console.log('url_form: ', url_form);
          var current_method = 'POST';

          if ($(form).hasClass('PATCH')) {
            current_method = 'PATCH';
            modal = true;
          } else {
            current_method = 'POST';
            modal = false;
          }

          fetch(url_form, {
            method: current_method,
            body: new URLSearchParams($.param(form_json)) // headers: {
            //   "Content-Type": "application/json",
            //   "Accept": "application/json"
            // },

          }).then(function (data) {
            return data.json();
          }).then(function (data) {
            console.log('data: ', data);
            console.log('tut?');

            if (data.status == 'OK' && typeof data['status'] !== "undefined") {
              sayHi();
            }

            if (data.status == 'BAD' && typeof data['status'] !== "undefined") {
              $('.load_spin').removeClass('load_spin_active');
              $(".error_block_false").text("Невірний логін або пароль");
              $('.login_checked_error').text(data.error_fields.username);
              $('.login_checked_error').text(data.error_fields.email);
              console.log('$(): ', $('.login_checked_error')); // if (typeof data['error_field'] == "undefined") {
              //   console.log('tuta');
              // }
            }

            if (typeof data['url'] !== "undefined" && data.url != '') {
              //   sayHi();
              location.href = data.url;
            }
          });
        } else {
          console.log("forn_not_actions");
        }

        function explode() {
          if (id_form == '#modal-form_user') {// window.location.pathname = '/'
          } else {// sayHi();
            }
        }

        explode();

        function sayHi() {
          console.log(133313);
          console.log('modal: ', modal);
          $('.load_spin').removeClass('load_spin_active');

          if (modal == true) {
            console.log('tut');
            $.fancybox.open({
              src: '#modal_form_change_profile'
            });
            setTimeout(function () {
              $.fancybox.close({
                src: '#modal_form_change_profile'
              });
            }, 1500);
          } else {
            $.fancybox.close();
          }

          if (check_request === true) {
            $.fancybox.open({
              src: '#modal-form_true'
            });
            setTimeout(function () {
              $.fancybox.close({
                src: '#modal-form_true'
              });
            }, 1500);
            var form_inputs = $(form)[0].querySelectorAll('input');

            if (form_inputs.length > 0) {
              for (var key in form_inputs) {
                if (form_inputs.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
                  if (form_inputs[key].type !== 'submit') {
                    form_inputs[key].value = '';
                  }
                }
              }

              var form_textaria = $(form)[0].querySelectorAll('textarea');

              if (form_textaria.length > 0) {
                form_textaria[0].value = '';
              }
            }
          }
        }
      }
    });
  }
}

/***/ }),

/***/ "../components/module/form_errors/index.scss":
/*!***************************************************!*\
  !*** ../components/module/form_errors/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/order/index.js":
/*!******************************************!*\
  !*** ../components/pages/order/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/pages/order/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

var ua = 'Поле обов\'язково для заповнення';
var ru = 'Поле обязательно для заполнения';
var en = 'The field is required';
var current_lang = ua;

function create_error(text) {
  var error = document.createElement('label');
  error.classList.add('error', 'sub_title', 'sub_title_2');
  error.setAttribute("for", 'code');
  error.setAttribute("id", 'code-error');
  error.textContent = text;
  return error;
}

function check_active_input() {
  var wrap = $(this).parents('.step__wrap');
  var all_input = $(wrap).find('.input_requared');
  var counter = 0;
  $.each(all_input, function (index, value) {
    if ($(value).val() == '') {
      $(value).parents('.inp-vak-wrap').find('.error').remove();
      $(value).parents('.inp-vak-wrap')[0].appendChild(create_error(current_lang));
    } else {
      $(value).parents('.inp-vak-wrap').find('.error').text('');
      counter++;
    }
  });

  if ($(all_input).length == counter) {
    $(wrap).find('.step_num').addClass('step_num_active');
    $(wrap).find('.step_title__wrap').addClass('step_title__wrap_done');
  } else {
    $(wrap).find('.step_num').removeClass('step_num_active');
    $(wrap).find('.step_title__wrap').removeClass('step_title__wrap_done');
  }
}

$('.input_requared').on('change', check_active_input);
$('.next_step_btn').on('click', check_next_step);
$('.step_title__wrap').on('click', function () {
  var wrap = $(this).parents('.step__wrap');

  if ($(this).hasClass('step_title__wrap_done')) {
    console.log(1);
    $('.step__wrap').removeClass('step__wrap_active');
    $(wrap).addClass('step__wrap_active');
  } else {
    console.log(2);
  }
});
$('.radio_block').on('click', function () {
  var wrap = $(this).parents('.step__wrap');
  $(wrap).find('.radio_center').removeClass('radio_center_active');
  $(this).find('.radio_center').addClass('radio_center_active');

  if ($(this).hasClass('add_one_inp')) {
    $('.step_content_delivery').addClass('only_one_input');
    $('.step_content_delivery').removeClass('only_two_input');
    $('.step_content_delivery').removeClass('only_none_input');
    $('.two_input__wrap').addClass('hidden_input__wrap');
    $('.one_input__wrap').removeClass('hidden_input__wrap');
  } else if ($(this).hasClass('add_two_inp')) {
    $('.step_content_delivery').removeClass('only_one_input');
    $('.step_content_delivery').addClass('only_two_input');
    $('.step_content_delivery').removeClass('only_none_input');
    $('.one_input__wrap').addClass('hidden_input__wrap');
    $('.two_input__wrap').removeClass('hidden_input__wrap');
  } else if ($(this).hasClass('remove_input')) {
    $('.step_content_delivery').removeClass('only_one_input');
    $('.step_content_delivery').removeClass('only_two_input');
    $('.step_content_delivery').addClass('only_none_input');
    $('.one_input__wrap').addClass('hidden_input__wrap');
    $('.two_input__wrap').addClass('hidden_input__wrap');
  }
});

function check_next_step() {
  var wrap = $(this).parents('.step__wrap');
  var counter = 0;

  if ($(this).attr('data-step-btn') == 2) {
    if ($('.step_content_delivery').hasClass('only_two_input')) {
      var check_city = $('.select_city').val();
      var check_aria = $('.select_aria').val();
      console.log('check_aria: ', check_aria);
      console.log('check_city: ', check_city);

      if (check_city == null || check_aria == null) {
        counter++;
      }

      $('#order_adress').removeClass('input_requared');
    } else if ($('.step_content_delivery').hasClass('only_none_input')) {
      $('#order_adress').removeClass('input_requared');
    } else if ($('.step_content_delivery').hasClass('only_one_input')) {
      $('#order_adress').addClass('input_requared');
    }
  }

  var all_input = $(wrap).find('.input_requared');
  $.each(all_input, function (index, value) {
    if ($(value).val() == '') {
      $(value).parents('.inp-vak-wrap').find('.error').remove();
      $(value).parents('.inp-vak-wrap')[0].appendChild(create_error(current_lang));
    } else {
      $(value).parents('.inp-vak-wrap').find('.error').text('');
      counter++;
    }
  });

  if ($(all_input).length == counter) {
    $(wrap).find('.step_num').addClass('step_num_active');
    $(wrap).find('.step_num').removeClass('step_num_error');
  } else {
    $(wrap).find('.step_num').removeClass('step_num_active');
    $(wrap).find('.step_num').addClass('step_num_error');
  }

  if ($(wrap).find('.step_num').hasClass('step_num_active')) {
    var back_step = Number($(this).attr('data-step-btn'));
    var current_step = Number($(this).attr('data-step-btn')) + 1;
    var all_step = $('.step__wrap');
    $.each(all_step, function (index, value) {
      if ($(value).attr('data-step') == current_step) {
        $('.step__wrap').removeClass('step__wrap_active');
        $(value).addClass('step__wrap_active');
        console.log('$(value): ', $(value));
      } else if ($(value).attr('data-step') == back_step) {
        $(value).find('.step_title__wrap').addClass('step_title__wrap_done');
      }
    });
  }
}

$('.order_info__block').on('submit', function (evt) {
  evt.preventDefault();
  var requare_inputs = $('.input_requared');
  var counter = 0;
  $.each(requare_inputs, function (index, value) {
    if ($(value).val() == '') {
      $(value).parents('.inp-vak-wrap').find('.error').remove();
      $(value).parents('.inp-vak-wrap')[0].appendChild(create_error('The field is required'));
    } else {
      $(value).parents('.inp-vak-wrap').find('.error').text('');
      counter++;
    }
  });

  if ($(requare_inputs).length == counter) {
    var another_block = $('.form_create__block').find('.part__wrapper');
    var another_array = [];
    $.each(another_block, function (index, value) {
      var name = $(value).find('.part_name').val();
      var id = $(value).find('.id').val();
      another_array.push({
        'part_name': name,
        'id': id
      });
    });
    var form_json = {
      'car_model': $('.car_model').val(),
      'marka': $('.marka').val(),
      'year': $('.year').val(),
      'vin code': $('.vin_code').val(),
      'name': $('.name').val(),
      'email': $('.email').val(),
      'phone': $('.phone').val(),
      'additional_information': $('.additional_information').val(),
      'another_parts': another_array
    };
  }
}); // setInterval(() => {
//     if ($('.nova_city').hasClass('nova_city_active')) {
//         // reset_city();
//         $('.nova_city').removeClass('nova_city_active');
//     }
// }, 200);

$('.submit_order_btn').on('click', function () {
  var action = $('.order_info__block').attr('action');
  var current_delivery = $('.step_content_delivery').find('.radio_center_active').parents('.radio_block').find('.radio_title').text();
  console.log('current_delivery: ', current_delivery);
  var current_payment = $('.step_content_payment').find('.radio_center_active').parents('.radio_block').find('.radio_title').attr('data-payment'); // $.each(all_attr,function(index,value){
  //     let current_sum = $(value).find('.option_content_prof_active').attr('data-price-option');
  // })

  var current_adress;

  if ($('.step_content_delivery').hasClass('only_one_input')) {
    current_adress = $('#order_adress');
  } else if ($('.step_content_delivery').hasClass('only_two_input')) {
    current_adress = "".concat(current_delivery.trim(), ", ").concat($('.select_city').val(), ", ").concat($('.select_aria').val());
  } else if ($('.step_content_delivery').hasClass('only_none_input')) {
    current_adress = "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u043E\u0431\u0440\u0430\u0432 \u0441\u0430\u043C\u043E\u0432\u0438\u0432\u0456\u0437";
  }

  var body = {
    "name": $('#order_name').val(),
    "email": $('#order_email').val(),
    "phone": $('#order_phone').val(),
    "delivery_opt": current_adress,
    "payment_opt": current_payment.trim()
  };
  fetch(action, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(function (data) {
    return data.json();
  }).then(function (body) {
    console.log('body: ', body);
    window.location.href = body.url;
  });
});
$('.basket_prep_order').on('click', function () {
  var _this = this;

  console.log(123);
  var current_quan_sum = $(this).parents('.basket_counter').find('.cart_counter').val();

  if (current_quan_sum == 1) {
    console.log('меньше не може бути');
  } else {
    $(this).parents('.basket_counter').find('.cart_counter').val(Number(current_quan_sum) - 1);
    var item_id = $(this).attr('data-quantity_item_id');
    var quantity_id = $(this).parents('.basket_counter').find('.quan_cart_sum').val();
    console.log('quantity_id: ', quantity_id);
    fetch("/api/cart_item/".concat(Number(item_id), "/"), {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: Number(quantity_id)
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(function (data) {
      return data.json();
    }).then(function (data) {
      console.log('data: ', data);
      $(_this).parents('.basket_content_profile').find('.basket_summ').text("".concat(Math.round(data.cart_item_total_price), " ").concat(data.cart_currency));
      $('.order_sum').text("".concat(data.cart_currency, " ").concat(Math.round(data.cart_total_price)));
    });
  }
});
$('.basket_input_order').on('blur', function () {
  var _this2 = this;

  var curr_user_num = $(this);
  var quantity_id;

  if (curr_user_num.val() > 0) {} else if (curr_user_num.val() <= 0 || curr_user_num.val() == '') {
    $(curr_user_num).val(1);
  }

  var item_id = $(this).attr('data-quantity_item_id');
  quantity_id = $(this).val();
  console.log('quantity_id: ', quantity_id);
  fetch("/api/cart_item/".concat(Number(item_id), "/"), {
    method: 'PATCH',
    body: JSON.stringify({
      quantity: Number(quantity_id)
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(function (data) {
    return data.json();
  }).then(function (data) {
    console.log('data: ', data);
    $(_this2).parents('.basket_content_profile').find('.basket_summ').text("".concat(Math.round(data.cart_item_total_price), " ").concat(data.cart_currency));
    $('.order_sum').text("".concat(data.cart_currency, " ").concat(Math.round(data.cart_total_price)));
  });
});
$('.basket_next_order').on('click', function () {
  var _this3 = this;

  var current_quan_sum = $(this).parents('.basket_counter').find('.cart_counter').val();
  console.log('current_quan_sum: ', current_quan_sum);

  if (current_quan_sum == 99999) {
    console.log('більше не може бути');
  } else {
    $(this).parents('.basket_counter').find('.cart_counter').val(Number(current_quan_sum) + 1);
    var item_id = $(this).attr('data-quantity_item_id');
    var quantity_id = $(this).parents('.basket_counter').find('.quan_cart_sum').val();
    console.log('quantity_id: ', quantity_id);
    fetch("/api/cart_item/".concat(Number(item_id), "/"), {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: Number(quantity_id)
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(function (data) {
      return data.json();
    }).then(function (data) {
      console.log('data: ', data);
      $(_this3).parents('.basket_content_profile').find('.basket_summ').text("".concat(Math.round(data.cart_item_total_price), " ").concat(data.cart_currency));
      $('.order_sum').text("".concat(data.cart_currency, " ").concat(Math.round(data.cart_total_price)));
    });
  }
});

/***/ }),

/***/ "../components/pages/order/index.scss":
/*!********************************************!*\
  !*** ../components/pages/order/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./order.js":
/*!******************!*\
  !*** ./order.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_componentc_normalize_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/common_componentc/normalize/index */ "../components/common_componentc/normalize/index.js");
/* harmony import */ var _components_interface_grid_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/interface/grid/index */ "../components/interface/grid/index.js");
/* harmony import */ var _components_interface_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/interface/button */ "../components/interface/button/index.js");
/* harmony import */ var _components_module_form_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/module/form_errors */ "../components/module/form_errors/index.js");
/* harmony import */ var _components_common_componentc_admin_panel_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/common_componentc/admin_panel/index */ "../components/common_componentc/admin_panel/index.js");
/* harmony import */ var _components_common_componentc_header_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common_componentc/header/index */ "../components/common_componentc/header/index.js");
/* harmony import */ var _components_common_componentc_footer_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common_componentc/footer/index */ "../components/common_componentc/footer/index.js");
/* harmony import */ var _components_pages_order_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/pages/order/index */ "../components/pages/order/index.js");
// script interface


 // script common elements


 // script pages





/***/ })

/******/ });
//# sourceMappingURL=index.js.map