(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

    var fname, lname, email, messsage;
    $("#submit-button").click(function() {
        fname = $("#first_name").val();
        lname = $("#last_name").val();
        email = $("#email").val();
        message = $("#message").val();
        $.post("https://baysidemediacorp.herokuapp.com/sendmsg", {
            firstname: fname,
            lastname: lname,
            email: email,
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