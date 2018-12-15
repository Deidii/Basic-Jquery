function font_family(selectTag)
 {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("text").style.fontFamily = listValue;
  }

  


 

 

 function changeSize(n) {
    var s = document.getElementById("text");
    s.style.fontSize = n.value + "px";
  }
 

  $("#underline").click(function(){
   $("#text").toggleClass("underline");
 });


  $("#bold").click(function(){
   $("#text").toggleClass("bold");
 });

 $("#italic").click(function(){
   $("#text").toggleClass("italic");
 });