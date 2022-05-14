/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:21:04
 * @modify date 2022-05-01 00:08:36
 * @desc [description]
 */
export const getUserRole = (user) => {
    if(user?.roles.at(0) === 'ROLE_ADMIN') {
        return 'Administrateur';
    } else if(user?.roles.at(0) === 'ROLE_AUTHOR') {
        return 'Auteur';
    } else {
        return 'Lecteur';
    }
}

