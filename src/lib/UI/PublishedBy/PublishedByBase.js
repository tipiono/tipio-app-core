import React from 'react';
import { ChangeAvatar } from '../../index';

const PublishedBy = ({ avatar, username, date, url, children }) => {
    return (
        <div className="publishedBy">
            <div className="publishedBy__user">
                {avatar ? (
                    <img className="publishedBy__user--avatar" src={avatar} alt="" />
                ) : (
                    <div className="publishedBy__user--avatar--empty">
                        <svg width={120} height={120} viewBox="0 0 120 120">
                            <defs>
                                <path
                                    id="prefix__a"
                                    d="M17.543 102.247c-23.39-23.39-23.39-61.314 0-84.704 23.39-23.39 61.314-23.39 84.704 0 23.39 23.39 23.39 61.314 0 84.704-23.39 23.39-61.314 23.39-84.704 0z"
                                />
                            </defs>
                            <g fill="none" fillRule="evenodd">
                                <mask id="prefix__b" fill="#fff">
                                    <use xlinkHref="#prefix__a" />
                                </mask>
                                <use fill="#EDEDED" xlinkHref="#prefix__a" />
                                <g mask="url(#prefix__b)">
                                    <path fill="#F4F4F4" d="M-2 120h124V0H-2z" />
                                    <path
                                        fill="#DBDBDB"
                                        d="M60.75 13c12.962.159 18.883 12.226 19.363 17.862.48 5.636-.96 13.654-1.2 14.845-.24 1.19-1.12 6.271-2.961 10.48-1.84 4.206-5.601 7.54-5.601 7.54s-.16 2.223 0 4.764c.16 2.54 3.206 3.101 3.206 3.101s22.38 6.53 31.858 9.666C114.894 84.392 117 107.38 117 107.38V120H2v-12.62s2.107-22.988 11.585-26.122c9.478-3.135 31.858-9.666 31.858-9.666s3.046-.561 3.206-3.101c.16-2.541 0-4.764 0-4.764s-3.76-3.334-5.6-7.54c-1.84-4.209-2.721-9.29-2.961-10.48-.24-1.19-1.68-9.209-1.2-14.845.48-5.636 6.4-17.703 19.363-17.862h2.499z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                )}

                <div className="">
                    <h6 className="publishedBy__user--name">{username}</h6>
                    {/*<p className="publishedBy__user--productFrom">Photo from {url}</p>*/}
                </div>
            </div>
            {children}
        </div>
    );
};

export default PublishedBy;
