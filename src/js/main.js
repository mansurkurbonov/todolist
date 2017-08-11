$(document).ready(function(){

   var input= $('#input').hide();//pole vvoda
   var otmena=$('#otmena').hide();//otmena
   var addItem=$('#addItem').hide();//dobav. elem.
   var addInput =$('#addInput');//dobav. pole vvoda
   var pustoy_alert=$('#pustoy_alert');//alert pustogo spiska
   var spisok=$('.spisok');//sam spisok
   var count=0;//peremennaya dlya podscheta id

   //knopka dlya poyavleniya inputa
   $('#addInput').click(function(){
      input.fadeIn(200);
      otmena.fadeIn(200);
      addInput.hide();
      addItem.show();
                  
   });
                  
   //knopka dobavleniya elementa
   $('#addItem').click(function(){

     
      var inputText=input.val();
      
      if( inputText!=0){
         count++;
         $('.spisok').append('<div id="E'+count+'"class="item"><input class="mycheck" type="checkbox" id="checkbox'+count+'"></input><span class="text-align">'+inputText+'</span><span class="right"><i id="'+count+'" class="fa fa-trash-o delete"></i></span></div>');
      }
                  
      input.val("");
      input.hide();
      addItem.hide();
      addInput.show();
      otmena.hide();
      
      //proverka na pustotu spiska
      if(count == 0){
         pustoy_alert.show();
      }
      else if(count!=0){
         pustoy_alert.hide();

      }

   });
   
   //zacherkivanie vibrannogo elementa
   $('.spisok').on('change','.mycheck',function(){
                 
      // var id=$(this).attr('id');
      //$('.item #E'+count+'').css('text-decoration','line-through');
      $(this).parent().toggleClass('check');

   });

   //udalenie vibrannogo elementa
   $('.spisok').on('click','.delete',function(){
      var id=$(this).attr('id');
      $('#E'+id+'').remove();
      count--;
      if(count==0){
         pustoy_alert.show();
      }
   });


   //rabota knoplki otmena
   $('#otmena').click(function(){
      input.hide(500);
      otmena.hide(500);
      addInput.show();
      addItem.hide();
   });


});