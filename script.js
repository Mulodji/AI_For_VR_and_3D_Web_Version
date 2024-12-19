document.addEventListener('DOMContentLoaded', function() {
    const videoCard = document.getElementById('videoCard');
    const playerContainer = document.getElementById('playerContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    const thumbContainers = document.querySelectorAll('.thumb-container');
    const mosaicContainer = document.getElementById('mosaicContainer');
    const backButton = document.getElementById('backButton');
    let currentPlayingVideo = null;


    function showMosaic() {
        mosaicContainer.classList.remove('collapsed');
        videoCard.classList.remove('collapsed');
         backButton.style.display = 'none';
    }

    function hideMosaic() {
       mosaicContainer.classList.add('collapsed');
       videoCard.classList.add('collapsed');
        backButton.style.display = 'block';
    }

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

            videoPlayer.src = videoURL;
            playerContainer.style.display = 'block';
            videoPlayer.play();
            hideMosaic();  // <------- HERE: This will hide the mosaic container.
            currentPlayingVideo = videoURL;
        });
    });

      videoPlayer.addEventListener('ended', function() {
          showMosaic();
        currentPlayingVideo = null;
      });

     backButton.addEventListener('click', function() {
          videoPlayer.src = '';
           playerContainer.style.display = 'none';
          showMosaic();
           currentPlayingVideo = null;
      });

    videoPlayer.addEventListener('click', function(event) {
           event.stopPropagation();
      });
});
