class Auth{
    constructor(){
         this.isAthenticated=false
    }
    login(cb){
        this.isAthenticated=true
       cb()
    }
    logout(cb){
        this.isAthenticated=false
        cb()
    }
    checkAuthentication(){
        return this.isAthenticated
    }
}

export default new Auth();