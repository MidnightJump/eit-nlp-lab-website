// Papers data from EIT-NLP lab website
// Based on https://nlp.idt.eitech.edu.cn:368/

export const papers = [
  {
    id: 1,
    title: "MultiConIR: Towards Multi-Condition Information Retrieval",
    authors: ["Xuan Lu", "Sifan Liu", "Bochao Yin", "Yongqi Li", "Xinghao Chen", "Hui Su", "Yaohui Jin", "Wenjun Zeng", "Xiaoyu Shen"],
    publisher: "EMNLP 2025 Findings",
    date: "04 Sep 2025",
    link: "https://arxiv.org/abs/2503.08046v3",
    tags: ["Information Retrieval", "Multi-Condition"],
    buttons: [
      { name: "Paper", link: "https://arxiv.org/abs/2503.08046v3", icon: "fas fa-file-pdf" }
    ],
    group: "featured"
  },
  {
    id: 2,
    title: "Multimodal Language Models See Better When They Look Shallower",
    authors: ["Haoran Chen", "Junyan Lin", "Xinhao Chen", "Yue Fan", "Xin Jin", "Hui Su", "Jianfeng Dong", "Jinlan Fu", "Xiaoyu Shen"],
    publisher: "EMNLP 2025",
    date: "30 Apr 2025",
    link: "https://arxiv.org/abs/2504.21447",
    tags: ["Multimodal", "Language Models", "Vision"],
    buttons: [
      { name: "Paper", link: "https://arxiv.org/abs/2504.21447", icon: "fas fa-file-pdf" }
    ],
    group: "featured"
  },
  {
    id: 3,
    title: "VisiPruner: Decoding Discontinuous Cross-Modal Dynamics for Efficient Multimodal LLMs",
    authors: ["Yingqi Fan", "Anhao Zhao", "Jinlan Fu", "Junlong Tong", "Hui Su", "Yijie Pan", "Wei Zhang", "Xiaoyu Shen"],
    publisher: "EMNLP 2025",
    date: "04 Sep 2025",
    link: "",
    tags: ["Multimodal", "LLMs", "Efficiency"],
    buttons: [],
    group: "featured"
  },
  {
    id: 4,
    title: "PricingLogic: Evaluating LLMs Reasoning on Complex Tourism Pricing Tasks",
    authors: ["Yunuo Liu", "Zena Al Khalili", "Dawei Zhu", "Yanjun Chen", "Dietriech Klakow", "Xiaoyu Shen"],
    publisher: "EMNLP 2025",
    date: "04 Sep 2025",
    link: "",
    tags: ["LLMs", "Reasoning", "Tourism"],
    buttons: [],
    group: "featured"
  },
  {
    id: 5,
    title: "Auto-SLURP: A Benchmark Dataset for Evaluating Multi-Agent Frameworks in Smart Personal Assistant",
    authors: ["Lei Shen", "Xiaoyu Shen"],
    publisher: "EMNLP 2025 Findings",
    date: "25 Apr 2025",
    link: "https://arxiv.org/abs/2504.18373",
    tags: ["Multi-Agent", "Benchmark", "Personal Assistant"],
    buttons: [
      { name: "Paper", link: "https://arxiv.org/abs/2504.18373", icon: "fas fa-file-pdf" }
    ],
    group: "featured"
  },
  {
    id: 6,
    title: "Context Guided Transformer Entropy Modeling for Video Compression",
    authors: ["Junlong Tong", "Wei Zhang", "Yaohui Jin", "Xiaoyu Shen"],
    publisher: "ICCV 2025",
    date: "03 Aug 2025",
    link: "https://arxiv.org/abs/2508.01852",
    tags: ["Transformer", "Video Compression", "Entropy Modeling"],
    buttons: [
      { name: "Paper", link: "https://arxiv.org/abs/2508.01852", icon: "fas fa-file-pdf" }
    ],
    group: "featured"
  },
  {
    id: 7,
    title: "LLM as Effective Streaming Processor: Bridging Streaming-Batch Mismatches with Group Position Encoding",
    authors: ["Junlong Tong", "Jinlan Fu", "Zixuan Lin", "Yingqi Fan", "Anhao Zhao", "Hui Su", "Xiaoyu Shen"],
    publisher: "EMNLP 2025 Findings",
    date: "29 May 2025",
    link: "https://arxiv.org/abs/2505.16983",
    tags: ["LLMs", "Streaming", "Position Encoding"],
    buttons: [
      { name: "Paper", link: "https://arxiv.org/abs/2505.16983", icon: "fas fa-file-pdf" }
    ],
    group: "featured"
  },
  {
    id: 8,
    title: "SkipGPT: Each Token is One of a Kind",
    authors: ["Anhao Zhao", "Fanghua Ye", "Yingqi Fan", "Junlong Tong", "Zhiwei Fei", "Hui Su", "Xiaoyu Shen"],
    publisher: "ICML 2025",
    date: "04 Jan 2025",
    link: "https://arxiv.org/abs/2506.04179",
    tags: ["GPT", "Token", "Efficiency"],
    buttons: [
      { name: "Paper", link: "https://arxiv.org/abs/2506.04179", icon: "fas fa-file-pdf" }
    ],
    group: "featured"
  },
  {
    id: 9,
    title: "Scaling Under-Resourced TTS: A Data-Optimized Framework with Advanced Acoustic Modeling for Thai",
    authors: ["Yizhong Geng", "Jizhuo Xu", "Zeyu Liang", "Jinghan Yang", "Xiaoyi Shi", "Xiaoyu Shen"],
    publisher: "ACL 2025 (Industry Track)",
    date: "10 Apr 2025",
    link: "https://arxiv.org/abs/2504.07858",
    tags: ["TTS", "Thai", "Acoustic Modeling"],
    buttons: [
      { name: "Paper", link: "https://arxiv.org/abs/2504.07858", icon: "fas fa-file-pdf" }
    ],
    group: "featured"
  },
  {
    id: 10,
    title: "Unveiling the Key Factors for Distilling Chain-of-Thought Reasoning",
    authors: ["Xinghao Chen", "Zhijing Sun", "Wenjin Guo", "Miaoran Zhang", "Yanjun Chen", "Hui Su", "Yijie Pan", "Dietrich Klakow", "Wenjie Li", "Xiaoyu Shen"],
    publisher: "ACL 2025 Findings",
    date: "27 May 2025",
    link: "https://arxiv.org/abs/2502.18001",
    tags: ["Chain-of-Thought", "Reasoning", "Distillation"],
    buttons: [
      { name: "Paper", link: "https://arxiv.org/abs/2502.18001", icon: "fas fa-file-pdf" }
    ],
    group: "featured"
  },
  {
    id: 11,
    title: "Multi-Layer Visual Feature Fusion in Multimodal LLMs: Methods, Analysis, and Best Practices",
    authors: ["Junyan Lin", "Haoran Chen", "Yue Fan", "Yingqi Fan", "Xin Jin", "Hui Su", "Jinlan Fu", "Xiaoyu Shen"],
    publisher: "CVPR 2025",
    date: "08 Mar 2025",
    link: "https://arxiv.org/abs/2503.06063",
    tags: ["Multimodal", "LLMs", "Visual Features"],
    buttons: [
      { name: "Paper", link: "https://arxiv.org/abs/2503.06063", icon: "fas fa-file-pdf" }
    ],
    group: "featured"
  },
  {
    id: 12,
    title: "Beyond Content Relevance: Evaluating Instruction Following in Retrieval Models",
    authors: ["Jianqun Zhou", "Yuanlei Zheng", "Wei Chen", "Qianqian Zheng", "Hui Su", "Wei Zhang", "Rui Meng", "Xiaoyu Shen"],
    publisher: "ICLR 2025",
    date: "05 Mar 2025",
    link: "https://arxiv.org/abs/2410.23841",
    tags: ["Retrieval", "Instruction Following", "Evaluation"],
    buttons: [
      { name: "Paper", link: "https://arxiv.org/abs/2410.23841", icon: "fas fa-file-pdf" }
    ],
    group: "featured"
  }
]

export async function getAllPapers() {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(papers)
    }, 500)
  })
}

export async function getFeaturedPapers() {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(papers.filter(p => p.group === "featured"))
    }, 500)
  })
}