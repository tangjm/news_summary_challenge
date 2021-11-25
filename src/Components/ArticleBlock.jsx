import PropTypes from 'prop-types';
import ArticleModel from '../utils/ArticleModel';

import ArticleTitle from "./ArticleTitle";
import ArticleHeadline from "./ArticleHeadline";

const ArticleBlock = ({ article, selectArticle }) => {

	const { id, thumbnail, headline } = article;

	return (
		<div>
			<img src={thumbnail} alt="article thumnail" />
			<ArticleHeadline headline={headline} id={id} selectArticle={selectArticle} />

			<ArticleTitle headline={headline} id={id} selectArticle={selectArticle} />
		</div>
	)
}

ArticleBlock.propTypes = {
	article: PropTypes.instanceOf(ArticleModel),
	selectArticle: PropTypes.func
}

export default ArticleBlock;
