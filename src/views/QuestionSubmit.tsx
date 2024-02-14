import { useState } from 'react';
import QuestionCard from '../components/Quizes';
import { QuestionFormDataType, UserType } from '../types';
import QuizForm from '../components/QuizeForm';
import { createQuestion } from '../lib/apiWrapper';


type HomeProps = {
    isLoggedIn:boolean,
    currentUser: UserType|null,
}

export default function Home({ isLoggedIn, currentUser }: HomeProps) {

    const [newQuestion, setNewQuestion] = useState<QuestionFormDataType>({question: '', answer: ''})

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value, event.target.name);
        setNewQuestion({...newQuestion, [event.target.name]: event.target.value})
    }

    const handleFormSubmit = async(event: React.FormEvent) => {
        event.preventDefault();
        console.log(newQuestion)
        let token = localStorage.getItem('token') || ''
        let response = await createQuestion(token, newQuestion)
        if (response.error){
            console.log(response.error)
        }else{
            console.log(response.data)
        }
    }

    return (
        <>
            <h1>{ isLoggedIn ? 'Welcome back ' + currentUser!.username : 'Hello and Welcome' }</h1>
            <QuizForm handleChange={handleInputChange} newQuestion={newQuestion} handleFormSubmit={handleFormSubmit} />
        </>
    )
}