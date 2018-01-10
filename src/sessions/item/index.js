export default class OneSession {
    constructor(talkService) {
        this.talkService = talkService
    }
    render(idView, idSession) {
        this.talkService
            .findSessionById(idSession)
            .then(resp => resp.json())
            .then(session => {
                template = '<p>' + session[0].title + '</p>';
                document.getElementById(idView).innerHTML = template
            })
    }
}