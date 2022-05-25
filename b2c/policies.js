/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_signupsignin",
        forgotPassword: "B2C_1_reset",
        editProfile: "B2C_1_edit_profile_v2"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://yourdomain.b2clogin.com/yourdomain.onmicrosoft.com/B2C_1_signupsignin",
        },
        forgotPassword: {
            authority: "https://yourdomain.b2clogin.com/yourdomain.onmicrosoft.com/B2C_1_reset",
        },
        editProfile: {
            authority: "https://yourdomain.b2clogin.com/yourdomain.onmicrosoft.com/B2C_1_edit_profile_v2"
        }
    },
    authorityDomain: "yourdomain.b2clogin.com"
}

// exporting config object for jest
if (typeof exports !== 'undefined') {
    module.exports = {
        b2cPolicies: b2cPolicies,
    };
}