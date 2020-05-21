function showNormal(img) {
    if(img) {
         img.src = 'images/editorial/cover.png';
    }
 }
function showHover_cooktail(img) {
    if(img) {
         img.src = 'images/editorial/cooktail.png';
    }
 }
 function showHover_fashion(img) {
    if(img) {
         img.src = 'images/editorial/fashion.png';
    }
 }

 function showHover_triple(img) {
    if(img) {
         img.src = 'images/editorial/triple.png';
    }
 }
 function showHover_modern(img) {
    if(img) {
         img.src = 'images/editorial/modern.png';
    }
 }

 function showHover_representation(img) {
    if(img) {
         img.src = 'images/editorial/representation.png';
    }
 }
 function showHover_donut(img) {
    if(img) {
         img.src = 'images/editorial/donut.png';
    }
 }

 


 
 $(document).ready(function() {
     $('#tit_cooktail').mouseover(function(){
     showHover_cooktail($('#img').get()[0]);
     }).mouseout(function(){
     showNormal($('#img').get()[0]);
     });

     $('#tit_fashion').mouseover(function(){
        showHover_fashion($('#img').get()[0]);
        }).mouseout(function(){
        showNormal($('#img').get()[0]);
        });

        $('#tit_triple').mouseover(function(){
            showHover_triple($('#img').get()[0]);
            }).mouseout(function(){
            showNormal($('#img').get()[0]);
            });

    $('#tit_donut').mouseover(function(){
            showHover_donut($('#img').get()[0]);
            }).mouseout(function(){
            showNormal($('#img').get()[0]);
            });

    $('#tit_representation').mouseover(function(){
                showHover_representation($('#img').get()[0]);
                }).mouseout(function(){
                showNormal($('#img').get()[0]);
                });
 });