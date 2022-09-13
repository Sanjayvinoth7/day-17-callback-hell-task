var res=document.querySelector(".call")

setTimeout(()=>{
   res.innerHTML="10";
   setTimeout(()=>{
    res.innerHTML="9";
       setTimeout(()=>{
        res.innerHTML="8";
           setTimeout(()=>{
            res.innerHTML="7";
               setTimeout(()=>{
                res.innerHTML="6";
                   setTimeout(()=>{
                    res.innerHTML="5";
                       setTimeout(()=>{
                        res.innerHTML="4";
                           setTimeout(()=>{
                            res.innerHTML="3";
                               setTimeout(()=>{
                                res.innerHTML="2";
                                   setTimeout(()=>{
                                    res.innerHTML="1";
                                       setTimeout(()=>{
                                           res.innerHTML="HAPPY INDEPENDENCE DAY";
                                       },1000);
                                   },1000);
                               },1000);
                           },1000);
                       },1000);
                   },1000);
               },1000);
           },1000);
       },1000);
   },1000);
},1000);