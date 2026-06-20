using {swaraj.db as db} from '../db/datamodel';


service servi @(requires: 'authenticated-user', odata.draft.enabled: true) {

    entity employeeEntity @(restrict: [{
        grant: ['read','update','create','delete'],
        to   : 'User'
    }]) as
        projection on db.master.employee {
            *
        }
};
