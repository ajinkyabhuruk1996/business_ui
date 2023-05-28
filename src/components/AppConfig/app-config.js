let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'new.tornacampsites.com') {
  backendHost = 'https://newapi.tornacampsites.com';
} else if(hostname === 'tornacampsites.com') {
  backendHost = 'https://newapi.tornacampsites.com';
} else if(hostname === 'www.tornacampsites.com') {
  backendHost = 'https://newapi.tornacampsites.com';
} else {
  backendHost = 'http://localhost:9000';
}

export const API_ROOT = `${backendHost}`;