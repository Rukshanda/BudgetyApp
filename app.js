

// creating a random number

 function displayBackground(){
    var bg = [];

    bg.push('images/img-1.jpeg' , 'images/img-2.jpeg' , 'images/img-3.jpg' , 
            'images/img-4.jpg' , 'images/img-5.jpg' , 'images/img-6.jpeg' , 'images/img-7.jpg');
   
    
    
    var n = Math.floor(Math.random()*7);
   
    document.querySelector('.top').style.backgroundImage="url("+bg[n]+")";
    
     
   
    
   
        
 }

  
    document.querySelector('.add__btn').addEventListener('click' ,displayBackground);
  

    document.addEventListener('keypress' , function(event){
        if (event.keyCode === 13 || event.which === 13) {
           displayBackground();
        };
    });

    
 