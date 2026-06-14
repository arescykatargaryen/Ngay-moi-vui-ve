const animatedText = document.getElementById('animated-text');

// Helper sleep function
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Loop animation function
async function runAnimationLoop() {
    const text = "Djt me thang Tam an cut";
    const symbols = ['!', '@', '#'];
    const delay = 20;

    while (true) {
        let temp = '';
        animatedText.textContent = '';

        for (let idx = 0; idx < text.length; idx++) {
            const ch = text[idx];
            const currentProgress = temp + ch;

            // 1. Update main screen
            animatedText.textContent = currentProgress;
            await sleep(delay);

            // 2. Cycle through helper symbols (only if not the last character)
            if (idx < text.length - 1) {
                for (const symbol of symbols) {
                    const frame = currentProgress + symbol;
                    animatedText.textContent = frame;
                    await sleep(delay);
                }
            }

            // Lock in character
            temp += ch;
        }

        // Wait 3 seconds before repeating the animation
        await sleep(3000);
    }
}

// Start automatically when the DOM is ready
window.addEventListener('DOMContentLoaded', runAnimationLoop);
