"use strict";
var chai = require('chai');
var Flash = require('../src/Flash');
describe('Flash', function () {
    var assert = chai.assert;
    it('test stores and retrieves info messages in memory', function (done) {
        var session = {};
        var flash = new Flash(session);
        flash.storeInfoMessage('memory info message', false);
        var messages = flash.retrieveInfoMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.equal(session[Flash.INFO_KEY].length, 0);
        done();
    });
    it('test stores and retrieves info messages in session', function (done) {
        var session = {};
        var flash = new Flash(session);
        flash.storeInfoMessage('session info message', true);
        flash = new Flash(session);
        var messages = flash.retrieveInfoMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.isArray(session[Flash.INFO_KEY], 'is array');
        done();
    });
    it('test stores and retrieves success messages in memory', function (done) {
        var session = {};
        var flash = new Flash(session);
        flash.storeSuccessMessage('memory success message', false);
        var messages = flash.retrieveSuccessMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.equal(session[Flash.SUCCESS_KEY].length, 0);
        done();
    });
    it('test stores and retrieves success messages in session', function (done) {
        var session = {};
        var flash = new Flash(session);
        flash.storeSuccessMessage('session success message', true);
        flash = new Flash(session);
        var messages = flash.retrieveSuccessMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.isArray(session[Flash.SUCCESS_KEY], 'is array');
        done();
    });
    it('test stores and retrieves warning messages in memory', function (done) {
        var session = {};
        var flash = new Flash(session);
        flash.storeWarningMessage('memory warning message', false);
        var messages = flash.retrieveWarningMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.equal(session[Flash.WARNING_KEY].length, 0);
        done();
    });
    it('test stores and retrieves warning messages in session', function (done) {
        var session = {};
        var flash = new Flash(session);
        flash.storeWarningMessage('session info message', true);
        flash = new Flash(session);
        var messages = flash.retrieveWarningMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.isArray(session[Flash.WARNING_KEY], 'is array');
        done();
    });
    it('test stores and retrieves error messages in memory', function (done) {
        var session = {};
        var flash = new Flash(session);
        flash.storeErrorMessage('memory error message', false);
        var messages = flash.retrieveErrorMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.equal(session[Flash.ERROR_KEY].length, 0);
        done();
    });
    it('test stores and retrieves error messages in session', function (done) {
        var session = {};
        var flash = new Flash(session);
        flash.storeErrorMessage('session error message', true);
        flash = new Flash(session);
        var messages = flash.retrieveErrorMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.isArray(session[Flash.ERROR_KEY], 'is array');
        done();
    });
});
