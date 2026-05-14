// 潍坊中高考志愿规划平台主脚本

// 页面显示控制
function showPage(pageId) {
    // 隐藏所有页面
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.add('hidden');
    });
    
    // 显示目标页面
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }
    
    // 滚动到顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // 关闭移动端菜单（如果打开）
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
    }
    
    return false;
}

// 移动端菜单切换
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.toggle('hidden');
    
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    } else {
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    }
}

// 聊天窗口切换
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
}

// 打开聊天窗口（扣子智能体SDK）
function openChat() {
    // 尝试触发扣子SDK悬浮球点击
    var selectors = [
        '#coze-chat-widget button',
        '[class*="coze-web-chat"] button',
        '[class*="CozeWebSDK"] button',
        'button[class*="chat"]'
    ];
    for (var i = 0; i < selectors.length; i++) {
        var btn = document.querySelector(selectors[i]);
        if (btn) {
            btn.click();
            return;
        }
    }
    // 如果没找到SDK按钮，可能SDK还没加载完，延迟重试
    setTimeout(function() {
        for (var i = 0; i < selectors.length; i++) {
            var btn = document.querySelector(selectors[i]);
            if (btn) {
                btn.click();
                return;
            }
        }
    }, 1500);
}

// 滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 监听滚动事件
function handleScroll() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('back-to-top');
    
    // 导航栏滚动效果
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // 回到顶部按钮显示/隐藏
    if (window.scrollY > 300) {
        backToTop.classList.remove('hidden');
        backToTop.classList.add('flex');
    } else {
        backToTop.classList.add('hidden');
        backToTop.classList.remove('flex');
    }
}

// 快捷问题点击处理
function handleQuickQuestion(question) {
    // 这里可以处理快捷问题的逻辑
    console.log('用户点击了快捷问题:', question);
    
    // 模拟添加用户消息
    addUserMessage(question);
    
    // 模拟机器人回复
    setTimeout(() => {
        addBotMessage(getBotResponse(question));
    }, 1000);
}

// 添加用户消息到聊天窗口
function addUserMessage(message) {
    const chatContent = document.querySelector('#chat-window .h-80 .space-y-4');
    const messageElement = document.createElement('div');
    messageElement.className = 'flex items-start justify-end';
    messageElement.innerHTML = `
        <div class="bg-primary text-white rounded-lg rounded-tr-none p-3 shadow-sm max-w-[85%]">
            <p class="text-sm">${message}</p>
        </div>
        <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center ml-2 flex-shrink-0">
            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
        </div>
    `;
    chatContent.appendChild(messageElement);
    
    // 滚动到底部
    const chatContainer = chatContent.parentElement;
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 添加机器人消息到聊天窗口
function addBotMessage(message) {
    const chatContent = document.querySelector('#chat-window .h-80 .space-y-4');
    const messageElement = document.createElement('div');
    messageElement.className = 'flex items-start';
    messageElement.innerHTML = `
        <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
            <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
        </div>
        <div class="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%]">
            <p class="text-sm text-gray-700">${message}</p>
        </div>
    `;
    chatContent.appendChild(messageElement);
    
    // 滚动到底部
    const chatContainer = chatContent.parentElement;
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 获取机器人回复（模拟）
function getBotResponse(question) {
    const responses = {
        '分数线是多少？': '潍坊各技工院校分数线略有不同，潍坊市技师学院约280分以上，具体分数线会根据当年报考情况有所调整。建议您拨打招生热线400-xxx-xxxx了解最新信息。',
        '有哪些专业？': '潍坊技工院校开设专业包括：数控技术、机电一体化、工业机器人、新能源汽车、计算机应用、电子商务、会计、护理、烹饪等热门专业。您对哪个专业比较感兴趣呢？',
        '怎么报名？': '报名流程：1. 网上/电话预约咨询 2. 到校参观了解 3. 提交报名材料（身份证、成绩单、照片）4. 审核通过发放录取通知书。现在预约可享受优先录取哦！',
        '学费多少钱？': '技工院校享受国家免学费政策，大部分专业免除学费，仅收取住宿费、教材费等杂费，每年约1000-2000元。家庭困难学生还可申请国家助学金每年2000元。'
    };
    
    return responses[question] || '感谢您的咨询！我会尽快为您解答，建议您拨打招生热线400-xxx-xxxx获取更详细的信息。';
}

// 发送消息处理
function handleSendMessage() {
    const input = document.querySelector('#chat-window input');
    const message = input.value.trim();
    
    if (message) {
        addUserMessage(message);
        input.value = '';
        
        // 模拟机器人回复
        setTimeout(() => {
            addBotMessage('感谢您的提问！招生老师会尽快回复您。如需即时咨询，请拨打招生热线400-xxx-xxxx。');
        }, 1000);
    }
}

// 初始化聊天输入框事件
function initChatInput() {
    const input = document.querySelector('#chat-window input');
    const sendButton = document.querySelector('#chat-window button:last-child');
    
    if (input && sendButton) {
        // 点击发送按钮
        sendButton.addEventListener('click', handleSendMessage);
        
        // 回车发送
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });
    }
}

// 初始化快捷问题按钮事件
function initQuickQuestions() {
    const quickButtons = document.querySelectorAll('#chat-window .grid button');
    quickButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleQuickQuestion(this.textContent.trim());
        });
    });
}

// 图片懒加载
function initLazyLoading() {
    const images = document.querySelectorAll('img.lazy');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.add('loaded');
                    image.classList.remove('lazy');
                    observer.unobserve(image);
                }
            });
        });
        
        images.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        // 降级处理：立即加载所有图片
        images.forEach(image => {
            image.src = image.dataset.src;
            image.classList.add('loaded');
        });
    }
}

// 表单验证工具函数
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('border-red-500');
            
            // 添加错误提示
            const error = document.createElement('p');
            error.className = 'text-red-500 text-xs mt-1';
            error.textContent = '此字段为必填项';
            
            if (!field.nextElementSibling?.classList.contains('text-red-500')) {
                field.parentNode.appendChild(error);
            }
        } else {
            field.classList.remove('border-red-500');
            if (field.nextElementSibling?.classList.contains('text-red-500')) {
                field.nextElementSibling.remove();
            }
        }
    });
    
    return isValid;
}

// 数字动画
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// 初始化数字动画
function initNumberAnimations() {
    const numbers = document.querySelectorAll('.animate-number');
    
    if ('IntersectionObserver' in window) {
        const numberObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    animateNumber(entry.target, target);
                    entry.target.classList.remove('animate-number');
                    numberObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        numbers.forEach(num => {
            numberObserver.observe(num);
        });
    }
}

// 添加控制台欢迎信息
function showWelcomeMessage() {
    console.log('%c🎓 潍坊中高考志愿规划平台', 'font-size: 24px; font-weight: bold; color: #1E40AF;');
    console.log('%c专业的升学指导，成就你的职业梦想！', 'font-size: 14px; color: #6B7280;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #E5E7EB;');
    console.log('%c📞 招生热线: 400-xxx-xxxx', 'font-size: 12px;');
    console.log('%c📧 邮箱: info@wfsxgh.com', 'font-size: 12px;');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 显示欢迎信息
    showWelcomeMessage();
    
    // 初始化滚动监听
    window.addEventListener('scroll', handleScroll);
    
    // 初始化聊天输入框
    initChatInput();
    
    // 初始化快捷问题按钮
    initQuickQuestions();
    
    // 初始化图片懒加载
    initLazyLoading();
    
    // 初始化数字动画
    initNumberAnimations();
    
    // 默认显示首页
    showPage('home');
    
    // 检查URL hash进行页面跳转
    if (window.location.hash) {
        const page = window.location.hash.replace('#', '');
        if (['home', 'middle-school', 'high-school', 'schools'].includes(page)) {
            showPage(page);
        }
    }
    
    console.log('✅ 潍坊中高考志愿规划平台加载完成！');
});

// 页面可见性变化处理
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // 页面重新可见时的处理
        console.log('📄 页面重新可见');
    }
});

// 防止表单重复提交
function preventDoubleSubmit(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="loading"></span> 提交中...';
    }
}

// 导出工具函数供外部使用
window.VolunteerPlatform = {
    showPage,
    openChat,
    scrollToTop,
    validateForm,
    preventDoubleSubmit
};

/**
 * 扣子 Chat SDK 集成说明
 * 
 * 要集成智能聊天功能，请按照以下步骤操作：
 * 
 * 1. 访问 https://www.coze.cn/ 并注册账号
 * 2. 创建您的智能体（Bot），配置相关的知识库和技能
 * 3. 获取您的 bot_id
 * 4. 在 index.html 中取消注释 SDK 集成代码
 * 5. 将 'YOUR_BOT_ID_HERE' 替换为您的真实 bot_id
 * 
 * 代码示例：
 * 
 * (function() {
 *     const script = document.createElement('script');
 *     script.src = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/0.1.0-beta.4/libs/cn/index.js';
 *     script.onload = function() {
 *         new CozeWebSDK.WebChatClient({
 *             config: {
 *                 bot_id: '您的bot_id',
 *             },
 *             componentProps: {
 *                 title: '招生学长 - 智能咨询',
 *             },
 *         });
 *     };
 *     document.head.appendChild(script);
 * })();
 * 
 * 注意事项：
 * - 请确保您的智能体已经发布
 * - 建议配置欢迎语和常用问题引导
 * - 可以上传学校的招生简章等资料作为知识库
 */