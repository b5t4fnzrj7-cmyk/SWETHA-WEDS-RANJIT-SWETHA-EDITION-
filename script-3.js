const target=new Date('July 5, 2026 09:00:00').getTime();
setInterval(()=>{
const now=new Date().getTime(); 
const d=target-now;
const days=Math.floor(d/(1000*60*60*24));
document.getElementById('countdown').innerHTML=days+' days to go';
},1000);
