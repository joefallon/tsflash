declare class Flash {
    static readonly INFO_KEY: string;
    static readonly SUCCESS_KEY: string;
    static readonly WARNING_KEY: string;
    static readonly ERROR_KEY: string;
    private _session;
    private _infoMessages;
    private _successMessages;
    private _warningMessages;
    private _errorMessages;
    constructor(session: any);
    storeInfoMessage(message: string, storeInSession?: boolean): void;
    retrieveInfoMessages(): String[];
    storeSuccessMessage(message: string, storeInSession?: boolean): void;
    retrieveSuccessMessages(): String[];
    storeWarningMessage(message: string, storeInSession?: boolean): void;
    retrieveWarningMessages(): String[];
    storeErrorMessage(message: string, storeInSession?: boolean): void;
    retrieveErrorMessages(): String[];
}
export = Flash;
