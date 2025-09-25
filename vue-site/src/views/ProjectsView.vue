<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { getProjects } from '../data/projects'

const projects = ref([])
const moreProjects = ref([])

// 引用图片列表 - 使用动态导入
const citationImages = ref([
  new URL('../assets/images/citations/2410_06765.jpg', import.meta.url).href,
  new URL('../assets/images/citations/2410_06554.png', import.meta.url).href,
  new URL('../assets/images/citations/2410_04691.jpg', import.meta.url).href,
  new URL('../assets/images/citations/2407_17011.png', import.meta.url).href,
  new URL('../assets/images/citations/2406_18134.jpg', import.meta.url).href,
  new URL('../assets/images/citations/2404_14122.png', import.meta.url).href,
  new URL('../assets/images/citations/2309_16289.jpg', import.meta.url).href
])

// 图片模态框
const imageModalVisible = ref(false)
const currentImage = ref('')

// 打开图片模态框
const openImageModal = (imageSrc) => {
  currentImage.value = imageSrc
  imageModalVisible.value = true
}

onMounted(async () => {
  const allProjects = await getProjects()
  projects.value = allProjects.filter(p => p.group !== 'more')
  moreProjects.value = allProjects.filter(p => p.group === 'more')
})
</script>
<template>
  <div class="projects-page">

    <!-- 主容器 -->
    <main class="main-container">
            <!-- B容器 - 项目列表 -->
      <section class="b-container">
        <div class="container-header">
          <h2>项目列表</h2>
          <p>我们的研究项目和创新成果</p>
        </div>
        <div class="container-content">
          <div class="projects-grid">
            <div 
              v-for="project in projects" 
              :key="project.id" 
              class="project-card"
            >
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag" 
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- A容器 - 引用图片展示区 -->
      <section class="a-container">
        <div class="container-header">
          <h2>研究引用展示</h2>
          <p>我们的研究成果和学术引用</p>
        </div>
        <div class="container-content">
          <el-carousel 
            :interval="4000" 
            type="card" 
            height="400px"
            indicator-position="outside"
            arrow="hover"
          >
            <el-carousel-item
              v-for="(img, idx) in citationImages"
              :key="img"
            >
              <div class="citation-image-container">
                <img 
                  :src="img" 
                  class="citation-image" 
                  :alt="'引用图片'+(idx+1)"
                  @click="openImageModal(img)"
                />
                <div class="image-overlay">
                  <span class="image-title">引用图片 {{ idx + 1 }}</span>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </section>



      <!-- C容器 - 额外内容区 -->
      <section class="c-container">
        <div class="container-header">
          <h2>更多信息</h2>
          <p>了解更多关于我们的研究</p>
        </div>
        <div class="container-content">
          <div class="info-cards">
            <div class="info-card">
              <div class="card-icon">
                <el-icon size="2rem"><Document /></el-icon>
              </div>
              <h3>学术论文</h3>
              <p>查看我们发表的最新学术论文和研究成果</p>
            </div>
            <div class="info-card">
              <div class="card-icon">
                <el-icon size="2rem"><Trophy /></el-icon>
              </div>
              <h3>获奖情况</h3>
              <p>了解我们在各个领域获得的奖项和荣誉</p>
            </div>
            <div class="info-card">
              <div class="card-icon">
                <el-icon size="2rem"><Connection /></el-icon>
              </div>
              <h3>合作交流</h3>
              <p>与国内外知名机构和企业建立合作关系</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 页脚 -->
    <!-- <footer class="page-footer">
      <div class="footer-content">
        <p>&copy; 2025 EIT-NLP 课题组. 保留所有权利.</p>
        <div class="footer-links">
          <a href="/sys/">首页</a>
          <a href="/sys/research">研究</a>
          <a href="/sys/team">团队</a>
          <a href="/sys/hiring">招聘</a>
          <a href="/sys/projects">项目</a>
        </div>
      </div>
    </footer> -->
    
    <!-- 图片模态框 -->
    <el-dialog
      v-model="imageModalVisible"
      title="引用图片详情"
      width="80%"
      center
    >
      <div class="modal-image-container">
        <img 
          :src="currentImage" 
          class="modal-image" 
          alt="引用图片详情"
        />
      </div>
    </el-dialog>
  </div>
</template>



<style scoped lang="scss">
.projects-page {
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
}

// 页眉样式
.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px 60px;
  text-align: center;
  
  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-family: "PingFang SC", sans-serif;
      font-weight: 600;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    p {
      font-size: 1.3rem;
      margin: 0;
      opacity: 0.9;
    }
  }
}

// 主容器样式
.main-container {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

// 通用容器样式
.a-container,
.b-container,
.c-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
}

// 容器头部样式
.container-header {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 30px;
  border-bottom: 1px solid #e9ecef;
  
  h2 {
    font-size: 1.8rem;
    color: #1D1D1F;
    margin-bottom: 0.5rem;
    font-family: "PingFang SC", sans-serif;
    font-weight: 600;
  }
  
  p {
    color: #666;
    margin: 0;
    font-size: 1rem;
  }
}

// 容器内容样式
.container-content {
  padding: 30px;
}

// 页脚样式
.page-footer {
  background: #2c3e50;
  color: white;
  padding: 40px 20px;
  margin-top: auto;
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    
    p {
      margin: 0;
      opacity: 0.8;
    }
    
    .footer-links {
      display: flex;
      gap: 30px;
      
      a {
        color: white;
        text-decoration: none;
        opacity: 0.8;
        transition: opacity 0.3s ease;
        
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}

// C容器 - 信息卡片样式
.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.info-card {
  text-align: center;
  padding: 30px 20px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e9ecef;
    transform: translateY(-5px);
  }
  
  .card-icon {
    color: var(--primary);
    margin-bottom: 20px;
  }
  
  h3 {
    font-size: 1.3rem;
    color: #1D1D1F;
    margin-bottom: 15px;
    font-family: "PingFang SC", sans-serif;
  }
  
  p {
    color: #666;
    line-height: 1.6;
    margin: 0;
  }
}

.citation-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    
    .image-overlay {
      opacity: 1;
    }
  }
}

.citation-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 20px;
  opacity: 0;
  transition: all 0.3s ease;
}

.image-title {
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "PingFang SC", sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.modal-image-container {
  text-align: center;
  
  .modal-image {
    max-width: 100%;
    max-height: 70vh;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
}

.projects-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 12px;
  margin-top: 40px;
  
  h2 {
    font-size: 1.8rem;
    color: #1D1D1F;
    margin-bottom: 2rem;
    text-align: center;
    font-family: "PingFang SC", sans-serif;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-color: var(--primary);
  }
  
  h3 {
    font-size: 1.3rem;
    color: var(--primary);
    margin-bottom: 1rem;
    font-family: "PingFang SC", sans-serif;
  }
  
  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  .tag {
    background: var(--primary);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }
}

// 响应式设计
@media (max-width: 768px) {
  .page-header {
    padding: 60px 15px 40px;
    
    .header-content {
      h1 {
        font-size: 2.2rem;
      }
      
      p {
        font-size: 1.1rem;
      }
    }
  }
  
  .main-container {
    padding: 20px 15px;
    gap: 30px;
  }
  
  .container-header {
    padding: 20px;
    
    h2 {
      font-size: 1.5rem;
    }
  }
  
  .container-content {
    padding: 20px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-card {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.2rem;
    }
  }
  
  .info-cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .page-footer {
    padding: 30px 15px;
    
    .footer-content {
      flex-direction: column;
      text-align: center;
      gap: 15px;
      
      .footer-links {
        gap: 20px;
      }
    }
  }
}

@media (max-width: 480px) {
  .page-header {
    padding: 40px 10px 30px;
    
    .header-content {
      h1 {
        font-size: 1.8rem;
      }
      
      p {
        font-size: 1rem;
      }
    }
  }
  
  .main-container {
    padding: 15px 10px;
    gap: 20px;
  }
  
  .container-header {
    padding: 15px;
    
    h2 {
      font-size: 1.3rem;
    }
  }
  
  .container-content {
    padding: 15px;
  }
}
</style>