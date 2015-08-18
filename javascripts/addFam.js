define(["jquery","q"], function($,Q){
  

  return function(newMember){
    var deferred = Q.defer();

    console.log(newMember);

  $.ajax({
      url:"https://familyrod.firebaseio.com/family.json",
      method: "POST",
      data: JSON.stringify(newMember)
   }).done(function(newMember){
    console.log(newMember);
    deferred.resolve(newMember);
  })
  .fail(function(xhr,status,error){
    deferred.reject(error);
  });



  return deferred.promise;
};
});
//