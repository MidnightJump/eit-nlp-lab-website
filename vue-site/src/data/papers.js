// Mock papers data
// In a real application, this would fetch from an API or load from JSON files

export const papers = [
  {
    id: 1,
    title: "Deep Learning for Natural Language Processing: A Survey",
    authors: ["Xiaoyu Shen", "Jane Doe", "John Smith"],
    publisher: "ACL 2024",
    date: "2024",
    link: "https://example.com/paper1",
    tags: ["NLP", "Deep Learning", "Survey"],
    buttons: [
      { name: "Paper", link: "https://example.com/paper1.pdf", icon: "fas fa-file-pdf" },
      { name: "Code", link: "https://github.com/eit-nlp/example", icon: "fab fa-github" }
    ],
    group: "featured"
  },
  {
    id: 2,
    title: "Efficient Transformer Models for Resource-Constrained Environments",
    authors: ["John Smith", "Xiaoyu Shen"],
    publisher: "EMNLP 2024",
    date: "2024",
    link: "https://example.com/paper2",
    tags: ["Transformer", "Efficiency", "NLP"],
    buttons: [
      { name: "Paper", link: "https://example.com/paper2.pdf", icon: "fas fa-file-pdf" }
    ],
    group: "featured"
  },
  {
    id: 3,
    title: "Multi-modal Learning for Vision and Language Understanding",
    authors: ["Jane Doe", "Xiaoyu Shen", "Alice Johnson"],
    publisher: "ICML 2023",
    date: "2023",
    link: "https://example.com/paper3",
    tags: ["Multi-modal", "Vision", "Language"],
    buttons: [
      { name: "Paper", link: "https://example.com/paper3.pdf", icon: "fas fa-file-pdf" },
      { name: "Dataset", link: "https://example.com/dataset", icon: "fas fa-database" }
    ]
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