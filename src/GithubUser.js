import React from 'react';
import ProfiMedObject from './ProfiMedObject';
import RepoTile from "./RepoTile";
//import Pagination from "./components/Pagination";

import axios from 'axios';
import { API, REPO_PER_PG } from './defaults';

/**
 * 
 * @param {*} props 
 */
class GithubUser extends React.Component {
    constructor(props) {
          super(props);

        this.state = { 
            userDetails: {
                name: "Github Username",
                location: "Somewhere in Earth",
                followers: 0,
                following: 0,
                public_gists: 0,
                public_repos: 0
            },
            isProfiClicked: false,
            repos: [],
            repoPage: 1
        };
        this.handleClick=this.handleClick.bind(this);
        this.handleNextReposClick=this.handleNextReposClick.bind(this);
        this.handlePrevReposClick=this.handlePrevReposClick.bind(this);
    }

    componentDidMount() {

        this.getUserDetails(this.props.login);
        this.getUserRepos(this.props.login, this.state.repoPage);
    }

    // shouldComponentUpdate() {}

    // componentWillUnmount() {}

    handleClick () {
        
        this.setState( {isProfiClicked: !this.state.isProfiClicked} )
    };

    handleNextReposClick () {
        
        const nextPageNum=this.state.repoPage + 1; 
        //async
        this.setState({ repoPage: nextPageNum });
        //async
        this.getUserRepos(this.props.login, nextPageNum);
    }

    handlePrevReposClick () {

        const prevPageNum=this.state.repoPage -1;
        //async
        this.setState({ repoPage: prevPageNum });
        //async
        this.getUserRepos(this.props.login, prevPageNum);

    }

     /**
     * @function getUserDetails use axios library in order to call the api and return a promise on resolve
     * @todo manage to chain this function with the the getUserRepos so that to have user repos data ready
     * @param {string} ghUser is passed to the function to make an api call to github at the users endpoint
     * and return data with details of the user from github profile
     * @todo try to use ghUser=this.state.user.login as this param for user initialization 
     */
    getUserDetails = function (ghUser) {

        axios.get(`${API}/users/${ghUser}`)
        .then( (response) => {
            //console.log(response.data);
            this.setState({userDetails: response.data});
            //console.log(this.state.userDetails);
        }).catch( (error) => {
            console.error("Error on fetching Github user data:" + error);
            window.alert("Sorry, there is a malfunction on fetching Github user details!");
        })
    }

     /**
     * @function getUserRepos use axios library in order to call the api and return a promise on resolve
     * @param {string} ghUser is passed to the function to make an api call to github at the users endpoint
     * and return data for repositories that associated with this github user
     * @example https://api.github.com/users/yyx990803/repos?sort=updated&type=owner&direction=%20desc&page=1&per_page=10
     */
    getUserRepos = function (ghUser, repoPage=1) {

        if (repoPage<1) {repoPage=1};
        axios.get(`${API}/users/${ghUser}/repos?sort=updated&type=owner&direction=%20desc&page=${repoPage}&per_page=${REPO_PER_PG}`)
        .then( (response) => {
            //console.log(response.data);
            this.setState({repos: response.data});
            //console.log(this.state.repos);
        }).catch( (error) => {
            console.error("Error on fetching Github repos data:" + error);
            window.alert("Sorry, there is a malfunction on fetching Github user repos!");
        })
    }

    render() {
        return(
            
            <React.Fragment>
                <ProfiMedObject key={this.props.id} login={this.props.login}
                    name={this.state.userDetails.name} avatar_url={this.props.avatar_url}
                    followers={this.state.userDetails.followers} following={this.state.userDetails.following}
                    public_gists={this.state.userDetails.public_gists} handleClick={this.handleClick}
                    public_repos={this.state.userDetails.public_repos} location={this.state.userDetails.location} />

                { this.state.isProfiClicked && this.state.repos
                        .map(( repo ) => ({ 'id' : repo.id,
                                            'name' : repo.name,
                                            'description' : repo.description,
                                            'license' : repo.license,
                                            'stargazers_count' : repo.stargazers_count,
                                            'watchers' : repo.watchers,
                                            'forks_count' : repo.forks_count }) )
                                            .map(( repo ) => ( <RepoTile {...repo} key={repo.id} /> ))}

                { this.state.isProfiClicked && 
                    <div className="container">
                        <nav className="pagination" role="navigation" aria-label="pagination">
                            {this.state.repoPage>1 ? <button onClick={this.handlePrevReposClick} className="pagination-previous">Previous</button>
                                                   : <button className="pagination-previous" title="This is the first page" disabled>Previous</button>}
                            <button onClick={this.handleNextReposClick} className="pagination-next">Next Repos</button>
                        </nav>
                    </div> }

            </React.Fragment>
        )
}}

export default GithubUser;


// { props.users
//     .map(( user ) => ({ 'avatar_url' :  user.avatar_url,
//                         'followers_url' : user.followers_url,
//                         'following_url' : user.following_url,
//                         'gists_url' : user.gists_url,
//                         'id' : user.id,
//                         'login' : user.login,
//                         'repos_url' : user.repos_url }) ).map(( user ) => ( <ProfiMedObject {...user} /> )) }