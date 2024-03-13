$(document).ready(function () {

    // megamenu
    $('#productsMenu').on('mouseover', function () {
        $('.megamenu-area').removeClass('visually-hidden')
    })
    $('.megamenu-area').on('mouseleave', function () {
        $('.megamenu-area').addClass('visually-hidden')
    })
    $('#menuCategory2').on('mouseover', function () {
        $('#submenu1, #submenu3').addClass('visually-hidden')
        $('#submenu2').removeClass('visually-hidden')
    })
    $('#menuCategory3').on('mouseover', function () {
        $('#submenu2, #submenu1').addClass('visually-hidden')
        $('#submenu3').removeClass('visually-hidden')
    })
    $('#menuCategory1').on('mouseover', function () {
        $('#submenu2, #submenu3').addClass('visually-hidden')
        $('#submenu1').removeClass('visually-hidden')
    })

    // products swiper first
    $('#productSwiper1').html('');
    for (let key in products) {
        if (products[key].seggested) {
            var html = `<a class="each col-2 col-sm-2 d-flex flex-column align-items-center justify-content-center bg-white p-4 text-decoration-none m-1"
            href="#">
            <div class="img">
                <img class="w-100" src=" `+ products[key].img + ` " title="` + products[key].enTitle + `" alt=" ` + products[key].enTitle + ` ">
                    <div class="badget"></div>
            </div>
            <div class="detail d-flex flex-column align-items-center justify-content-center">
                <p class="title text-black d-inline-block text-truncate" style="max-width: 175px;"> `+ products[key].faTitle + ` </p>
                <del class="old-price text-black">`+ products[key].oldPrice + ` تومان</del>
                <span class="new-price red">`+ products[key].newPrice + ` تومان</span>
            </div>
            </a>`;
            $('#productSwiper1').append(html);
        }
    }
    // products swiper second
    $('#productSwiper2').html('');
    for (let key in products) {
        if (products[key].newest) {
            var html = `<a class="each col-2 col-sm-2 d-flex flex-column align-items-center justify-content-center bg-white p-4 text-decoration-none m-1"
            href="#">
            <div class="img">
                <img class="w-100" src=" `+ products[key].img + ` " title="` + products[key].enTitle + `" alt=" ` + products[key].enTitle + ` ">
                    <div class="badget"></div>
            </div>
            <div class="detail d-flex flex-column align-items-center justify-content-center">
                <p class="title text-black d-inline-block text-truncate" style="max-width: 175px;"> `+ products[key].faTitle + ` </p>
                <del class="old-price text-black">`+ products[key].oldPrice + ` تومان</del>
                <span class="new-price red">`+ products[key].newPrice + ` تومان</span>
            </div>
            </a>`;

            $('#productSwiper2').append(html);
        }
    }
    // products swiper third
    $('#productSwiper3').html('');
    for (let key in products) {
        if (products[key].mostSale) {
            var html = `<a class="each col-2 col-sm-2 d-flex flex-column align-items-center justify-content-center bg-white p-4 text-decoration-none m-1"
            href="#">
            <div class="img">
                <img class="w-100" src=" `+ products[key].img + ` " title="` + products[key].enTitle + `" alt=" ` + products[key].enTitle + ` ">
                    <div class="badget"></div>
            </div>
            <div class="detail d-flex flex-column align-items-center justify-content-center">
                <p class="title text-black d-inline-block text-truncate" style="max-width: 175px;"> `+ products[key].faTitle + ` </p>
                <del class="old-price text-black">`+ products[key].oldPrice + ` تومان</del>
                <span class="new-price red">`+ products[key].newPrice + ` تومان</span>
            </div>
            </a>`;
            $('#productSwiper3').append(html);
        }
    }
    // swippers arrow buttons
    var box = $("#productSwiper1"), x;
    $(".buttons1").click(function () {
        if ($(this).hasClass("arrow-left")) {
            x = ((box.width() / 4)) + box.scrollLeft();
            box.animate({
                scrollLeft: x,
            })
        } else {
            x = ((box.width() / 4)) - box.scrollLeft();
            box.animate({
                scrollLeft: -x,
            })
        }
    })
    var box2 = $("#productSwiper2"), x;
    $(".buttons2").click(function () {
        if ($(this).hasClass("arrow-left")) {
            x = ((box2.width() / 4)) + box2.scrollLeft();
            box2.animate({
                scrollLeft: x,
            })
        } else {
            x = ((box2.width() / 4)) - box2.scrollLeft();
            box2.animate({
                scrollLeft: -x,
            })
        }
    })
    var box3 = $("#productSwiper3"), x;
    $(".buttons3").click(function () {
        if ($(this).hasClass("arrow-left")) {
            x = ((box3.width() / 4)) + box3.scrollLeft();
            box3.animate({
                scrollLeft: x,
            })
        } else {
            x = ((box3.width() / 4)) - box3.scrollLeft();
            box3.animate({
                scrollLeft: -x,
            })
        }
    })
    var box4 = $("#blogSwiper"), x;
    $(".buttons4").click(function () {
        if ($(this).hasClass("arrow-left")) {
            x = ((box4.width() / 4)) + box4.scrollLeft();
            box4.animate({
                scrollLeft: x,
            })
        } else {
            x = ((box4.width() / 4)) - box4.scrollLeft();
            box4.animate({
                scrollLeft: -x,
            })
        }
    })

    // all products
    $('#allProductsSection').html('');
    for (let key in products) {
        var html = `<a class="each col-2 d-flex flex-column align-items-center justify-content-center bg-white py-4 px-1 text-decoration-none m-1"
        href="#" data-id="`+ products[key].id + `">
        <div class="img">
            <img class="w-100 p-2" src="`+ products[key].img + `" title="` + products[key].enTitle + `" alt="` + products[key].enTitle + `">
            <div class="badget"></div>
        </div>
        <div class="detail d-flex flex-column align-items-center justify-content-center">
            <p class="title text-black d-inline-block text-truncate mb-3" style="max-width: 175px;">`+ products[key].faTitle + `</p>
            <del class="old-price text-black"> `+ products[key].oldPrice + ` تومان </del>
            <span class="new-price red mb-2"> `+ products[key].newPrice + ` تومان</span>
            <button class="add-to-basket px-4" id="addToBasketBtn">افزودن به سبد خرید</button>
        </div>
        </a>`;
        $('#allProductsSection').append(html);
    }

    let basket = [];

    $(document).on("click", "#addToBasketBtn", function (e) {
        debugger;
        e.preventDefault();
        let btn = this;
        let id = $(btn).closest('.each').data('id');
        let basketItem;
        let itemFinded = false;
        if (basket && basket.length > 0) {
            basketItem = basket.find(x => x.id == id);
            if (basketItem) {
                itemFinded = true;
                basketItem.count++;
            }
        }
        if (!itemFinded) {
            let currentProduct = products.find(x => x.id == id);
            
            basketItem = {
                id: currentProduct.id,
                enTitle: currentProduct.enTitle,
                faTitle: currentProduct.faTitle,
                oldPrice: currentProduct.oldPrice,
                newPrice: currentProduct.newPrice,
                img: currentProduct.img,
                freeShipping: currentProduct.freeShipping,
                count:1
            }
            basket.push(basketItem);
        }
        initialBakset();
    })

    function initialBakset(){
        $('#basketBody').html('');
        localStorage.setItem('basket',JSON.stringify(basket));
        for(let item of basket){
            addBasketItemFromHTML(item);
        }
        let totalCount = 0;
        let totalPrice = 0;
        let totalDiscount = 0;
        for(let item of basket){
            if(item.oldPrice !== undefined){
                totalCount += item.count;
                totalPrice += item.newPrice * item.count;
                totalDiscount += item.count * (item.oldPrice - item.newPrice);
            }
            else{
                totalCount += item.count;
                totalPrice += item.newPrice * item.count;
                totalDiscount = 0;
            }
        }
        $('#totalCount').html(totalCount);
        $('#totalDiscount').html(totalDiscount);
        $('#totalPrice').html(totalPrice);
        $('#basketCount').html(totalCount);
    }

    function addBasketItemFromHTML(basketItem){
        let html = `<div class="each p-1 d-flex flex-row align-items-center justify-content-between">
                <div class="right p-1 col-3">
                <img class="w-100" src=" `+ basketItem.img +` " title="" alt=""></div>
                <div class="middle p-1 col-5 d-flex flex-column align-items-start">
                <span class="title fs-6">`+ basketItem.faTitle +`</span>
                <del id="oldPrice">`+ basketItem.oldPrice +` تومان</del>
                <span id="newPrice">`+ basketItem.newPrice +` تومان</span></div>
                <div class="left p-1 d-flex flex-column align-items-start">
                <span class="mx-1 mb-1">تعداد: </span>
                <div class="d-flex flex-row align-items-center justify-content-between">
                <select class="form-select mx-1" aria-label="Default select example">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <a class="text-decoration-none mx-1 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-trash3-fill red"viewBox="0 0 16 16"><path
                d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                </svg></a></div></div></div>`;

        $('#basketBody').append(html);
    }


    // $('#addToBasketBtn').on('click', function () {
    //     alert('added');
    // })

    // footer paragraph toggler
    $('.footer-dyna').on('click', function () {
        $('#footerMore').toggleClass('visually-hidden');
        $('#showLessFooter').toggleClass('visually-hidden');
        $('#showMoreFooter').toggleClass('visually-hidden');
    })
});