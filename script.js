// Wait until the DOM content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Define the sounds and associated keys
    const drums = {
        q: { sound: 'kick', file: 'kick.wav' },
        w: { sound: 'snare', file: 'snare.wav' },
        e: { sound: 'hihat', file: 'hihat.wav' },
        r: { sound: 'openhat', file: 'openhat.wav' },
        t: { sound: 'ride', file: 'ride.wav' },
        y: { sound: 'tom', file: 'tom.wav' },
        u: { sound: 'tink', file: 'tink.wav' },
        i: { sound: 'clap', file: 'clap.wav' },
       
      };
      
      // Get the drum buttons container
      const drumButtons = document.getElementById('drum-buttons');
      
      // Check if the container exists (if not, log an error)
    if (!drumButtons) {
        console.error("Drum buttons not found!");
      } else {
      // Create the buttons dynamically using a single for...in loop
      for (const key in drums) {
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = `${key}\n${drums[key].sound}`;
        button.dataset.key = key;
      
        // Add click event to play sound
        button.addEventListener('click', () => playSound(key));
      
        // Append button to container
        drumButtons.appendChild(button);
      }
    }
    
      // Function to play sound
      function playSound(key) {
        const drum = drums[key];
        if (drum) {
            console.log(`Playing sound: ${key} (${drum})`); // Log path to confirm
          const audio = new Audio(`sounds/${drum.file}`);
          audio.currentTime = 0; // Reset audio playback for immediate retrigger
          audio.play();
          }
      }
      
      // Listen for keydown events and play the sound accordingly
      window.addEventListener('keydown', (event) => {
        console.log("Keydown event detected:", event.key);
    
        const key = event.key.toUpperCase();
        if (drums[key]) {
            playSound(key);
            console.log("Calling playSound for key:", key);
            // console.log(test)
        
            // Add a temporary visual effect on the button
            const button = document.querySelector(`.button[data-key="${key}"]`);
            if (button) {   
              button.classList.add('active');
              setTimeout(() => button.classList.remove('active'), 200); // remove effect after 200ms
            }
          } 
        });
    // console.log("External script loaded successfully.");
    
    document.addEventListener('click', () => {
        console.log("Click event detected.");
      });
      
      // Check keydown event
      window.addEventListener('keydown', (event) => {
        console.log("Keydown event detected: ", event.key);
        // for (let key in drumButtons) {
        //     if (event.key === drumButtons[key]) {
        //         new Audio(`sounds/${key}.wav`).play()
        //         break
        //     }
        // }
        const triggeredKey = event.key
        playSound(triggeredKey)
        
      });
    });