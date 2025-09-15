document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('h3').textContent;
            alert(`เพิ่ม "${productName}" ลงตะกร้าแล้ว! 🎉`);
        });
    });
});