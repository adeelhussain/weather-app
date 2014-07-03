/**
 * Created by Zeeshan on 6/27/14.
 */

window.facebookAppId = '659756430767081';

function fbShare(sharingLink, postThumbnailUrl, postTitle, postDescription) {
    return window.open("https://www.facebook.com/dialog/feed?app_id=" + facebookAppId + "&display=popup&caption=" + encodeURIComponent(postDescription) + "&name=" + encodeURIComponent(postTitle) + "&link=" + encodeURIComponent(sharingLink) + "&picture=" + encodeURIComponent(postThumbnailUrl) + "&redirect_uri=http://gavinwade.client-gallery.com", '_blank', 'height=300,width=420' + ",top=" + (window.screen.height / 2 - 150) + ",left=" + (window.screen.width / 2 - 200));
}