// Smooth Scroll สำหรับ Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    toggleBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Contact Form Submit (ตัวอย่างง่ายๆ แสดง alert)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('ขอบคุณสำหรับข้อความ! ฉันจะติดต่อกลับเร็วๆ นี้');
    e.target.reset();

});