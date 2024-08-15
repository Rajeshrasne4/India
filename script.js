function updateText(text){

    let delay = 200;
    
        let h2 = document.getElementById("animated");
    
          h2.innerHTML = text
            .split("")
            .map(letter => {
              console.log(letter);
              return `<span>` + letter + `</span>`;
            })
            .join("");
    
          Array.from(h2.children).forEach((span, index) => {
            setTimeout(() => {
              span.classList.add("wavy1");
            }, index * 60 + delay);
          });
    
    }
    
    document.getElementById('animated').addEventListener('input', (event)=>{
        updateText(event.target.value);
    })
    
    updateText("स्वातंत्र्य दिनाच्या हार्दिक शुभेच्छा.");


    function playAudio() {
      var audio = document.getElementById("patriotic-song");
      audio.play();
    }