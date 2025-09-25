<template>
  <div class="citation-container">
    <div class="citation">
      <div class="citation-text">
        <i class="icon fa-solid fa-scroll"></i>
        
        <a 
          v-if="citation.link" 
          :href="citation.link" 
          class="citation-title"
          target="_blank"
        >
          {{ citation.title }}
        </a>
        <span v-else class="citation-title">{{ citation.title }}</span>
        
        <div class="citation-authors" tabindex="0">
          {{ citation.authors.join(', ') }}
        </div>
        
        <div class="citation-details">
          <span v-if="citation.publisher" class="citation-publisher">{{ citation.publisher }}</span>
          <span v-if="citation.publisher && citation.date">&nbsp;·&nbsp;</span>
          <span v-if="citation.date" class="citation-date">{{ citation.date }}</span>
          <span v-if="citation.link && citation.link.includes('arxiv')">&nbsp;·&nbsp;</span>
          <span v-if="citation.link && citation.link.includes('arxiv')" class="citation-id">arxiv:{{ citation.link.split('/').pop() }}</span>
          <span v-if="!citation.link || !citation.link.includes('arxiv')">&nbsp;·&nbsp;</span>
          <span v-if="!citation.link || !citation.link.includes('arxiv')" class="citation-id">/</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  citation: {
    type: Object,
    required: true
  },
  style: {
    type: String,
    default: 'basic'
  }
})
</script>

<style scoped lang="scss">
// 样式已移至 HomeView.vue 中的 .news-section 配置
// 这里只保留组件的基本结构样式
</style>