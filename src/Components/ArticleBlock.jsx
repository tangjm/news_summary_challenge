import PropTypes from 'prop-types';
import ArticleHeadline from "./ArticleHeadline";
import ArticleModel from '../utils/ArticleModel';

const ArticleBlock = ({ article }) => {

	const { id, headline, thumbnail } = article;

	return (
		<>
			<img src={thumbnail} alt="article thumnail" />
			<ArticleHeadline headline={headline} id={id} />
		</>
	)
}

ArticleBlock.propTypes = {
	article: PropTypes.instanceOf(ArticleModel),
}

export default ArticleBlock;
