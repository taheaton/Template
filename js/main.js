(function () {

  var firstItem = etsy.results[0];

  var templateString = $('#itemTemplate').text();

  var templateFunction = _.template(templateString);
  //mine
  
  //end mine
  console.log(etsy.results);

  _.each(etsy.results, function (item) {
    console.log(item);
  var itemHTML = templateFunction(item);
  

  // $('.container').append(itemHTML)

  $('.container').append(itemHTML);
  });

}());