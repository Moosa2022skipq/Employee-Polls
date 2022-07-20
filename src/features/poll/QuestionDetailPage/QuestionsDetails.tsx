import {Card} from '@mui/material';
import CircularIndeterminate from '../../../layout/CircularIndeterminate';
import QuestionHandle from './QuestionHandle';


type QuestionDetailPageProps = {
    isLoading: boolean,
};

const QuestionDetailPage = ({isLoading}: QuestionDetailPageProps) => {


    if (isLoading) {
        return <CircularIndeterminate/>;
    }
    

    return (
        <>
            <Card sx={{display: 'flex'}}>
                   <QuestionHandle isLoading={false}/>
                </Card>
        </>
        )

}    

export default QuestionDetailPage;
