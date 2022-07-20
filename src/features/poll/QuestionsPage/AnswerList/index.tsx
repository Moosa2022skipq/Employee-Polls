import {Fragment} from 'react';
import {List, ListItem, ListItemText} from "@mui/material";
import {QuestionWithAuthor} from "../../../../types";
import AnswerListItem from "./AnswerListItem";
import Divider from "@mui/material/Divider";

type AnswerListProps = {
    questions: Array<QuestionWithAuthor>,
};

const AnswerList = ({questions}: AnswerListProps) => (
    <List sx={{width: '100%', bgcolor: 'background.paper'}}>
        {questions.length ? questions.map((question: QuestionWithAuthor, i: number) => (
            <Fragment key={question.id}>
                <AnswerListItem question={question}/>
                {i !== questions.length - 1 && (
                    <Divider/>
                )}
            </Fragment>
        )) : (
            <ListItem>
                <ListItemText primary="No questions to see here..."/>
            </ListItem>
        )}
    </List>
);

export default AnswerList;
