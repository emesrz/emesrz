import { useEffect, useRef } from 'react'
import type { DocSection } from '../data/docs'
import { cn } from '@/lib/utils'

interface DocContentProps {
  doc: DocSection
}

export function DocContent({ doc }: DocContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  // 当文档切换时滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [doc.id])

  // 简单的 Markdown 渲染
  const renderMarkdown = (content: string) => {
    return content
      // 代码块
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-muted rounded-lg p-4 overflow-x-auto my-4"><code>$2</code></pre>')
      // 行内代码
      .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
      // 标题
      .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mb-6 mt-2">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-semibold mb-4 mt-8 pb-2 border-b border-border">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mb-3 mt-6">$1</h3>')
      // 引用块
      .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-primary pl-4 py-2 my-4 bg-muted/50 italic">$1</blockquote>')
      // 列表项
      .replace(/^- (.+)$/gm, '<li class="ml-4 mb-1">$1</li>')
      // 表格
      .replace(/\|(.+)\|/g, (match) => {
        const cells = match.split('|').filter(c => c.trim())
        if (cells.length === 0) return ''
        return `<td class="border border-border px-3 py-2">${cells.join('</td><td class="border border-border px-3 py-2">')}</td>`
      })
      // 段落
      .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed">')
      // 链接
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
      // 粗体
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>')
      // 斜体
      .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>')
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)]">
      <article className="max-w-4xl mx-auto px-6 py-8 lg:py-12">
        {/* 面包屑导航 */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-foreground transition-colors">文档</a>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium">{doc.title}</li>
          </ol>
        </nav>

        {/* 文档内容 */}
        <div 
          ref={contentRef}
          className={cn(
            "prose prose-slate dark:prose-invert max-w-none",
            "prose-headings:scroll-mt-20",
            "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
            "prose-code:text-foreground prose-code:bg-muted prose-code:rounded prose-code:px-1 prose-code:py-0.5",
            "prose-pre:bg-muted prose-pre:rounded-lg",
            "prose-blockquote:border-l-primary prose-blockquote:bg-muted/50"
          )}
          dangerouslySetInnerHTML={{ 
            __html: `<div class="doc-content">${renderMarkdown(doc.content)}</div>` 
          }}
        />

        {/* 底部导航 */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">上一页</p>
              <a href="#" className="text-primary hover:underline font-medium">
                ← 返回目录
              </a>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">下一页</p>
              <a href="#" className="text-primary hover:underline font-medium">
                快速开始 →
              </a>
            </div>
          </div>
        </div>

        {/* 编辑链接 */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            在 GitHub 上编辑此页面
          </a>
        </div>
      </article>
    </div>
  )
}
