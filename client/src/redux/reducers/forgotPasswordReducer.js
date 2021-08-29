export const sendRecoveryEmailReducer = (state = {
    loading: false,
    data: {},
    serverValidation:false,
    success:false
}, action) => {
    switch (action.type) {
        case "EMAIL_REQUEST":
            return {
                loading: true,
                serverValidation:false,
                success:false
            }
        case "EMAIL_SENT":
            return {
                loading: false,
                otpForResetPassword: action.payload,
                serverValidation:false,
                success:true
            }
        case "EMAIL_SENT_FAIELD":
            return {
                loading: false,
                serverValidation:true,
                success:false
            }
        default:
            return state;
    }
}

export const updatePasswordReducer = (state = {
    loading: false,
    data: {},
    success:false
}, action) => {
    switch (action.type) {
        case "UPDATE_PASSWORD_REQUEST":
            return {
                loading: true,
                success:false
            }
        case "UPDATE_PASSWORD_SUCCESS":
            return {
                loading: false,
                data: action.payload,
                success:true
            }
        case "UPDATE_PASSWORD_FAIELD":
            return {
                loading: false,
                data: action.payload,
                success:false
            }
        default:
            return state;
    }
}