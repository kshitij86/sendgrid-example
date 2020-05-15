require('dotenv').config(); const sgMail = require('@sendgrid/mail');

// Set the API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Handle the command line args
receiverMail = process.argv.slice(2);

// Check if the receiverMail was provided
if(typeof receiverMail[0] !== 'undefined'){
	// The message object
	const msg = {
		to: receiverMail[0],
		from: 'random.stuff4535@gmail.com',
		subject: 'Just testing this out',
		text: 'Easy. Still got it baby.',
		html: '<h1>Easy. Still got it baby.</h1>'
	};

	// Send the mail and handle callback
	sgMail.send(msg, (error, result) => {
		if(error) {
			console.log(error);
		} else {
			console.log(`The mail was sent to ${receiverMail} success`);
		}
	});
} else {
	// If receiverMail not given, terminaye program
	console.log(`Parameter "receiverMail" not provided`);
	process.exit();
}
