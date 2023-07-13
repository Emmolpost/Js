function toggleClearButton() {
    var videoUrlInput = document.getElementById('videoUrl');
    var clearButton = document.getElementById('clearButton');
    clearButton.style.display = videoUrlInput.value.length > 0 ? 'block' : 'none';
  }

  function togglePasteButton() {
    var videoUrlInput = document.getElementById('videoUrl');
    var pasteButton = document.getElementById('pasteButton');
    pasteButton.style.display = videoUrlInput.value.length === 0 ? 'block' : 'none';
  }

  function clearInput() {
    var videoUrlInput = document.getElementById('videoUrl');
    videoUrlInput.value = '';
    toggleClearButton();
    togglePasteButton();
    hideThumbnailPreview();

    return false; // Menghentikan aksi bawaan tombol (reload halaman)
  }

  function hideThumbnailPreview() {
    var thumbnailPreview = document.getElementById('thumbnailPreview');
    thumbnailPreview.innerHTML = '';
  }

  function handlePasteFromClipboard(event) {
    event.preventDefault();
    navigator.clipboard.readText()
      .then(function(clipboardText) {
        var videoUrlInput = document.getElementById('videoUrl');
        videoUrlInput.value = clipboardText;
        toggleClearButton();
        togglePasteButton();
        toggleClipboardErrorAlert(false);
      })
      .catch(function(error) {
        console.error('Gagal membaca teks dari clipboard:', error);
        toggleClipboardErrorAlert(true);
        setTimeout(function() {
          toggleClipboardErrorAlert(false);
        }, 3000);
      });
  }

  function toggleClipboardErrorAlert(show) {
    var clipboardErrorAlertContainer = document.getElementById('clipboardErrorAlert');
    clipboardErrorAlertContainer.style.display = show ? 'block' : 'none';
  }

  function showAlert() {
    var alertContainer = document.getElementById('alert');
    alertContainer.style.display = 'block';

    setTimeout(function() {
      hideAlert();
    }, 3000);
  }

  function hideAlert() {
    var alertContainer = document.getElementById('alert');
    alertContainer.style.display = 'none';
  }

  function showInvalidUrlAlert() {
    var invalidUrlAlertContainer = document.getElementById('invalidUrlAlert');
    invalidUrlAlertContainer.style.display = 'block';

    setTimeout(function() {
      hideInvalidUrlAlert();
    }, 3000);
  }

  function hideInvalidUrlAlert() {
    var invalidUrlAlertContainer = document.getElementById('invalidUrlAlert');
    invalidUrlAlertContainer.style.display = 'none';
  }

  function isValidUrl(url) {
    var urlPattern = (/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&]+)/i);
    return urlPattern.test(url);
  }

  function createThumbnailContainer(thumbnailUrl, filename, quality, size) {
    var thumbnailContainer = document.createElement('div');
    thumbnailContainer.classList.add('thumbnail-container');

    var thumbnailInfo = document.createElement('div');
    thumbnailInfo.classList.add('thumbnail-info');

    var thumbnailInfoMarkup = `
      <div class=" rounded overflow-hidden shadow-lg">
        <img class="w-full" src="${thumbnailUrl}" alt="YouTube Thumbnail Downloader">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Kualitas: ${quality}</div>
          <p class="text-gray-700 text-base">
            Ini adalah gambar thumbnail <b>${filename}</b> dengan ukuran <b>${size}</b> yang dapat diunduh dengan klik tombol <b>Unduh</b> dibawah ini.
          </p>
          <button class="w-full h-10 px-4 py-2 mt-4 text-white transition-colors duration-200 transform bg-green-800 rounded-global hover:bg-green-300 focus:outline-none focus:bg-green-400" onclick="downloadImage('${thumbnailUrl}', '${filename}')">Unduh</button>
        </div>
      </div>
    `;

    thumbnailContainer.innerHTML = thumbnailInfoMarkup;
    document.getElementById('thumbnailPreview').appendChild(thumbnailContainer);
  }

  function downloadImage(url, filename) {
    var link = document.createElement('a');
    link.href = url;
    link.download = filename;

    // Cek apakah browser mendukung fitur download
    if (typeof link.download === 'undefined') {
      // Jika tidak mendukung, arahkan pengguna ke tautan asli
      window.location.href = url;
      return;
    }

    // Simulasikan klik pada link untuk mengunduh gambar
    link.click();
  }

  function extractThumbnailUrls(videoUrl) {
    var match = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&]+)/i);
    var thumbnailUrls = [];

    if (match) {
      var videoId = match[1];
      thumbnailUrls.push({
        url: 'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg',
        quality: 'Max Resolution',
        size: '1920x1080'
      });
      thumbnailUrls.push({
        url: 'https://img.youtube.com/vi/' + videoId + '/sddefault.jpg',
        quality: 'Standard Definition',
        size: '640x480'
      });
      thumbnailUrls.push({
        url: 'https://img.youtube.com/vi/' + videoId + '/hqdefault.jpg',
        quality: 'High Quality',
        size: '480x360'
      });
      thumbnailUrls.push({
        url: 'https://img.youtube.com/vi/' + videoId + '/mqdefault.jpg',
        quality: 'Medium Quality',
        size: '320x180'
      });
    }

    return thumbnailUrls;
  }

  function getThumbnails() {
    var videoUrl = document.getElementById('videoUrl').value;
    if (videoUrl === '') {
      showAlert();
      return;
    }

    if (!isValidUrl(videoUrl)) {
      showInvalidUrlAlert();
      return;
    }

    hideAlert();
    hideInvalidUrlAlert();

    var thumbnailUrls = extractThumbnailUrls(videoUrl);

    var thumbnailPreview = document.getElementById('thumbnailPreview');
    thumbnailPreview.innerHTML = '';

    if (thumbnailUrls.length > 0) {
      for (var i = 0; i < thumbnailUrls.length; i++) {
        var thumbnailUrl = thumbnailUrls[i].url;
        var quality = thumbnailUrls[i].quality;
        var size = thumbnailUrls[i].size;
        var filename = 'Thumbnail.biz.id_' + i + '.jpg';
        createThumbnailContainer(thumbnailUrl, filename, quality, size);
      }
    }

    toggleClearButton();
    togglePasteButton();
  }

  window.onload = function() {
    var videoUrlInput = document.getElementById('videoUrl');
    videoUrlInput.addEventListener('input', function() {
      toggleClearButton();
      togglePasteButton();
    });

    var pasteButton = document.getElementById('pasteButton');
    pasteButton.addEventListener('click', function(event) {
      var videoUrlInput = document.getElementById('videoUrl');
      if (videoUrlInput.value === '') {
        handlePasteFromClipboard(event);
      }
    });

    var clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', clearInput);
  };
