var happy = {
    USPhone: function (val) {
        return /^\(?(\d{3})\)?[\- ]?\d{3}[\- ]?\d{4}$/.test(val);
    },
    // matches mm/dd/yyyy (requires leading 0's (which may be a bit silly, what do you think?)
    date: function (val) {
        return /^(?:0[1-9]|1[0-2])\/(?:0[1-9]|[12][0-9]|3[01])\/(?:\d{4})/.test(val);
    },
    email: function (val) {
        return /^(?:\w+\.?\+?)*\w+@(?:\w+\.)+\w+$/.test(val);
    },
    minLength: function (val, length) {
        return val.length >= length;
    },
    zip: function (val, length) {
        return val.length == 5;
    },
    maxLength: function (val, length) {
        return val.length <= length;
    },
    equal: function (val1, val2) {
        return (val1 == val2);
    },
    activationCode: function (val) {
        return (
        val == "SH50WOMX" || val == "SH50WUST" || val == "SH50WSPR" || val == "SH50WOTH" || val == "SH50WSTA");
    },
    isRadioButtonChecked: function (val1) {
        return $('#Field24').val1 !== '' && $('#Field24').is(':checked');
    },
    multiOption: function () {
        return $('#marker_checkbox > .options > .checkbox').filter(':checked').length >= 1;

    },
    isRadioButtonChecked_Photo_Fr: function (val1) {
        return $('#Field418').val1 !== '' && $('#Field418').is(':checked');
    },
    photoState: function (photoState) {
        return photoState;
    }


   
};




        // function validateCode() {            
        //     var txtCode = document.getElementById("Field226");
        //     var results = txtCode.value.trim() != "" ? getRemainingCode(txtCode.value) : -1;

        //     if (results == 0) {
        //         alert('This code is no longer elegible');
        //         txtCode.value = '';
        //         txtCode.focus();

        //         return false;
        //     }
        //     else if (txtCode.value.trim() != "" && results == -1) {
        //         alert('Invalid code used');
        //         txtCode.value = '';
        //         txtCode.focus();

        //         return false;
        //     }

        //     return true;
        // }

        // function getRemainingCode(val) {
        //     var count = -1; //Not a valid code

        //     jQuery.ajax({
        //         url: '../codeCheck.json?Code=' + val1 + '&formhash=wnw6cw71yjrid7',
        //         dataType: 'json',
        //         success: function (result) {
        //             for(var i in result){
        //                count = result[i].REMAINING;
        //             }

        //             if (isNaN(count))
        //                 count = -1;
        //         },

        //         async: false
        //     });

        //     return count;

        // }