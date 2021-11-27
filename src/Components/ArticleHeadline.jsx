import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ArticleHeadline = ({ headline, id }) => {

	const articleTitle = headline;
	const articleId = id;

	return (
		<NavLink to={{
			pathname: `/summary/${articleId}`,
			state: { displaySummary: true }
		}} className="link" >
			<h2>{articleTitle}</h2>
		</NavLink >
	)
}

ArticleHeadline.propTypes = {
	headline: PropTypes.string,
	id: PropTypes.string,
}

export default ArticleHeadline;