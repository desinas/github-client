import React from 'react';

function ProfiMedObject(props) {
    return(
        <section className="section">

        <article className="media">
        <figure className="media-left">
            <p className="image is-64x64">
            <img src={props.avatar_url} alt="Github user avatar" />
            </p>
        </figure>
        <div className="media-content">
            <div className="content">
            <p>
                <strong>{props.name}</strong> <small>@{props.login}</small> 🚦 <small>{props.location}</small>
                <br />
                <strong> Public Repositories: {props.public_repos} 🛢 </strong>
                <small> Public Gists: {props.public_gists} 💎 </small>
                <strong> Followers: {props.followers} 🔮 </strong>
                <small> Following: {props.following} 💈 </small>
            </p>
            </div>
            <nav className="level is-mobile">
            <div className="level-left">
                <a href="/" className="level-item">
                <span className="icon is-small"><i className="fas fa-reply"></i></span>
                </a>
                <a href="/" className="level-item">
                <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                </a>
                <a href="/" className="level-item">
                <span className="icon is-small"><i className="fas fa-heart"></i></span>
                </a>
            </div>
            </nav>
        </div>
        <div className="media-right" onClick={()=>{props.handleClick()}}>
            <button>Repos</button>
        </div>
        </article>

        </section>
    );
}

export default ProfiMedObject;


//onClick = { () => {props.handleClick()}
//onClick={() => alert("Hello from here")} //this in the attr of the main elem of component will bind the event