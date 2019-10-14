import React from 'react';

const PublishedBy = ({avatar, username, date, url}) => {
    return (
        <div className="publishedBy">

            <div className="publishedBy__user">
                <img className="publishedBy__user--avatar" src={avatar} alt=""/>

                <div className="">
                    <h6 className="publishedBy__user--name">{username}</h6>
                    {/*<p className="publishedBy__user--productFrom">Photo from {url}</p>*/}
                </div>
            </div>

            <p className="publishedBy--date">{date}</p>
        </div>
    );
};

export default PublishedBy;
