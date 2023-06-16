import React, { useContext } from 'react';
import { ReferenceDataContext } from '../../ReferenceDataContext';
import InformationList from '../../components/InformationList.jsx';
import Calendar from '../../components/Calendar/Calendar.jsx';


import './Result.css';

const Result = () => {

    // const storedLecturerCourses = localStorage.getItem('lecturerCourses');

    const { lecturerCourses } = useContext(ReferenceDataContext);

    const listItems = {
        "dane o kursie": {
            'Godziny zajęć': '8 - 16',
            'Nazwa przedmiotu': "Programowanie w języku C",
            'sala': 'C-3:229'
        },
        "dane o prowadzącym": {
            "Imię i nazwisko": "Jan Kowalski",
            "katedra": "Katedra Informatyki"
        },
        "Ogloszenie": {
            "Ogloszenie": "Treść ogłoszenia",
        },
        "Konsultacje": {
            "zoom": "xxx",
            "teams": "xxx",
            "web": "xxx"
        }
    };

    return (
        <div className='result-box'>
            <div>
                <InformationList listItems={listItems} />
            </div>
            <div>
                <Calendar lecturerCourses={lecturerCourses} />
            </div>
        </div>
    );
};

export default Result;