import React from 'react';
import moment from 'moment';

import iconLocation from '../assets/images/icon-location.svg';
import iconLink from '../assets/images/icon-website.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';
import iconCompany from '../assets/images/icon-company.svg';

const Main = ({
  user: {
    avatar_url,
    name,
    login,
    bio,
    created_at,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company
  }
}) => {
  
  return ( 
    <main>
      <div className="content">
        <div className="content-head">
          <div className="content-picture">
            <img src={avatar_url} alt={`Profil de ${login}`} />
          </div>
          <div className="content-head-content">
            <div className="content-head-content-name">
              <h2>{name}</h2>
              <h3>@{login}</h3>
            </div>
          <div className="content-head-content-date">
            <p>Joined {moment(created_at).format('D MMM YYYY')}</p>
          </div>
          </div>
        </div>
        <div className="content-details">

          <p>{bio ? bio : "This profile has no bio"}</p>
          <div className="content-details-repo">
            <div>
              <h4>Repos</h4>
              <p>{public_repos}</p>
            </div>
            <div>
              <h4>Followers</h4>
              <p>{followers}</p>
            </div>
            <div>
              <h4>Following</h4>
              <p>{following}</p>
            </div>
          </div>
        </div>
        <div className="content-infos">
          <div className="content-infos-left">
            <div 
              className="content-infos-inline"
              style={!location ? {opacity: 0.5} : {}}
            >
              <img className="link-1" src={iconLocation} alt="Icon of location" />
              <p>{location ? location : "Not Available"}</p>
            </div>
            <div 
              className="content-infos-inline"
              style={!blog ? {opacity: 0.5} : {}}
            >
              <img className="link-2" src={iconLink} alt="Icon of link" />
              <a 
                href={blog}
                style={!blog ? {pointerEvents: 'none'} : {}}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <p>{blog ? blog : "Not Available"}</p>
              </a>
            </div>
          </div>
          <div className="content-infos-right">
            <div 
              className="content-infos-inline" 
              style={!twitter_username ? {opacity: 0.5} : {}}
            >
              <img className="link-3" src={iconTwitter} alt="Icon of Twitter" />
              <a 
                href={`https://twitter.com/${twitter_username}`}
                style={!twitter_username ? {pointerEvents: 'none'} : {}}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <p>{twitter_username ? twitter_username : "Not Available"}</p>
                </a>
              </div>
            <div 
              className="content-infos-inline"
              style={!company ? {opacity: 0.5} : {}}
            >
              <img className="link-4" src={iconCompany} alt="Icon of company" />
              <p>{company ? company : "Not available"}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
   );
}
 
export default Main;