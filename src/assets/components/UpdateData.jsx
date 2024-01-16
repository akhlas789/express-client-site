import { useLoaderData } from "react-router-dom";

const UpdateData = () => {
    const updateData = useLoaderData()
    console.log(updateData)
    const handaleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const updateDta = { name, email, password }
        console.log(updateDta)
        fetch(`http://localhost:3000/users/${updateData._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }
    return (
        <div>
            <h1>Updated data: </h1>
            <form>
                <input name="name" defaultValue={updateData?.name} type="text"  required/>
                <br />
                <input name="email" defaultValue={updateData?.email} type="email" required />
                <br />
                <input name="password"  defaultValue={updateData?.password} type="password" required></input>
                <br />
                <button onClick={handaleSubmit} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UpdateData;