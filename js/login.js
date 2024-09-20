
document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
const pinNumber = document.getElementById('pin').value;
if(pinNumber === '8521' ){
    window.location.href = './home.html';
    console.log('plase add me');
}
else{
    alert('vag bokachuda');
}
})