document.getElementById("user-email").textContent =
  JSON.parse(localStorage.getItem("mail")) || "user@example.com";
const urlParams = new URLSearchParams(window.location.search);
const videoLink = urlParams.get("video");
const topicTitle = urlParams.get("topic");

if (videoLink && topicTitle) {
  document.getElementById("video-title").innerText = topicTitle;
  document.getElementById("video-frame").src = videoLink;
} else {
  document.getElementById("video-title").innerText = "Video not found";
}
