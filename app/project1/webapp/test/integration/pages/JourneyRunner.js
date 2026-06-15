sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"swa/u/project1/test/integration/pages/employeeEntityList",
	"swa/u/project1/test/integration/pages/employeeEntityObjectPage"
], function (JourneyRunner, employeeEntityList, employeeEntityObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('swa/u/project1') + '/test/flp.html#app-preview',
        pages: {
			onTheemployeeEntityList: employeeEntityList,
			onTheemployeeEntityObjectPage: employeeEntityObjectPage
        },
        async: true
    });

    return runner;
});

