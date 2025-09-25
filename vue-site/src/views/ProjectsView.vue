<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { getProjects } from '../data/projects'
import { ElButton } from 'element-plus'
import { VideoPlay, VideoPause } from '@element-plus/icons-vue'
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

// 视频播放控制
const isVideoPlaying = ref(false)
const mainVideo = ref(null)
const videoSrc = new URL('../assets/movies/test1.mp4', import.meta.url).href

// 打开图片模态框
const openImageModal = (imageSrc) => {
  currentImage.value = imageSrc
  imageModalVisible.value = true
}

// 切换视频播放状态
const toggleVideo = () => {
  if (mainVideo.value) {
    const video = mainVideo.value
    try {
      if (video.paused) {
        const p = video.play()
        if (p && typeof p.then === 'function') {
          p.then(() => { isVideoPlaying.value = true }).catch((e) => {
            console.error('视频播放失败:', e)
          })
        } else {
          isVideoPlaying.value = true
        }
      } else {
        video.pause()
        isVideoPlaying.value = false
      }
    } catch (e) {
      console.error('切换播放状态出错:', e)
    }
  }
}

// 视频播放结束
const onVideoEnded = () => {
  isVideoPlaying.value = false
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
      <!-- A容器 - 项目列表 -->
      <section class="a-container">
        <div class="container-header">
          <h2>Vivid -- 项目名称</h2>
        </div>
      </section>
      <!-- B容器 - 引用图片展示区 -->
      <section class="b-container">
        <div class="container-header">
          <h2>标题 -- 短视频滑动区</h2>
        </div>
        <div class="container-content">
          <el-carousel 
            :interval="4000" 
            type="card" 
            height="579px"
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
          <h2>标题 -- 主链路完整系统功能介绍</h2>
        </div>
        <div class="container-content">
          <div class="content-layout">
            <div class="container-content-description">
              <p>这里是系统功能介绍，这里是系统功能介绍，这里是系统功能介绍，这里是系统功能介绍，这里是系统功能介绍。这里是系统功能介绍，这里是系统功能介绍，这里是系统功能介绍，这里是系统功能介绍，这里是系统功能介绍。</p>
            </div>
            <div class="container-content-video">
              <div class="video-wrapper">
                <video 
                  ref="mainVideo"
                  :src="videoSrc"
                  playsinline
                  @click="toggleVideo"
                  @ended="onVideoEnded"
                ></video>
                <el-button
                  class="custom-play-button"
                  type="primary"
                  circle
                  @click.stop="toggleVideo"
                >
                  <el-icon :size="56">
                    <component :is="isVideoPlaying ? VideoPause : VideoPlay" />
                  </el-icon>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    
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


// 主容器样式
.main-container {
  flex: 1;
  max-width: 100%;
  margin: 0 auto;
  // padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 90px;
}

.a-container{
  width:100%;
  height: 620px;
  padding: 0 0 0 0;
  background: #fff;
  .container-header{
    padding: 0 0 0 0;
    background: none;
  }
}
.b-container{
  width:100%;
  height: auto;
  padding: 0 0 0 0;
  background: #fff;
  .container-header{
    padding: 0 0 0 0;
    background: none;
  }
}

.c-container{
  width:100%;
  height: auto;
  padding: 0 0 0 0;
  background: #fff;
  
  .container-header{
    padding: 0 0 0 0;
    background: none;
  }
  
  .container-content {
    height: 100%;
    padding: 0;
  }
  
  .content-layout {
    display: flex;
    height: 100%;
    align-items: center;
  }
  
  .container-content-description{
    flex: 4;
    padding: 55px 100px 88px 133px;
    
    p {
      font-size: 16px;
      line-height: 32px;
      color: #333;
      margin: 0;
      text-align: justify;
    }
  }
  
  .container-content-video {
    flex: 6;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .video-wrapper {
    position: relative;
    width: 100%;
    height: 527px;
    
    video {
      width: 100%;
      height: 100%;
      max-width: 100%;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      background: #000;
      cursor: pointer;
    }
  }
  
  .custom-play-button {
    position: absolute;
    top: 30px;
    right: 40px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    // background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    --el-button-bg-color: transparent;
    --el-button-hover-bg-color: transparent;
    --el-button-active-bg-color: transparent;
    --el-button-border-color: transparent;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;
    
    &:hover {
      background: transparent;
      transform: scale(1.05);
    }
    
    // .el-icon {
    //   font-size: 22px;
    // }
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
  .main-container {
    padding: 20px 15px;
    gap: 30px;
  }
  
  .a-container,
  .b-container,
  .c-container {
    height: auto;
    min-height: 400px;
  }
  
  .c-container {
    .content-layout {
      flex-direction: column;
      height: auto;
    }
    
    .container-content-description {
      flex: none;
      padding: 30px 20px;
      width: 100%;
    }
    
    .container-content-video {
      flex: none;
      padding: 20px;
      width: 100%;
      
      video {
        height: 250px;
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