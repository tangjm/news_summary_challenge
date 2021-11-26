import PropTypes from 'prop-types';
import ArticleBlock from './ArticleBlock';
import ArticleModel from '../utils/ArticleModel';

const HeadlinesPage = ({ articleArr, displaySummary, setDisplaySummary }) => {
	// extract out 
	// 1. webTitle
	// 2. thumnail Image
	// 3. bodyText
	// 4. id

	const articleArrFormatted = articleArr.map(currentArticle => {
		const articleObj = new ArticleModel(currentArticle.id,
			currentArticle.webTitle,
			currentArticle.webUrl,
			currentArticle.fields.thumbnail,
			currentArticle.fields.bodyText
		);
		return <ArticleBlock key={currentArticle.id} article={articleObj} displaySummary={displaySummary} setDisplaySummary={setDisplaySummary} />;
	})
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
	displaySummary: PropTypes.bool,
	setDisplaySummary: PropTypes.func
}

export default HeadlinesPage;
