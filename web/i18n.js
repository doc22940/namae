"use strict";
exports.__esModule = true;
var next_i18next_1 = require("next-i18next");
var NextI18NextInstance = new next_i18next_1["default"]({
    defaultLanguage: 'en',
    defaultNS: 'translation',
    localePath: 'public/locales',
    otherLanguages: ['ja']
});
exports.appWithTranslation = NextI18NextInstance.appWithTranslation, exports.useTranslation = NextI18NextInstance.useTranslation;
exports["default"] = NextI18NextInstance;
