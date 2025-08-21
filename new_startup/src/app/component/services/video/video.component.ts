import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {

}

document.addEventListener('DOMContentLoaded', function() {
  // Video Preview Click Handler
  const videoPreview = document.getElementById('videoPreview');
  const videoControls = document.getElementById('videoControls');
  
  if (videoControls) {
      videoControls.addEventListener('click', function() {
      // In a real implementation, this would toggle video playback
      const playIcon = videoControls.querySelector('i');
      if (playIcon.classList.contains('fa-play')) {
          if (playIcon) {
              playIcon.classList.remove('fa-play');
          }
          if (playIcon) {
              playIcon.classList.add('fa-pause');
          }
          videoPreview.alt = "Video currently playing showing business team collaboration in modern office";
      } else {
          if (playIcon) {
              playIcon.classList.remove('fa-pause');
          }
          if (playIcon) {
              playIcon.classList.add('fa-play');
          }
          if (videoPreview) {
              (videoPreview as HTMLImageElement).alt = "Video paused showing business team collaboration in modern office";
          }
      });
  }
  });

  // Timeline thumbnail click handler
  document.querySelectorAll('.timeline-thumbnail').forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          // In a real implementation, this would seek the video to this point
          const playheads = document.querySelectorAll('.playhead');
          const randomPosition = Math.floor(Math.random() * 80) + 10; // Simulate seeking
          
          playheads.forEach(playhead => {
              (playhead as HTMLElement).style.left = `${randomPosition}%`;
          });
          
          const progressBar = document.querySelector('.progress-bar');
          if (progressBar) {
              (progressBar as HTMLElement).style.width = `${randomPosition}%`;
          }
      });
  });

  // Asset click handler
  document.querySelectorAll('.group').forEach(asset => {
      asset.addEventListener('click', function() {
          // In a real implementation, this would add the asset to the timeline
          const icon = asset.querySelector('i.fa-plus');
          if (icon) {
          icon.classList.remove('fa-plus');
          }
          if (icon) {
          icon.classList.add('fa-check');
          }
          setTimeout(() => {
              if (icon) {
                  icon.classList.remove('fa-check');
              }
              if (icon) {
                  icon.classList.add('fa-plus');
              }
          }, 1000);
      });
  });

