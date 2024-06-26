
function downloadFile() {
      window.location.href = 'https://drive.google.com/file/d/13ONKtmFgeyej-FYAa5rqNNGWnINE1thm/view?usp=drive_link';
    }


  const eventDate = new Date(2024, 3, 8); 

  function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = eventDate - currentDate;

  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }


  setInterval(updateCountdown, 1000);

 


updateCountdown();

  window.addEventListener('load', function() {
    document.querySelector('.loader').style.display = 'none';
  });
