import BreadCrumb from "../../components/BreadCrumb.jsx";

const UserDashboard = () => {
    return (
        <main className="fix">
            <BreadCrumb title="User" subTitle="Dashboard"/>

            <section className="contact__area">
                <div className="container">
                    <h4 className="text-center">Welcome to Dashboard</h4>
                </div>
            </section>
        </main>
    )
}
export default UserDashboard