"use strict";

import render from "../../render.js";

const formContact = () => {
    return render`
<<<<<<< HEAD
        <div class="form-contact">
            Hello
=======
        <div class="contact d-flex flex-row">
            <div class="container-fluid d-flex justify-content-center align-items-center flex-column">
                <div class="form-box d-flex justify-content-center align-items-center">
                    <h1 class="form-contact__title">Make your eCommerece website profitable and beyond</h1>
                </div>
                <div class="form-contact d-flex flex-row">
                    <div class="form-contact__right">
                        <div class="contact-logo d-flex align-items-center flex-column">
                            <a href="#"><img src="./assets/image/logo-variux.png" alt="Logo" class="logo-form"></a>
                            <h6 class="form-tile">POPUP Banner Module</h6>
                        </div>
                        <div class="form-contact__content">
                            <p>Whether you value a good old-fashion phone call, a power lunch, email, or an abbreviated text message, we are here to help make your life easier. No matter how you decide to reach out, we want to help you make your eCommerce profitable and beyond.</p>
                        </div>
                        <div class="form-contact__logo-footer">
                            <img src="./assets/image/UI - variux Saas.png" alt="Logo" class="logo-contact__footer">
                        </div>
                    </div>
                    <div class="form-contact__left d-flex justify-content-center align-items-center flex-column">
                        <div class="contact-logo mobile-contact">
                            <a href="#"><img src="./assets/image/logo-variux.png" alt="Logo" class="logo-form"></a>
                            <h6 class="form-tile">POPUP Banner Module</h6>
                        </div>
                        <form class="form-smb-contact d-flex justify-content-center align-items-center flex-column">
                            <input type="text" name="txtName" placeholder="Name" class="contact__input">
                            <input type="text" name="txtEmail" placeholder="Email address" class="contact__input">
                            <input type="text" name="txtPhone" placeholder="Phone" class="contact__input">
                            <input type="text" name="txtWebsite" placeholder="Your website" class="contact__input">
                            <input type="text" name="txtMessage" placeholder="Message" class="contact__input">
                            <div class="gr-btnContact d-flex justify-content-between w-100 h-64 flex-row align-items-center">
                                <button type="submit" class="btnTalk">Talk to us</button>
                                <div class="contact-email">
                                    Or email us at <a href="sales@variux.com">sales@variux.com</a>
                                </div>
                            </div   
                        </form>
                    </div>
                </div>
            </div>
>>>>>>> d0c4edf3b08422f0685de7f95b56c56d851e1ee8
        </div>
    ` 
};

export default formContact;