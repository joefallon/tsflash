
class Flash {
    public static readonly INFO_KEY    = 'info-flash-messages';
    public static readonly SUCCESS_KEY = 'success-flash-messages';
    public static readonly WARNING_KEY = 'warning-flash-messages';
    public static readonly ERROR_KEY   = 'error-flash-messages';

    private _session:any;
    private _infoMessages:String[];
    private _successMessages:String[];
    private _warningMessages:String[];
    private _errorMessages:String[];


    constructor(session:any) {
        this._session         = session;
        this._infoMessages    = session[Flash.INFO_KEY];
        this._successMessages = session[Flash.SUCCESS_KEY];
        this._warningMessages = session[Flash.WARNING_KEY];
        this._errorMessages   = session[Flash.ERROR_KEY];
        session[Flash.INFO_KEY]    = [];
        session[Flash.SUCCESS_KEY] = [];
        session[Flash.WARNING_KEY] = [];
        session[Flash.ERROR_KEY]   = [];

        if(Array.isArray(this._infoMessages) == false) {
            this._infoMessages = [];
        }

        if(Array.isArray(this._successMessages) == false) {
            this._successMessages = [];
        }

        if(Array.isArray(this._warningMessages) == false) {
            this._warningMessages= [];
        }

        if(Array.isArray(this._errorMessages) == false) {
            this._errorMessages = [];
        }
    }

    public storeInfoMessage(message:string, storeInSession = true) {
        if(storeInSession) {
            this._session[Flash.INFO_KEY].push(message);
        } else {
            this._infoMessages.push(message);
        }
    }

    public retrieveInfoMessages():String[] {
        return this._infoMessages;
    }

    public storeSuccessMessage(message:string, storeInSession = true) {
        if(storeInSession) {
            this._session[Flash.SUCCESS_KEY].push(message);
        } else {
            this._successMessages.push(message);
        }
    }

    public retrieveSuccessMessages():String[] {
        return this._successMessages;
    }

    public storeWarningMessage(message:string, storeInSession = true) {
        if(storeInSession) {
            this._session[Flash.WARNING_KEY].push(message);
        } else {
            this._warningMessages.push(message);
        }
    }

    public retrieveWarningMessages():String[] {
        return this._warningMessages;
    }

    public storeErrorMessage(message:string, storeInSession = true) {
        if(storeInSession) {
            this._session[Flash.ERROR_KEY].push(message);
        } else {
            this._errorMessages.push(message);
        }
    }

    public retrieveErrorMessages():String[] {
        return this._errorMessages;
    }
}

export = Flash;