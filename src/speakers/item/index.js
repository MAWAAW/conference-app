export default class OneSpeaker {
    constructor(talkService) {
        this.talkService = talkService
    }
    render(idView, idSpeaker) {
        let template = ""
        this.talkService
            .findSpeakerById(idSpeaker)
            .then(resp => resp.json())
            .then(speaker => {
                template = '<p>' + speaker[0].firstname + ' ' + speaker[0].lastname + '</p>' +
                    '<img src="../images/' + speaker[0].image + '">' + speaker[0].socials[0].link;
                document.getElementById(idView).innerHTML = template
            })
    }
}