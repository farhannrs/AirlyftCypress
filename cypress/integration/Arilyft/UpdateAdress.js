describe('Add new Home Address' ,  function () 
{
    it('Goto URL', function () {
        // Goto URL
        cy.visit('https://airliftexpress.com/')
        // cy.wait(4000)

            // Provide Current Location
            cy.xpath('//*[@id="cdk-overlay-0"]/nz-modal-container/div/div/div/ecp-update-delivery-location/ecp-lazy-google-map-wrapper/div/div[2]/form/div/div/div[1]/nz-form-item/nz-form-control/div/div/nz-select').type('pakistan')
            cy.xpath('//*[@id="cdk-overlay-3"]/nz-option-container/div/cdk-virtual-scroll-viewport/div[1]/nz-option-item/div/div').click()
            cy.get(':nth-child(2) > .mb-2 > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').type('karachi')
            cy.get('.ant-select-item-option-content > .ng-star-inserted').click()
            cy.get('div.cdk-overlay-container:nth-child(11) div.cdk-global-overlay-wrapper:nth-child(2) div.cdk-overlay-pane nz-modal-container.ng-tns-c82-26.ng-trigger.ng-trigger-modalContainer.ng-star-inserted.ant-modal-wrap:nth-child(2) div.ant-modal.ng-tns-c82-26 div.ant-modal-content.ng-tns-c82-26 div.ant-modal-body.ng-tns-c82-26 ecp-update-delivery-location.ng-star-inserted div.modal-wrapper.ng-star-inserted div.mw-body.pt-0 form.ng-touched.ng-dirty.ng-valid div.ant-form.ant-form-vertical.ng-star-inserted div.map-wrapper.ng-star-inserted div.ant-row div.ant-col.ant-col-24 nz-form-item.mb-2.ant-form-item.ant-row nz-form-control.ng-tns-c88-32.ant-form-item-control.ant-col.ng-star-inserted div.ant-form-item-control-input.ng-tns-c88-32 div.ant-form-item-control-input-content.ng-tns-c88-32 > i.icon-precision.get-location-btn.ng-tns-c88-32').click()
            cy.wait(4000)
            cy.get('.mw-submit-btn').click()

        //Open Menue and Click on Signup and login button 
            cy.get('.icon-hamburger').click()
            cy.wait(1000)
            cy.get('.login-btn').click()
            cy.wait(1000)

            // Enter Valid Login Credentials
        cy.get('.ant-select-selection-item').click()
        cy.get('.ant-select-item-option-selected > .ant-select-item-option-content > .ng-star-inserted').click()

        cy.xpath('//body/div[1]/div[4]/div[1]/nz-modal-container[1]/div[1]/div[1]/div[1]/ecp-login[1]/div[1]/div[2]/form[1]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/nz-input-group[1]/input[1]').type('3412822597')
        
        cy.get('.ant-form-item-control-input-content > .ant-input').type('test12')

        // Click On Login Button
        cy.get('.mw-submit-btn').click()
        cy.wait(2000)

        // Click on Meneu
        cy.get('.icon-hamburger').click()

        // Click on MyProfile
        cy.get('.uam-dropdown > :nth-child(4)').click()
        cy.wait (3000)

        // Click on MyAddress
        cy.get(':nth-child(3) > .asn-link').click()

        // Click on Add New Address
        cy.get('.map-h-link').click()

        // Provide Current address
        // cy.get('.ant-col-7 > .search-wrapper > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-arrow > .anticon > svg').click()
        // cy.get(':nth-child(6) > .ant-select-item-option-content').click()
        cy.xpath('//body/div[1]/div[4]/div[1]/nz-modal-container[1]/div[1]/div[1]/div[1]/ecp-add-edit-address[1]/ecp-lazy-google-map-wrapper[1]/div[1]/div[2]/div[1]/div[1]/div[1]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/i[1]').click()

        cy.wait(3000)

        cy.get('.ant-form-item-control-input-content > .ant-input').type('House# R-427, Sector-8, North Karachi , Karachi , Pakistan')

        cy.get('.ant-radio-group > :nth-child(1)').click()

        // Click on Submit
        cy.get('.mw-submit-btn').click()

    }) 
    
})
