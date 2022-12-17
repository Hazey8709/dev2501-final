import React, { useState, useEffect } from "react";
import User from "../components/userComp/User";

function UserProfile() {
    const [userData] = useState([]);
    const [isLoaded] = useState([{ isLoaded: true }]);

    useEffect(() => {
        async function fecthApi() {
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();
            const [user] = data.results;
            console.log(user);
            // const [user] = data.results.results.map((user) =>
            //     setuserData({
            //         firstName: `${user.name.first}`,
            //         lastName: `${user.name.last}`,
            //         firstName: `${user.name.first}`,
            //         username: `${user.name.username}`,
            //     })
            // );
            // console.log(user);
            setuserData(user);
        }
        fetchApi();
    });

    return (
        <div style={style.mainCont}>
            <h1 style={style.userName}>USER Profile</h1>
            {!isLoaded && userData.length > 0
                ? userData.map((user) => {
                      const { firstName, lastName, username } = user;
                      return (
                          <User
                              key={username}
                              firstName={firstName}
                              lastName={lastName}
                          />
                      );
                  })
                : null}
        </div>
    );
}

export default UserProfile;

const style = {
    mainCont: {
        border: "1px solid red",
        width: "85rem",
        height: "50rem",
    },

    userName: {},
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
