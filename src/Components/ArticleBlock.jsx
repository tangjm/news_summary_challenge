import PropTypes from 'prop-types';
import ArticleModel from '../utils/ArticleModel';

import ArticleTitle from "./ArticleTitle";
import ArticleHeadline from "./ArticleHeadline";

const ArticleBlock = ({ article, displaySummary }) => {

	const { id, title, url, thumbnail } = article;

	return (
		<div>
			<img src={thumbnail} alt="article thumnail" />
			{displaySummary ?
				<ArticleTitle headline={title} url={url} />
				:
				<ArticleHeadline headline={title} id={id} />
			}
		</div>
	)
}

ArticleBlock.propTypes = {
	article: PropTypes.instanceOf(ArticleModel),
	displaySummary: PropTypes.bool
}

export default ArticleBlock;
