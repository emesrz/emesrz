import { X, ChevronRight, BookOpen } from 'lucide-react'
import { docCategories } from '../data/docs'
import { cn } from '@/lib/utils'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  currentDoc: string
  onDocChange: (docId: string) => void
  searchQuery: string
}

export function Sidebar({ isOpen, onClose, currentDoc, onDocChange, searchQuery }: SidebarProps) {
  // 根据搜索过滤文档
  const filteredCategories = searchQuery
    ? docCategories.map(cat => ({
        ...cat,
        items: cat.items.filter(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(cat => cat.items.length > 0)
    : docCategories

  const handleDocClick = (docId: string) => {
    onDocChange(docId)
    onClose()
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* 移动端遮罩 */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* 侧边栏 */}
      <aside className={cn(
        "fixed left-0 top-14 bottom-0 w-64 bg-card border-r border-border",
        "overflow-y-auto z-50 transition-transform duration-300 ease-in-out",
        "lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* 移动端关闭按钮 */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="font-semibold">文档中心</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* 导航内容 */}
        <nav className="p-4">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>未找到匹配的文档</p>
            </div>
          ) : (
            filteredCategories.map((category) => (
              <div key={category.id} className="mb-6">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                  {category.title}
                </h3>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleDocClick(item.id)}
                        className={cn(
                          "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200",
                          "hover:bg-accent hover:text-accent-foreground",
                          currentDoc === item.id
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-foreground/80"
                        )}
                      >
                        <ChevronRight className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          currentDoc === item.id && "rotate-90"
                        )} />
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </nav>
        
        {/* 底部信息 */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-card">
          <p className="text-xs text-muted-foreground text-center">
            文档中心 v2.0.0
          </p>
        </div>
      </aside>
    </>
  )
}
