Publisher.js
============

A javascript pub/sub module. It lets functions/methods subscribe to stories and be notified 
when new information is published. 

For instance, this subscribes a 'log' function to be notified whenever the story 
'Something changed!' gets published:

    function log(message) {
		console.log(message);
    }

    Publisher.subscribe('Something changed!', log);

To publish that story:

    Publisher.broadcast('Something changed!', 'Hello world!');

Publishing 'Something changed!' will then trigger the subscribed 'log' function. 