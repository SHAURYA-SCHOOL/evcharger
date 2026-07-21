function load() {
    const replace = document.getElementById("nav-dummy")
    replace.innerHTML = `            <a href="index.html" class="nav-item active">
                <span class="nav-icon">🏠</span>
                <span class="nav-label">Home</span>
            </a>
            <a href="map.html" class="nav-item">
                <span class="nav-icon">🗺</span>
                <span class="nav-label">Map</span>
            </a>
            <a href="faq.html" class="nav-item">
                <span class="nav-icon">❓</span>
                <span class="nav-label">FAQ</span>
            </a>
            <a href="#" onclick="alert('Sorry! This feature has not been implemented yet.')" class="nav-item">
                <span class="nav-icon">👤</span>
                <span class="nav-label">Profile</span>
            </a>`
}