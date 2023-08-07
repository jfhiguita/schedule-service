import Welcome_img from "../assets/img/welcome-img.jpeg"
import "../assets/css/main.css"

export default function Welcome() {
    return (
        <>
            <div className="wrapper">
                <h1>boilerplate Django-React app</h1>
                <p>start your app!</p>
                <img src={Welcome_img} alt="welcome image" width="200" height="200" />
            </div>
        </>
    )
}