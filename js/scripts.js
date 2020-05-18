// function initMap() {
//     // The location of fedha plaza
//     var fedhaPlaza = {lat: 1.2636, lng:  36.8066};
//     // The map, centered at fedha plaza
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 4, center: fedhaPlaza});
//     // The marker, positioned at fedha plaza
//     // var marker = new google.maps.Marker({position: f, map: map});
//   }


$(document).ready(function(){
    var form = document.getElementById('pizza-form');
    var result = document.getElementById('result');
    
    form.onsubmit = function(e) {//SUBMIT FUNCTION
      e.preventDefault();//prevents from showing input in url  
    var sizePrice=parseInt($('input:radio[name=size]:checked').val());
    var size = $('input:radio[name=size]:checked').attr("id");
    var cheesePrice=parseInt($('input:radio[name=cheese]:checked').val());
    var cheese = $('input:radio[name=cheese]:checked').attr("id"); 
    var crustPrice=parseInt($('input:radio[name=crust]:checked').val());
    var crust = $('input:radio[name=crust]:checked').attr("id");   
    var sauce = $('input:radio[name=sauce]:checked').attr("id");  
    //appends all checked meat toppings ids to allmeat arr
    var allMeat = [];
      $('input:checkbox[name=meat]:checked').each(function() {
        allMeat.push($(this).attr("id"));
      }); 
    //counts items in allmeat toppings arr and subtracts 1 (for free complimentary topping) if there is 1+topping
    var meatPrice;
      if (allMeat.length>0){
        meatPrice=allMeat.length-1;
      }else{
        meatPrice=0;
        allMeat="None";
      }
    // VEGGIE TOPPING LOGIC SAME AS MEAT TOPPING LOGIC
    var allVeggies = [];
      $('input:checkbox[name=veggies]:checked').each(function() {
        allVeggies.push($(this).attr("id"));
      }); 
    var veggiePrice;
      if (allVeggies.length>0){
        veggiePrice=allVeggies.length-1;
      }else{
        veggiePrice=0;
        allVeggies="None";
      }
    //adds all prices up to total them  
    var total = sizePrice + cheesePrice + crustPrice + veggiePrice + meatPrice;  
    
    //output receipt after hitting submit
    if(!size || !cheese || !crust || !sauce){
      alert('Please complete your order');
    }else{   
      $("#pizza-form").hide();
      result.innerHTML= form.fullName.value + "<br>" + form.phoneNumber.value + "<br>" + form.address.value + "<br><br>" +  size + " Pizza &emsp; Ksh" + sizePrice + "00 <br>" + cheese + " Cheese &emsp; Ksh" + cheesePrice + "00 <br>" + crust + " Crust &emsp; Ksh" + crustPrice  + "00 <br>" + sauce + " Sauce &emsp; Ksh0 <br> Meat Toppings &emsp; Ksh" + meatPrice + "00 <br> (" + allMeat + ") <br> Veggie Toppings &emsp; Ksh" + veggiePrice + "00 <br> (" + allVeggies + ") <br> Total &emsp; Ksh" + total + "00";
      form.reset();//clears answers from input fields when you submit
    }
    };
    
      
      
    /*  //SIZE RADIO BUTTONS (shortened with jquery above) 
    if(sizeRadios[0].checked){
      sizePrice=sizeRadios[0].value;
      size=sizeRadios[0].id;
    }
    if(sizeRadios[1].checked){
      sizePrice=sizeRadios[1].value;
      size=sizeRadios[1].id;
    }
    if(sizeRadios[2].checked){
      sizePrice=sizeRadios[2].value;
      size=sizeRadios[2].id;
    }
    if(sizeRadios[3].checked){
      sizePrice=sizeRadios[3].value;
      size=sizeRadios[3].id;
    }
      */
    });
    

    
      
      
   