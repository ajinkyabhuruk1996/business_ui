import { API_ROOT } from "../../AppConfig/app-config";

export const logoutFunction = (event) => {
    event.preventDefault();
        // const formData = new FormData(event.target);
        // var object = {};
        // formData.forEach(function(value, key){
        //     object[key] = value;
        // });

        fetch(`${API_ROOT}/logout`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            body: JSON.stringify({})
        })
        .then(d => console.log("Logged Out"),
             sessionStorage.clear()
        );
}
