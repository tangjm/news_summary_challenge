import PropTypes from 'prop-types';
import ArticleModel from '../utils/ArticleModel';

import ArticleTitle from "./ArticleTitle";
import ArticleHeadline from "./ArticleHeadline";

const ArticleBlock = ({ article, displaySingleSummary }) => {

	const { id, headline, url, thumbnail } = article;

	// if displaySummary = true {
	// 	render title and text
	// } else {
	// 	render only headline
	// }
	return (
		<div>
			<img src={thumbnail} alt="article thumnail" />
			{displaySingleSummary ?
				<ArticleTitle headline={headline} url={url} />
				:
				<ArticleHeadline headline={headline} id={id} />
			}
		</div>
	)
}

ArticleBlock.propTypes = {
	article: PropTypes.instanceOf(ArticleModel),
	displaySummary: PropTypes.bool,
	setDisplaySummary: PropTypes.func,
	displaySingleSummary: PropTypes.bool
}

export default ArticleBlock;
