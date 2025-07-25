const locationInput = document.getElementById("locationInput");
const mapFrame = document.getElementById("mapFrame");

locationInput.addEventListener("change", () => {
  const location = encodeURIComponent(locationInput.value.trim());
  const apiKey = "YOUR_API_KEY"; // 🔑 Replace this with your Google Maps Embed API key
  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${location}`;
  mapFrame.src = src;
});

const imageInput = document.getElementById("images");
const gallery = document.getElementById("galleryPreview");

imageInput.addEventListener("change", () => {
  gallery.innerHTML = "";
  const files = imageInput.files;

  for (const file of files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target.result;
      gallery.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("blogForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Post submitted! Backend will handle storage in next phase.");
});
