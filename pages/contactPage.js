var sendPartnerDataCommands = {
    fillPartnerForm: function(data) {
        this.section.partnerForm
            .setValue('@firstName', data.firstName)
            .setValue('@lastName', data.lastName)
            .setValue('@email', data.email)
            .setValue('@companyName', data.companyName)
            .setValue('@phone', data.phone)
            .click('@department')
            .setValue('@department', data.department)
            .setValue('@comments', data.comments);
        return this;
    },

    clearPartnerForm: function() {
        this.section.partnerForm
            .clearValue('@firstName')
            .clearValue('@lastName')
            .clearValue('@email')
            .clearValue('@companyName')
            .clearValue('@phone')
            .clearValue('@comments')
        return this;
    },

    switchToRecaptchaFrame: function() {
        this.api.frame(1)
        return this;
    },

    recaptchaSelect: function() {
        
        this.waitForElementPresent('@recaptcha', 2000, "Contact page: wait for recaptcha checkbox presence")
            .waitForElementVisible('@recaptcha', 2000, "Contact page: wait for recaptcha checkbox visibility")
            .click('@recaptcha')
            .pause(5000)
        return this;
    }, 

    switchToParentFrame: function(){
        this.api.frameParent();
        return this;
    }, 

    submit: function () {
        this.waitForElementVisible('@submitButton', 2000, "Contact page: wait for submit button visibility")
            .click('@submitButton')
        .section.partnerForm
            .waitForElementPresent('@thanks', 2000, 'Contact page: wait thanks for submitting presence');
        return this;
    }
}

module.exports = {
    url: 'https://www.cloudpassage.com/company/contact/',
    commands: [sendPartnerDataCommands],
    sections: {
        partnerForm:{
            selector: ".partner-form",
            elements: {
                firstName: "#FirstName",              
                lastName: "#LastName",              
                email: "#Email",              
                companyName: "#Company",              
                phone: "#Phone",              
                department: "#Department",
                comments: "#Web_Registration_Comments__c" ,
                thanks: ".thank-you"
            },
        },
        contactInfo: {
            selector: ".left-side-content.slide-content",
            elements: {
                header: "h1",
                content:{
                    selector: "p",
                    index: 1
                },
                contentContactInfo: {
                    selector: "p",
                    index: 2
                }
            }
        }
    }, 
    elements: {
        about: ".right-side-content.slide-content > p",
        map: ".left-side-image",    
        recaptcha: '.recaptcha-checkbox',
        submitButton:"button[type='submit']"
    }
}