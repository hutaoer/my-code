$(document).ready(function() {
    var animDiv1 = $('#J_AnimDiv1');
    $('#J_Module1RunBtn').on('click', function(e) {
        animDiv1.addClass('move');
    })

    var animDiv2 = $('#J_AnimDiv2');
    $('#J_Module2RunBtn').on('click', function(e) {
        animDiv2.addClass('move');
    })
})