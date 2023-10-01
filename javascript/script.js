let form = document.querySelector("form");

form.addEventListener("click", start);

function start(e) {
    if (e.target.hasAttribute("type")) {
        var re;

        if (e.target.value == "Email") {
            var ip = prompt("enter an Email");
            if (checkNull(ip)) return;
            re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
            if (re.test(ip)) {
                alert("Valid Email");
            } else {
                alert("invalid Email");
            }
        } else if (e.target.value == "Phone Number") {
            var ip = prompt("enter Phone Number");
            if (checkNull(ip)) return;
            re = /^(\+)?(88)?01[0-9]{9}$/;
            if (re.test(ip)) {
                alert("Valid Phone Number");
            } else {
                alert("invalid Phone Number");
            }
        } else {
            var ip = prompt("enter Post Code");
            if (checkNull(ip)) return;
            re = /^\d{4}$/;
            if (re.test(ip)) {
                alert("Valid Post Code");
            } else {
                alert("invalid Post Code");
            }
        }
    }
    e.preventDefault();
}

function checkNull(ip) {
    if (ip == "") {
        alert("No input Found!");
        return 1;
    } else {
        return 0;
    }
}
