const videoContainer = document.querySelector('.about__video-container');

const initVideo = () => {

  if (!videoContainer) {
    return;
  }

  const videoPicture = videoContainer.querySelector('.about__poster');
  const videoBtn = document.querySelector('.about__button');

  const video = document.createElement('iframe');
  video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw');
  video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  video.setAttribute('allowfullscreen', '');
  video.classList.add('about__iframe');
  videoContainer.append(video);

  videoBtn.addEventListener('click', (event) => {
    event.preventDefault();
    videoPicture.style.display = 'none';
    videoBtn.style.display = 'none';
  });
};

export {initVideo};
