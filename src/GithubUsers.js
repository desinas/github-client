import React from 'react';
import ProfiMedObject from './ProfiMedObject';

/**
 * 
 * @param {*} props 
 */
function GithubUsers (props) {

    return(
        <React.Fragment>

            { props.users
                    .map(( user ) => ({ 'avatar_url' :  user.avatar_url,
                                        'followers_url' : user.followers_url,
                                        'following_url' : user.following_url,
                                        'gists_url' : user.gists_url,
                                        'id' : user.id,
                                        'login' : user.login,
                                        'repos_url' : user.repos_url }) ).map(( user ) => ( <ProfiMedObject {...user} /> )) }

        </React.Fragment>
    )
}

export default GithubUsers;
