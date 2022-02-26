export default function getJWTHeader(currentUser) {

    const token = localStorage.getItem("token");
    if(currentUser && token){
        return 'Bearer '+ token;
    }
    return false;
}
