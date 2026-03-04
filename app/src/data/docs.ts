export interface DocSection {
  id: string
  title: string
  content: string
}

export interface DocCategory {
  id: string
  title: string
  items: DocSection[]
}

export const docData: DocSection[] = [
  {
    id: 'intro',
    title: '介绍',
    content: `
# 欢迎使用文档中心

这是一个功能完善的文档站点模板，专为技术文档、产品手册和知识库设计。

## 主要特性

- 📚 **清晰的导航结构** - 侧边栏组织文档章节，快速定位内容
- 🔍 **智能搜索** - 实时过滤文档，快速找到所需信息
- 📱 **响应式设计** - 完美适配桌面、平板和手机设备
- 🎨 **现代化界面** - 简洁优雅的设计风格
- ⚡ **高性能** - 基于 React + Vite 构建，加载速度快

## 快速开始

浏览左侧导航栏，探索各个文档章节。点击任意标题即可查看详细内容。

---

> 💡 **提示**: 使用顶部搜索框快速查找文档内容。
    `
  },
  {
    id: 'getting-started',
    title: '快速开始',
    content: `
# 快速开始

本章节将帮助你快速上手使用我们的产品。

## 安装

使用 npm 安装：

\`\`\`bash
npm install my-package
\`\`\`

或使用 yarn：

\`\`\`bash
yarn add my-package
\`\`\`

## 基本用法

\`\`\`javascript
import { MyComponent } from 'my-package';

function App() {
  return <MyComponent />;
}
\`\`\`

## 下一步

- 查看 [API 参考](#api-reference) 了解所有可用选项
- 浏览 [示例](#examples) 学习更多用法
    `
  },
  {
    id: 'installation',
    title: '安装指南',
    content: `
# 安装指南

## 系统要求

- Node.js 16.0 或更高版本
- npm 7.0 或更高版本

## 安装步骤

### 1. 创建项目目录

\`\`\`bash
mkdir my-project
cd my-project
\`\`\`

### 2. 初始化项目

\`\`\`bash
npm init -y
\`\`\`

### 3. 安装依赖

\`\`\`bash
npm install my-package
\`\`\`

## 验证安装

运行以下命令验证安装是否成功：

\`\`\`bash
npm list my-package
\`\`\`

## 故障排除

### 常见问题

**Q: 安装失败怎么办？**

A: 请检查网络连接，或尝试使用镜像源：

\`\`\`bash
npm config set registry https://registry.npmmirror.com
\`\`\`
    `
  },
  {
    id: 'configuration',
    title: '配置说明',
    content: `
# 配置说明

## 配置文件

在项目根目录创建 \`config.json\` 文件：

\`\`\`json
{
  "name": "my-project",
  "version": "1.0.0",
  "settings": {
    "theme": "light",
    "language": "zh-CN",
    "debug": false
  }
}
\`\`\`

## 配置选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| theme | string | 'light' | 主题颜色 |
| language | string | 'zh-CN' | 界面语言 |
| debug | boolean | false | 调试模式 |

## 环境变量

\`\`\`bash
# .env
API_KEY=your_api_key
API_URL=https://api.example.com
\`\`\`
    `
  },
  {
    id: 'api-reference',
    title: 'API 参考',
    content: `
# API 参考

## 核心方法

### init(options)

初始化应用程序。

**参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| options | object | 是 | 配置选项 |
| options.apiKey | string | 是 | API 密钥 |
| options.timeout | number | 否 | 超时时间（毫秒） |

**返回值：**

\`\`\`typescript
Promise<{
  success: boolean;
  message: string;
}>
\`\`\`

**示例：**

\`\`\`javascript
const result = await init({
  apiKey: 'your-api-key',
  timeout: 5000
});
\`\`\`

### fetchData(url)

获取远程数据。

**参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| url | string | 是 | 数据 URL |

**返回值：**

\`\`\`typescript
Promise<any>
\`\`\`
    `
  },
  {
    id: 'examples',
    title: '使用示例',
    content: `
# 使用示例

## 基础示例

\`\`\`jsx
import { useState } from 'react';
import { Button, Card } from 'my-package';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <h2>计数器示例</h2>
      <p>当前计数: {count}</p>
      <Button onClick={() => setCount(count + 1)}>
        增加
      </Button>
    </Card>
  );
}
\`\`\`

## 高级示例

\`\`\`jsx
import { useEffect } from 'react';
import { DataTable, useApi } from 'my-package';

function DataExample() {
  const { data, loading, error } = useApi('/api/users');

  if (loading) return <p>加载中...</p>;
  if (error) return <p>错误: {error.message}</p>;

  return (
    <DataTable 
      data={data}
      columns={['name', 'email', 'role']}
    />
  );
}
\`\`\`
    `
  },
  {
    id: 'faq',
    title: '常见问题',
    content: `
# 常见问题

## 一般问题

### Q: 如何获取技术支持？

A: 你可以通过以下方式获取帮助：
- 发送邮件至 support@example.com
- 在 GitHub 上提交 Issue
- 加入我们的社区论坛

### Q: 是否支持自定义主题？

A: 是的，我们支持自定义主题。请参考 [配置说明](#configuration) 了解详情。

## 技术问题

### Q: 支持哪些浏览器？

A: 我们支持所有现代浏览器：
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Q: 如何处理错误？

A: 使用 try-catch 捕获异常：

\`\`\`javascript
try {
  const result = await api.call();
} catch (error) {
  console.error('API 调用失败:', error);
}
\`\`\`
    `
  },
  {
    id: 'changelog',
    title: '更新日志',
    content: `
# 更新日志

## v2.0.0 (2024-01-15)

### 新功能
- ✨ 新增深色主题支持
- ✨ 添加数据导出功能
- ✨ 支持多语言切换

### 优化
- ⚡ 提升页面加载速度 30%
- 🎨 改进用户界面设计

### 修复
- 🐛 修复移动端显示问题
- 🐛 修复数据同步错误

## v1.5.0 (2023-12-01)

### 新功能
- ✨ 添加图表组件
- ✨ 支持批量操作

### 修复
- 🐛 修复表单验证问题

## v1.0.0 (2023-10-15)

🎉 初始版本发布
    `
  }
]

// 文档分类结构
export const docCategories: DocCategory[] = [
  {
    id: 'guide',
    title: '指南',
    items: docData.filter(doc => ['intro', 'getting-started', 'installation'].includes(doc.id))
  },
  {
    id: 'advanced',
    title: '高级',
    items: docData.filter(doc => ['configuration', 'api-reference', 'examples'].includes(doc.id))
  },
  {
    id: 'other',
    title: '其他',
    items: docData.filter(doc => ['faq', 'changelog'].includes(doc.id))
  }
]
