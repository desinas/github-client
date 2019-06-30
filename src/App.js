import React, { Component } from 'react';
//import logo from './logo.svg';
import Navbar from "./components/Navbar";
//import Divider from "./components/Divider";
//import Footer from "./components/Footer";
import BulmaComponeTry from "./components/BulmaComponeTry";
import './App.scss';

//import { BrowserRouter, Route } from "react-router-dom";
import GithubUsers from './GithubUsers';
import Following from './Following';

import axios from 'axios';
import { API } from './defaults';

/**
 * @description this is the main component of the react structure and includes the state of the app
 * in a particular time and logic of the app in terms of functions that performs the data fetching
 */
class App extends Component {
  constructor(props) {
    super(props);

    /** 
     * @description state of the app is used to keep the current page with the list of users fetched
     * @param {string} users is the JSON data in a array the promise returns
     * @param {number} userPage is the number for pagination, init value 1 for the first page
    */
      this.state = {
        users: [],
        repos: [],
        user: {},
        userPage: 1,
        repoPage: 1,
      };
  }

  componentWillMount() {
    this.searchUsers();
    //console.log(this.state.users)
    
  };

  componentDidMount() {
    this.getUserDetails('yyx990803');
    //console.log(this.state.users[0]);
    
    this.getUserRepos('yyx990803');
    //console.log(this.state.repos);

  };
  
  /**
 * @description Github API call with query params in it to fetch users Javascripters
 * from the Github with popularity as a base factor according the number of followers.
 * @function searchUsers use axios library in order to call the api and return a promise on resolve
 * @todo manage to chain this function with the the getUserDetails so that to have user details data ready
 * @param {number} userPage is the number for the pagination in the site, dont pass a value
 * to the function explicitly, use the setState to change page instead
 * @example https://api.github.com/search/users?q=language:javascript+type:user&sort=followers&order=desc&page=1&per_page=10
 */
  searchUsers = function (userPage=this.state.userPage) {
    
    const find = '/search/users';
    axios.get(`${API}${find}?q=language:javascript+type:user&sort=followers&order=desc&page=${userPage}&per_page=10`)
      .then( (response) => {
        //console.log(response.data.items)
        this.setState({users: response.data.items});
      }).catch( (error) => {
        console.error("Error on fetching Github users:" + error);
        window.alert("Sorry, there is a malfunction on fetching Github Javascripters!");
      })
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
        this.setState({user: response.data});
        //console.log(this.state.user.login);
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
  getUserRepos = function (ghUser, repoPage=this.state.repoPage) {

    axios.get(`${API}/users/${ghUser}/repos?sort=updated&type=owner&direction=%20desc&page=${repoPage}&per_page=10`)
      .then( (response) => {
        //console.log(response.data);
        this.setState({repos: response.data})
      } )
  }

  render() {
    //console.log(this.state.users);

    return (
      <React.Fragment>
        <Navbar
        spaced={true}
        logo="https://bulma.io/images/bulma-logo.png"
        logoWidth={112}
        logoHeight={28}
        />

        <GithubUsers />
        <Following />

        <BulmaComponeTry />
        <BulmaComponeTry />
        <BulmaComponeTry />
      </React.Fragment>
    );
  }
}

export default App;
