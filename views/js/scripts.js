/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

    function onlynum() {
        var fm = document.getElementById("form2");
        var ip = document.getElementById("num");
        var tag = document.getElementById("value");
        var res = ip.value;
  
        if (res != '') {
            if (isNaN(res)) {
                  
                // Set input value empty
                ip.value = "";
                  
                // Reset the form
                fm.reset();
                return false;
            } else {
                return true
            }
        }
    }

