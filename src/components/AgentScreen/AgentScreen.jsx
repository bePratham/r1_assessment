import React from 'react'

const AgentScreen = () => {
    window.FB.api(
        '/me',
        'GET',
        {"fields":"id,name"},
        function(response) {
           console.log(response);
        }
      );
  return (
    <div>
        Ehllo
    </div>
  )
}

export default AgentScreen