import PropTypes from 'prop-types';

const ArticleHeadline = ({ headline, id, selectArticle }) => {

	const handleClick = () => {
		selectArticle(id);
	}

	return (
		<a href="/" onClick={() => handleClick()}><h2>{headline}</h2></a>
	)
}

ArticleHeadline.propTypes = {
	headline: PropTypes.string,
	id: PropTypes.string,
	selectArticle: PropTypes.func
}

export default ArticleHeadline;