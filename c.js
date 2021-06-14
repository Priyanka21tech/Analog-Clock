       
    
    function clockf()
           
    {
        var d,h,m,s;
        
         d=new Date();
         h=d.getHours();
         m=d.getMinutes();
         s=d.getSeconds();
        
        var hdeg,mdeg,sdeg;
            hdeg=30*h+m/2;
            mdeg=6*m;
            sdeg=6*s;
           
        var hhand=document.getElementById("hour");
           var mhand=document.getElementById("min");
           var shand=document.getElementById("sec");
        
        
        hhand.style.transform='rotate('+hdeg+'deg)';
        mhand.style.transform='rotate('+mdeg+'deg)';
        shand.style.transform='rotate('+sdeg+'deg)';
        
      
        }
           var v=setInterval(clockf,1000);