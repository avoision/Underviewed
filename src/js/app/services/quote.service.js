angular
	.module('uv')
	.factory('quoteService', quoteService);

function quoteService ($rootScope) {
	// ===========================
	// Vars
	// ===========================
	var	author = '',
		quote = '',
		quotationList = [
			{
				quote: 'Everything has beauty, but not everyone sees it.',
				author: 'Confucius',
				url: 'http://en.wikipedia.org/wiki/Confucius'
			},
			{
				quote: 'Vision is the art of seeing what is invisible to others.',
				author: 'Jonathan Swift',
				url: 'http://en.wikipedia.org/wiki/Jonathan_Swift'
			},
			{
				quote: 'Every day, three times per second, we produce the equivalent of the amount of data that the Library of Congress has in its entire print collection, right? But most of it is like cat videos on YouTube or 13-year-olds exchanging text messages about the next Twilight movie.',
				author: 'Nate Silver',
				url: 'http://en.wikipedia.org/wiki/Nate_Silver'
			},
			{
				quote: 'YouTube is found footage. It\'s here to stay, and people will always come up with new concepts that will make sense for found footage.',
				author: 'Jason Blum',
				url: 'http://en.wikipedia.org/wiki/Jason_Blum'
			},
			{
				quote: 'All the world\'s a stage, and all the men and women merely players',
				author: 'William Shakespeare',
				url: 'http://en.wikipedia.org/wiki/William_Shakespeare'
			},
			{
				quote: 'We don\'t see things as they are, we see them as we are.',
				author: 'Ana' + String.fromCharCode(239) + 's Nin',
				url: 'http://en.wikipedia.org/wiki/Ana%C3%AFs_Nin'
			},
			{
				quote: 'People generally see what they look for, and hear what they listen for.',
				author: 'Harper Lee',
				url: 'http://en.wikipedia.org/wiki/Harper_Lee'
			},
			{
				quote: 'Every viewer is going to get a different thing. That\'s the thing about painting, photography, cinema.',
				author: 'David Lynch',
				url: 'http://en.wikipedia.org/wiki/David_Lynch'
			},
			{
				quote: 'The voyage of discovery is not in seeking new landscapes but in having new eyes.',
				author: 'Marcel Proust',
				url: 'http://en.wikipedia.org/wiki/Marcel_Proust'
			},
			{
				quote: 'There\'ll always be serendipity involved in discovery.',
				author: 'Jeff Bezos',
				url: 'http://en.wikipedia.org/wiki/Jeff_Bezos'
			},
			{
				quote: 'This joy of discovery is real, and it is one of our rewards. So too is the approval of our work by our peers.',
				author: 'Henry Taube',
				url: 'http://en.wikipedia.org/wiki/Henry_Taube'
			},
			{
				quote: 'If you do not expect the unexpected you will not find it, for it is not to be reached by search or trail.',
				author: 'Heraclitus',
				url: 'http://en.wikipedia.org/wiki/Heraclitus'
			},
			{
				quote: 'Search others for their virtue, and yourself for your vices.',
				author: 'Buckminster Fuller',
				url: 'http://en.wikipedia.org/wiki/Buckminster_Fuller'
			},
			{
				quote: 'He who would search for pearls must dive below.',
				author: 'John Dryden',
				url: 'http://en.wikipedia.org/wiki/John_Dryden'
			},
			{
				quote: 'If you want to understand today, you have to search yesterday.',
				author: 'Pearl S. Buck',
				url: 'http://en.wikipedia.org/wiki/Pearl_S._Buck'
			},
			{
				quote: 'I know well what I am fleeing from but not what I am in search of.',
				author: 'Michel de Montaigne',
				url: 'http://en.wikipedia.org/wiki/Michel_de_Montaigne'
			},
			{
				quote: 'If you think about YouTube, YouTube is a \'searching the world\'s videos\' problem, right? They all have to be there, but how do you find them? What I guess I\'m trying to say is that search is still the killer app.',
				author: 'Eric Schmidt',
				url: 'http://en.wikipedia.org/wiki/Eric_Schmidt'
			},
			{
				quote: 'I basically watch videos online all day long.',
				author: 'Chad Hurley',
				url: 'http://en.wikipedia.org/wiki/Chad_Hurley'
			}
		];

	// ===========================
	// Service Object
	// ===========================
	var service = {
		author: '',
		quote: '',
		showQuoteAd: '',
		getRandomQuote: getRandomQuote
	};


	// Public Functions
	function getRandomQuote() {
		var totalQuotes = quotationList.length;
		var randomText = Math.floor(Math.random() * totalQuotes);

		service.author = quotationList[randomText].author;
		service.quote = quotationList[randomText].quote;
		service.url = quotationList[randomText].url;
		
		$rootScope.$broadcast('quoteUpdated');
	};


	return service;
};








