/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:25:36
 * @modify date 2022-04-25 20:25:37
 * @desc [description]
 */
import React, {useState, useContext} from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
import ResponsiveHeader from '../Common/Header/ResponsiveHeader';
import { editUserPassword } from '../../services/userApiService';
import LoadingButton from '@mui/lab/LoadingButton';
import FooterResponsiveBtn from '../Common/Footer/FooterResponsiveBtn';
import '../Common/Footer/FooterResponsiveBtn.css'

const EditPwd = () => {

    const [load, setLoad] = useState(false);
    const {currentUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    /**
     * Recovery of data entered by the user in the inputs
     */
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setInputs(values => ({...values, [name]: value}));
    }

    const editPwd = (e) => {
        e.preventDefault();
        setLoad(true);
        let data = {
            password : inputs.password,
        }
        console.log(data);
        if(inputs.password === inputs.confirm){
            editUserPassword(data, currentUser).then(
                (res) => res.status === 200 && navigate(`/profile/${currentUser?.id}/`)
            ).catch((err) => {
                console.log(err)
                setLoad(false)
            })
        }
    }

    return (
        <div>
            <ResponsiveHeader title="Modifier mon mot de passe"/>
            <br/>
            <br />
            <form onSubmit={e => editPwd(e)}>
                <div>
                    <TextField 
                        required
                        label="Nouveau mot de passe" 
                        variant="outlined" 
                        type="password" 
                        name="password"
                        onInput={handleChange}  />
                    <TextField 
                        required
                        label="Confirmer le mot de passe" 
                        variant="outlined" 
                        type="password" 
                        name="confirm" 
                        onInput={handleChange}  />
                    <br/>
                    <br />
                </div>
                <LoadingButton className='webapp-layout__desktop--btn' type="submit" loading={load} color="primary" variant="contained">Modifier</LoadingButton>
                <FooterResponsiveBtn color="primary" load={load} txt="Modifier"/>
            </form>
        </div>
    );
};

export default EditPwd;
