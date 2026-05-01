$(document).ready(function () {
  // Abrir modal con video de YouTube
  $('.btn-video').on('click', function () {
    const videoId = $(this).data('video');
    $('#videoFrame').attr('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
    const modal = new bootstrap.Modal(document.getElementById('modalVideo'));
    modal.show();
  });

  // Detener el video al cerrar el modal
  $('#modalVideo').on('hidden.bs.modal', function () {
    $('#videoFrame').attr('src', '');
  });
});
