export const STRING={
ADMIN_LOGIN:"Admin Login",
LOGIN:'Login',
FORGOT_PASSWORD:"Forgot Password",
FORGOT_PASSWORD2:"Forgot Password?",
VIEW_PROFILE:"View Profile",
NO_DATA:"No Data Available",
BANK_DETAILS:"Bank Details",
MANAGE_PROFILE:"Manage Profile",
SAVE:"Save",


PLACEHOLDER:{
    EMAIL:"Email",
    PASSWORD:"Password",
    ENTER_HERE:"Enter here....",
    DEFAULT_DATE:"dd/mm/yyyy"
},

HEADING:{
    EMAIL:"Email",
    PASSWORD:"Password",
    NAME:"Name",
    PHONE:"Phone",
    DOB:"DOB",
    ADDRESS:"Address",
    REG_NUM:"Registration Number",
    INSURANCE:"Insurance Valid Till",
    RATING:"Overall Rating",
    TOTAL_EXP:"Total Experience",
    COMP_SYS_FAMILIAR:"Computer Systems Familiar With:",
    BANK_NAME:"Bank Name",
    ACC_NO:"Account Number",
    SORT_CODE:"Sort Code",
    NAT_INS_NO:"National Insurance No.",
    DESCRIPTION:"Descriptions",
    EDUCATION:"Education",
    EXPERIENCE:"Experience",
    UPLOADED_DOCUMENTS:"Uploaded Documents",
    REGISTRATION_DETAILS:"Registration",
    INVOICE:"Invoice",
    PROFILE_VERIFICATION:"Profile Verification",
    CV:"CV",
    FIRST_NAME:"First Name",
    LAST_NAME:"Last Name",
    PHONE_NUMBER:"Phone Number",
    EMAIL_ADDRESS:"Email Address",
    COUNTRY:"Country",
    STATE:"State",
    CITY:"City",
    POST_CODE:"Post Code"


},

WARNING:{
    EMAIL:"Please enter a valid email address",
    VALID_NAME:"Please enter valid name",
    FIRST_NAME_EMPTY:"First name should not be empty",
    LAST_NAME_EMPTY:"Last name should not be empty",
    VALID_NUMBER:"Please enter valid number",
    DOB_REQUIRED:"Date of birth is required",
    CITY_REQUIRED:"City is required",
    ADDRESS_REQUIRED:"Address is required",
    POST_CODE_REQUIRED:"Postal code is required",


},

FLASH_MESSAGE:{
    TRY_AGAIN:'Something went wrong,Please try again!'
}

}

export const NAVIGATION={
    EXAMPLE:'example',
    LOGIN:"login",
    FORGOT_PASSWORD:"forgotPassword",
    PROFILE:"profile",
    EDIT_PROFILE:"editProfile",

    EDIT_TOP_TABS:{
        REGISTRATION_DETAILS:"registrationDetails",
        INVOICE:"invoice",
        PROFILE_VERIFICATION:"profileVerification",
        CV:"cv"
    }
    
}

export const REGEX={
    EMAIL:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
    FIRST_NAME:/^[A-Za-z]{3,}$/
}

export const REGISTRATION_FIELD_NUMBER={
    FIRST_NAME:1,
    LAST_NAME:2,
    PHONE_NUMBER:3,
    DOB:4,
    EMAIL_ADDRESS:5,
    COUNTRY:6,
    STATE:7,
    CITY:8,
    ADDRESS:9,
    POST_CODE:10
}

export const DATABASE={
    PROFILE:"profile"
}