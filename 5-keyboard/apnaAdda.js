const insert = document.getElementById('insert');

window.addEventListener('keydown', function(event){
    insert.innerHTML=`<div class ='color'>
    <table style ="height : 50px ; width : 250px; "> 
    <caption style ="color : red;">Keyword Report</caption>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${event.key !=" " ? event.key:"Space" }</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>
</table>
    </div>`
},false)