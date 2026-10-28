document.getElementById('saveBtn').addEventListener('click', function () {
    const a = document.createElement('a');
    a.href = 'Tunagratin.txt';
    a.download = 'Tunagratin.txt';
    a.click();
});

// URLのコピー
let copyToggle = true;

document.getElementById('copyBtn').addEventListener('click', async function () {
    if (!copyToggle) return;
    copyToggle = false;

    const original = this.textContent;

    try {
        await navigator.clipboard.writeText(location.href);
        this.textContent = 'コピーしました！';
    } catch (e) {
        this.textContent = 'コピー失敗';
    }

    setTimeout(() => {
        this.textContent = original;
        copyToggle = true;
    }, 1500);
});