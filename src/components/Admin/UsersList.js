/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:20:52
 * @modify date 2022-04-25 20:21:54
 * @desc [description]
 */
import React, {useState, useEffect, Suspense}from 'react';
import { getAllUsers } from '../../services/userApiService';
import { getUserRole } from '../../Common/userRole';
import ResponsiveHeader from '../Common/Header/ResponsiveHeader';
import "./UsersList.css";
import ModalSelectedUser from './ModalSelectedUser';
import Lottie from "lottie-react";
import Loader from "../../Utils/Lottie/loader.json";

const UsersList = () => {

    const [show, setShow] = useState(false);
    const [lottieState, setLottieState] = useState(false);
    const [selectedUser, setSelectedUser] = useState([]);
    const [usersListState, setUsersListState] = useState([]);

    const handleShow = () => setShow(false);

    useEffect(() => {
        setLottieState(true);
        getAllUsers().then((res) => {
            if (res.status === 200) {
                setLottieState(false);
                setUsersListState(res.data);
            }
        })
        .catch((err) => {
            
            console.log(err);
        });
    }, []);

    const wrapperFunction = (user) => {
        setShow(true);
        setSelectedUser(user)
    }

    return (
        <div>
            <ResponsiveHeader title="Liste des utilisateurs"/>
            <br />
            <br />
                {lottieState && <Lottie className="content-lottie" animationData={Loader}/>}
            { usersListState.map((u) => {
                return (
                    <div key={u.id} onClick={() => wrapperFunction(u)} className="webapp-card__usersList" >
                        <div className="card-column">
                            <h4>{u.firstName} {u.lastName}</h4>
                            <p>{u.email}</p>
                        </div>
                        <div className="role-badge">
                            <p>{getUserRole(u)}</p>
                        </div>
                    </div>
                )}
            )}
            <ModalSelectedUser user={selectedUser} show={show} func={handleShow}/>
        </div>
    );
};

export default UsersList;