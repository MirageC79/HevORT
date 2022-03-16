window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat((hook) => {
    const regEx = /\[>(.+)<\]\((.+)\)/gm;

    hook.beforeEach(content => {
        return content.replace(regEx, (string, buttonName, filePath) => {
            return `<a class="download-button-btn" href="${filePath}" target="_blank" rel="noopener"><span class="download-button-text">${buttonName}</span><i class="fa fa-download download-button-icon" aria-hidden="true"></i></a>`;
        });
    });
});