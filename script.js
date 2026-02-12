let downloads = localStorage.getItem("downloads") || 0;
document.getElementById("count").innerText = downloads;

function addDownload(){
  downloads++;
  localStorage.setItem("downloads", downloads);
  document.getElementById("count").innerText = downloads;
}
