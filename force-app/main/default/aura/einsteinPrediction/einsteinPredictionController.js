({
    recordLoaded: function (component, event, helper) {
        console.log('einsteinPrediction: recordLoaded');
        component.set('v.model', component.get('v.simpleRecord.Model__c'));
        component.set('v.battery', component.get('v.simpleRecord.Battery__c'));

        if (component.get('v.simpleRecord.Model__c') != 'Flash') {
            $A.util.addClass(component.find("modelPrediction"), "slds-hide");
        } else {
            $A.util.removeClass(component.find("modelPrediction"), "slds-hide");
        }

        if (component.get('v.simpleRecord.Battery__c') == '100 kWh') {
            $A.util.addClass(component.find("batteryPrediction"), "slds-hide");
        } else {
            $A.util.removeClass(component.find("batteryPrediction"), "slds-hide");
        }

        var changeType = event.getParams().changeType;
        if (changeType === "CHANGED") {
            component.find("recordEdit").reloadRecord();
        }
    },
})
