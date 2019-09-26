({
    resetAccounts : function(component, event, helper) {
        var action = component.get("c.DeleteAll");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("From server: " + response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                console.log("INCOMPLETE");
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
        helper.showSuccess('Accounts deleted');
    },
    
	createAccount : function(component, event, helper) {
        helper.createAccounts(component, helper, 1);
	},
    
    createAccounts10 : function(component, event, helper) {
        helper.createAccounts(component, helper, 10);
    },
    
    createAccounts50 : function(component, event, helper) {
        helper.createAccounts(component, helper, 50);
    },

    createMike : function(component, event, helper) {
        console.log('CreateMike');
        var action = component.get("c.CreateMike");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("Created accounts.");
            }
            else if (state === "INCOMPLETE") {
                console.log("INCOMPLETE");
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }            
        });
        $A.enqueueAction(action);
        helper.showSuccess('Mike generated');

    },

    createReema : function(component, event, helper) {
        console.log('CreateReema');
        var action = component.get("c.CreateReema");
        action.setCallback(this, function(response) {});
        $A.enqueueAction(action);
        helper.showSuccess('Reema generated');
    }    
})