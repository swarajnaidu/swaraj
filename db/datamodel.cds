namespace swaraj.db;
using { swaraj.common as common } from './commons';
//like in ABAP we have standard table for T100, T005, T010
using { Currency, cuid } from '@sap/cds/common';
context master {
@odata.draft.enabled
    entity employee: cuid {
        nameFirst: String(256);
        nameMiddle: String(256);
        nameLast: String(256);
        nameInitials: String(40);
        sex: common.Gender;
        language: String(1);
        phoneNumber: common.PhoneNumber;
        email: common.Email;
        loginName: String(12);
        Currency : Currency;
        salaryAmount: common.AmountT;
        accountNumber: String(16);
        bankId: String(40);
        bankName: String(64);
    }
}