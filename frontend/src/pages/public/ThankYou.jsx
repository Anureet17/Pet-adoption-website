import BreadCrumb from "../../components/BreadCrumb.jsx";

const ThankYou = () => {
    return (
        <main className="fix">
            <BreadCrumb title="Home" subTitle="Form Submitted Successfully"/>

            <section className="py-5">
                <div className="container">
                    <div className="text-center">
                        <i className="fa fa-check-circle text-success" style={{fontSize: '9rem'}}></i>
                        <h4 className="mt-3 mb-0">Thank you</h4>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default ThankYou;