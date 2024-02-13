import {useState, useEffect} from 'react'
import {getAllQuestions} from '../lib/apiWrapper'
import Quizes from '../components/Quizes'


type Props = {}

export default function Questions({ }: Props) {
    const [quizes, setQuizes] = useState([])

    useEffect( () => {
        async function fetchData(){
            const response = await getAllQuestions();
            console.log(response);
            if (response.data){
                let quizes = response.data;
                setQuizes(quizes)
            }
        }

        fetchData();
    }, [] )

    return (
        <div>{quizes.map(q => <Quizes key={q.id} question = {q} />)}</div>
    )
}