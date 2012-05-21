Publisher.js
============

A javascript pub/sub module. We can subscribe to stories and be notified 
when new information is published; this lets functions do that too. 

To subscribe a function:

    function log(message) {
		console.log(message);
    }

    Publisher.subscribe('Something changed!', log);

To publish:

    Publisher.broadcast('Something changed!', 'Hello world!');

That will execute the log function. 