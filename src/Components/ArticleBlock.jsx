import PropTypes from 'prop-types';
import ArticleModel from '../utils/ArticleModel';

import ArticleHeadline from "./ArticleHeadline";


const ArticleBlock = ({ article, displaySummary }) => {

	if (article.hasOwnProperty("error")) {
		return <div>{article.error}</div>;
	}

	const { id, title, url, thumbnail } = article;

	return (
		<>
			<img src={thumbnail} alt="article thumnail" />
			<ArticleHeadline headline={title} id={id} url={url} displaySummary={displaySummary} />
		</>
	)
}

ArticleBlock.propTypes = {
	article: PropTypes.oneOfType([
		PropTypes.instanceOf(ArticleModel),
		PropTypes.exact({ error: PropTypes.string })
	]),
	displaySummary: PropTypes.bool
}

export default ArticleBlock;
