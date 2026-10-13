const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isHidden));
    menuBtn.textContent = isHidden ? '☰' : '✕';
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = '☰';
    });
  });
}

const orderForm = document.getElementById('order-form');

if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const customerName = nameInput && nameInput.value.trim();

    if (customerName) {
      alert(`Cảm ơn ${customerName}! Yêu cầu của bạn đã được gửi đến Sweet Babe Bakery.`);
    } else {
      alert('Yêu cầu của bạn đã được gửi đến Sweet Babe Bakery.');
    }

    orderForm.reset();
  });
}
