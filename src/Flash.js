"use strict";
var Flash = (function () {
    function Flash(session) {
        this._session = session;
        this._infoMessages = session[Flash.INFO_KEY];
        this._successMessages = session[Flash.SUCCESS_KEY];
        this._warningMessages = session[Flash.WARNING_KEY];
        this._errorMessages = session[Flash.ERROR_KEY];
        session[Flash.INFO_KEY] = [];
        session[Flash.SUCCESS_KEY] = [];
        session[Flash.WARNING_KEY] = [];
        session[Flash.ERROR_KEY] = [];
        if (Array.isArray(this._infoMessages) == false) {
            this._infoMessages = [];
        }
        if (Array.isArray(this._successMessages) == false) {
            this._successMessages = [];
        }
        if (Array.isArray(this._warningMessages) == false) {
            this._warningMessages = [];
        }
        if (Array.isArray(this._errorMessages) == false) {
            this._errorMessages = [];
        }
    }
    Flash.prototype.storeInfoMessage = function (message, storeInSession) {
        if (storeInSession === void 0) { storeInSession = true; }
        if (storeInSession) {
            this._session[Flash.INFO_KEY].push(message);
        }
        else {
            this._infoMessages.push(message);
        }
    };
    Flash.prototype.retrieveInfoMessages = function () {
        return this._infoMessages;
    };
    Flash.prototype.storeSuccessMessage = function (message, storeInSession) {
        if (storeInSession === void 0) { storeInSession = true; }
        if (storeInSession) {
            this._session[Flash.SUCCESS_KEY].push(message);
        }
        else {
            this._successMessages.push(message);
        }
    };
    Flash.prototype.retrieveSuccessMessages = function () {
        return this._successMessages;
    };
    Flash.prototype.storeWarningMessage = function (message, storeInSession) {
        if (storeInSession === void 0) { storeInSession = true; }
        if (storeInSession) {
            this._session[Flash.WARNING_KEY].push(message);
        }
        else {
            this._warningMessages.push(message);
        }
    };
    Flash.prototype.retrieveWarningMessages = function () {
        return this._warningMessages;
    };
    Flash.prototype.storeErrorMessage = function (message, storeInSession) {
        if (storeInSession === void 0) { storeInSession = true; }
        if (storeInSession) {
            this._session[Flash.ERROR_KEY].push(message);
        }
        else {
            this._errorMessages.push(message);
        }
    };
    Flash.prototype.retrieveErrorMessages = function () {
        return this._errorMessages;
    };
    Flash.INFO_KEY = 'info-flash-messages';
    Flash.SUCCESS_KEY = 'success-flash-messages';
    Flash.WARNING_KEY = 'warning-flash-messages';
    Flash.ERROR_KEY = 'error-flash-messages';
    return Flash;
}());
module.exports = Flash;
