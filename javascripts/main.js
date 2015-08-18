  requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/handlebars/handlebars',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }

  }
});
///

requirejs(["jquery","firebase","hbs","bootstrap","q","myFamily", "addFam", "delFam"],
  function($,firebase,Handlebars,bootstrap,Q, myRodFam, addFam, delFam){


  var myFirebaseRef = new Firebase("https://familyrod.firebaseio.com/");
   myFirebaseRef.child("family").on("value", function(snapshot) {
             var myFamily = snapshot.val();

             console.log(myFamily);
          


    // adding q / promises callback ////
             var list_of_family= myRodFam();

             var all_fam = [];

              list_of_family
                .then(function(rod){
                  for (var i = 0; i < rod.fam.length; i++) {
                        all_fam.push(rod.fam[i]);
                  }
                })
                .fail()
                .done(function(){
                  console.log("all_fam", all_fam);
                });


 }); // end firebaseref



                  $('#add-button').on('click',function(){
                    console.log("click");
                  var newFam = {
                      "name" : $('#addName').val(),
                      "age" : $('#addAge').val(),
                      "gender": $('#addGender').val(),
                      "skills" : $('#addSkills').val()
                          
                      };
                  
                  addFam(newMember);
                });



}); ///end of requirejs