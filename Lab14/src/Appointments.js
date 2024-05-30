function Appointments ({customers}) {
    return (
        <div>
            <table className = "appointmentTable">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Appointment Time</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index)=> {
                        return (
                            <tr>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.appointmentTime}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Appointments;
