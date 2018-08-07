# musicwebapp
An ajax based web application which uses API from last.fm to get details about artist, top album and similar artist.

<h2><a href="https://lastfm-music-web-app.herokuapp.com/music.html">DEMO</a></h2>

<h2>Project Description</h2>
<p>Your project is to develop a web application to get information about music artists, their albums, etc. This application should be developed using plain JavaScript and Ajax. You should not use any JavaScript library, such as JQuery. The Ajax requests should return JSON, not XML. Note that everything should be done asynchronously and your web page should never be redrawn/refreshed completely. This means that the buttons or any other input element in your HTML forms must have JavaScript actions, and should not be regular HTTP requests.</p>

<p>Your application should have a text window where one can type the artist name (eg, The Beatles). It should display the artist name, a link to the Last.fm web page of the artist, information about the artist (including a long biography), their picture (large), a list of their top albums (titles & pictures), and a list of names of similar artists. You need to use the following Last.fm methods:
<a href="http://www.last.fm/api/show/artist.getInfo">Get the metadata for an artist, including biography</a><br>
<a href="http://www.last.fm/api/show/artist.getTopAlbums">Get the top albums for an artist</a><br>
<a href="http://www.last.fm/api/show/artist.getSimilar">Get all the artists similar to this artist</a></p>
<p>You may assume that the person who uses this application will type the correct complete name of the artist. So you don't have to check for errors. For example, if someone types "Beatles" instead of "The Beatles", it will be an error, but you don't need to check for such errors.</p>
<p>Note that there is a lot of information returned by these web services. You don't need to use them all. Just use some of them.</p>
