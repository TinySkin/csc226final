import axios from 'axios';
import { useEffect, useState } from 'react';

function Book({selectedBook}){

    const [selectedBookData, setSelectedBookData] = useState(null);

    useEffect(() => {
        axios.get(` https://statenweb.mockable.io/employees ${selectedBook}`).then((r) => setSelectedBookData(r.data));
    }, [selectedBook]);

    // const selectedBook = props.selectedBook;
    // const { selectedBook } = props;
    if(!selectedBookData){
        return <p>Loading....</p>;
    }

    const {
        id,
        name,
        department
      
        
    } = selectedBookData;

    return <div>
        <img style={{maxHeight: '300px'}} src={id} alt={name} />
        
        <p>department: {department}</p>
        <p>name: {name}</p>
        
        

    </div>;
}

export default Book;