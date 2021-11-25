import PropTypes from 'prop-types';
import ArticleModel from '../utils/ArticleModel';

import ArticleTitle from "./ArticleTitle";
import ArticleHeadline from "./ArticleHeadline";

const ArticleBlock = ({ article }) => {
	const thumbnail = article.thumbnail;
	const headline = article.title;

	// const tempThumnail = "https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png";
	return (
		<div>
			<img src={thumbnail} alt="article thumnail" />
			<ArticleHeadline headline={headline} />

			{/* <ArticleTitle /> */}
		</div>
	)
}

ArticleBlock.propTypes = {
	article: PropTypes.instanceOf(ArticleModel)
}

export default ArticleBlock;
