import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SettingsIcon from "@material-ui/icons/Settings";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import React, { useEffect, useState } from 'react';
import Section from '../section/Section';
import EmailRow from '../emailRow/EmailRow';
import './EmailList.css';
import { db } from '../api/firebase';


function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => 
            setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            }))
            )
            );
    }, [])

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="Primary" color='red' selected />
                <Section Icon={PeopleIcon} title="Social" color='#1A73E8' />
                <Section Icon={LocalOfferIcon} title="Promotions" color='green' />
            </div>

            <div className="emailList__list">
                    {emails.map(({id, data: { to, subject, message, timestamp}}) => (
                        <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                         />
                    ))}
                <EmailRow 
                title="Youtube"
                subject="Hey Youtuber!!"
                description="This is a message"
                time="12pm" />
                <EmailRow 
                title="Antonio"
                subject="Hey mate!!"
                description="How are you?"
                time="7am" />
                <EmailRow 
                title="Gleb"
                subject="Assigment"
                description="When I need to complete the task?"
                time="14pm" />
                <EmailRow 
                title="Rob"
                subject="Travel"
                description="Do you interesting about travel?"
                time="9am" />
            </div>
        </div>
    )
}

export default EmailList;