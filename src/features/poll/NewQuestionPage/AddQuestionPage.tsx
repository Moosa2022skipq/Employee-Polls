import Typography from "@mui/material/Typography";
import TextBox from "./TextBox";

const NewQuestionPage = () => {


    return (
        <>
            <Typography variant="h2" component="div" gutterBottom>
                Add Question
            </Typography>
            <Typography variant="body2" component="div" gutterBottom>
                Would You Rather
            </Typography>
            <TextBox/>
        </>
    );
};

export default NewQuestionPage;
