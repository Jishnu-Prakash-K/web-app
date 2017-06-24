firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    $(".login_cover").hide();
    var dialog = document.querySelector('#loginDialog');
    dialogPolyfill.registerDialog(dialog);
    // Now dialog acts like a native <dialog>.
    dialog.close();
  } else {
    $(".login_cover").show();
    // No user is signed in.
    var dialog = document.querySelector('#loginDialog');
    dialogPolyfill.registerDialog(dialog);
    // Now dialog acts like a native <dialog>.
    dialog.showModal();
    $("#loginLoad").hide();
    $("#signInButton").show();
    
  }
});


$("#signInButton").click(
    function(){
    var email = $("#loginEmail").val();
    var password = $("#loginPassword").val();
    if(email !="" && password !=""){
        $("#loginLoad").show();
        $("#signInButton").hide();

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            $("#loginError").show().text(error.message)
            $("#loginLoad").hide();
        $("#signInButton").show();
});
    }

    }
);


$("#signOutButton").click(
function(){
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
  alert(error.message);
});
}
);