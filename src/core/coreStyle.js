'use strict';

export const coreStyle = () => {
    var styleTag = document.createElement("style");
    document.head.appendChild(styleTag);
    var cssStyles = `
    .my-popup {
        position: absolute;
        z-index: 10 !important;
    }
    
    .active {
        display: block !important;
    }
    
    .closePopup {
        display: none;
    }
    
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 0;
    }
    
    .popup {
        width: 100%;
        height: 100%;
        display: flex;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 2px 3px 3px 2px #ccc;
    }
    
    .img-wrapper {
        height: 100%;
        width: 45%;
    }
    
    .popup img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .content {
        flex-grow: 1;
        text-align: center;
        background-color: #fff;
    }
    
    .content .popup-heading {
        font-size: 160%;
        line-height: 100%;
        height: 10%;
        font-weight: 700;
        color: #bbb;
        margin-top: 10%;
        margin-bottom: 0;
    }
    
    .content .popup-offer {
        font-size: 180%;
        margin-top: 4%;
        margin-bottom: 0;
    }
    
    .content .popup-desc {
        font-size: 130%;
        color: #bbb;
        margin-top: 4%;
    }
    
    .content .popup-form {
        margin-top: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .content .popup-form .email {
        width: 70%;
        padding: 4% 8%;
        border-radius: 20px;
        border: 1px solid #ccc;
        background-color: #ddd;
        outline: none;
        margin-bottom: 10%;
    }
    
    .content .popup-form .submit {
        width: 70%;
        padding: 2% 8%;
        border-radius: 20px;
        border: none;
        background-color: red;
        color: #fff;
        font-size: 150%;
        font-weight: bold;
        outline: none;
        margin-bottom: 10%;
    }
    
    .content .popup-form .submit:hover {
        cursor: pointer;
        opacity: 0.8;
    }
    
    .content .refuse {
        border: none;
        background-color: transparent;
        text-decoration: underline;
        cursor: pointer;
        padding: 1.5%;
    }
    
    /* Responsive */
    @media screen and (max-width: 768px) {
        .popup {
            width: 100%;
            height: 100%;
            display: flex;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 2px 3px 3px 2px #ccc;
        }
    
        .content .popup-heading {
            font-size: 150%;
            line-height: 100%;
            height: 10%;
            font-weight: 700;
            color: #bbb;
            margin-top: 10%;
            margin-bottom: 0;
        }
        
        .content .popup-offer {
            font-size: 150%;
            margin-top: 4%;
            margin-bottom: 0;
        }
        
        .content .popup-desc {
            font-size: 130%;
            color: #bbb;
            margin-top: 4%;
        }
        
        .content .popup-form {
            margin-top: 16%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    
        .content .popup-form .email {
            width: 60%;
            padding: 3% 8%;
            border-radius: 20px;
            border: 1px solid #ccc;
            background-color: #ddd;
            outline: none;
            margin-bottom: 10%;
        }
        
        .content .popup-form .submit {
            width: 60%;
            padding: 2% 8%;
            border-radius: 20px;
            border: none;
            background-color: red;
            color: #fff;
            font-size: 150%;
            font-weight: bold;
            outline: none;
            margin-bottom: 10%;
        }
    }
    
    @media screen and (max-width: 640px) {
        .popup {
            width: 100%;
            height: 100%;
            display: flex;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 2px 3px 3px 2px #ccc;
        }
    
        .content .popup-heading {
            font-size: 130%;
            line-height: 100%;
            height: 10%;
            font-weight: 700;
            color: #bbb;
            margin-top: 10%;
            margin-bottom: 0;
        }
        
        .content .popup-offer {
            font-size: 150%;
            margin-top: 4%;
            margin-bottom: 0;
        }
        
        .content .popup-desc {
            font-size: 120%;
            color: #bbb;
            margin-top: 4%;
        }
        
        .content .popup-form {
            margin-top: 16%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    
        .content .popup-form .email {
            width: 60%;
            padding: 3% 8%;
            border-radius: 20px;
            border: 1px solid #ccc;
            background-color: #ddd;
            outline: none;
            margin-bottom: 10%;
        }
        
        .content .popup-form .submit {
            width: 60%;
            padding: 2% 8%;
            border-radius: 20px;
            border: none;
            background-color: red;
            color: #fff;
            font-size: 120%;
            font-weight: bold;
            outline: none;
            margin-bottom: 10%;
        }
    }
    
    @media screen and (max-width: 480px) {
        .popup {
            width: 100%;
            height: 100%;
            display: flex;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 2px 3px 3px 2px #ccc;
        }
    
        .content .popup-heading {
            font-size: 100%;
            line-height: 100%;
            height: 10%;
            font-weight: 700;
            color: #bbb;
            margin-top: 8%;
            margin-bottom: 0;
        }
        
        .content .popup-offer {
            font-size: 120%;
            margin-top: 4%;
            margin-bottom: 0;
        }
        
        .content .popup-desc {
            font-size: 90%;
            color: #bbb;
            margin-top: 4%;
        }
        
        .content .popup-form {
            margin-top: 16%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    
        .content .popup-form .email {
            width: 70%;
            font-size: 60%;
            padding: 3% 8%;
            border-radius: 20px;
            border: 1px solid #ccc;
            background-color: #ddd;
            outline: none;
            margin-bottom: 6%;
        }
        
        .content .popup-form .submit {
            width: 70%;
            padding: 2% 4%;
            border-radius: 20px;
            border: none;
            background-color: red;
            color: #fff;
            font-size: 80%;
            font-weight: bold;
            outline: none;
            margin-bottom: 8%;
        }
    }
    
    @media screen and (max-width: 360px) {
        .popup {
            width: 100%;
            height: 100%;
            display: flex;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 2px 3px 3px 2px #ccc;
        }
    
        .content .popup-heading {
            font-size: 90%;
            line-height: 90%;
            height: 10%;
            font-weight: 700;
            color: #bbb;
            margin-top: 8%;
            margin-bottom: 0;
        }
        
        .content .popup-offer {
            font-size: 100%;
            margin-top: 4%;
            margin-bottom: 0;
        }
        
        .content .popup-desc {
            font-size: 70%;
            color: #bbb;
            margin-top: 4%;
        }
        
        .content .popup-form {
            margin-top: 12%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    
        .content .popup-form .email {
            width: 70%;
            font-size: 50%;
            padding: 2% 6%;
            border-radius: 20px;
            border: 1px solid #ccc;
            background-color: #ddd;
            outline: none;
            margin-bottom: 6%;
        }
        
        .content .popup-form .submit {
            width: 70%;
            padding: 2% 6%;
            border-radius: 20px;
            border: none;
            background-color: red;
            color: #fff;
            font-size: 70%;
            font-weight: bold;
            outline: none;
            margin-bottom: 6%;
        }
    
        .content .refuse {
            font-size: 60%;
            border: none;
            background-color: transparent;
            text-decoration: underline;
            cursor: pointer;
            padding: 1.5%;
        }
    }
    `;

    styleTag.appendChild(document.createTextNode(cssStyles));
};