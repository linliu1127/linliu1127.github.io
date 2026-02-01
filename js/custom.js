document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.site-name');
    if (!el) {
        console.log(' target not found');
        return;
    }

    let x = Math.random() * 10;
    let y = Math.random() * 10;
    let r = 0;

    setInterval(() => {
        // 緩慢隨機游走（關鍵感覺）
        x += (Math.random() - 0.5) * 1.2;
        y += (Math.random() - 0.5) * 1.2;
        r += (Math.random() - 0.5) * 0.4;

        // 限制幅度，避免飛走
        x = Math.max(-12, Math.min(12, x));
        y = Math.max(-12, Math.min(12, y));
        r = Math.max(-4, Math.min(4, r));

        el.style.transform =
            `translate(${x}px, ${y}px) rotate(${r}deg)`;
    }, 60); // jackstauber 的關鍵：不是 16ms

    const el2 = document.querySelector('.site-avatar');
    if (!el2) {
        console.log(' target not found');
        return;
    }

    let x2 = Math.random() * 10;
    let y2 = Math.random() * 10;
    let r2 = 0;

    setInterval(() => {
        // 緩慢隨機游走（關鍵感覺）
        x2 += (Math.random() - 0.5) * 1.2;
        y2 += (Math.random() - 0.5) * 1.2;
        r2 += (Math.random() - 0.5) * 0.4;

        // 限制幅度，避免飛走
        x2 = Math.max(-12, Math.min(12, x2));
        y2 = Math.max(-12, Math.min(12, y2));
        r2 = Math.max(-4, Math.min(4, r2));

        el2.style.transform =
            `translate(${x2}px, ${y2}px) rotate(${r2}deg)`;
    }, 60); // jackstauber 的關鍵：不是 16ms
});