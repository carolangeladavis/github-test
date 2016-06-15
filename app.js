$(function(){
  var el = $("<div />");
  el.attr({ id: "box" });
  $("body").append(el);
});

$(function(){
  var el = $("#box");
  el.css({
    width: "100px",
    height: "100px",
    "background-color": "cornflowerblue"
  });

  el.animate({"width": "1000px", "height": "100px"}, 5000);
  el.text("Frankie Haliburton")

});



	
