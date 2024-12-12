document.querySelectorAll('*').forEach(el => {
    el.oncontextmenu = null; // Re-enable context menu
    el.oncopy = null;        // Re-enable copy
    el.onpaste = null;       // Re-enable paste
    el.oncut = null;         // Re-enable cut

    el.addEventListener('contextmenu', e => e.stopPropagation(), true);
    el.addEventListener('copy', e => e.stopPropagation(), true);
    el.addEventListener('paste', e => e.stopPropagation(), true);
    el.addEventListener('cut', e => e.stopPropagation(), true);
});
