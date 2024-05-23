function WelcomeSection () {
    let date = new Date()
    let singleUser = {
        name: 'John',
        time: date.toDateString(),
}
    return (
        <div>
            <h1>Welcome, {singleUser.name}</h1>
            <p>Today's Date: {singleUser.time}</p>
        </div>        
    )
}

export default WelcomeSection
