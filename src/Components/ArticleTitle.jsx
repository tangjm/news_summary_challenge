import PropTypes from 'prop-types';

const ArticleTitle = ({ headline, url }) => {
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<h1>{headline}</h1>
		</a>
	)
}

ArticleTitle.propTypes = {
	headline: PropTypes.string,
	url: PropTypes.string
}

export default ArticleTitle;