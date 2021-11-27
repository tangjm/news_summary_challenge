import PropTypes from 'prop-types';
import ArticleBlock from './ArticleBlock';
import ArticleModel from '../utils/ArticleModel';

const HeadlinesPage = ({ articleArr }) => {

	const articles = articleArr;
	const articleArrFormatted = articles.map(currentArticle => {
		const article = new ArticleModel(currentArticle.id,
			currentArticle.webTitle,
			currentArticle.webUrl,
			currentArticle.fields.thumbnail,
			currentArticle.fields.bodyText
		);
		return <ArticleBlock key={article.id} article={article} />;
	});

	return (
		<>
			{articleArrFormatted}
		</>
	)
}

HeadlinesPage.propTypes = {
	articleArr: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string,
			webTitle: PropTypes.string,
			webUrl: PropTypes.string,
			fields: PropTypes.exact({
				thumbnail: PropTypes.string,
				bodyText: PropTypes.string
			})
		})
	),
}

export default HeadlinesPage;
