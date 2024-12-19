document.addEventListener('DOMContentLoaded', function() {
    const videoCard = document.getElementById('videoCard');
    const playerContainer = document.getElementById('playerContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    const thumbContainers = document.querySelectorAll('.thumb-container');
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


             videoPlayer.src = videoURL;
             playerContainer.style.display = 'block';
             currentPlayingVideo = videoURL;
        });
    });
     videoPlayer.addEventListener('click', function(event) {
           event.stopPropagation();
      });
});
