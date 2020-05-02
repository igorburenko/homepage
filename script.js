window.onload = function() {
  const avatar = document.querySelector('.avatar__image');
  avatar.addEventListener('mouseover', () => avatar.src = 'assets/trump-hover.png');
  avatar.addEventListener('mouseout', () => avatar.src = 'assets/trump.png');
};
