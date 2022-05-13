export default (
    user={
        loading:true,
        data:{},
        isError:false,
        error_msg:''
    }
,action)=>{
    switch (action.type){
        case 'user_loading':
            return {
                loading: true,
                data:{},
                isError:false,
                error_msg:''
            }
        case 'user_loadover':
            return {
                loading: false,
                data:action.data,
                isError: false,
                error_msg: ''
            }
        case 'user_error':
            return {
                loading: false,
                data:{},
                isError: true,
                error_msg: action.error_msg
            }
        default:
            return user;
    }
}