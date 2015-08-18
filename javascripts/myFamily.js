define(["jquery","q"], function($,Q){
  

  return function(){

    var deferred = Q.defer();

  $.ajax({
    url:"../javascripts/family.json"
  })
  .done(function(fam_data){
    deferred.resolve(fam_data);
  })
  .fail(function(xhr,status,error){
    deferred.reject(error);
  });
  return deferred.promise;


    $.ajax ({
            url: "https://familyrod.firebaseio.com/family.json",
             method: "POST"
           }).done(function() {
              console.log("posted");
           });
};
});////