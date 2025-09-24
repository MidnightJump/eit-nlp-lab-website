<template>
  <div class="projects-page">
    <h1>项目</h1>
    
    <div class="projects-grid">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id" 
        :project="project"
      />
    </div>
    
    <section v-if="moreProjects.length > 0" class="more-projects">
      <h2>更多项目</h2>
      <div class="projects-grid">
        <ProjectCard 
          v-for="project in moreProjects" 
          :key="project.id" 
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { getProjects } from '../data/projects'

const projects = ref([])
const moreProjects = ref([])

onMounted(async () => {
  const allProjects = await getProjects()
  projects.value = allProjects.filter(p => p.group !== 'more')
  moreProjects.value = allProjects.filter(p => p.group === 'more')
})
</script>

<style scoped lang="scss">
.projects-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin: 3rem 0 2rem;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.more-projects {
  margin-top: 4rem;
}
</style>