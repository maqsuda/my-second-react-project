export default function User({ user }) {
    const {name, email} = user;
    return (
        <div>
            <h3>Name :{name}</h3>
            <p>Email :{email}</p>
        </div>
    )
}