let count = localStorage.getItem("apkDownloads") || 0;
document.getElementById("downloadCount").innerText = count;

function countDownload(){
  count++;
  localStorage.setItem("apkDownloads", count);
  document.getElementById("downloadCount").innerText = count;
}
