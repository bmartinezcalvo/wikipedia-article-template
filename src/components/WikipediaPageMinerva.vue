<template>
  <div class="minerva-page">
    <header class="minerva-header">
      <button class="menu-button">☰</button>
      <img src="https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg" alt="Wikipedia" class="minerva-logo" />
      <button class="search-button">🔍</button>
    </header>

    <main class="minerva-content">
      <h1 class="minerva-title">Audrey Hepburn</h1>
      
      <div class="minerva-infobox">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Audrey_Hepburn_1956.jpg/220px-Audrey_Hepburn_1956.jpg" alt="Audrey Hepburn" class="minerva-infobox-image" />
        <table class="minerva-infobox-table">
          <tr>
            <td><strong>Born</strong></td>
            <td>4 May 1929<br>Brussels, Belgium</td>
          </tr>
          <tr>
            <td><strong>Died</strong></td>
            <td>20 January 1993<br>Tolochenaz, Switzerland</td>
          </tr>
          <tr>
            <td><strong>Occupation</strong></td>
            <td>Actress</td>
          </tr>
        </table>
      </div>

      <div class="minerva-article">
        <p><strong>Audrey Kathleen Hepburn</strong> (born Audrey Kathleen Ruston; 4 May 1929 – 20 January 1993) was a British actress. Recognised as a film and fashion icon, she was ranked by the American Film Institute as the third-greatest female screen legend from the Classical Hollywood cinema.</p>
        
        <h2 id="early-life">Early life</h2>
        <p>Hepburn was born on 4 May 1929 at number 48 Rue Keyenveld in Ixelles, Brussels, Belgium. Her mother, Baroness Ella van Heemstra, was a Dutch noblewoman.</p>
        
        <h2 id="career">Career</h2>
        <p>Hepburn's film career began with small roles in various European productions. Her first major film role was in Roman Holiday (1953), for which she won an Academy Award for Best Actress.</p>
      </div>

      <div class="minerva-actions">
        <button class="minerva-action-button">Edit</button>
        <button class="minerva-action-button">Watch</button>
        <button class="minerva-action-button">Share</button>
      </div>
    </main>
  </div>
</template>

<script setup>
// Mobile Minerva skin - simplified mobile experience
</script>

<style scoped>
.minerva-page {
  min-height: 100vh;
  background-color: #ffffff;
  max-width: 100%;
}

.minerva-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background-color: #ffffff;
  border-bottom: 1px solid #c8ccd1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 100;
}

.menu-button,
.search-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  color: #202122;
}

.minerva-logo {
  height: 24px;
  width: auto;
}

.minerva-content {
  margin-top: 56px;
  padding: 16px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.minerva-title {
  font-size: 28px;
  font-weight: 400;
  color: #202122;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #c8ccd1;
}

.minerva-infobox {
  background: #f8f9fa;
  border: 1px solid #c8ccd1;
  padding: 12px;
  margin-bottom: 20px;
}

.minerva-infobox-image {
  width: 100%;
  height: auto;
  margin-bottom: 12px;
}

.minerva-infobox-table {
  width: 100%;
  font-size: 14px;
}

.minerva-infobox-table tr {
  border-bottom: 1px solid #c8ccd1;
}

.minerva-infobox-table td {
  padding: 8px 4px;
  vertical-align: top;
}

.minerva-article {
  line-height: 1.6;
  color: #202122;
}

.minerva-article p {
  margin-bottom: 16px;
  font-size: 16px;
}

.minerva-article h2 {
  font-size: 22px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 12px;
  color: #202122;
}

.minerva-actions {
  display: flex;
  gap: 12px;
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid #c8ccd1;
}

.minerva-action-button {
  flex: 1;
  padding: 12px;
  background: #ffffff;
  border: 1px solid #a2a9b1;
  border-radius: 2px;
  color: #202122;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.minerva-action-button:hover {
  background: #f8f9fa;
}

.minerva-action-button:active {
  background: #eaecf0;
}
</style>

