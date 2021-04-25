function type() {
    // array with texts to type in typewriter
    var dataText = ["Web-developing", "Designing", "Desktop Applications", "Machine Learning", "JavaFx", "Open to all..."];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    if (document.getElementById('typed') != null) {
        function typeWriter(text, i, fnCallback) {
            // chekc if text isn't finished yet
            if (i < (text.length)) {
                // add next character to h1

                document.getElementById("typed").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

                // wait for a while and call this function again for next character
                setTimeout(function() {
                    typeWriter(text, i + 1, fnCallback)
                }, 200);
            }
            // text finished, call callback if there is a callback function
            else if (typeof fnCallback == 'function') {
                // call callback after timeout
                setTimeout(fnCallback, 700);
            }
        }
        // start a typewriter animation for a text in the dataText array
        function StartTextAnimation(i) {
            if (typeof dataText[i] == 'undefined') {
                setTimeout(function() {
                    StartTextAnimation(0);
                }, 20000);
            }
            // check if dataText[i] exists
            if (i < dataText[i].length) {
                // text exists! start typewriter animation
                typeWriter(dataText[i], 0, function() {
                    // after callback (and whole text has been animated), start next text
                    StartTextAnimation(i + 1);
                });
            }
        }
        // start the text animation
        StartTextAnimation(0);
    }
}
window.addEventListener('load', type);


// Projects

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}