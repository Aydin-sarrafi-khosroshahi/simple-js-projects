$('.addBtn').click(function () {
    // $('.addModal').slideDown('slow');
    $('.container').append(`<div class="addModal align-items-center"><div class="d-flex align-items-center justify-content-center w-100 h-100"><div class="card shadow modalMaxWidth"><div class="card-body position-relative"><div class="row"><div class="col-md-6"><div class="productDetail d-flex align-items-center justify-content-center flex-column"><h3 class="text-bold3 font-20 white-space-nowrap mb-3">Selected product :</h3><img class="mb-2" src="dist/images/main-page-images/BMW.avif" alt=""><h4 class="text-bold3 font-18 white-space-nowrap mb-3">BMW</h4><p class="mb-2 text-dark font-16 text-center text-bold2">Arcu dui vivamus arcu felis bibendum ut tristique.</p><p class="mb-4 font-16 text-center text-bold2">2,000,000 $</p></div></div><div class="col-md-6"><div class="d-flex align-items-center justify-content-center flex-column mt-5"><h3 class="text-bold3 font-18 mb-3 text-center">increase or decrease your ordered product.</h3><div class="addOrLess d-flex align-items-center mb-4"><span class="mines">-</span><span data-result="result">1</span><span class="plus">+</span></div><button class="font-18 border-0 bg-transparent lastAdd btn rounded border-0 bg-transparent text-white shadow-none"><span>add</span><img src="dist/images/main-page-images/shopping-cart.svg" alt=""></button></div></div></div><button class="closeBtn border-0 bg-transparent"><img src="dist/images/main-page-images/x.svg" alt=""></button></div></div></div></div>`)
});

$('.closeBtn').click(function () {
    // $('.addModal').slideUp('slow');
    $('div.addModal').remove();
});

// $('.lastAdd').click(function () {
//     $('.addModal').slideUp('slow');
// });



var decOrIncResult = $('[data-result="result"]');


var productCount = 1;
$('.plus').click(function () {
    productCount++;
    if (productCount > 5) {
        productCount = 5;
        alert("it cant be more then 5");
    }
    updateResult();
});
$('.mines').click(function () {
    productCount--;
    if (productCount < 1) {
        productCount = 1;
        alert("it cant be less then 1");
    }
    updateResult();
});


function updateResult() {
    decOrIncResult.text(productCount);
}




$('[data-car="Lamborghini"]').click(function () {
    var cariImgSrc = $(this).closest('div.products').find(".productsImg img").attr('src');
    var carName = $(this).closest('div').find("h2").text();
    var carDesk = $(this).closest('div').find("p.desc").text();
    var carPrice = $(this).closest('div').find("p.price").text();


    const Lamborghini = new Object();
    Lamborghini.image = cariImgSrc;
    Lamborghini.name = carName;
    Lamborghini.price = carPrice;
});




$('[data-car="BMW"]').click(function () {
    var cariImgSrc = $(this).closest('div.products').find(".productsImg img").attr('src');
    var carName = $(this).closest('div').find("h2").text();
    var carDesk = $(this).closest('div').find("p.desc").text();
    var carPrice = $(this).closest('div').find("p.price").text();


    const BMW = new Object();
    Lamborghini.image = cariImgSrc;
    Lamborghini.name = carName;
    Lamborghini.price = carPrice;
});



$('[data-car="Mushtang"]').click(function () {
    var cariImgSrc = $(this).closest('div.products').find(".productsImg img").attr('src');
    var carName = $(this).closest('div').find("h2").text();
    var carDesk = $(this).closest('div').find("p.desc").text();
    var carPrice = $(this).closest('div').find("p.price").text();


    const Mushtang = new Object();
    Lamborghini.image = cariImgSrc;
    Lamborghini.name = carName;
    Lamborghini.price = carPrice;
});



$('[data-car="Shelby"]').click(function () {
    var cariImgSrc = $(this).closest('div.products').find(".productsImg img").attr('src');
    var carName = $(this).closest('div').find("h2").text();
    var carDesk = $(this).closest('div').find("p.desc").text();
    var carPrice = $(this).closest('div').find("p.price").text();


    const Shelby = new Object();
    Lamborghini.image = cariImgSrc;
    Lamborghini.name = carName;
    Lamborghini.price = carPrice;
});