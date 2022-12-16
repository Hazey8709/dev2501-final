import React, { Component } from "react";
import User from "../components/userComp/User";

class UserProfile extends Component {
    state = {
        userData: [],
        isLoaded: true,
    };

    // function UserProfile() {
    //     const [userData] = useState( [] );
    //     const [isLoaded] = useState([{isLoaded: true}])

    //! don't need this and have to figure out (in video  12:45 explains litle)
    // componentDidMount() {
    //     const dog = this.state.isLoaded;

    //     if (dog) {
    //         this.fetchData();
    //     } else {
    //         console.log("can't load");
    //     }
    // }

    fetchData() {
        this.setState({
            isLoaded: true,
            userData: [],
        });

        fetch("https://randomuser.me/api/")
            .then((res) => res.json())
            .then((resJSON) =>
                resJSON.results.map((user) => ({
                    firstName: `${user.name.first}`,
                    lastName: `${user.name.last}`,
                    street: `${user.name.street}`,
                    city: `${user.name.city}`,
                    state: `${user.name.state}`,
                    postcode: `${user.name.postcode}`,
                }))
            )
            .then((userData) =>
                this.setState({
                    userData,
                    isLoaded: false,
                })
            )
            .catch((err) => console.log(err));
    }
    render() {
        const { isLoaded, userData } = this.state;
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
