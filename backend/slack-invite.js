const httpErr = require('http-errors');
const middy = require('middy');
const {
    jsonBodyParser,
    httpErrorHandler,
    httpHeaderNormalizer,
    urlEncodeBodyParser,
} = require('middy/middlewares');
const request = require('request-promise-native');
const { URL } = require('url');

require('dotenv').config();

const { SLACK_WORKSPACE, SLACK_TOKEN, SLACK_CHANNEL_ID } = process.env;

const slackInvite = async (event) => {
    const { email } = event.body;
    if (!email) {
        throw new httpErr.BadRequest("E-Mail field is missing or empty!");
    }

    const resp = await request.post({
        url: `https://${SLACK_WORKSPACE}.slack.com/api/users.admin.invite`,
        form: {
            email,
            token: SLACK_TOKEN,
            channels: SLACK_CHANNEL_ID,
            ultra_restricted: true,
            resend: true,
        },
        json: true,
    });
    if (resp.ok) {
        return {
            statusCode: 301,
            headers: {
              Location: new URL(`${event.headers['Referer']}/success`).toString(),
            },
            body: "Redirecting...",
        }
    }

    console.error("Slack API request failed:", resp);

    const errResponse = (text, statusCode = 500) => ({
        statusCode,
        headers: {
            'Content-Type': 'text/html',
        },
        body: `${text}<br><a href="${event.headers['Referer']}">Go back.</a>`,
    });

    if (resp.error === 'already_invited' || resp.error === 'already_in_team') {
        return errResponse("Someone has already joined with that address.", 400);
    }

    if (resp.error === 'invalid_email') {
        return errResponse("Invalid email address.", 400);
    }

    return errResponse(`Oops. Something failed on our side.\nPlease let us know at: <a href="mailto:hallo@kalk.space">hallo@kalk.space</a>.`, 500);
}

exports.handler = middy(slackInvite)
    .use(httpHeaderNormalizer())
    .use(jsonBodyParser())
    .use(urlEncodeBodyParser({ extended: false }))
    .use(httpErrorHandler())
