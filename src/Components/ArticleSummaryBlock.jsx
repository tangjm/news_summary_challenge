import PropTypes from 'prop-types';

import ArticleTitle from './ArticleTitle';
import ArticleModel from '../utils/ArticleModel';

const ArticleSummaryBlock = ({ article }) => {

	const { id, headline, url, thumbnail } = article;

	return (
		<div>
			<img src={thumbnail} alt="article thumnail" />
			<ArticleTitle headline={headline} id={id} url={url} />
		</div>
	)
}

ArticleSummaryBlock.propTypes = {
	article: PropTypes.oneOfType([
		PropTypes.instanceOf(ArticleModel),
		PropTypes.exact({
			error: PropTypes.string
		})
	]),
	isSummary: PropTypes.bool,
	setIsSummary: PropTypes.func
}

export default ArticleSummaryBlock;
