/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: { extend: {
    colors: {
        // هادو هما ألوان Ticket Zone
        'dark-bg': '#0F0F0F',    // الأسود الغامق ديال الخلفية
        'dark-card': '#1A1A1A',  // لون الكارط ديال الفيلم
        'accent': '#FFB800',     // الأصفر الذهبي للأزرار
        'soft-gray': '#A0A0A0',  // للنصوص الثانوية
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'], // خط عصري بحال اللي في التصميم
      }
  } },
  plugins: [],
};
