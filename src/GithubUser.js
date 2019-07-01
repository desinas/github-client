import React, { Component } from 'react';
import ProfiMedObject from './ProfiMedObject';
import Tiles from "./components/Tiles";

import axios from 'axios';
import { API, REPO_PER_PG } from './defaults';

/**
 * 
 * @param {*} props 
 */
class GithubUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {}
        }
    };

    componentWillMount() {
        this.getUserDetails(this.props.login) 
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

    render() {
        return(
            
            <React.Fragment>
                <ProfiMedObject key={this.props.id} login={this.props.login}
                    name={this.state.userDetails.name} avatar_url={this.props.avatar_url}
                    followers={this.state.userDetails.followers} following={this.state.userDetails.following}
                    public_gists={this.state.userDetails.public_gists}
                    public_repos={this.state.userDetails.public_repos} location={this.state.userDetails.location} />

                
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