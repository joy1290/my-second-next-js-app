import React from 'react';
import Counter from '../components/Counter';


const DashboardPage = () => {
    console.log('dashboard page rendered');
   

    return (
        <div>
            <h2>Dashboard Page</h2>
            <Counter></Counter>
            <ul>
                <li>Item 5</li>
                <li>Item 6</li>
                <li>Item 7</li>
                <li>Item 8</li>
            </ul>
        </div>
    );
};

export default DashboardPage;