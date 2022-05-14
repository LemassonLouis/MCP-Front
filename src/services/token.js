/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:27:27
 * @modify date 2022-04-25 20:27:27
 * @desc [description]
 */
export default function getJWTHeader(currentUser) {

    const token = localStorage.getItem("token");
    if(currentUser && token){
        return 'Bearer '+ token;
    }
    return false;
}
