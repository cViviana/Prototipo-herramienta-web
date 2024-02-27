import { Link } from 'react-router-dom';

const BackButton = ({ url }) => {
    return (
        <div className='button-back'>
            <Link to={url}>
                <span className="arrow left"></span>
            </Link>
        </div>
    );
}
export default BackButton;