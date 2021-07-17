const shareBtn = document.querySelector('.shareBtn');

shareBtn.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: "Anthony's Card",
      text: "This is Anthony's Digital Business Card. Let's Connect!",
      url: 'https://techxguy.com/digital-card'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    // fallback
  }
});