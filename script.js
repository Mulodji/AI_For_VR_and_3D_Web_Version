document.addEventListener('DOMContentLoaded', function() {
    const videoCard = document.getElementById('videoCard');
    const playerContainer = document.getElementById('playerContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    const thumbContainers = document.querySelectorAll('.thumb-container');
    const mosaicContainer = document.getElementById('mosaicContainer');
    const backButton = document.getElementById('backButton');
    const bottomButton = document.getElementById('bottomButton');
    const topButton = document.getElementById('topButton');
    const slidesContainer = document.getElementById('slidesContainer');
    const slidesPlayer = document.getElementById('slidesPlayer');
    const slidesBackButton = document.getElementById('slidesBackButton');
    let currentPlayingVideo = null;


    thumbContainers.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const videoURL = this.getAttribute('data-video');
              if (currentPlayingVideo === videoURL) {
               // Already playing this video, no need to do anything
                return;
            }
             if(currentPlayingVideo) {
               // Stop the currently playing video
               videoPlayer.src = '';
               playerContainer.style.display = 'none';
           }

           mosaicContainer.style.display = 'none';
            videoCard.classList.add('collapsed');
           backButton.style.display = 'block';
            videoPlayer.src = videoURL;
            playerContainer.style.display = 'block';
            videoPlayer.play();
             currentPlayingVideo = videoURL;
        });
    });

     videoPlayer.addEventListener('ended', function() {
        mosaicContainer.style.display = 'grid';
        videoCard.classList.remove('collapsed');
        backButton.style.display = 'none';
        currentPlayingVideo = null;
    });

     backButton.addEventListener('click', function() {
         videoPlayer.src = '';
        playerContainer.style.display = 'none';
        mosaicContainer.style.display = 'grid';
          videoCard.classList.remove('collapsed');
         backButton.style.display = 'none';
         currentPlayingVideo = null;
    });

    videoPlayer.addEventListener('click', function(event) {
        event.stopPropagation();
    });


    bottomButton.addEventListener('click', function(){
       mosaicContainer.style.display = 'none';
       videoCard.classList.add('collapsed');
        slidesContainer.style.display = 'block';
        slidesBackButton.style.display = 'block';
        topButton.style.display = 'none';
       bottomButton.style.display = 'none';

        //Force the iframe to reload
        slidesPlayer.src = slidesPlayer.src;

   });

   slidesBackButton.addEventListener('click', function() {
        slidesContainer.style.display = 'none';
        mosaicContainer.style.display = 'grid';
        videoCard.classList.remove('collapsed');
         slidesBackButton.style.display = 'none';
         topButton.style.display = 'flex';
        bottomButton.style.display = 'block';
    });
});
