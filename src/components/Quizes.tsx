import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { QuestionType } from '../types';;
import { UserType } from '../types';;
import {useState} from 'react';


type Props = {
    question: QuestionType,
    currentUser: UserType | null
}

export default function Quizes({ question, currentUser }: Props) {
    const [checkGuess, setCheckGuess] = useState(false) 
    const [correctAnswer, setCorrectAnswer] = useState(false) 
    const [guess, setGuess] = useState ('')
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setGuess(e.target.value)
    }

    const checkAnswer = ()=>{
        setCheckGuess(true)
        if(question.answer === guess){
            console.log('Hurray Crushed It!')
            setCorrectAnswer(true)
        }else{
            console.log('What a dum dum')
            setCorrectAnswer(false)
        }
    }


    return (
        <Card className='my-3'>
            <Card.Body>
                <Card.Title>{question.question}</Card.Title>

                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Answer"
                        aria-label="Answer"
                        aria-describedby="basic-addon2"
                        onChange = {handleChange} 
                        value = {guess}
                    />
                    <Button variant="secondary" id="button-addon2" onClick = {checkAnswer}>
                        Check Answer
                    </Button>
                </InputGroup>

                {checkGuess ? correctAnswer ? <h4>Congrates!! You got it right I guess.....</h4> : <h4>WRONG!!! Try again you suck!!</h4> : null}
                <Card.Subtitle>Posted at {question.dateCreated} by {question.author}</Card.Subtitle>
                {question.userId === currentUser?.id && (
                    <Link to={`/questions/${question.id}`}/>
                )}
            </Card.Body>
        </Card>
    )
}