const monthlyBtn = document.getElementById('monthlyBtn');
const yearlyBtn = document.getElementById('yearlyBtn');
const prices = document.querySelectorAll('.price');
const billingDetails = document.querySelectorAll('.billing-detail');
const billingNote = document.getElementById('billingNote');

function setBillingCycle(cycle) {
  const isYearly = cycle === 'yearly';

  prices.forEach((price) => {
    // Keep the price change smooth and readable.
    price.style.opacity = '0';
    window.setTimeout(() => {
      price.textContent = isYearly
        ? Number(price.dataset.yearly).toFixed(2).replace(/\.00$/, '')
        : price.dataset.monthly;
      price.style.opacity = '1';
    }, 120);
  });

  billingDetails.forEach((detail) => {
    detail.textContent = isYearly ? 'Billed annually' : 'Billed monthly';
  });

  monthlyBtn.classList.toggle('active', !isYearly);
  yearlyBtn.classList.toggle('active', isYearly);
  monthlyBtn.setAttribute('aria-pressed', String(!isYearly));
  yearlyBtn.setAttribute('aria-pressed', String(isYearly));

  billingNote.textContent = isYearly
    ? 'Billed annually · Save 20% compared with monthly'
    : 'Billed monthly · Cancel anytime';
}

monthlyBtn.addEventListener('click', () => setBillingCycle('monthly'));
yearlyBtn.addEventListener('click', () => setBillingCycle('yearly'));

// Start with monthly pricing selected.
setBillingCycle('monthly');
