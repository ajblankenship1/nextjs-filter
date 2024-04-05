'use client'
import { useState } from 'react';
import cities from './data/cities';

export default function Home() {
   const [filterInput,setFilterInput] = useState("");
   const [displayCities, setDisplayCities] = useState(cities);
   
   function handleFilterCities(event){
        setFilterInput(event.target.value);
        createNewDisplayCities(event.target.value);
    }
    
    function createNewDisplayCities(filterString){
        filterString = filterString.toLowerCase();
        let newArray=[];
        for (let item of cities){
            if(item.toLowerCase().includes(filterString)){
                newArray.push(item);
            }

        }
        setDisplayCities(newArray);
    }

    return (
        <main>
            <h1>Largest Cities In The World!</h1>
            <section>
                <label>Filter Cities</label>
                <input type="text" onChange={handleFilterCities} value={filterInput}/>
            </section>
            <ul>
                {
                    displayCities.map((city,index) => {
                        return (
                            <li key={index}>{city}</li>
                        );
                    })
                }
            </ul>
            
        </main>
    );
}
