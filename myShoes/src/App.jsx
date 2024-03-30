export default function App() {
  return (
    <div>
      <Header />
      <Container />
    </div>
  );
}

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img src="../public/image/brand_logo.png" alt="Logo" height={48} />
      </div>
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Location
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn">Login</button>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="section">
      <div className="container">
        <div className="content">
          <h1>Your feet Deserve The best</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
        </div>

        <div className="buttons">
          <button className="btn-2">Shop Now</button>
          <button className="btn-3">Category</button>
        </div>
        <p>Also available on</p>
        <div className="img-container">
          <a href="#">
            <img src="../public/image/amazon.png" />
          </a>
          <a href="#">
            {" "}
            <img src="../public/image/flipkart.png" />
          </a>
        </div>
      </div>
      <div className=".img-fluid">
        <img src="../public/image/shoe_image.png" alt="show img" />
      </div>
    </div>
  );
}
