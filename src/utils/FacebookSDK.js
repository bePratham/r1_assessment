export const initFacebookSdk = () => {
  return new Promise((resolve, reject) => {
    // Load the Facebook SDK asynchronously
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
          (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk')
      );
    script.onload = () => {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: process.env.REACT_APP_FB_ID, // Replace with your actual app ID
          cookie: true,
          xfbml: true,
          version: 'v3.3', // Replace with your desired API version
        });
       
        window.FB.AppEvents.logPageView();
        // Resolve the promise when the SDK is loaded
        resolve();
      };
    };
    script.onerror = () => {
      reject(new Error("Failed to load Facebook SDK"));
    };
    document.head.appendChild(script);
  });
};

export const getFacebookLoginStatus = (navigate) => {
  return new Promise((resolve, reject) => {
    try {
      window.FB.getLoginStatus(function (response) {
        if (response.status === "connected") {
          resolve(response);
        } else if (response.status === "not_authorized") {
          console.log("Not authorized");
          resolve(response);
        } else {
          navigate("/");
        }
      });
    } catch (err) {
      console.log(reject);
    }
  });
};
export const fbLogin = (navigate) => {
  return new Promise((resolve, reject) => {
    try {
      window.FB.login((response) => {
        if (response.status === "connected") {
          localStorage.setItem(
            process.env.REACT_APP_FB_TOKEN,
            response.authResponse.accessToken
          );
          navigate("/integrationsuccess")
          resolve(response);
        } else {
          reject(new Error("Facebook login failed."));
        }
      },
      {
        config_id: '399772679311186'
      },
      {
        scope: 'email,user_likes,publish_actions,read_page_mailboxes,pages_show_list,pages_messaging,page_events,pages_read_engagement,pages_read_user_content',
      return_scopes:true
    }
      );
    } catch (err) {
      console.log("Failed complete");
      reject(err);
    }
  });
};
export const FBLogout = () => {
  localStorage.setItem(process.env.REACT_APP_FB_TOKEN, "");
  return window.FB.logout(() => {
    console.log("Logout");
    window.location.reload();
  });
};
