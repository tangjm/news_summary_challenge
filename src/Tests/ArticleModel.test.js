import ArticleModel from '../utils/ArticleModel';

test(`it should create the expected object from the class`, () => {
	const testArguments = ["testId", "testTitle", "testUrl", "testThumbnail", "testText"];
	const testArticle = new ArticleModel(...testArguments);

	expect(testArticle.id).toBe(testArguments[0]);
	expect(testArticle.title).toBe(testArguments[1]);
	expect(testArticle.url).toBe(testArguments[2]);
	expect(testArticle.thumbnail).toBe(testArguments[3]);
	expect(testArticle.text).toBe(testArguments[4]);
	expect(testArticle).toBeInstanceOf(ArticleModel);
})