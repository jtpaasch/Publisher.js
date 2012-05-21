
/**
 * A javascript pub/sub module. 
 */
var Publisher = Publisher || (function() {

	/**
	 * A dictionary object to store all news stories in.
	 * @type {Object}
	 */
	var news = {};

	/**
	 * Subscribe to a story: Whenever this story is broadcast,
	 * the subscribe function will be called.
	 * @param  {String}   story    The name of the story to subscribe to.
	 * @param  {Function} callback The function to execute when the story is published.
	 * @return {Nothing}           
	 */
	var subscribe = function(story, callback) {
		if (news[story] === undefined) {
			news[story] = {};
		}
		news[story][callback] = callback;
	};

	/**
	 * Unscribe to the story. 
	 * @param  {String}   story    The name of the story to unsubscribe from.
	 * @param  {Function} callback The function to unsubscribe.
	 * @return {Nothing}           
	 */
	var unsubscribe = function(story, callback) {
		delete news[story][callback];
	};

	/**
	 * Broadcast a story. 
	 * @param  {String} story       The name of the story to broadcast.
	 * @param  {Mixed}  information Any data/information you want to pass to subscribed functions.
	 * @return {Nothing}            
	 */
	var broadcast = function(story, information) {
		var key;
		for (key in news[story]) {
			if (news[story].hasOwnProperty(key)) {
				news[story][key](information);
			}
		}
	};

	/**
	 * Expose broadcast, subscribe, and unscribe as public methods.
	 */
	return {
		broadcast: broadcast,
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};

}());