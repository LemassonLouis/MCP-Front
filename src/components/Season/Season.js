/**
 * @author Hofmann Nicolas
 **/
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CircularProgress,
    IconButton,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCallback, useEffect, useState } from "react";
import {
    getAllSeasons,
    deleteSeason,
} from "../../services/SeasonService";
import { useNavigate } from "react-router-dom";
import ResponsiveHeader from "../Common/Header/ResponsiveHeader";

const Season = ({ onClick }) => {
    const [seasonsState, setSeasonsState] = useState([]);
    const [seasonsLoading, setSeasonsLoading] = useState(false);

    const navigate = useNavigate();

    const initSeasons = useCallback(async () => {
        try {
            setSeasonsLoading(true);
            const seasons = await getAllSeasons();
            if (seasons.status === 200) {
                console.log(seasons);
                setSeasonsLoading(false);
                setSeasonsState(seasons.data);
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    const deleteSeasonById = useCallback(
        async (id) => {
            console.log(id);
            await deleteSeason(id);
            initSeasons();
        },
        [initSeasons]
    );

    useEffect(() => {
        if (onClick) {
            initSeasons();
        }
        initSeasons();
    }, [initSeasons, onClick]);

    return (
        <>
            <ResponsiveHeader title={"Liste des saisons"} /> <br /> <br />
            < Button variant="contained" onClick={() => navigate("/seasons/add")}>
                Ajouter
            </Button>
            <div className="card">
                {seasonsLoading && <CircularProgress />}
                {seasonsState.map((e) => {
                    return (
                        <>
                            <div className="uniqueCard" key={e.name}>
                                <Card sx={{ maxWidth: 350 }}>
                                    <CardContent>
                                        <Typography
                                            component="div"
                                            variant="h5"
                                            color="text.primary"
                                        >
                                            {e.SEA_name}
                                        </Typography>
                                        <Typography
                                            component="div"
                                            variant="h6"
                                            color="text.secondary"
                                        >
                                            {e.SEA_date_start}
                                        </Typography>
                                        <Typography
                                            component="div"
                                            variant="h6"
                                            color="text.secondary"
                                        >
                                            {e.SEA_date_end}
                                        </Typography>

                                    </CardContent>
                                    <CardActions>
                                        <IconButton variant="center">
                                            <DeleteIcon onClick={() => deleteSeasonById(e.id)} />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Season;
