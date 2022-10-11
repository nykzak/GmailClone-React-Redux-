import { Checkbox, IconButton } from '@material-ui/core';
import LabelImportantOutlinedIcon  from '@material-ui/icons/LabelImportantOutlined';
import StarBorderOutlinedIcon  from '@material-ui/icons/StarBorderOutlined';
import React from 'react';
import './EmailRow.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from '../../features/mailSlice';

function EmailRow({title, subject, description, id, time}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
                title, 
                subject, 
                description, 
                id, 
                time
            })
        );
        navigate("/mail");
    }

    return (
        <div onClick={openMail} className="emailRow">
                <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
                </div>

                <div className="emailRow__title">
                <h4>{title}</h4>
                </div>

                <div className="emailRow__message">
                <h4>{subject}
                <span className="emailRow__description">
                {" - "}{description}</span>
                </h4>
                </div>

                <div className="emailRow__time">
                {time}
                </div>
        </div>
    )
}

export default EmailRow;