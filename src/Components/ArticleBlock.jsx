import PropTypes from 'prop-types';
import ArticleModel from '../utils/ArticleModel';


import ArticleHeadline from "./ArticleHeadline";

const ArticleBlock = ({ article }) => {

	const { id, headline, thumbnail } = article;
	// console.log(article.url)
	return (
		<div>
			<img src={thumbnail} alt="article thumnail" />
			<ArticleHeadline headline={headline} id={id} />
		</div>
	)
}

ArticleBlock.propTypes = {
	article: PropTypes.instanceOf(ArticleModel),
}

export default ArticleBlock;
