export interface ApplicantState {
    //fix: types check
    termsAccepted: boolean;
    datepickerDays: any[];
    scheduler: {
       1: any[];
       2: any[];
       3: any[];
       4: any[];
       5: any[];
       6: any[];
       7: any[];
    };
    bankAccount: {
       sheba: string;
       info: string;
    };
    dayPart: "am" | "pm";
    shiftHours: string;
    forceUpdate: boolean;
    defaultValue: any;
 }
 