import React from 'react';

const Main = () => {
  return ( 
    <main>
      <div className="picture"></div>

      <div className="content">
        <div className="content-head">
          <div className="content-head-title">
            <h2>The Octocat</h2>
            <h3>Hastag du profil github</h3>
          </div>
          <div className="content-head-date">
            <p>Date à changer</p>
          </div>
        </div>
        <div className="content-details">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, excepturi illo eius itaque architecto sapiente.</p>
          <div className="content-details-repo">
            <div>
              <h4>Repos</h4>
              <p>8</p>
            </div>
            <div>
              <h4>Followers</h4>
              <p>3938</p>
            </div>
            <div>
              <h4>Following</h4>
              <p>9</p>
            </div>
          </div>
        </div>
        <div className="content-infos">
          <div className="content-infos-left">
            <div className="content-infos-inline">
              <p></p>
            </div>
            <div className="content-infos-inline">
              <p></p>
            </div>
          </div>
          <div className="content-infos-right">
            <div className="content-infos-inline">
                <p></p>
            </div>
            <div className="content-infos-inline">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </main>
   );
}
 
export default Main;