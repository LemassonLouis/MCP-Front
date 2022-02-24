import React, {useState} from 'react';
import ResponsiveHeader from '../Common/Header/ResponsiveHeader';
import FooterResponsiveBtn from '../Common/Footer/FooterResponsiveBtn';

const EditPwd = () => {
    const [load, setLoad] = useState(false);
    return (
        <div>
            <ResponsiveHeader title="Modifier mon mot de passe"/>
            <FooterResponsiveBtn color="primary" load={load} txt="Modifier"/>
        </div>
    );
};

export default EditPwd;