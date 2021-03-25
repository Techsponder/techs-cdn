function ts_tog(){
    const ts_div = document.querySelector('.Tech_toc_headings');
    if(ts_div.style.display === 'none'){
        ts_div.style.display ='block';
    }else{
        ts_div.style.display ='none';
    }
}

// table of content creating logic start..
function techsponder_toc(){
    var div = document.getElementById("posts-toc");
    var nodelist = div.getElementsByTagName("h1");
    
    var x = 0;
    var heading=0;
    for (t = 0; t < nodelist.length; t++ ) {
      x++;
      nodelist[t].setAttribute('id','heading'+x);
      heading = nodelist[t].textContent;
      document.getElementById('toc_heading').innerHTML+="<li><a href='#heading"+x+"'>"+heading+"</a></li>";

      if(nodelist.length<=3){
        document.querySelector('.tech_toc').style.display='none';
      }
      
    //   for (t=0; t<nodelist1.length; t++) {
    //       console.log(t+'count');
    //   }
   }
   
}

