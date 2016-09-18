var params = { };

location.href.split('?')[1].split('&').forEach (
    function(i)
    {
        params[i.split('=')[0]] = i.split('=')[1];
    }
);

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

NodeList.prototype.removeAttribute = HTMLCollection.prototype.removeAttribute = function() {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

if (params && params.language) {
    var checkLanguage = document.querySelectorAll('[systemLanguage="' + params.language + '"]');

    if (checkLanguage.length > 0) {
        if (params.language) {
            console.log('Using language from query string: "' + params.language + '"');

            var systemLanguageNodes = document.querySelectorAll('[systemLanguage]');

            for (ii = 0; ii < systemLanguageNodes.length; ii++) {
                if (systemLanguageNodes[ii].getAttribute('systemLanguage') !== params.language) {
                    systemLanguageNodes[ii].remove();
                } else {
                    systemLanguageNodes[ii].removeAttribute('systemLanguage');
                }
            }
        }
    } else {
        console.warn('The given language "' + params.language + '"  was not found! Fallback to system language.');
    }
}