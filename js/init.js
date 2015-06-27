(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

    var fname, lname, email, messsage;
    $("input:radio[name=group1]").click(function() {
        subject = $(this).val();
    });
    $("#submit-button").click(function() {
        fname = $("#first_name").val();
        lname = $("#last_name").val();
        email = $("#email").val();
        message = $("#message").val();
        $.post("https://tranquil-cove-4564.herokuapp.com/sendmsg", {
            furstname: name,
            lastname: phone,
            email: subject,
            msg: message
        }, function(data) {
            Materialize.toast('Your message has been delivered!', 4000);
            $("#first_name").val('');
            $("#last_name").val('');
            $("#email").val('');
            $("#message").val('');
        });
    });

  });
})(jQuery);