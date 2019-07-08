import React from 'react';

function RepoTile(props) {
  //if (props.isProficlicked) {}
    return(
      <section className="section">

      <div className="tile is-ancestor">
          <div className="tile is-12">
              <div className="tile">
              <div className="tile is-parent is-vertical box">
                  <article className="tile is-child notification is-warning">
                  <p className="title">{props.name}</p>
                  <p className="subtitle">{props.description}</p>
                  <h3>Stars: <strong>{props.stargazers_count}</strong> 💥 Watchers: <strong>{props.watchers}</strong> 🔍 Forked: <strong>{props.forks_count}</strong> times 🔌</h3>
                  </article>
              </div>
            </div>
          </div>
        </div>

      </section>


    )
    //return this.props.children
  }


export default RepoTile;
