<template>
  <div class="research-page">
    <h1>我们的研究</h1>
    
    <div class="papers-list">
      <Citation 
        v-for="paper in papers" 
        :key="paper.id" 
        :citation="paper"
        :style="'rich'"
      />
    </div>
    
    <div v-if="loading" class="loading">
      <i class="fas fa-spinner fa-spin"></i> 加载中...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Citation from '../components/Citation.vue'
import { getAllPapers } from '../data/papers'

const papers = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    papers.value = await getAllPapers()
  } catch (error) {
    console.error('Failed to load papers:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped lang="scss">
.research-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
}

.papers-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.loading {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: var(--text-light);
}
</style>