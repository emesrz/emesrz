import { Menu, Search, BookOpen, Github, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface HeaderProps {
  onMenuClick: () => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function Header({ onMenuClick, searchQuery, onSearchChange }: HeaderProps) {
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 h-14",
      "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      "border-b border-border",
      "transition-shadow duration-200",
      isScrolled && "shadow-sm"
    )}>
      <div className="h-full flex items-center justify-between px-4 lg:px-6">
        {/* 左侧：菜单按钮 + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="打开菜单"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline">文档中心</span>
          </a>
        </div>

        {/* 中间：搜索框 */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索文档..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className={cn(
                "w-full h-9 pl-9 pr-4 rounded-lg",
                "bg-accent/50 border border-transparent",
                "focus:bg-background focus:border-input focus:outline-none focus:ring-2 focus:ring-ring/20",
                "text-sm placeholder:text-muted-foreground",
                "transition-all duration-200"
              )}
            />
          </div>
        </div>

        {/* 右侧：工具按钮 */}
        <div className="flex items-center gap-1">
          {/* 主题切换 */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label={isDark ? '切换到亮色模式' : '切换到暗色模式'}
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* GitHub 链接 */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  )
}
