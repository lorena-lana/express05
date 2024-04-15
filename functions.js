function response (status, message, data= null){
    return{
        status,
        message,
        data,
        timestramp: new Date().getTime()
    }
}

module.exports ={
    response
}