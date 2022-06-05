const layout = require('../layout');

//language=HTML
module.exports = ({req}) => {
    return layout({
        content: `
            <div>
                Your ID is: ${req.session.userId}
                <form method="POST">
                    <input name="email" placeholder="email"/>
                    <input name="password" placeholder="password"/>
                    <input name="passwordConfirmation" placeholder="password confirmation"/>
                    <button>Sign up</button>
                </form>
            </div>
        `
    });
};