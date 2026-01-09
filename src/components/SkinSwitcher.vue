<template>
  <div class="skin-switcher">
    <button 
      class="skin-switcher__button"
      @click="toggleSkin"
      :title="currentSkin === 'desktop' ? 'Switch to Mobile (Minerva)' : 'Switch to Desktop (Vector)'"
    >
      <span class="skin-switcher__label">{{ currentSkin === 'desktop' ? 'Mobile' : 'Desktop' }}</span>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  currentSkin: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['switch-skin'])

const toggleSkin = () => {
  emit('switch-skin', props.currentSkin === 'desktop' ? 'mobile' : 'desktop')
}
</script>

<style scoped>
.skin-switcher {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

.skin-switcher:hover {
  opacity: 1;
}

.skin-switcher__button {
  display: flex;
  align-items: center;
  padding: 6px 10px;
  background-color: rgba(255, 255, 255, 0.95);
  border: 1px solid #c8ccd1;
  border-radius: 2px;
  color: #54595d;
  font-size: 11px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}

.skin-switcher__button:hover {
  background-color: #ffffff;
  border-color: #a2a9b1;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12);
  color: #202122;
}

.skin-switcher__button:active {
  background-color: #f8f9fa;
  transform: translateY(1px);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
}

.skin-switcher__label {
  line-height: 1;
  letter-spacing: 0.02em;
}
</style>

