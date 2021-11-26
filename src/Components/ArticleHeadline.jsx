import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ArticleHeadline = ({ headline, id }) => {
	return (
		<NavLink to={`/summary/${id}`} >
			<h2>{headline}</h2>
		</NavLink>
	)
}

ArticleHeadline.propTypes = {
	headline: PropTypes.string,
	id: PropTypes.string,
}

export default ArticleHeadline;