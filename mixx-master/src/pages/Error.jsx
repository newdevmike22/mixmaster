import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
    const error = useRouteError()
    console.log(error);
    if(error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={img} alt="404 image" />
                    <h3>Ohh No!</h3>
                    <p>We can not find that page!</p>
                    <Link to='/'>Back Home</Link>
                </div>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <div>
                <h3>Something Went Wrong!</h3>
            </div>
        </Wrapper>
    )
}

export default Error;