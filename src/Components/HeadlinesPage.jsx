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
	articlesArr: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string,
			type: PropTypes.string,
			sectionId: PropTypes.string,
			sectionName: PropTypes.string,
			webPublicationDate: PropTypes.string,
			webTitle: PropTypes.string,
			webUrl: PropTypes.string,
			apiUrl: PropTypes.string,
			fields: PropTypes.exact({
				thumbnail: PropTypes.string,
				bodyText: PropTypes.string
			}),
			isHosted: PropTypes.bool,
			pillarId: PropTypes.string,
			pillarName: PropTypes.string
		})
	),
}

export default HeadlinesPage;
