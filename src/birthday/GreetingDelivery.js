export class GreetingDelivery {
    constructor(transport, smtpUrl, smtpPort) {
        this.transport = transport;
        this.smtpUrl = smtpUrl;
        this.smtpPort = smtpPort;
    }
    sendGreetingToEmployee(employee) {
        const message = {
            host: this.smtpUrl,
            port: this.smtpPort,
            from: "sender@here.com",
            to: [employee.getEmail()],
            subject: "Happy Birthday!",
            text: `Happy Birthday, dear ${employee.getFirstName()}!`,
        };
        this.transport.sendMail(message);
    }

}
