import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ArticleHeadline = ({ headline, id, url, displaySummary }) => {

	const articleTitle = headline;
	const articleId = id;
	const articleUrl = url;

	if (displaySummary) {
		return (
			<a href={articleUrl} target="_blank" rel="noreferrer">
				<h1>{articleTitle}</h1>
			</a>
		)
	}

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
	url: PropTypes.string,
	displaySummary: PropTypes.bool
}

export default ArticleHeadline;