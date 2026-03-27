// Set the launch date (e.g., 30 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "<h2>The Fair Has Begun!</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

// Initial call and interval
updateCountdown();
setInterval(updateCountdown, 1000);

// Form handling
document.getElementById('notify-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.querySelector('.email-input').value;
    const messageEl = document.getElementById('form-message');
    
    if (email) {
        // Simulate API call
        const btn = document.querySelector('.notify-btn');
        btn.innerText = 'Submitting...';
        btn.disabled = true;
        
        setTimeout(() => {
            messageEl.textContent = 'Thank you! We will notify you when we launch.';
            messageEl.className = 'form-message success-text';
            btn.innerText = 'Notify Me';
            btn.disabled = false;
            this.reset();
            
            setTimeout(() => {
                messageEl.textContent = '';
            }, 3000);
        }, 1500);
    }
});
