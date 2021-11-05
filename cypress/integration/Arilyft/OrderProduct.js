describe('Placeing an order' ,  function () 
{
    it('GotoURL', function () {
        // GotoURL
        cy.visit('https://airliftexpress.com/') 
        cy.wait(4000)

        // Provide Current Location
        cy.xpath('//*[@id="cdk-overlay-0"]/nz-modal-container/div/div/div/ecp-update-delivery-location/ecp-lazy-google-map-wrapper/div/div[2]/form/div/div/div[1]/nz-form-item/nz-form-control/div/div/nz-select').type('pakistan')
        cy.xpath('//*[@id="cdk-overlay-3"]/nz-option-container/div/cdk-virtual-scroll-viewport/div[1]/nz-option-item/div/div').click()
        cy.get(':nth-child(2) > .mb-2 > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').type('karachi')
        cy.get('.ant-select-item-option-content > .ng-star-inserted').click()
        cy.get('div.cdk-overlay-container:nth-child(11) div.cdk-global-overlay-wrapper:nth-child(2) div.cdk-overlay-pane nz-modal-container.ng-tns-c82-26.ng-trigger.ng-trigger-modalContainer.ng-star-inserted.ant-modal-wrap:nth-child(2) div.ant-modal.ng-tns-c82-26 div.ant-modal-content.ng-tns-c82-26 div.ant-modal-body.ng-tns-c82-26 ecp-update-delivery-location.ng-star-inserted div.modal-wrapper.ng-star-inserted div.mw-body.pt-0 form.ng-touched.ng-dirty.ng-valid div.ant-form.ant-form-vertical.ng-star-inserted div.map-wrapper.ng-star-inserted div.ant-row div.ant-col.ant-col-24 nz-form-item.mb-2.ant-form-item.ant-row nz-form-control.ng-tns-c88-32.ant-form-item-control.ant-col.ng-star-inserted div.ant-form-item-control-input.ng-tns-c88-32 div.ant-form-item-control-input-content.ng-tns-c88-32 > i.icon-precision.get-location-btn.ng-tns-c88-32').click()
        cy.wait(4000)
        cy.get('.mw-submit-btn').click()

        // Select Product        
        cy.get(':nth-child(1) > ecp-product > .product-card > .cursor-pointer').click()

        // Click on Add to Cart
        cy.get('.pdw-add-btn').click()
        // Click on My Cart
        cy.get('.bb-label').click()
        // Click on Login/Signup button
        cy.get('.cdw-submit-btn').click()

        // Enter Valid Login Credentials
        cy.get('.ant-select-selection-item').click()
        cy.get('.ant-select-item-option-selected > .ant-select-item-option-content > .ng-star-inserted').click()
        cy.xpath('.//body/div[1]/div[4]/div[1]/nz-modal-container[1]/div[1]/div[1]/div[1]/ecp-login[1]/div[1]/div[2]/form[1]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/nz-input-group[1]/input[1]').type('3412822597')
        cy.get('.ant-form-item-control-input-content > .ant-input').type('test12')

        // Click On Login Button
        cy.get('.mw-submit-btn').click()
        cy.wait(4000)

        // Click on Go To Checkout
        cy.get('.cdw-submit-btn').click()
        cy.wait(4000)

        // Click on COD
        cy.get('ecp-header-shell.ng-star-inserted:nth-child(2) div.site-wrapper div.main-wrapper:nth-child(2) div.layout-wrapper ecp-checkout.ng-star-inserted:nth-child(2) section.main-page div.checkout-page div.cp-content:nth-child(1) section.checkout-box.mt-4.ng-star-inserted div.cb-b-body form.ng-untouched.ng-pristine.ng-invalid nz-radio-group.ant-radio-group.ng-untouched.ng-pristine.ng-invalid label.radio-lg.mb-3.ant-radio-wrapper.ng-star-inserted:nth-child(3) > span:nth-child(2)').click()

        // Schedule Delivery 
        cy.get('.delivery-schedule-calendar > .ant-radio-group > :nth-child(2)').click()
        cy.get('.dsc-menu-content > :nth-child(3) > :nth-child(2)').click()

        // Click On Place Oder
        cy.get('.d-none > .mt-4').click()
        cy.wait(17000)

        // Click On Cancel Button
        cy.get('.cancel-btn').click()

        // Click on Yes Cancel it
        cy.get('.ant-popover-buttons > .ant-btn-primary').click()
    }) 


})


