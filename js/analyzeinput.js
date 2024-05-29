//class that parses user input to formulate a response and keeps track of the number of times the bot asks the user for more information
//If the bot has no valid reponse 3 times - it asks the user if they would like to open a ticket.
class analyzeInput {

    moreInfoCounter = 0;

    routeInput(input) {
        this.input = input.toLowerCase()

        if (/label(s)?/.test(this.input) || /print(er)(s)?/.test(this.input) || /receipt(s)?/.test(this.input)) {
            this.printerRequest();
        }
        else if (/reset?/.test(this.input) && /password?/.test(this.input)) {
            this.passwordRequest()
        }
        else {
            this.moreInformation();
        }
    }

    //function called when 
    printerRequest() {
        const response = "Looks like you have are experiencing issues with your printer.";

        createTextBlock(response, 'bot');
    }

    //function called when a password reset is requested
    passwordRequest() {
        const response = "Looks like you need to reset your password.";
        const response2 = "Please click the following link."
        const url = `<a href="https://10.1.1.70:9251/" class="hover:text-slate-300" target="_blank">https://10.1.1.70:9251/</a>`
        createTextBlock(response, 'bot');
        createTextBlock(`${response2} ${url}`, 'bot');
    }

    //function called when no keywords are recognized
    moreInformation() {
        if (this.moreInfoCounter < 2) {
            let response = "Could you provide more details, please?";
            createTextBlock(response, 'bot');
            this.moreInfoCounter++;
        }
        else if (this.moreInfoCounter >= 2) {
            this.promptTicketRequest();
        }
    }

    //function called when no keywords are recognized 3 times. This is a fail safe that allows the user to open a ticket when the chatbot cannot help them
    promptTicketRequest() {
        let response = "Would you like to open a ticket for this issue?";
        createTextBlock(response, 'bot');
        this.moreInfoCounter = 0;
        createTicketOptions();
    }
}