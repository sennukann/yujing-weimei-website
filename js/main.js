// ========== 汉堡菜单切换 ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// 点击菜单项关闭菜单
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ========== 联系表单提交 ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // 显示成功消息
        const formNote = document.getElementById('formNote');
        formNote.textContent = '感谢您的消息！我们将尽快回复您。';
        formNote.className = 'form-note success';
        formNote.style.display = 'block';
        
        // 清空表单
        contactForm.reset();
        
        // 3秒后隐藏消息
        setTimeout(() => {
            formNote.style.display = 'none';
        }, 3000);
    });
}

// ========== 页面加载动画 ==========
window.addEventListener('load', function() {
    // 添加加载完成类
    document.body.style.opacity = '1';
});

// ========== 返回顶部按钮 ==========
window.addEventListener('scroll', function() {
    // 这里可以添加其他滚动相关的事件
});

// ========== 平滑滚动 ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('宇晶味美株式会社官网加载完成！');
