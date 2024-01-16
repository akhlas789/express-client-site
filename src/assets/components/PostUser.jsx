
const PostUser = () => {
    const handaleFormSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const myData = { name, email, password }
        console.log(myData)


        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(myData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('sucessfully submit to mongo bd')
                }
            })
    }
    return (
        <div>
            <h1>User:</h1>
            <form onSubmit={handaleFormSubmit}>
                <input type="text" name="name" required />
                <br />
                <input type="email" name="email" required />
                <br />
                <input type="passwors" name="password" required id="" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostUser;