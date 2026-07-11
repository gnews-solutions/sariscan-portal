/**
 * SariScan Mobile — Official Landing Page JavaScript Engine
 * Handles dynamic QR Code rendering for Instant Android Sideloading
 * and interactive hardware tier simulation.
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log("SariScan Landing Portal Initialized.");

  // 1. Dynamic QR Code Generation pointing directly to GitHub Releases Latest APK
  const apkDownloadUrl = "https://github.com/gnews-solutions/sariscan-portal/releases/latest/download/SariScan-Mobile-Latest.apk";
  const qrContainer = document.getElementById('qrcode-container');

  if (qrContainer && typeof QRCode !== 'undefined') {
    qrContainer.innerHTML = ''; // Clear fallback spinner
    new QRCode(qrContainer, {
      text: apkDownloadUrl,
      width: 200,
      height: 200,
      colorDark: "#0a0e0c",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
    console.log("Generated high-density QR Code pointing to:", apkDownloadUrl);
  } else if (qrContainer) {
    qrContainer.innerHTML = `<a href="${apkDownloadUrl}" target="_blank" style="color: #198754; font-weight:bold; text-decoration:none;">Click here to open APK Releases Portal</a>`;
  }

  // 2. Add subtle interactive hover sound/glow effects on hardware tier table rows
  const tableRows = document.querySelectorAll('tbody tr');
  tableRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.transform = 'scale(1.01)';
      row.style.transition = 'all 0.2s ease';
    });
    row.addEventListener('mouseleave', () => {
      row.style.transform = 'scale(1)';
    });
  });

  // 3. Direct Download Analytics Log (Simulated)
  const downloadBtn = document.getElementById('btn-download-apk');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      console.log("User initiated APK direct download from Cloudflare Portal.");
      // Can hook into Google Analytics or Cloudflare Web Analytics here
    });
  }
});
