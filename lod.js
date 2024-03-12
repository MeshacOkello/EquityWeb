document.addEventListener('DOMContentLoaded', function () {
    var loadingOverlay = document.querySelector('.center');
    var content = document.querySelector('.content');

    setTimeout(function () {
        loadingOverlay.style.opacity = '0'; // Set opacity to 0 for smooth transition
        loadingOverlay.style.visibility = 'hidden'; // Set visibility to hidden
        content.style.opacity = '1'; // Set opacity to 1 for smooth transition
        setTimeout(function () {
            loadingOverlay.style.display = 'none';
            content.style.display = 'block';
        }, 2000); // Wait for the transition to complete (2 seconds)
    }, 6000); // 4 seconds
});
