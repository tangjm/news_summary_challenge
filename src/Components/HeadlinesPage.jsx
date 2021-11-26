import PropTypes from 'prop-types';
import ArticleBlock from './ArticleBlock';
import ArticleModel from '../utils/ArticleModel';

const HeadlinesPage = ({ articleArr, isSummary, setIsSummary }) => {
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
		return <ArticleBlock key={currentArticle.id} article={articleObj} isSummary={isSummary} setIsSummary={setIsSummary} />;
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
	isSummary: PropTypes.bool,
	setIsSummary: PropTypes.func
}

export default HeadlinesPage;
