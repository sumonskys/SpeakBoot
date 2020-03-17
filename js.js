var msg = document.querySelector('#msg');
var btn = document.querySelector('#btn');
var show = document.querySelector('#show');

btn.addEventListener('click', function(){
  let a = msg.value.toLowerCase();
  let reply = '';
  if(a.match('hira')){
    reply = 'Hira is bad girl';
  }
  else if(a.match('araf')){
    reply = 'Araf is my father. he is very good boy. i love my araf babu very much';
  }
  else if(a.match('sadid')){
    reply = 'sadid is a mixer boy. i mean good and bad.';
  }
  else if(a.match('sapna')){
    reply = 'sapna is very bad girl';
  }
  else if(a.match('samrat')){
    reply = 'samrat is very good boy';
  }
  else if(a.match('sima')){
    reply = 'sima is samrat\'s nepew';
  }
  else{
    reply = 'I dont understand anything. I hope it out of my record';
  }
  
  var kotha = new SpeechSynthesisUtterance(reply);
  window.speechSynthesis.speak(kotha);
  show.innerHTML= reply;
});


