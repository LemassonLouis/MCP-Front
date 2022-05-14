/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:19:14
 * @modify date 2022-04-25 20:19:50
 * @desc [description]
 */
import React from 'react';
import {Modal, Box, Typography, Button} from '@mui/material';
import { TextField } from '@mui/material';
import "./ModalSelectedUser.css";
import { getUserRole } from '../../Common/userRole';

const ModalSelectedUser = ({func, show, user}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'background.paper',
        borderRadius: '10px',
        p: 3,
    };

    const userRole = () => {
        if(user.length !== 0){
            return getUserRole(user);
        }
    }
    /**
     * TODO: 
     * A new back route must be created in order to modify the profile
     */

    return (
        <div>
            <Modal
                open={show?true:false}
                onClose={func}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <br />
                    <br />
                    <form>
                        <div>
                            <TextField
                                required
                                label="Email"
                                variant="outlined"
                                type="email"
                                name="email"
                                defaultValue={user.email}
                                />
                            <br />
                            <br />
                            <TextField
                                required
                                label="Prénom"
                                variant="outlined"
                                type="text"
                                name="firstName"
                                defaultValue={user.firstName}
                                />
                            <br />
                            <br />
                            <TextField
                                required
                                label="Nom"
                                variant="outlined"
                                type="text"
                                name="lastName"
                                defaultValue={user.lastName}
                                />
                            <br />
                            <br />
                            <TextField
                                required
                                label="Rôle"
                                variant="outlined"
                                type="text"
                                name="role"
                                defaultValue={userRole()}
                                />
                            <br />
                            <br />
                            <br />
                        </div>
                        <Button color="primary" variant="contained">Modifier</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalSelectedUser;