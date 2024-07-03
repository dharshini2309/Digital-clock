let ampm= document.getElementById('ampm')

function displayTime(){
    let dateTime=new Date();
    let hours=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    if(hours>12)
      {  hours=hours-12
        ampm.innerHTML='PM'
      }
      if(hours<10)
      {
         hours="0"+hours
      }

      if(mins<10)
        {
           mins="0"+mins
        }

        if(sec<10)
          {
             sec="0"+sec
          }
    document.getElementById('hours').innerHTML=hours
    document.getElementById('mins').innerHTML=min
    document.getElementById('seconds').innerHTML=sec

}
 

setInterval(displayTime,500)