window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat((hook) => {
    let regEx = {
        warning: /(\|WARNING\|)([\s\S]*?)(\|WARNING\|)/gm,
        info: /(\|INFO\|)([\s\S]*?)(\|INFO\|)/gm,
        danger: /(\|DANGER\|)([\s\S]*?)(\|DANGER\|)/gm,
        success: /(\|SUCCESS\|)([\s\S]*?)(\|SUCCESS\|)/gm,
    }


    hook.beforeEach(content => {
        return content.replace(regEx.warning, (string, start, message, end) => {
            return string
                .replace(start, "<div class='notification-markup-container warning'><span class='notification-markup-title'>Warning</span>")
                .replace(message, `<div class='notification-markup-message'>${message}</div>`)
                .replace(end, "</div>");
        }).replace(regEx.info, (string, start, message, end) => {
            return string
                .replace(start, "<div class='notification-markup-container info'><span class='notification-markup-title'>Info</span>")
                .replace(message, `<div class='notification-markup-message'>${message}</div>`)
                .replace(end, "</div>");
        }).replace(regEx.danger, (string, start, message, end) => {
            return string
                .replace(start, "<div class='notification-markup-container danger'><span class='notification-markup-title'>Danger</span>")
                .replace(message, `<div class='notification-markup-message'>${message}</div>`)
                .replace(end, "</div>");
        }).replace(regEx.success, (string, start, message, end) => {
            return string
                .replace(start, "<div class='notification-markup-container success'><span class='notification-markup-title'>Success</span>")
                .replace(message, `<div class='notification-markup-message'>${message}</div>`)
                .replace(end, "</div>");
        })
    });
});