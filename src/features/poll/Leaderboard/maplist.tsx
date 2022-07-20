import {useAppSelector} from "../../../app/hooks";
import {leaderSelector} from "../../user/userSlice";
import {UserWithScore} from "../../../types";
import {authUserSelector} from "../../auth/authSlice";
import {Avatar, List, ListItemAvatar, ListItem, ListItemText} from "@mui/material";





const Maplist = () => {
    const leadNames = useAppSelector(leaderSelector);
    const authUser = useAppSelector(authUserSelector);

            return (


                    <List>
                    {leadNames.map((user: UserWithScore) => {
                        let style: { [key: string]: string } = {};

                        if (user.id === authUser!.id) {
                            style['backgroundColor'] = '#81D4FA';
                        }

                        return (
                            <ListItem key={user.id} alignItems="flex-start" style={style}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={user.avatarURL || ''}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={user.name}
                                    secondary={(
                                        <>
                                            {`Current score: ${user.score}`}<br/>
                                            {`Asked: ${user.questions.length}`}<br/>
                                            {`Answered: ${Object.keys(user.answers).length}`}
                                        </>
                                    )}
                                />
                            </ListItem>
                        )
                    })}
                    </List>
  )};

  
export default Maplist;