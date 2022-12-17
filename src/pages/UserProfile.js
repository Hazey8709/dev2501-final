import React, { useState, useEffect } from "react";
import User from "../components/userComp/User";

function UserProfile() {
    const [userData, setuserData] = useState(null);

    useEffect(() => {
        async function fetchApi() {
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();
            const [user] = data.results;
            // console.log(user);

            setuserData(user);
        }
        fetchApi();
    }, []);

    return (
        <div style={style.mainCont}>
            <h1 style={style.pageTitle}>Profile</h1>
            {userData && (
                <User
                    avatar={userData.picture.large}
                    fName={userData.name.first}
                    lName={userData.name.last}
                    street={userData.location.street.number}
                    city={userData.location.city}
                    state={userData.location.state}
                    zipcode={userData.location.postcode}
                    email={userData.email}
                    phone={userData.phone}
                    gender={userData.gender}
                    username={userData.login.username}
                    pwd={userData.login.password}
                />
            )}
        </div>
    );
}

export default UserProfile;

const style = {
    mainCont: {
        display: "flex",
        flexDirection: "column",
        // border: "1px solid red",
        // margin: "0 auto",
        width: "90rem",
        height: "50rem",
    },

    pageTitle: {
        textAlign: "center",
        textDecoration: "underline",
        fontSize: "3rem",
        color: "white",
    },
};

// class UserProfile extends Component {
//     state = {
//         userData: [],
//         isLoaded: true,
//     };

// //! don't need this and have to figure out (in video  12:45 explains little)
// componentDidMount() {
//     const dog = this.state.isLoaded;

//     if (dog) {
//         this.fetchData();
//     } else {
//         console.log("can't load");
//     }
// }
// //! Fetch data
// fetchData() {
//     this.setState({
//         isLoaded: true,
//         userData: [],
//     });

//     fetch("https://randomuser.me/api/")
//         .then((res) => res.json())
//         .then((resJSON) =>
//             resJSON.results.map((user) => ({
//                 firstName: `${user.name.first}`,
//                 lastName: `${user.name.last}`,
//                 street: `${user.name.street}`,
//                 city: `${user.name.city}`,
//                 state: `${user.name.state}`,
//                 postcode: `${user.name.postcode}`,
//             }))
//         )
//         .then((userData) =>
//             this.setState({
//                 userData,
//                 isLoaded: false,
//             })
//         )
//         .catch((err) => console.log(err));
// }

// const { isLoaded, userData } = this.state;
