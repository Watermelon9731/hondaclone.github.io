function showOn(selector) {
    var arrClass = document.getElementById(selector).classList;
    console.log('1',arrClass);
    var status = false;
    for (var i = 0; i < arrClass.length; i++) {
        if (arrClass[i] == 'd-none') {
            status = true;
        }
    }
    if (status) {
        document.getElementById(selector).classList.remove('d-none');
    } else {
        document.getElementById(selector).classList.add('d-none');
    }
    console.log('2',arrClass);
}