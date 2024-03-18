let logined = false;
let codeSent;
let isLogin = localStorage.getItem('logined');
if(isLogin == 'false'){
    $('#notLogedMenu').removeClass('visually-hidden');
    $('#logedMenu').addClass('visually-hidden');
}
if (isLogin == 'true') {
    $('#notLogedMenu').addClass('visually-hidden');
    $('#logedMenu').removeClass('visually-hidden');
}

$('#logOutBtn').on('click', function(){
    localStorage.setItem('logined', 'false');
    $('#notLogedMenu').removeClass('visually-hidden');
    $('#logedMenu').addClass('visually-hidden');
    logined = false;
})

$('#submitPhoneBtn').on('click', function () {
    let enteredNumer = $('#mobileInput').val();
    var regexPattern = /^09\d{9}$/;
    if (regexPattern.test(enteredNumer)) {
        $('.enter').removeClass('visually-hidden');
        $('#submitPhoneBtn').html('ورود به حساب')
        $('#mobileInput').prop('disabled', true);
        codeSent = true;
        if (codeSent) {
            let enteredCode = $('#codeInput').val();
            if (enteredCode.length == 4) {
                logined = true;
                localStorage.setItem('logined', 'true');
                window.location.replace('home.html');
            }
            else{
                logined = false;
            }
        }
    }
    else {
        $('.wrong-number').removeClass('visually-hidden');
        setInterval(function () {
            $('.wrong-number').addClass('visually-hidden');
        }, 3000);
    }
})
