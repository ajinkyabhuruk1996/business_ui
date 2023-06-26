

export const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.0/8 are considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
);


export const getSessionValBySessionKey = (sessionKey) => {
  let sesssionData;
  const sessionVal = sessionStorage.getItem(sessionKey) ? sessionStorage.getItem(sessionKey) : '';
  return sessionVal;
}

export const isAuthorizedToPerform = (area,accessTo) => {
  if(!sessionStorage.getItem("userCapabilites")){
    sessionStorage.clear();
    //ToDo: this clears session of userCapabilites comes as empty in session and should log out user
    console.log('clearing session value when session has empty values , fixed bug ')
  }
  const sessionVal = sessionStorage.getItem("userCapabilites") ? sessionStorage.getItem("userCapabilites") : '';
  const canDo = sessionVal ? JSON.parse(sessionVal)?.[area]?.[accessTo] : null;
  return canDo;
}