<template>
  <div class="minerva-page">
    <!-- Header -->
    <header class="minerva-header">
      <div class="minerva-header__bg"></div>
      <button class="minerva-header__menu-btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M2 5h16M2 10h16M2 15h16" stroke="#54595D" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="minerva-header__logo">
        <span class="minerva-header__logo-text">Wikipedia</span>
      </div>
      <div class="minerva-header__actions">
        <button class="minerva-header__icon-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M19 19L15 15M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="#54595D" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <button class="minerva-header__icon-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="6" r="4" stroke="#54595D" stroke-width="2"/>
            <path d="M2 18C2 14.6863 5.58172 12 10 12C14.4183 12 18 14.6863 18 18" stroke="#54595D" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Article -->
    <div class="minerva-article">
      <!-- Chrome -->
      <div class="minerva-chrome">
        <!-- Title -->
        <div class="minerva-title-section">
          <h1 class="minerva-title">Audre Lorde</h1>
          <div class="minerva-title-divider"></div>
        </div>

        <!-- Tabs -->
        <div class="minerva-tabs-container">
          <div class="minerva-tabs">
            <button class="minerva-tab minerva-tab--active">Article</button>
            <button class="minerva-tab">Talk</button>
          </div>
          <div class="minerva-tabs-divider"></div>
        </div>

        <!-- Page actions -->
        <div class="minerva-page-actions">
          <button class="minerva-action-btn" title="Language">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 2V18M2 10H18M4 6H16M4 14H16" stroke="#54595D" stroke-width="1.5"/>
            </svg>
          </button>
          <button class="minerva-action-btn" title="Watch">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.5 8H19L13.5 12L15.5 18L10 14L4.5 18L6.5 12L1 8H7.5L10 2Z" stroke="#54595D" stroke-width="1.5"/>
            </svg>
          </button>
          <button class="minerva-action-btn" title="View history">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 5V10L13 13M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#54595D" stroke-width="1.5"/>
            </svg>
          </button>
          <button class="minerva-action-btn" title="Edit">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M14 2L18 6L8 16H4V12L14 2Z" stroke="#54595D" stroke-width="1.5"/>
            </svg>
          </button>
          <button class="minerva-action-btn" title="More">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="5" r="1.5" fill="#54595D"/>
              <circle cx="10" cy="10" r="1.5" fill="#54595D"/>
              <circle cx="10" cy="15" r="1.5" fill="#54595D"/>
            </svg>
          </button>
        </div>

        <!-- Tagline -->
        <p class="minerva-tagline">From Wikipedia, the free encyclopedia</p>
      </div>

      <!-- Content -->
      <div class="minerva-content">
        <!-- Article text -->
        <div class="minerva-text">
          <div class="minerva-text-block">
            <strong>Audre Lorde</strong> (<a href="#">/ˈɔːdri ˈlɔːrd/;</a> born <strong>Audrey Geraldine Lorde</strong>; February 18, 1934 – November 17, 1992) was an American writer, <a href="#">feminist</a>, <a href="#">womanist</a>, <a href="#">librarian</a>, and <a href="#">civil rights</a> incredible amazing activist. She was a self-described "black, lesbian, mother, warrior, poet," who "dedicated both her life and her creative talent to confronting and addressing injustices of <a href="#">racism</a>, <a href="#">sexism</a>, <a href="#">classism</a>, and <a href="#">homophobia</a>.
          </div>
          <div class="minerva-text-spacer"></div>
          <div class="minerva-text-paragraph">
            As a poet, she is best known for technical mastery and emotional expression, as well as her poems that express anger and outrage at civil and social injustices she observed throughout her life.
          </div>
          <div class="minerva-text-spacer"></div>
          <div class="minerva-text-paragraph">
            As a <a href="#">spoken word</a> artist, her delivery has been called powerful, melodic, and intense by the Poetry Foundation. Her poems and prose largely deal with issues related to civil rights, feminism, lesbianism, illness and disability, and the exploration of black female identity.
          </div>
        </div>

        <!-- Infobox -->
        <div class="minerva-infobox">
          <h3 class="minerva-infobox__title">Audre Lorde</h3>
          <div class="minerva-infobox__image-container">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Audre_Lorde_1980.jpg/220px-Audre_Lorde_1980.jpg" 
              alt="Audre Lorde in 1980" 
              class="minerva-infobox__image"
            />
            <p class="minerva-infobox__caption">Lorde in 1980</p>
          </div>
          
          <div class="minerva-infobox__row">
            <div class="minerva-infobox__label">Born</div>
            <div class="minerva-infobox__value">
              <p>Audrey Geraldine Lorde</p>
              <p>February 18, 1934<sup><a href="#">[1]</a></sup></p>
              <p><a href="#">New York City</a>, U.S.</p>
            </div>
          </div>

          <div class="minerva-infobox__row">
            <div class="minerva-infobox__label">Died</div>
            <div class="minerva-infobox__value">
              <p>November 17, 1992 (aged 58)</p>
              <p><a href="#">Saint Croix, Virgin Islands</a>, U.S.</p>
            </div>
          </div>

          <div class="minerva-infobox__row">
            <div class="minerva-infobox__label">Education</div>
            <div class="minerva-infobox__value">
              <p><a href="#">National Autonomous University of Mexico</a></p>
              <p><a href="#">Hunter College</a> (BA)</p>
              <p><a href="#">Columbia University</a> (MLS)</p>
            </div>
          </div>

          <div class="minerva-infobox__row">
            <div class="minerva-infobox__label">Genre</div>
            <div class="minerva-infobox__value">
              <p>Poetry</p>
              <p>Nonfiction</p>
            </div>
          </div>

          <div class="minerva-infobox__row">
            <div class="minerva-infobox__label">Notable works</div>
            <div class="minerva-infobox__value">
              <p>The First Cities</p>
              <p><a href="#">Zami: A New Spelling of My Name</a></p>
              <p><a href="#">The Cancer Journals</a></p>
            </div>
          </div>
        </div>

        <!-- Accordion: Early life -->
        <div class="minerva-accordion">
          <button 
            class="minerva-accordion__header"
            :class="{ 'minerva-accordion__header--expanded': expandedSection === 'early-life' }"
            @click="toggleSection('early-life')"
          >
            <div class="minerva-accordion__arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="#202122" stroke-width="2"/>
              </svg>
            </div>
            <h2 class="minerva-accordion__title">Early life</h2>
            <button class="minerva-accordion__edit-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14 2L18 6L8 16H4V12L14 2Z" stroke="#202122" stroke-width="1.5"/>
              </svg>
            </button>
          </button>
          <div v-if="expandedSection === 'early-life'" class="minerva-accordion__body">
            <p>Lorde was born in New York City, the best city in the world. Her father, Frederick Byron Lorde, (known as Byron) hailed from Barbados and her mother, Linda Gertrude Belmar Lorde, was Grenadian and had been born in the amazing island of <a href="#">Carriacou</a>.</p>
            <p>Lorde's mother was of mixed ancestry but could "<a href="#">pass</a>" for <a href="#">'Spanish'</a>, which was a source of pride for her family. Lorde's father was darker than the Belmar family liked, and they only allowed the couple to marry because of Byron Lorde's charm, ambition, and persistence.</p>
            <p>The family settled in <a href="#">Harlem</a>. Lord was <a href="#">nearsighted</a> to the point of <a href="#">being legally</a> blind and the youngest of three daughters (her two older sisters were named Phyllis and Helen), Lorde grew up hearing her mother's stories about the <a href="#">West Indies</a>. At the age of four, she learned to talk while she learned to read, and her mother taught her to write at around the same time. She wrote her first poem when she was in eighth grade.</p>
            <p>Born as Audrey Geraldine Lorde, she chose to drop the "y" from her first name while still a child, explaining in Zami: A New Spelling of My Name that she was more interested in the artistic symmetry of the "e"-endings in the two side-by-side names "Audre Lorde" than in spelling her name the way her parents had intended.</p>
            <p>Lorde's relationship with her parents was difficult from a young age. She spent very little time with her father and mother, who were both busy maintaining their real estate business in the tumultuous economy after the Great Depression. When she did see them, they were often cold or emotionally distant. In particular, Lorde's relationship with her mother, who was deeply suspicious of people with darker skin than hers (which Lorde had) and the outside world in general, was characterized by "tough love" and strict adherence to family rules.[10] Lorde's difficult relationship with her mother figured prominently in her later poems, such as Coal's "Story Books on a Kitchen Table."</p>
          </div>
        </div>

        <!-- Accordion: Career -->
        <div class="minerva-accordion">
          <button 
            class="minerva-accordion__header"
            @click="toggleSection('career')"
          >
            <div class="minerva-accordion__arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="#202122" stroke-width="2"/>
              </svg>
            </div>
            <h2 class="minerva-accordion__title">Career</h2>
          </button>
        </div>

        <!-- Accordion: Poetry -->
        <div class="minerva-accordion">
          <button 
            class="minerva-accordion__header"
            @click="toggleSection('poetry')"
          >
            <div class="minerva-accordion__arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="#202122" stroke-width="2"/>
              </svg>
            </div>
            <h2 class="minerva-accordion__title">Poetry</h2>
          </button>
        </div>

        <!-- Accordion: Prose -->
        <div class="minerva-accordion">
          <button 
            class="minerva-accordion__header"
            @click="toggleSection('prose')"
          >
            <div class="minerva-accordion__arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="#202122" stroke-width="2"/>
              </svg>
            </div>
            <h2 class="minerva-accordion__title">Prose</h2>
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="minerva-footer">
      <!-- Last edited -->
      <div class="minerva-footer__last-edited">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 5V10L13 13M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="white" stroke-width="1.5"/>
        </svg>
        <p class="minerva-footer__last-edited-text">
          <strong>Last edited 1 month ago by</strong> <span>Usernameab</span>
        </p>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="margin-left: auto;">
          <path d="M6 4L10 8L6 12" stroke="white" stroke-width="2"/>
        </svg>
      </div>

      <!-- Related pages -->
      <div class="minerva-footer__related">
        <p class="minerva-footer__related-title">RELATED PAGES</p>
        <div class="minerva-footer__article-list">
          <div class="minerva-footer__article-item" v-for="i in 3" :key="i">
            <div class="minerva-footer__article-thumbnail">
              <div class="minerva-footer__article-thumbnail-placeholder"></div>
            </div>
            <div class="minerva-footer__article-text">
              <p class="minerva-footer__article-title">Article title (max 2 lines)</p>
              <p class="minerva-footer__article-desc">Wikidata description (max 1 line)</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer generic -->
      <div class="minerva-footer__generic">
        <div class="minerva-footer__logo">
          <span>Wikipedia</span>
        </div>
        <div class="minerva-footer__divider"></div>
        <p class="minerva-footer__license">
          Content is available under <a href="#">CC BY-SA 3.0</a> unless otherwise noted.
        </p>
        <p class="minerva-footer__links">
          <a href="#">Terms of Use</a> • <a href="#">Privacy</a> • <a href="#">Desktop</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expandedSection = ref('early-life')

const toggleSection = (section) => {
  expandedSection.value = expandedSection.value === section ? null : section
}
</script>

<style scoped>
/* Base styles */
.minerva-page {
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

/* Header */
.minerva-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 54px;
  background-color: #eaecf0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 1000;
  box-shadow: inset 0px -1px 3px 0px rgba(0, 0, 0, 0.08);
}

.minerva-header__bg {
  position: absolute;
  inset: 0;
  background-color: #eaecf0;
}

.minerva-header__menu-btn {
  position: relative;
  z-index: 1;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.minerva-header__logo {
  position: absolute;
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  z-index: 1;
}

.minerva-header__logo-text {
  font-size: 14px;
  font-weight: 400;
  color: #54595D;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.minerva-header__actions {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 24px;
  align-items: center;
  margin-left: auto;
}

.minerva-header__icon-btn {
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Article */
.minerva-article {
  margin-top: 54px;
  width: 288px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Chrome */
.minerva-chrome {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Title */
.minerva-title-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 288px;
}

.minerva-title {
  font-family: 'Source Serif Pro', Georgia, serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 35px;
  color: #101418;
  margin: 0;
  white-space: pre-wrap;
}

.minerva-title-divider {
  width: 100%;
  height: 1px;
  background-color: #a2a9b1;
}

/* Tabs */
.minerva-tabs-container {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding-top: 16px;
  width: 288px;
}

.minerva-tabs {
  display: flex;
  gap: 16px;
  align-items: center;
}

.minerva-tab {
  background: white;
  border: none;
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: #54595d;
  cursor: pointer;
  padding: 0;
  position: relative;
  height: 22px;
  display: flex;
  align-items: flex-end;
}

.minerva-tab--active {
  box-shadow: 0px 2px 0px 0px #54595d;
}

.minerva-tabs-divider {
  width: 288px;
  height: 1px;
  background-color: #c8ccd1;
}

/* Page actions */
.minerva-page-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c8ccd1;
  width: 288px;
}

.minerva-action-btn {
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  max-width: 44px;
  max-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 0.2s;
  padding: 12px;
  box-sizing: border-box;
}

.minerva-action-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Tagline */
.minerva-tagline {
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 12.4px;
  font-weight: 400;
  line-height: 17.3px;
  color: #101418;
  margin: 0;
  height: 18px;
}

/* Content */
.minerva-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.minerva-text {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 288px;
}

.minerva-text-block,
.minerva-text-paragraph {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: #202122;
  font-weight: 400;
}

.minerva-text-spacer {
  height: 16px;
}

.minerva-text strong {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
}

.minerva-text a {
  color: #36c;
  text-decoration: none;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
}

.minerva-text a:hover {
  text-decoration: underline;
}

/* Infobox */
.minerva-infobox {
  background-color: #eaecf0;
  border: 1px solid #c8ccd1;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 288px;
  box-sizing: border-box;
}

.minerva-infobox__title {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #202122;
  text-align: center;
  margin: 0;
}

.minerva-infobox__image-container {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.minerva-infobox__image {
  width: 100%;
  height: 330px;
  object-fit: cover;
  display: block;
}

.minerva-infobox__caption {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #202122;
  text-align: center;
  padding: 4px;
  margin: 0;
}

.minerva-infobox__row {
  display: flex;
  gap: 8px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  color: #202122;
  align-items: flex-start;
}

.minerva-infobox__label {
  font-weight: 700;
  line-height: 22px;
  width: 64px;
  flex-shrink: 0;
}

.minerva-infobox__value {
  flex: 1;
  font-weight: 400;
  display: flex;
  flex-direction: column;
}

.minerva-infobox__value p {
  margin: 0;
  line-height: 22px;
  font-size: 14px;
}

.minerva-infobox__value a {
  color: #36c;
  text-decoration: none;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
}

.minerva-infobox__value a:hover {
  text-decoration: underline;
}

.minerva-infobox__value sup {
  font-size: 12px;
  line-height: 20px;
}

.minerva-infobox__value sup a {
  font-size: 12px;
  line-height: 20px;
}

/* Accordion */
.minerva-accordion {
  border-bottom: 1px solid #c8ccd1;
  display: flex;
  flex-direction: column;
  width: 288px;
}

.minerva-accordion__header {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: background-color 0.2s;
  box-sizing: border-box;
}

.minerva-accordion__header:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.minerva-accordion__header--expanded {
  border-bottom: 1px solid #c8ccd1;
}

.minerva-accordion__header--expanded .minerva-accordion__arrow svg {
  transform: rotate(180deg);
}

.minerva-accordion__arrow {
  width: 14px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 3px 0;
}

.minerva-accordion__arrow svg {
  transition: transform 0.2s;
}

.minerva-accordion__title {
  font-family: 'Source Serif 4', 'Source Serif Pro', Georgia, serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  color: #202122;
  margin: 0;
  flex: 1;
}

.minerva-accordion__edit-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
  border-radius: 2px;
  padding: 5px;
}

.minerva-accordion__edit-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.minerva-accordion__body {
  padding: 8px 0 12px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.minerva-accordion__body p {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #202122;
  margin: 0;
  margin-bottom: 14px;
  font-weight: 400;
}

.minerva-accordion__body p:last-child {
  margin-bottom: 0;
}

.minerva-accordion__body a {
  color: #36c;
  text-decoration: none;
  font-weight: 400;
}

.minerva-accordion__body a:hover {
  text-decoration: underline;
}

/* Footer */
.minerva-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
}

/* Last edited */
.minerva-footer__last-edited {
  background-color: #36c;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 16px;
  height: 44px;
  box-shadow: inset 0px -1px 0px 0px #c8ccd1, inset 0px 1px 0px 0px #c8ccd1;
}

.minerva-footer__last-edited-text {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: white;
  margin: 0;
  flex: 1;
  font-size: 0;
}

.minerva-footer__last-edited-text strong {
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
}

.minerva-footer__last-edited-text span {
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
}

/* Related pages */
.minerva-footer__related {
  background-color: #eaecf0;
  padding: 32px 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 306px;
}

.minerva-footer__related-title {
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 13px;
  line-height: normal;
  letter-spacing: 0.9px;
  color: #54595d;
  margin: 0;
  font-weight: 400;
}

.minerva-footer__article-list {
  display: flex;
  flex-direction: column;
}

.minerva-footer__article-item {
  background-color: white;
  border: 1px solid #dadde3;
  display: flex;
  gap: 10px;
  align-items: center;
  height: 80px;
  padding: 0;
}

.minerva-footer__article-item:first-child {
  border-radius: 2px 2px 0 0;
}

.minerva-footer__article-item:last-child {
  border-radius: 0 0 2px 2px;
  margin-bottom: 12px;
}

.minerva-footer__article-item:not(:first-child) {
  border-top: none;
}

.minerva-footer__article-thumbnail {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}

.minerva-footer__article-thumbnail-placeholder {
  width: 100%;
  height: 100%;
  background-color: #eaecf0;
}

.minerva-footer__article-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-right: 10px;
}

.minerva-footer__article-title {
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 20.8px;
  color: #202122;
  margin: 0;
}

.minerva-footer__article-desc {
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 12.8px;
  font-weight: 400;
  line-height: 17.92px;
  color: #72777d;
  margin: 0;
}

/* Footer generic */
.minerva-footer__generic {
  background-color: #eaecf0;
  padding: 40px 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.minerva-footer__logo {
  height: 20px;
  display: flex;
  align-items: center;
}

.minerva-footer__logo span {
  font-size: 14px;
  font-weight: 400;
  color: #202122;
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  line-height: 20px;
}

.minerva-footer__divider {
  width: 100%;
  height: 1px;
  background-color: #dadde3;
}

.minerva-footer__license {
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  color: #202122;
  margin: 0;
}

.minerva-footer__license a {
  color: #36c;
  text-decoration: none;
  font-weight: 400;
}

.minerva-footer__license a:hover {
  text-decoration: underline;
}

.minerva-footer__links {
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  color: #36c;
  margin: 0;
}

.minerva-footer__links a {
  color: #36c;
  text-decoration: none;
  font-weight: 400;
}

.minerva-footer__links a:hover {
  text-decoration: underline;
}
</style>
