

$(document).ready(function() {
  $("form#fortuneTeller").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=fortune-questions]:checked").each(function() {
      const fortuneQuestions = $(this).val();
      console.log(fortuneQuestions); 
      
    })
  });
});