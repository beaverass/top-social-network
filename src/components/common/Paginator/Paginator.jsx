import React, {useState} from 'react';
import classes from "../../Users/users.module.css";

const Paginator = ({totalItemsCount, currentPage, onPageChanged, pageSize, portionSize=10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    let portionCount = Math.ceil(totalItemsCount/portionSize);
    const [portionNumber , setPortionNumber ] = useState(Math.floor(currentPage/10 + 1))
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div style={{margin: 10}}>

            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span style={{padding: 2, border: "1px solid gray"}}
                    className={currentPage === p ? classes.selectedPage : classes.notSelectedPage}
                    onClick={(e) => {
                        onPageChanged(p)}} key={p}>
                        {p}</span>
            })}

            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}

        </div>
    );
};

export default Paginator;