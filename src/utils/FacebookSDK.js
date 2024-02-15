
export const initFacebookSdk = () => {
  return new Promise((resolve, reject) => {
    // Load the Facebook SDK asynchronously
    const script = document.createElement("script");
    script.src = `https://connect.facebook.net/en_US/sdk.js`;
    script.async = true;
    script.onload = () => {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: process.env.REACT_APP_FB_ID,
          status: true,
          xfbml: true,
          version: "v2.7",
        });
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
      window.FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {         
          resolve(response);  
        } else if (response.status === 'not_authorized') {
          console.log("Not authorized");
          resolve(response);
        } else {
          navigate("/")  
        }
       });
    } catch (err) {
      console.log(reject);
    }
  });
};
export const fbLogin = () => {
  return new Promise((resolve, reject) => {
    try {
      window.FB.login((response) => {
        localStorage.setItem(process.env.REACT_APP_FB_TOKEN,response.authResponse.accessToken)
        resolve(response);
      });
    } catch (err) {
      console.log(err);
      reject(err)
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
