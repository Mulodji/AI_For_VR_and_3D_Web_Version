document.addEventListener('DOMContentLoaded', function() {
    const videoCard = document.getElementById('videoCard');
    const carouselContainer = document.getElementById('carouselContainer');
    const carouselVideo = document.getElementById('carouselVideo');
    const thumbContainers = document.querySelectorAll('.thumb-container');
    let currentVideoIndex = 0;
    let isCarouselPlaying = false;
    let videoInterval;

    const videos = Array.from(thumbContainers).map(container => container.getAttribute('data-video'));

    const playCarousel = () => {
         if(videos.length === 0 ) return;
         
        carouselVideo.src = videos[currentVideoIndex];
         carouselContainer.style.display = 'block';
        carouselVideo.play();

         videoInterval = setInterval(() => {
             currentVideoIndex = (currentVideoIndex + 1) % videos.length;
              carouselVideo.src = videos[currentVideoIndex];
             carouselVideo.play();
        }, 7000);
    }

    const stopCarousel = () => {
        carouselVideo.pause();
        carouselVideo.currentTime = 0;
        carouselContainer.style.display = 'none';
        clearInterval(videoInterval);
        isCarouselPlaying = false;
    };
    

    videoCard.addEventListener('click', function() {
         if (isCarouselPlaying) {
            stopCarousel();
        } else {
            playCarousel();
             isCarouselPlaying = true;
         }
    });
    
    
   carouselVideo.addEventListener('click', function(){
       stopCarousel();
    })

});
