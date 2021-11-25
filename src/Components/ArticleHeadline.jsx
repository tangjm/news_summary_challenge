import PropTypes from 'prop-types';

const ArticleHeadline = ({ headline }) => {
	return (
		<a href="/"><h2>{headline}</h2></a>
	)
}

ArticleHeadline.propTypes = {
	headline: PropTypes.string
}

export default ArticleHeadline;