import {useAppSelector} from "../../../app/hooks";
import {leaderSelector, userSelector} from "../../user/userSlice";
import {authUserSelector} from "../../auth/authSlice";
import Maplist from "./maplist";
import CircularIndeterminate from "../../../layout/CircularIndeterminate";
import Typography from "@mui/material/Typography";

const Leaderboard = () => {
    const {status} = useAppSelector(userSelector);


    if (status === 'loading') {
        return <CircularIndeterminate/>;
    }

    return (
        <>
            <Typography variant="h2">
                Leaderboard
            </Typography>
            <Maplist/>
        </>
    )
};

export default Leaderboard;
