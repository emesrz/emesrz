import { useState, useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { DocContent } from './components/DocContent'
import { docData } from './data/docs'
import './App.css'

function App() {
  const [currentDoc, setCurrentDoc] = useState('intro')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // 关闭侧边栏当窗口变大时
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const currentDocData = docData.find(doc => doc.id === currentDoc) || docData[0]

  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航 */}
      <Header 
        onMenuClick={() => setSidebarOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <div className="flex pt-14">
        {/* 侧边栏 */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          currentDoc={currentDoc}
          onDocChange={setCurrentDoc}
          searchQuery={searchQuery}
        />
        
        {/* 主内容区 */}
        <main className="flex-1 lg:ml-64">
          <DocContent doc={currentDocData} />
        </main>
      </div>
    </div>
  )
}

export default App
