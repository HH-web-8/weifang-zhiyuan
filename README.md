# 潍坊中高考志愿规划网站

一个现代化的中高考志愿规划服务平台，嵌入智能招生咨询功能。

## 技术栈

- **HTML5** - 语义化标签
- **Tailwind CSS 3** - 原子化CSS框架
- **JavaScript ES6+** - 原生JavaScript
- **响应式设计** - 适配移动端、平板、桌面

## 项目结构

```
潍坊中高考志愿规划网站/
├── index.html          # 主页面文件
├── css/
│   └── style.css       # 自定义样式
├── js/
│   └── main.js         # 交互脚本
├── images/             # 图片资源目录
└── README.md           # 说明文档
```

## 页面功能

### 1. 首页
- Hero区域展示平台定位
- 中考/高考专区入口卡片
- 技能教育优势介绍
- 智能咨询CTA区域

### 2. 中考专区
- 潍坊主要技工院校历年录取分数线表格
- 2026年录取分数线预估分析
- 热门专业详解（数控技术、机电一体化、计算机应用、汽车维修、电子商务）
- 报考流程、报名条件、所需材料

### 3. 高考专区
- 大学生技师班介绍（什么是技师班、培养模式、学制、就业前景）
- 技能人才优势（国家政策、薪资水平、就业方向）
- 学历提升路径（技师+大专双证、专升本通道）
- 热门技能专业介绍

### 4. 学校介绍
- 潍坊市技师学院
- 潍柴职业大学
- 潍坊工程技师学院

### 5. 智能咨询
- 右下角悬浮聊天窗口
- 快捷问题按钮
- 模拟聊天功能
- 预留扣子Chat SDK集成位置

## 快速开始

### 本地预览

1. 直接在浏览器中打开 `index.html` 文件
2. 或者使用本地服务器：

```bash
# 使用Python
python -m http.server 8000

# 使用Node.js (需要http-server)
npx http-server

# 使用PHP
php -S localhost:8000
```

然后访问 `http://localhost:8000`

### 集成智能聊天功能

本项目预留了**扣子Chat SDK**的集成位置，请按照以下步骤操作：

1. 访问 [扣子 Coze](https://www.coze.cn/) 注册账号
2. 创建智能体（Bot），配置知识库和技能
3. 获取您的 `bot_id`
4. 编辑 `index.html` 文件，找到Chat SDK集成代码注释部分
5. 取消注释并将 `YOUR_BOT_ID_HERE` 替换为您的真实bot_id

```javascript
(function() {
    const script = document.createElement('script');
    script.src = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/0.1.0-beta.4/libs/cn/index.js';
    script.onload = function() {
        new CozeWebSDK.WebChatClient({
            config: {
                bot_id: '您的bot_id', // 替换这里
            },
            componentProps: {
                title: '招生学长 - 智能咨询',
            },
        });
    };
    document.head.appendChild(script);
})();
```

## 特色功能

### 响应式设计
- 移动端优先设计
- 适配各种屏幕尺寸
- 移动端菜单优化

### 用户体验优化
- 平滑滚动效果
- 页面切换动画
- 卡片悬停动效
- 回到顶部按钮
- 导航栏滚动效果

### 可访问性
- 语义化HTML标签
- 高对比度支持
- 键盘导航优化
- 减少动画模式支持

### 性能优化
- CSS和JS分离
- 图片懒加载支持
- 无多余依赖
- 加载速度快

## 自定义配置

### 修改主题色

在 `index.html` 的Tailwind配置中修改：

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1E40AF',  // 主色调
                secondary: '#3B82F6', // 辅助色
                accent: '#60A5FA',    // 强调色
            },
        }
    }
}
```

### 修改学校和专业信息

直接在 `index.html` 对应页面的HTML代码中修改内容即可。

### 添加更多页面

按照现有页面结构，在HTML中添加新的 `page-section` 容器，并在导航栏添加对应链接。

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 部署建议

1. **静态网站托管**：可以部署到GitHub Pages、Vercel、Netlify等平台
2. **传统服务器**：上传到Apache/Nginx等Web服务器
3. **CDN加速**：建议使用CDN加速静态资源访问

注意：由于使用了Tailwind CDN，生产环境建议使用本地构建版本以获得更好的性能。

## 技术支持

如有问题，请：
1. 检查浏览器控制台是否有错误信息
2. 确认网络连接正常
3. 参考官方文档：[Tailwind CSS](https://tailwindcss.com/docs)、[扣子Coze](https://www.coze.cn/docs)

## 更新日志

### v1.0.0 (2026)
- 初始版本发布
- 完整的页面结构和功能
- 响应式设计实现
- 扣子Chat SDK集成预留

## 许可证

本项目仅供学习和参考使用。