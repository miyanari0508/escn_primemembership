// Main Visual
var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var time;
let ytPlayers = {};

function createPlayer(elementId, videoId, time) {
    ytPlayers[elementId] = new YT.Player(elementId, {
        videoId: videoId,
		playerVars: {
			'rel': 0,
			'autoplay': 1,
			'playsinline': 1,
			'mute': 1,
			'controls': 0,
			'modestbranding': 1,
			'iv_load_policy': 3,
			'disablekb': 1,
			'start': time
		},
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onYouTubeIframeAPIReady() {
    createPlayer('ytplayer', 'rzJOeBftwNM', 13);
    createPlayer('ytplayerSp', 'epWL0sYdzBA', 0);
}


function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {			
        Object.values(ytPlayers).forEach(player => {
			//player.seekTo(13);
			player.seekTo(0);
           	player.playVideo();	
        });
		
    }
}