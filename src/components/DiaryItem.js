import React from "react";
import { Link } from "react-router-dom";

function DiaryItem(props) {
    return (
        <>
            <div className="diary__item__info">
                <h3 className="diary__item__text">{props.title}</h3>
                <br />
                <h4 className="diary__item__excursion">{props.excursion}</h4>
                <br />
                <p className="diary__item__paragraph">{props.text}</p>
                <br />
                <h4 className="diary__item__checklist">{props.wildlife}</h4>
                <br />
            </div>
        </>
    );
}

export default DiaryItem;
