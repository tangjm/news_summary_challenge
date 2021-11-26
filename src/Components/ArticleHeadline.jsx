import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ArticleHeadline = ({ headline, id }) => {

	// const handleClick = () => {
	// 	setIsSummary(false);
	// }

	// fix routing by removing / from id's
	// id = id.replace(/\//g, "");
	console.log(id);
	return (
		<NavLink to={`/summary/${id}`} className="link">
			<h2>{headline}</h2>
		</NavLink>
	)
}

ArticleHeadline.propTypes = {
	headline: PropTypes.string,
	id: PropTypes.string,
}

export default ArticleHeadline;