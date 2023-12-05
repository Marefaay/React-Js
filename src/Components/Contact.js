import "./Contact.css"
function Contact() {
  return (
    <div className="Contact">
      <div className="contact-heading text-center text-capitalize text-light pt-3 pb-5">
        <h3>Contact Us</h3>
        <p className="fs-6 ">Get in touch with us</p>
        <span></span>
      </div>
      <div className="Info">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="crd mb-5">
                <h2>Phone</h2>
                <span>01028712705</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="crd mb-5">
                <h2>E-mail</h2>
                <span>
                  <a href=" mailto:mrefaay271@gmail.com">
                    mrefaay271@gmail.com
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="crd mb-5">
                <h2>Location</h2>
                <span>Benha</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
