import chai  = require('chai');
import Flash = require('../src/Flash');


describe('Flash', () => {
    let assert = chai.assert;

    it('test stores and retrieves info messages in memory', (done) => {
        let session = {};
        let flash = new Flash(session);
        flash.storeInfoMessage('memory info message', false);
        let messages = flash.retrieveInfoMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.equal(session[Flash.INFO_KEY].length, 0);
        done();
    });

    it('test stores and retrieves info messages in session', (done) => {
        let session = {};
        let flash = new Flash(session);
        flash.storeInfoMessage('session info message', true);
        flash = new Flash(session);
        let messages = flash.retrieveInfoMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.isArray(session[Flash.INFO_KEY], 'is array');
        done();
    });

    it('test stores and retrieves success messages in memory', (done) => {
        let session = {};
        let flash = new Flash(session);
        flash.storeSuccessMessage('memory success message', false);
        let messages = flash.retrieveSuccessMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.equal(session[Flash.SUCCESS_KEY].length, 0);
        done();
    });

    it('test stores and retrieves success messages in session', (done) => {
        let session = {};
        let flash = new Flash(session);
        flash.storeSuccessMessage('session success message', true);
        flash = new Flash(session);
        let messages = flash.retrieveSuccessMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.isArray(session[Flash.SUCCESS_KEY], 'is array');
        done();
    });

    it('test stores and retrieves warning messages in memory', (done) => {
        let session = {};
        let flash = new Flash(session);
        flash.storeWarningMessage('memory warning message', false);
        let messages = flash.retrieveWarningMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.equal(session[Flash.WARNING_KEY].length, 0);
        done();
    });

    it('test stores and retrieves warning messages in session', (done) => {
        let session = {};
        let flash = new Flash(session);
        flash.storeWarningMessage('session info message', true);
        flash = new Flash(session);
        let messages = flash.retrieveWarningMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.isArray(session[Flash.WARNING_KEY], 'is array');
        done();
    });

    it('test stores and retrieves error messages in memory', (done) => {
        let session = {};
        let flash = new Flash(session);
        flash.storeErrorMessage('memory error message', false);
        let messages = flash.retrieveErrorMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.equal(session[Flash.ERROR_KEY].length, 0);
        done();
    });

    it('test stores and retrieves error messages in session', (done) => {
        let session = {};
        let flash = new Flash(session);
        flash.storeErrorMessage('session error message', true);
        flash = new Flash(session);
        let messages = flash.retrieveErrorMessages();
        assert.equal(messages.length, 1, 'message count');
        assert.isArray(session[Flash.ERROR_KEY], 'is array');
        done();
    });
});
