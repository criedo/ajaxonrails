<h2>Tutorial: Ajax on Rails => ajaxonrails</h2>
<b>ruby -v  </b>=> <code>ruby 1.9.3p0 (2011-10-30) [i386-mingw32]</code><br />
<b>gem -v   </b>=> <code>1.8.11</code><br />
<b>Rails -v </b>=> <code>Rails 3.1.3</code><br />
<br />
<b>ruby_path   </b>: <code>C:\projects\ruby193\bin</code><br />
<b>project_path</b>: <code>C:\projects\apps\ajaxonrails</code><br />
<b>into the prompt</b> [cmd]: <code>2rails</code>[.bat] => change to folder <code>C:\projects\apps</code><br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>aor_s: rails s</b> => start the webserver => <b>into the browser</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>aor_c: rails console</b> => start the console [exit or ctrl+D to exti] => <b>into the console</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>aor_t: bundle exec spork</b> => start spork to velocize the testing procedures [exit or ctrl+D to exti] => <b>into the console</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>aor_g: to git</b> => copy all files to the folder <b>testing</b> connected with github (by security issue I prefer to use a intermediary folder - and maintain a copy with the uploaded files)<br />
<ul>
<li><b>Installing the environment</b><br />
<b>into the prompt</b>: <code>rails new ajaxonrails -T</code> => [<i>-T => don't generate a test directory associated with the default Test::Unit framework</i>]
<p>create the files <b>aor[_c|_g|_s|_t].bat</b> with any other <i>.bat model</i> and change to folder <code>ajaxonrails</code><br />
[<i>to access the app</i>:]<b>into the browser</b>: <code>http://localhost:3000/</code> [<i>view the image</i>: <code>rails_prepared.jpg</code>]<br />
[<i>to control the version</i>:] click on the link <code>About your application’s environment</code> [<i>view the image</i>: <code>environment.jpg</code>]</p>
<p><b>into the editor</b>: <i>edit</i> Gemfile<br />
<i>insert</i> at the end of the file:<br />
<code>group :development do<br />
&nbsp;&nbsp;gem 'rspec-rails', '2.6.1'<br />
end<br />
group :test do<br />
&nbsp;&nbsp;gem 'rspec-rails', '2.6.1'<br />
&nbsp;&nbsp;gem 'webrat', '0.7.3' [instead of '0.7.1']<br />
end</code></p>
<p><i>edit</i> .gitignore<br />
<i>insert</i> at the end of the file:<br />
<code>.sass-cache/<br />
*.old [<i>I use to rename the files inserting the date and changing the type to ".old"</i>]<br />
*.bat</code></p>
<p><b>into the prompt</b>: aor[.bat]<br />
bundle install [<b><i>Warning</i></b>: at Ruby level, not for single application]<br />
rails generate rspec:install</p>
<p><i>copy the files to Github</i> :<br />
[<code>cd ..</code>] <code>aor_g</code>[.bat]<br />
<i>open</i> Git Bash [<i>previously installed!</i>]<br />
<code>cd testing</code> [<i><u>testing</u> is the name of the git repository</i>]<br />
<code>git add .</code> [<i>to add all files</i>]<br />
<code>git c -a -m "comment"</code> [<i><u>comment</u> must be a brief description of the development state: environment prepared</i>]<br />
<code>git push master origin</code> [<i>the password will be required!</i>]<br />
<code>exit</code></p></li>
<li><b>Chapter 2</b> : getting our feet wet<br />
<b>into the prompt</b>: <code>rails generate controller chapter2 myaction</code><br />
[<i>to test</i>:] <b>into the browser</b>: <code>http://localhost:3000/chapter2/myaction</code> [<i>view the image</i>: <code>chap02i01.jpg</code>]
<p><b>into the editor</b>: <i>edit</i> the file <code>project_path\app\views\chapter2\myaction.html.erb</code><br />
<i>insert</i> at the end of the file: [<i><b>Warning</b>: the caracters "<>" will be changed with "()" in the HTML tags</i>]<br />
<code>(p)(a href="#" onclick="alert('Hello !?');">Inline alert(/a)(/p)</code><br />
[<i>to test</i>:] <b>into the browser</b>: [<i>reload the page</i>] <code>http://localhost:3000/chapter2/myaction</code><br />
<i>click the link</i>: <code>Inline alert</code> [<i>view the image</i>: <code>chap02i02.jpg</code>]</p>
<p><b>into the editor</b>: <i>edit</i> the file <code>project_path\app\views\chapter2\myaction.html.erb</code><br />
<i>change</i> <code>onclick="<b>alert('Hello !?')</b>;"</code> to <code>onclick="<b>customAlert()</b>;"</code><br />
<i>insert</i> at the end of the file:<br />
<code>(p)(a href="#" onclick="customAlert();">Call custom function(/a)(/p)<br />
(script type="text/javascript")<br />
  function customAlert(){ alert('Hello from a custom function.'); }<br />
(/script)</code><br />
[<i>to test</i>:] <b>into the browser</b>: [<i>reload the page</i>] <code>http://localhost:3000/chapter2/myaction</code><br />
&nbsp;&nbsp;<i>click the link</i>: <code>Call custom function</code> [<i>view the image</i>: <code>chap02i03.jpg</code>]</p>
<p><b>into the editor</b>: <i>edit</i> the file <code>project_path\app\controllers\chapter2_controller.rb</code><br />
<i>insert</i> before the last <code>end</code><br />
<code>def myresponse<br />
end</code><br />
<i>create</i> the file <code>project_path\app\views\chapter2\myresponse.html.erb</code><br />
<i>insert</i>: <code>Hello from the server</code><br />
<i>edit</i> the file <code>project_path\config\routes.rb</code><br />
<i>change</i> all the comments with <code>get "chapter2/myresponse"</code><br />
[<i>to test</i>:] <b>into the browser</b>: <code>http://localhost:3000/chapter2/myresponse</code> [<i>view the image</i>: <code>chap02i04.jpg</code>]</p>
<p><b>into the editor</b>: <i>edit</i> the file <code>project_path\app\views\chapter2\myaction.html.erb</code><br />
<i>insert</i> before the line <code>(script type="text/javascript")</code>:<br />
<code>(p)(a href="#" onclick="serverSideAlert();")Call server-side function(/a)(/p)</code><br />
<i>insert</i> before the line <code>(/script)</code>:<br />
<code>&nbsp;&nbsp;function serverSideAlert(){ var request = new XMLHttpRequest();<br />
&nbsp;&nbsp;&nbsp;&nbsp;request.open('get','/chapter2/myresponse',false);<br />
&nbsp;&nbsp;&nbsp;&nbsp;request.send(null);<br />
&nbsp;&nbsp;&nbsp;&nbsp;alert(request.responseText);<br />
&nbsp;&nbsp;}</code><br />
[<b><i>Warning</i></b>: I must insert the function <code>removeHTMLTags()</code> to cut the tags from the page!]
[<i>to test</i>:] <b>into the browser</b>: [<i>reload the page</i>] <code>http://localhost:3000/chapter2/myaction</code><br />
&nbsp;&nbsp;<i>click the link</i>: <code>Call server-side function</code> [<i>view the image</i>: <code>chap02i05.jpg</code>]</p>
<p><i>To avoid problems with the Internet Explorer (IE) browser</i><br />
<b>into the editor</b>: <i>edit</i> the file <code>project_path\app\views\chapter2\myaction.html.erb</code><br />
<i>insert</i> before the line <code>(script type="text/javascript")</code>:<br />
<code>(p)(a href="#" onclick="IEAlert();")Call server (IE-safe) function(/a)(/p)</code><br />
<i>insert</i> before the line <code>(/script)</code>:<br />
<code>&nbsp;&nbsp;function getRequestObject(){<br />
&nbsp;&nbsp;&nbsp;&nbsp;try { return new XMLHttpRequest() } catch(e) {}<br />
&nbsp;&nbsp;&nbsp;&nbsp;try { return new ActiveXObject("Msxml2.XMLHTTP")} catch(e) {}<br />
&nbsp;&nbsp;&nbsp;&nbsp;try { return new ActiveXObject("Microsoft.XMLHTTP")} catch(e) {}<br />
&nbsp;&nbsp;&nbsp;&nbsp;return false<br />
&nbsp;&nbsp;}<br />
&nbsp;&nbsp;function IEAlert(){<br />
&nbsp;&nbsp;&nbsp;&nbsp;var request = getRequestObject();<br />
&nbsp;&nbsp;&nbsp;&nbsp;request.open('get','/chapter2/myresponse',false);<br />
&nbsp;&nbsp;&nbsp;&nbsp;request.send(null); var s_text = request.responseText; s_text = removeHTMLTags(s_text);<br />
&nbsp;&nbsp;&nbsp;&nbsp;alert(s_text);<br />
&nbsp;&nbsp;}</code><br />
[<i>to test</i>:] <b>into the browser</b>: [<i>reload the page</i>] <code>http://localhost:3000/chapter2/myaction</code><br />
&nbsp;&nbsp;<i>click the link</i>: <code>Call server (IE-safe) function</code> [<i>view the image</i>: <code>chap02i06.jpg</code>]</p>
<p><i>To asynchronous iteration</i><br />
<b>into the editor</b>: <i>edit</i> the file <code>project_path\app\views\chapter2\myaction.html.erb</code><br />
<i>insert</i> before the line <code>(script type="text/javascript")</code>:<br />
<code>(p)(a href="#" onclick="IEAlert_sync();")Asynchronous call (IE-safe) function(/a)(/p)</code><br />
<i>insert</i> before the line <code>(/script)</code>:<br />
<code>&nbsp;&nbsp;function IEAlert_async(){<br />
&nbsp;&nbsp;&nbsp;&nbsp;var request = getRequestObject();<br />
&nbsp;&nbsp;&nbsp;&nbsp;request.open('get','/chapter2/myresponse');<br />
&nbsp;&nbsp;&nbsp;&nbsp;request.onreadystatechange = function(){<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (request.readyState == 4) { var s_text = request.responseText; s_text = removeHTMLTags(s_text); alert(s_text); }<br />
&nbsp;&nbsp;&nbsp;&nbsp;}<br />
&nbsp;&nbsp;&nbsp;&nbsp;request.send();<br />
&nbsp;&nbsp;}</code><br />
[<i>to test</i>:] <b>into the browser</b>: [<i>reload the page</i>] <code>http://localhost:3000/chapter2/myaction</code><br />
&nbsp;&nbsp;<i>click the link</i>: <code>Asynchronous call (IE-safe) function</code> [<i>view the image</i>: <code>chap02i07.jpg</code>]</p>
<p><i>Using jQuery</i><br />
<b>into the editor</b>: <i>edit</i> the file <code>project_path\app\views\chapter2\myaction.html.erb</code><br />
<i>insert</i> before the line <code>(script type="text/javascript")</code>:<br />
<code>(p)(a href="#" onclick="jQueryAlert();")Call with jQuery(/a)(/p)</code><br />
<i>insert</i> before the line <code>(/script)</code>:<br />
<code>&nbsp;&nbsp;function jQueryAlert(){ var s_url = '/chapter2/myresponse';<br />
&nbsp;&nbsp;&nbsp;&nbsp;$.ajax({ url: s_url,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error: function(){ alert('Problem in the AJAX call: ' + s_url); },<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;success: function(data){ var s_text = removeHTMLTags(data); alert(s_text); }<br />
&nbsp;&nbsp;&nbsp;&nbsp;});<br />
&nbsp;&nbsp;}</code><br />
[<i>to test</i>:] <b>into the browser</b>: [<i>reload the page</i>] <code>http://localhost:3000/chapter2/myaction</code><br />
&nbsp;&nbsp;<i>click the link</i>: <code>Call with jQuery</code> [<i>view the image</i>: <code>chap02i08.jpg</code>]</p></li>
</ul>
