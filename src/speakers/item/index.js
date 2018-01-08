import TalkService from '../../common/talk.service'

export function render(talkService, idView, idSpeaker) {
    talkService
        .findSpeakerById(idSpeaker)
        .then(resp => resp.json())
        .then(speaker => document.getElementById(idView).innerHTML +=
            '<p>' + speaker[0].firstname + ' ' + speaker[0].lastname + '</p>' +
            '<img src="../images/' + speaker[0].image + '">' + speaker[0].socials[0].link
        )
}