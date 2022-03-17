window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat((hook) => {
    const regEx = /\[>(.+)<\]\((.+)\)/gm;

    hook.beforeEach(content => {
        return content.replace(regEx, (string, buttonName, filePath) => {
            return `<a class="hevort-btn" href="${filePath}" target="_blank" rel="noopener"><span class="hevort-btn-text">${buttonName}</span><i class="fa fa-download hevort-button-icon" aria-hidden="true"></i></a>`;
        });
    });
});