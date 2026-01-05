<template>
  <div class="read-mode">
    <!-- Page Container -->
    <div class="page-container">
      
      <!-- Header -->
      <header class="header-section">
        <div class="header">
          <!-- Menu Button -->
          <button class="menu-button" aria-label="Menu">
            <cdx-icon :icon="cdxIconMenu" size="medium" />
          </button>

          <!-- Wikipedia Logo -->
          <div class="wikipedia-logo">
            <img :src="wikipediaGlobe" alt="Wikipedia globe" class="wikipedia-globe" />
            <div class="wikipedia-text">
              <div class="wikipedia-title">WIKIPEDIA</div>
              <div class="wikipedia-tagline">The Free Encyclopedia</div>
            </div>
          </div>

          <!-- Search -->
          <div class="search-container">
            <cdx-typeahead-search
              id="typeahead-search-wikipedia"
              form-action="https://en.wikipedia.org/w/index.php"
              :use-button="true"
              :search-results="searchResults"
              :search-footer-url="searchFooterUrl"
              :show-thumbnail="true"
              :highlight-query="true"
              :auto-expand-width="true"
              placeholder="Search"
              @input="onSearchInput"
              @search-result-click="onSearchResultClick"
              @submit="onSearchSubmit"
            >
              <template #default>
                <input type="hidden" name="language" value="en">
                <input type="hidden" name="title" value="Special:Search">
              </template>
              <template #search-footer-text="{ searchQuery }">
                Search Wikipedia for pages containing
                <strong class="cdx-typeahead-search__search-footer__query">
                  {{ searchQuery }}
                </strong>
              </template>
            </cdx-typeahead-search>
          </div>

          <!-- User Tools -->
          <div class="user-tools">
            <a href="#" class="user-link">User1234</a>
            <button class="icon-btn" aria-label="Notifications">
              <cdx-icon :icon="cdxIconBell" size="medium" />
            </button>
            <button class="icon-btn" aria-label="Messages">
              <cdx-icon :icon="cdxIconTray" size="medium" />
            </button>
            <button class="icon-btn" aria-label="Watchlist">
              <cdx-icon :icon="cdxIconWatchlist" size="medium" />
            </button>
            <button class="user-menu-btn" aria-label="User menu">
              <cdx-icon :icon="cdxIconUserAvatar" size="medium" />
              <cdx-icon :icon="cdxIconExpand" size="small" class="dropdown-icon" />
            </button>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <div class="main-content-area">
        
        <!-- Table of Contents (Left Sidebar) -->
        <aside class="toc-sidebar">
          <div class="toc-container">
            <div class="toc-header">
              <h2 class="toc-title">Contents</h2>
              <button class="toc-toggle">hide</button>
            </div>
            
            <nav class="toc-nav">
              <div class="toc-item toc-item-no-chevron">
                <a href="#" class="toc-link toc-link-bold">(Top)</a>
              </div>
              
              <div class="toc-item toc-item-no-chevron">
                <a href="#" class="toc-link">Early life</a>
              </div>
              
              <div class="toc-item">
                <button class="toc-expand">
                  <cdx-icon :icon="cdxIconNext" size="small" />
                </button>
                <a href="#" class="toc-link">Career</a>
              </div>
              
              <div class="toc-item">
                <button class="toc-expand">
                  <cdx-icon :icon="cdxIconNext" size="small" />
                </button>
                <a href="#" class="toc-link">Poetry</a>
              </div>
              
              <div class="toc-item">
                <button class="toc-expand">
                  <cdx-icon :icon="cdxIconNext" size="small" />
                </button>
                <a href="#" class="toc-link">Prose</a>
              </div>
              
              <div class="toc-item toc-item-no-chevron">
                <a href="#" class="toc-link">Film</a>
              </div>
              
              <div class="toc-item">
                <button class="toc-expand">
                  <cdx-icon :icon="cdxIconNext" size="small" />
                </button>
                <a href="#" class="toc-link">Theory</a>
              </div>
              
              <div class="toc-item">
                <button class="toc-expand">
                  <cdx-icon :icon="cdxIconNext" size="small" />
                </button>
                <a href="#" class="toc-link">Lorde and womanism</a>
              </div>
              
              <div class="toc-item toc-item-no-chevron">
                <a href="#" class="toc-link">Personal life</a>
              </div>
              
              <div class="toc-item toc-item-no-chevron">
                <a href="#" class="toc-link">Last years</a>
              </div>
              
              <div class="toc-item toc-item-no-chevron">
                <a href="#" class="toc-link">Honors</a>
              </div>
              
              <div class="toc-item toc-item-no-chevron">
                <a href="#" class="toc-link">Legacy</a>
              </div>
              
              <div class="toc-item">
                <button class="toc-expand">
                  <cdx-icon :icon="cdxIconNext" size="small" />
                </button>
                <a href="#" class="toc-link">Works</a>
              </div>
              
              <div class="toc-item toc-item-no-chevron">
                <a href="#" class="toc-link">See also</a>
              </div>
              
              <div class="toc-item toc-item-no-chevron">
                <a href="#" class="toc-link">Notes</a>
              </div>
              
              <div class="toc-item toc-item-no-chevron">
                <a href="#" class="toc-link">References</a>
              </div>
              
              <div class="toc-item toc-item-no-chevron">
                <a href="#" class="toc-link">Further reading</a>
              </div>
              
              <div class="toc-item toc-item-no-chevron">
                <a href="#" class="toc-link">External links</a>
              </div>
            </nav>
          </div>
        </aside>

        <!-- Article Content (Center) -->
        <article class="article">
          <div class="article-chrome">
            <!-- Title and Toolbar -->
            <div class="title-toolbar">
              <div class="article-title-section">
                <div class="title-and-language">
                  <button class="toc-toggle-btn" aria-label="Toggle table of contents">
                    <cdx-icon :icon="cdxIconListBullet" size="medium" />
                  </button>
                  <h1 class="article-title">Audre Lorde</h1>
                  <button class="language-button">
                    <cdx-icon :icon="cdxIconLanguage" size="medium" class="language-icon" />
                    <span class="language-text">95 Languages</span>
                    <cdx-icon :icon="cdxIconExpand" size="small" class="dropdown-small" />
                  </button>
                </div>
                <div class="title-divider"></div>
              </div>

              <div class="toolbar">
                <div class="tabs">
                  <div class="tabs-start">
                    <div class="tab tab-selected">
                      <span class="tab-text">Article</span>
                      <div class="tab-indicator"></div>
                    </div>
                    <div class="tab">
                      <span class="tab-text tab-link">Talk</span>
                    </div>
                  </div>
                  
                  <div class="tabs-end">
                    <div class="tab tab-selected">
                      <span class="tab-text">Read</span>
                      <div class="tab-indicator"></div>
                    </div>
                    <div class="tab">
                      <span class="tab-text tab-link">Edit</span>
                    </div>
                    <div class="tab">
                      <span class="tab-text tab-link">View history</span>
                    </div>
                    <button class="tab-icon-btn">
                      <cdx-icon :icon="cdxIconStar" size="medium" />
                    </button>
                    <button class="tools-toggle-btn" aria-label="Toggle tools">
                      <span class="tools-toggle-text">Tools</span>
                      <cdx-icon :icon="cdxIconExpand" size="small" />
                    </button>
                  </div>
                </div>
                <div class="toolbar-divider"></div>
              </div>
            </div>

            <p class="article-tagline">From Wikipedia, the free encyclopedia</p>
          </div>

          <!-- Article Content -->
          <div class="article-content-section">
            <div class="article-ve-contents">
              <div class="article-content-grid">
                <!-- Main Article Text -->
                <div class="article-text">
                  <div class="intro-text">
                    <p>
                      <strong>Audre Lorde</strong> (<a href="#">/ˈɔːdri ˈlɔːrd/;</a> born <strong>Audrey Geraldine Lorde</strong>; February 18, 1934 – November 17, 1992) was an American writer, 
                      <a href="#">feminist</a>, <a href="#">womanist</a>, <a href="#">librarian</a>, and <a href="#">civil rights</a> incredible amazing activist. She was a self-described "black, lesbian, mother, warrior, poet," who "dedicated both her life and her creative talent to confronting and addressing injustices of <a href="#">racism</a>, <a href="#">sexism</a>, <a href="#">classism</a>, and <a href="#">homophobia</a>.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      As a poet, she is best known for technical mastery and emotional expression, as well as her poems that express anger and outrage at civil and social injustices she observed throughout her life.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      As a <a href="#">spoken word</a> artist, her delivery has been called powerful, melodic, and intense by the Poetry Foundation. Her poems and prose largely deal with issues related to civil rights, feminism, lesbianism, illness and disability, and the exploration of black female identity.
                    </p>
                  </div>

                  <!-- Early Life Section -->
                  <div class="section-heading">
                    <h2 class="heading-text">Early life</h2>
                    <div class="heading-divider"></div>
                  </div>

                  <div class="body-text">
                    <p>
                      Lorde was born in New York City, the best city in the world. Her father, Frederick Byron Lorde, (known as Byron) hailed from Barbados and her mother, Linda Gertrude Belmar Lorde, was Grenadian and had been born in the amazing island of <a href="#">Carriacou</a>.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      Lorde's mother was of mixed ancestry but could "<a href="#">pass</a>" for <a href="#">'Spanish'</a>,which was a source of pride for her family. Lorde's father was darker than the Belmar family liked, and they only allowed the couple to marry because of Byron Lorde's charm, ambition, and persistence.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      The family settled in <a href="#">Harlem</a>. Lord was <a href="#">nearsighted</a> to the point of <a href="#">being legally</a> blind and the youngest of three daughters (her two older sisters were named Phyllis and Helen), Lorde grew up hearing her mother's stories about the <a href="#">West Indies</a>. At the age of four, she learned to talk while she learned to read, and her mother taught her to write at around the same time. She wrote her first poem when she was in eighth grade.
                    </p>
                  </div>

                  <div class="body-text additional-content">
                    <p>
                      Born as Audrey Geraldine Lorde, she chose to drop the "y" from her first name while still a child, explaining in <a href="#">Zami: A New Spelling of My Name</a> that she was more interested in the artistic symmetry of the "e"-endings in the two side-by-side names "Audre Lorde" than in spelling her name the way her parents had intended.
                    </p>
                    <p>
                      Lorde's relationship with her parents was difficult from a young age. She spent very little time with her father and mother, who were both busy maintaining their real estate business in the tumultuous economy after <a href="#">the Great Depression</a>. When she did see them, they were often cold or emotionally distant. In particular, Lorde's relationship with her mother, who was deeply suspicious of people with darker skin than hers (which Lorde had) and the outside world in general, was characterized by "tough love" and strict adherence to family rules.[10] Lorde's difficult relationship with her mother figured prominently in her later poems, such as Coal's "Story Books on a Kitchen Table."
                    </p>
                  </div>
                </div>

                <!-- Infobox -->
                <aside class="infobox">
                  <div class="infobox-title">Audre Lorde</div>
                  
                  <div class="infobox-image-section">
                    <div class="infobox-image">
                      <img :src="audreImage" alt="Audre Lorde in 1980" />
                    </div>
                    <div class="infobox-caption">Lorde in 1980</div>
                  </div>

                  <div class="infobox-row">
                    <div class="infobox-label">Born</div>
                    <div class="infobox-value">
                      Audrey Geraldine Lorde<br>
                      February 18, 1934[1]<br>
                      <a href="#">New York City</a>, U.S.
                    </div>
                  </div>

                  <div class="infobox-row infobox-row-faded">
                    <div class="infobox-label">Died</div>
                    <div class="infobox-value">
                      November 17, 1992 (aged 58)<br>
                      <a href="#">Saint Croix, Virgin Islands</a>, U.S.
                    </div>
                  </div>

                  <div class="infobox-row">
                    <div class="infobox-label">Education</div>
                    <div class="infobox-value infobox-value-link">
                      <a href="#">National Autonomous University of Mexico</a><br>
                      <a href="#">Hunter College (BA)</a><br>
                      <a href="#">Columbia University (MLS)</a>
                    </div>
                  </div>

                  <div class="infobox-row">
                    <div class="infobox-label">Genre</div>
                    <div class="infobox-value">
                      Poetry<br>
                      Nonfiction
                    </div>
                  </div>

                  <div class="infobox-row">
                    <div class="infobox-label">Notable works</div>
                    <div class="infobox-value infobox-value-link">
                      The First Cities<br>
                      <a href="#">Zami: A New Spelling of My Name</a><br>
                      <a href="#">The Cancer Journals</a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            <!-- Additional Content -->
            <div class="additional-paragraphs">
              <p>
                Born as Audrey Geraldine Lorde, she chose to drop the "y" from her first name while still a child, explaining in <a href="#">Zami: A New Spelling of My Name</a> that she was more interested in the artistic symmetry of the "e"-endings in the two side-by-side names "Audre Lorde" than in spelling her name the way her parents had intended.
              </p>
              <p>
                Lorde's relationship with her parents was difficult from a young age. She spent very little time with her father and mother, who were both busy maintaining their real estate business in the tumultuous economy after <a href="#">the Great Depression</a>. When she did see them, they were often cold or emotionally distant. In particular, Lorde's relationship with her mother, who was deeply suspicious of people with darker skin than hers (which Lorde had) and the outside world in general, was characterized by "tough love" and strict adherence to family rules.[10] Lorde's difficult relationship with her mother figured prominently in her later poems, such as Coal's "Story Books on a Kitchen Table."
              </p>
              <p>&nbsp;</p>
              <p>
                As a child, Lorde struggled with communication, and came to appreciate the power of poetry as a form of expression.[11] She even described herself as thinking in poetry. She memorized a great deal of poetry, and would use it to communicate, to the extent that, "If asked how she was feeling, Audre would reply by reciting a poem." Around the age of twelve, she began writing her own poetry and connecting with others at her school who were considered "outcasts", as she felt she was.
              </p>
              <p>&nbsp;</p>
              <p>
                Raised Catholic, Lorde attended parochial schools before moving on to Hunter College High School, a secondary school for intellectually gifted students. Poet Diane di Prima was a classmate and friend. While attending Hunter, Lorde published her first poem in Seventeen magazine after her school's literary journal rejected it for being inappropriate. Also in high school, Lorde participated in poetry workshops sponsored by the Harlem Writers Guild, but noted that she always felt like somewhat of an outcast from the Guild. She felt she was not accepted because she "was both crazy and queer but [they thought] I would grow out of it all."[14][15] Lorde graduated from Hunter College High School in 1951.
              </p>
              <p>
                Zami places her father's death from a stroke around New Year's 1953.
              </p>
            </div>
          </div>
        </article>

        <!-- Tools Sidebar (Right) -->
        <aside class="tools-sidebar">
          <div class="tools-container">
            <div class="tools-header">
              <h2 class="tools-title">Tools</h2>
              <button class="tools-toggle">hide</button>
            </div>

            <div class="tools-section">
              <div class="tools-section-title">General</div>
              <nav class="tools-nav">
                <a href="#" class="tools-link">What links here</a>
                <a href="#" class="tools-link">Related changes</a>
                <a href="#" class="tools-link">Special pages</a>
                <a href="#" class="tools-link">Permanent link</a>
                <a href="#" class="tools-link">Page information</a>
                <a href="#" class="tools-link">Cite this page</a>
                <a href="#" class="tools-link">Wikidata item</a>
                <a href="#" class="tools-link">Edit interlanguage links</a>
              </nav>
            </div>

            <div class="tools-section">
              <div class="tools-section-title">Print/export</div>
              <nav class="tools-nav">
                <a href="#" class="tools-link">Download as PDF</a>
                <a href="#" class="tools-link">Printable version</a>
              </nav>
            </div>

            <div class="tools-section">
              <div class="tools-section-title">In other projects</div>
              <nav class="tools-nav">
                <a href="#" class="tools-link">Wikimedia Commons</a>
                <a href="#" class="tools-link">Wikiquote</a>
                <a href="#" class="tools-link">Wikidata item</a>
              </nav>
            </div>
          </div>
        </aside>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { CdxTypeaheadSearch, CdxIcon } from '@wikimedia/codex';
import { 
  cdxIconMenu,
  cdxIconBell,
  cdxIconTray,
  cdxIconWatchlist,
  cdxIconUserAvatar,
  cdxIconExpand,
  cdxIconLanguage,
  cdxIconStar,
  cdxIconNext,
  cdxIconListBullet
} from '@wikimedia/codex-icons';

// Wikipedia logo - solo el globo
const wikipediaGlobe = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png";

// Audre Lorde photo - versión de mejor calidad
const audreImage = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Audre_Lorde_in_1980.jpg";

// TypeaheadSearch state
const searchResults = ref([]);
const searchFooterUrl = ref('');
const currentSearchTerm = ref('');

// Handle search input
function onSearchInput(value) {
  console.log('Search input:', value);
  
  // Track current search term
  currentSearchTerm.value = value;
  
  // Reset if empty
  if (!value || value === '') {
    searchResults.value = [];
    searchFooterUrl.value = '';
    return;
  }
  
  // Format API response for TypeaheadSearch
  function adaptApiResponse(pages) {
    return pages.map(({ id, key, title, description, thumbnail }) => ({
      label: title,
      value: id,
      description: description,
      url: `https://en.wikipedia.org/wiki/${encodeURIComponent(key)}`,
      thumbnail: thumbnail ? {
        url: thumbnail.url,
        width: thumbnail.width,
        height: thumbnail.height
      } : undefined
    }));
  }
  
  // Fetch search results from Wikipedia API
  fetch(
    `https://en.wikipedia.org/w/rest.php/v1/search/title?q=${encodeURIComponent(value)}&limit=10`
  )
    .then((resp) => resp.json())
    .then((data) => {
      // Verify data is still relevant
      if (currentSearchTerm.value === value) {
        searchResults.value = data.pages && data.pages.length > 0 
          ? adaptApiResponse(data.pages) 
          : [];
        
        searchFooterUrl.value = `https://en.wikipedia.org/w/index.php?title=Special%3ASearch&fulltext=1&search=${encodeURIComponent(value)}`;
      }
    })
    .catch(() => {
      searchResults.value = [];
      searchFooterUrl.value = '';
    });
}

// Handle search result click
function onSearchResultClick(value) {
  console.log('Search result clicked:', value);
}

// Handle search submit
function onSearchSubmit(value) {
  console.log('Search submitted:', value);
}
</script>

<style scoped>
/* Root container */
.read-mode {
  background-color: white;
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.page-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 12px 0;
}

/* ===== HEADER ===== */
.header-section {
  padding: 0 32px;
  width: 100%;
}

.header {
  background-color: rgba(255, 255, 255, 0);
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.menu-button {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 2px;
  padding: 5px 13px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #202122;
}

.menu-button:hover {
  background-color: #f8f9fa;
}

/* Wikipedia Logo */
.wikipedia-logo {
  position: absolute;
  left: 58px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
}

.wikipedia-globe {
  height: 50px;
  width: auto;
}

.wikipedia-text {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.wikipedia-title {
  font-family: 'Linux Libertine', 'Georgia', 'Times', serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: #202122;
  letter-spacing: 0.5px;
}

.wikipedia-tagline {
  font-family: 'Linux Libertine', 'Georgia', 'Times', serif;
  font-size: 12px;
  line-height: 1.2;
  color: #202122;
}

/* Search */
.search-container {
  position: absolute;
  left: 294px;
  right: 538px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}

/* TypeaheadSearch overrides for header integration */
.search-container :deep(.cdx-typeahead-search) {
  width: 100%;
}

.search-container :deep(.cdx-search-input) {
  width: 100%;
}

.search-container :deep(.cdx-text-input__input) {
  font-size: 14px;
  font-family: 'Inter', sans-serif;
}

.search-container :deep(.cdx-search-input__end-button) {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 14px;
}

/* User Tools */
.user-tools {
  position: absolute;
  right: 1.31px;
  top: calc(50% - 0.39px);
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
}

.user-link {
  padding: 0 6px;
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #36c;
  text-decoration: none;
  border-radius: 2px;
}

.user-link:hover {
  text-decoration: underline;
}

.icon-btn {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 2px;
  padding: 5px 7px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #202122;
}

.icon-btn:hover {
  background-color: #f8f9fa;
}

.user-menu-btn {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 2px;
  padding: 6px 8px 6px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  color: #202122;
}

.user-menu-btn:hover {
  background-color: #f8f9fa;
}

/* ===== MAIN CONTENT AREA ===== */
.main-content-area {
  display: flex;
  gap: 24px;
  padding: 0 32px;
  align-items: flex-start;
}

/* ===== TABLE OF CONTENTS (LEFT SIDEBAR) ===== */
.toc-sidebar {
  width: 209px;
  flex-shrink: 0;
  padding-top: 56px;
  border-radius: 2px;
}

@media (max-width: 1119px) {
  .toc-sidebar {
    display: none;
  }
}

.toc-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.toc-header {
  padding: 0 0 6px 20px;
  border-bottom: 1px solid #dadde3;
  display: flex;
  align-items: center;
  gap: 12px;
}

.toc-title {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #202122;
  margin: 0;
}

.toc-toggle {
  background-color: #eaecf0;
  border: none;
  border-radius: 2px;
  padding: 1px 6px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  line-height: 20px;
  color: #202122;
  cursor: pointer;
}

.toc-toggle:hover {
  background-color: #dadde3;
}

.toc-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.toc-item {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  width: 100%;
}

.toc-item-no-chevron {
  padding-left: 26px;
}

.toc-expand {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.toc-expand :deep(.cdx-icon) {
  transition: transform 0.2s ease;
}

.toc-expand-open :deep(.cdx-icon) {
  transform: rotate(90deg);
}

.toc-link {
  flex: 1;
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #36c;
  text-decoration: none;
  border-radius: 2px;
  white-space: pre-wrap;
}

.toc-link:hover {
  text-decoration: underline;
}

.toc-link-bold {
  font-weight: bold;
  color: #202122;
}

.toc-sub-item {
  padding-left: 28px;
  width: 100%;
}

.toc-sub-item .toc-link {
  display: block;
}

/* ===== ARTICLE (CENTER COLUMN) ===== */
.article {
  flex: 1;
  max-width: 910px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Article Chrome (Title + Toolbar) */
.article-chrome {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title-toolbar {
  display: flex;
  flex-direction: column;
}

.article-title-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.title-and-language {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.toc-toggle-btn {
  display: none;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #202122;
  border-radius: 2px;
}

.toc-toggle-btn:hover {
  background-color: #f8f9fa;
}

@media (max-width: 1119px) {
  .toc-toggle-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.article-title {
  flex: 1;
  font-family: 'Source Serif Pro', serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  color: #101418;
  margin: 0;
  white-space: pre-wrap;
}

@media (max-width: 1119px) {
  .title-and-language {
    gap: 8px;
  }
  
  .language-button {
    margin-left: auto;
  }
}

.language-button {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 2px;
  padding: 5px 9px 5px 7px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.language-button:hover {
  background-color: #f8f9fa;
}

.language-button :deep(.cdx-icon) {
  color: #36c;
}

.language-text {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #36c;
}

.title-divider {
  height: 1px;
  background-color: #a2a9b1;
  width: 100%;
}

/* Toolbar */
.toolbar {
  display: flex;
  flex-direction: column;
}

.tabs {
  height: 43px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.tabs-start,
.tabs-end {
  display: flex;
  gap: 16px;
  align-items: flex-end;
}

.tabs-end {
  margin-right: -6px;
}

.tools-toggle-btn {
  display: none;
  background: none;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  color: #202122;
  border-radius: 2px;
  gap: 4px;
  align-items: center;
}

.tools-toggle-btn:hover {
  background-color: #f8f9fa;
}

.tools-toggle-text {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #202122;
}

@media (max-width: 1119px) {
  .tools-toggle-btn {
    display: flex;
  }
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 16px 0 8px;
  background: none;
  border: none;
  cursor: pointer;
}

.tab-text {
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #202122;
  text-align: center;
  white-space: nowrap;
}

.tab-link {
  color: #36c;
  cursor: pointer;
}

.tab-link:hover {
  text-decoration: underline;
}

.tab-selected .tab-text {
  color: #202122;
}

.tab-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #202122;
}

.tab-icon-btn {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 2px;
  padding: 5px 13px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #202122;
  margin-bottom: 4px;
}

.tab-icon-btn:hover {
  background-color: #f8f9fa;
}

.toolbar-divider {
  height: 1px;
  background-color: #c8ccd1;
  width: 100%;
}

.article-tagline {
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 12.4px;
  line-height: 17.3px;
  color: #101418;
  margin: 0;
}

/* Article Content */
.article-content-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.article-ve-contents {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.article-content-grid {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

/* Article Text */
.article-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.intro-text,
.body-text {
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #202122;
}

.intro-text p,
.body-text p {
  margin: 0;
  line-height: 22px;
}

.intro-text strong,
.body-text strong {
  font-weight: bold;
}

.intro-text a,
.body-text a {
  color: #36c;
  text-decoration: none;
}

.intro-text a:hover,
.body-text a:hover {
  text-decoration: underline;
}

/* Section Heading */
.section-heading {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.heading-text {
  font-family: 'Georgia', serif;
  font-weight: 400;
  font-size: 21px;
  line-height: 27.3px;
  color: #202122;
  margin: 0;
  white-space: pre-wrap;
}

.heading-divider {
  height: 1px;
  background-color: #a2a9b1;
  width: 100%;
}

/* Infobox */
.infobox {
  width: 272px;
  flex-shrink: 0;
  background-color: #eaecf0;
  border: 1px solid #c8ccd1;
  border-radius: 2px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.infobox-title {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #202122;
  text-align: center;
}

.infobox-image-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}

.infobox-image {
  width: 100%;
  height: 330px;
  overflow: hidden;
}

.infobox-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}

.infobox-caption {
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #202122;
  text-align: center;
  padding: 4px;
  white-space: pre-wrap;
}

.infobox-row {
  display: flex;
  gap: 8px;
  font-size: 12px;
}

.infobox-row-faded {
  opacity: 0.8;
}

.infobox-label {
  width: 64px;
  flex-shrink: 0;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  line-height: 20px;
  color: #202122;
  white-space: pre-wrap;
}

.infobox-value {
  flex: 1;
  min-width: 0;
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  line-height: 20px;
  color: #202122;
  white-space: nowrap;
}

.infobox-value-link {
  line-height: 20px;
  white-space: pre-wrap;
}

.infobox-value a {
  color: #36c;
  text-decoration: none;
}

.infobox-value a:hover {
  text-decoration: underline;
}

/* Additional Paragraphs */
.additional-paragraphs {
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #202122;
  white-space: pre-wrap;
}

.additional-paragraphs p {
  margin: 0 0 16px 0;
  line-height: 22px;
}

.additional-paragraphs p:last-child {
  margin-bottom: 0;
}

.additional-paragraphs a {
  color: #36c;
  text-decoration: none;
}

.additional-paragraphs a:hover {
  text-decoration: underline;
}

/* ===== TOOLS SIDEBAR (RIGHT) ===== */
.tools-sidebar {
  width: 208px;
  flex-shrink: 0;
  padding-top: 56px;
  border-radius: 2px;
}

@media (max-width: 1119px) {
  .tools-sidebar {
    display: none;
  }
}

.tools-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tools-header {
  padding-bottom: 6px;
  border-bottom: 1px solid #dadde3;
  display: flex;
  align-items: center;
  gap: 12px;
}

.tools-title {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #202122;
  margin: 0;
}

.tools-toggle {
  background-color: #eaecf0;
  border: none;
  border-radius: 2px;
  padding: 1px 6px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  line-height: 20px;
  color: #202122;
  cursor: pointer;
}

.tools-toggle:hover {
  background-color: #dadde3;
}

.tools-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 6px;
  border-bottom: 1px solid #dadde3;
}

.tools-section:last-child {
  border-bottom: none;
}

.tools-section-title {
  padding: 6px 0;
  border-bottom: 1px solid #dadde3;
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #54595d;
  width: 194px;
  white-space: pre-wrap;
}

.tools-nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tools-link {
  flex: 1;
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #36c;
  text-decoration: none;
  border-radius: 2px;
  white-space: pre-wrap;
  display: block;
}

.tools-link:hover {
  text-decoration: underline;
}
</style>

