<template>
  <div class="citation" :class="{ 'rich-style': style === 'rich' }">
    <div class="citation-content">
      <div class="citation-title">
        <a v-if="citation.link" :href="citation.link" target="_blank">
          {{ citation.title }}
        </a>
        <span v-else>{{ citation.title }}</span>
      </div>
      
      <div class="citation-authors">
        {{ citation.authors.join(', ') }}
      </div>
      
      <div class="citation-details">
        <span v-if="citation.publisher">{{ citation.publisher }}</span>
        <span v-if="citation.date">({{ citation.date }})</span>
      </div>
      
      <div v-if="citation.tags && citation.tags.length" class="citation-tags">
        <span 
          v-for="tag in citation.tags" 
          :key="tag"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>
      
      <div v-if="citation.buttons && citation.buttons.length" class="citation-buttons">
        <a 
          v-for="button in citation.buttons" 
          :key="button.name"
          :href="button.link"
          target="_blank"
          class="citation-button"
        >
          <i :class="button.icon"></i> {{ button.name }}
        </a>
      </div>
    </div>
    
    <div v-if="citation.image && style === 'rich'" class="citation-image">
      <img :src="citation.image" :alt="citation.title">
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
.citation {
  padding: 1.5rem;
  background: var(--background-alt);
  border-radius: var(--rounded);
  transition: var(--transition);
  
  &:hover {
    box-shadow: var(--shadow);
  }
  
  &.rich-style {
    display: flex;
    gap: 2rem;
    
    .citation-content {
      flex: 1;
    }
    
    .citation-image {
      width: 150px;
      flex-shrink: 0;
      
      img {
        width: 100%;
        height: auto;
        border-radius: var(--rounded);
      }
    }
  }
}

.citation-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  
  a {
    color: var(--primary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}

.citation-authors {
  color: var(--text-light);
  margin-bottom: 0.5rem;
}

.citation-details {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 0.5rem;
  
  span {
    margin-right: 0.5rem;
  }
}

.citation-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}

.tag {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  background: var(--background);
  border-radius: var(--rounded);
  font-size: 0.8rem;
  color: var(--text-light);
}

.citation-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.citation-button {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem 1rem;
  background: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: var(--rounded);
  font-size: 0.9rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }
}
</style>