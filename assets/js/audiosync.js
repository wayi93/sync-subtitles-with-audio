let audioSync = {};

audioSync.init = function (audioId, subtitlesDivId, subtitlesData) {
    let audioPlayer = document.getElementById(audioId);
    let subtitles = document.getElementById(subtitlesDivId);
    let syncData = subtitlesData;
    audioSync.createSubtitle(syncData);

    audioPlayer.addEventListener("timeupdate", function(e){
        syncData.forEach(function(element, index, array){
            if( audioPlayer.currentTime >= element.start && audioPlayer.currentTime <= element.end )
                subtitles.children[index].style.background = 'yellow';
        });
    });
};

audioSync.createSubtitle = function(syncData)
{
    var element;
    for (var i = 0; i < syncData.length; i++) {
        element = document.createElement('span');
        element.setAttribute("id", "c_" + i);
        element.innerText = syncData[i].text + " ";
        subtitles.appendChild(element);
    }
};