import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const DisplayUser = () => {
    const users = useLoaderData()

    const [updateUser, setUpdetUser] = useState(users)



    const handaleDelete = (_id) => {
        console.log(_id)

        fetch(`http://localhost:3000/users/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.deletedCount > 1) {
                    alert('sucessfully deleted')
                    //     // const filterData = updateUser.filter((item) => item._id !== _id)
                    //     // setUpdetUser(filterData)
                }

                const filterData = updateUser.filter((item) => item._id !== _id)
                setUpdetUser(filterData)
            });
    }
    return (
        <div>
            <p>Users: {updateUser.length} </p>
            {
                updateUser.map((user) => <div key={user._id}>
                    <h1>{user.name}</h1>
                    <br />
                    <button onClick={() => handaleDelete(user._id)} type="submit">Delete</button>
                    <Link to={`/users/${user._id}`}>
                        <button type="submit">Update</button>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default DisplayUser;