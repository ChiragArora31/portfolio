const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const scrollProgress = document.getElementById('scrollProgress');

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

function updateThemeLabel() {
    if (!themeToggle) {
        return;
    }

    const currentTheme = html.getAttribute('data-theme');
    themeToggle.setAttribute('aria-pressed', String(currentTheme === 'dark'));
    themeToggle.querySelector('.theme-label').textContent = currentTheme === 'dark' ? 'light' : 'dark';
}

updateThemeLabel();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
        updateThemeLabel();
    });
}

function updateScrollProgress() {
    if (!scrollProgress) {
        return;
    }

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    scrollProgress.value = Math.min(percentage, 100);
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();
