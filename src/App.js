import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import axios from 'axios';
import { API } from './defaults';

class App extends Component {
  constructor(props) {
    super(props);

    /** 
     * @description state of the app is used to keep the current page with the list of users fetched
     * @param {string} users is the JSON data in a array the promise returns
     * @param {number} page is the number for pagination, init value 1 for the first page
    */
      this.state = {
        users: [],
        user: {},
        page: 1
      };
  }

  componentWillMount() {
    this.searchUsers();
    //console.log(this.state.users)
    
  };

  componentDidMount() {
    setTimeout(this.getUserDetails('yyx990803'), 1000);
    //console.log(this.state.users[0]);

  };
  
  /**
 * @description Github API call with query params in it to fetch users Javascripters
 * from the Github with popularity as a base factor according the number of followers.
 * @param {number} page is the number for the pagination in the site, dont pass a value
 * to the function explicitly, use the setState to change page instead
 * @example https://api.github.com/search/users?q=language:javascript+type:user&sort=followers&order=desc&page=1&per_page=10
 */
  searchUsers = function (page=this.state.page) {
    
    const find = '/search/users';
    axios.get(`${API}${find}?q=language:javascript+type:user&sort=followers&order=desc&page=${page}&per_page=10`)
      .then( (response) => {
        //console.log(response.data.items)
        this.setState({users: response.data.items});
      }).catch( (error) => {
        console.error("Error on fetching Github users:" + error);
        window.alert("Sorry, there is a malfunction on fetching Github Javascripters!");
      })
  }

  /**
   * @description
   * @function
   * @param
   */
  getUserDetails = function (ghUser) { //ghUser=this.state.user.login

    axios.get(`${API}/users/${ghUser}`)
      .then( (response) => {
        //console.log(response.data);
        this.setState({user: response.data});
        console.log(this.state.user.login);
      } )
  }

  render() {
    //console.log(this.state.users);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
