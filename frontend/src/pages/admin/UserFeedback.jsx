import BreadCrumb from "../../components/BreadCrumb.jsx";
import  {useEffect, useState} from 'react';

const UserFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user-feedback')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setFeedbacks(data.records)
            })
            .catch(error => console.error('Error fetching feedback:', error));
    }, []);

    return (
        <main className="fix">
            <BreadCrumb title="User" subTitle="User Feedback"/>

            <section className="contact__area">
                <div className="container">
                    <h4 className="text-center">User Feedback</h4>
                    <div>
                        <h1>User Feedback</h1>
                        {feedbacks.length === 0 ? (
                            <p>No feedback available</p>
                        ) : (
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Website</th>
                                    <th>Message</th>
                                </tr>
                                </thead>
                                <tbody>
                                {feedbacks?.map(feedback => (
                                    <tr key={feedback.id}>
                                        <td>{feedback.name}</td>
                                        <td>{feedback.email}</td>
                                        <td>{feedback.website}</td>
                                        <td>{feedback.message}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}
export default UserFeedback




