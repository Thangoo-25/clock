var card=document.getElementById('card');

card.addEventListener('mouseover',function(){
    card.style.backgroundColor="green";
    message.innerHTML="You Are IN";

});
card.addEventListener('mouseout',function(){
    card.style.backgroundColor=" #ff4d4d";
    message.innerHTML="You are out";
    
});
card.addEventListener('click',function(){
    card.style.backgroundColor="yellow";
    message.innerHTML="You Clicked ";

});

function updateClock(){
    var date=new Date();
    var hours=date.getHours().toString().padStart(2,'0');
    var mins=date.getMinutes().toString().padStart(2,'0');
    var secs=date.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').innerHTML=hours+":"+mins+":"+secs;
}
window.setInterval(updateClock,1000);
updateClock();