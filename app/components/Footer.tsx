const Footer = () => {

    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <span className="footer-title">Services</span>
            </div>
            <div>
                <span className="footer-title">Company</span>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;