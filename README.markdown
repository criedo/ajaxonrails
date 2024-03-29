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
<li><b>Prepare the environment</b><br />
<b>into the prompt</b>: <code>rails new ajaxonrails -T</code> => [<i>-T => don't generate a test directory associated with the default Test::Unit framework</i>]
<p>create the files <b>aor[_c|_g|_s|_t].bat</b> with any other <i>.bat model</i> and change to folder <code>ajaxonrails</code><br />
[<i>to access the app</i>:]<b>into the browser</b>: <code>http://localhost:3000/</code> [<i>view the image</i>: <code>rails_prepared.jpg</code>]<br />
[<i>to control the version</i>:] click on the link <code>About your application's environment</code> [<i>view the image</i>: <code>environment.jpg</code>]</p>
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
<p><i>copy</i> the files to a safe place (<i><u>Github</u></i>) :<br />
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
<i>insert</i> at the end of the file:<br />
<code>&lt;p&gt;&lt;a href="#" onclick="alert('Hello !?');">Inline alert&lt;/a&gt;&lt;/p&gt;</code><br />
[<i>to test</i>:] <b>into the browser</b>: [<i>reload the page</i>] <code>http://localhost:3000/chapter2/myaction</code><br />
<i>click the link</i>: <code>Inline alert</code> [<i>view the image</i>: <code>chap02i02.jpg</code>]</p>
<p><b>into the editor</b>: <i>edit</i> the file <code>project_path\app\views\chapter2\myaction.html.erb</code><br />
<i>change</i> <code>onclick="<b>alert('Hello !?')</b>;"</code> to <code>onclick="<b>customAlert()</b>;"</code><br />
<i>insert</i> at the end of the file:<br />
<code>&lt;p&gt;&lt;a href="#" onclick="customAlert();">Call custom function&lt;/a&gt;&lt;/p&gt;<br />
&lt;script type="text/javascript"&gt;<br />
  function customAlert(){ alert('Hello from a custom function.'); }<br />
&lt;/script&gt;</code><br />
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
<i>insert</i> before the line <code>&lt;script type="text/javascript"&gt;</code>:<br />
<code>&lt;p&gt;&lt;a href="#" onclick="serverSideAlert();"&gt;Call server-side function&lt;/a&gt;&lt;/p&gt;</code><br />
<i>insert</i> before the line <code>&lt;/script&gt;</code>:<br />
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
<i>insert</i> before the line <code>&lt;script type="text/javascript"&gt;</code>:<br />
<code>&lt;p&gt;&lt;a href="#" onclick="IEAlert();"&gt;Call server (IE-safe) function&lt;/a&gt;&lt;/p&gt;</code><br />
<i>insert</i> before the line <code>&lt;/script&gt;</code>:<br />
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
<i>insert</i> before the line <code>&lt;script type="text/javascript"&gt;</code>:<br />
<code>&lt;p&gt;&lt;a href="#" onclick="IEAlert_sync();"&gt;Asynchronous call (IE-safe) function&lt;/a&gt;&lt;/p&gt;</code><br />
<i>insert</i> before the line <code>&lt;/script&gt;</code>:<br />
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
<i>insert</i> before the line <code>&lt;script type="text/javascript"&gt;</code>:<br />
<code>&lt;p&gt;&lt;a href="#" onclick="jQueryAlert();"&gt;Call with jQuery&lt;/a&gt;&lt;/p&gt;</code><br />
<i>insert</i> before the line <code>&lt;/script&gt;</code>:<br />
<code>&nbsp;&nbsp;function jQueryAlert(){ var s_url = '/chapter2/myresponse';<br />
&nbsp;&nbsp;&nbsp;&nbsp;$.ajax({ url: s_url,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error: function(){ alert('Problem in the AJAX call: ' + s_url); },<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;success: function(data){ var s_text = removeHTMLTags(data); alert(s_text); }<br />
&nbsp;&nbsp;&nbsp;&nbsp;});<br />
&nbsp;&nbsp;}</code><br />
[<i>to test</i>:] <b>into the browser</b>: [<i>reload the page</i>] <code>http://localhost:3000/chapter2/myaction</code><br />
&nbsp;&nbsp;<i>click the link</i>: <code>Call with jQuery</code> [<i>view the image</i>: <code>chap02i08.jpg</code>]</p>
<p><i>copy the files to Github</i></p></li>
<li><b>Chapter 3</b>: Introducing (Prototype) JQuery<br />
<b>into the prompt</b>: <code>rails generate controller chapter3 <u>index</u> get_time repeat reverse</code><br />
[<i>to test</i>:] <b>into the browser</b>: <code>http://localhost:3000/chapter3/index</code>
<p><b>into the editor</b>: <i>edit</i> the file <code>project_path\app\views\layouts\application.html.erb</code><br />
<i>change</i> the 2 first lines with:<br />
<code>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;<br />
&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"&gt;</code><br />
<i>insert</i> after the line <code>body</code><br />: <code>&lt;h1&gt;Ajax on Rails&lt;/h1&gt;</code><br /></p>
<p><i>edit</i> the file <code>project_path\app\assets\stylesheets\application.css</code><br />
<i>replace</i> the whole file with:<br />
<code>body { margin:25px; padding:0; background-color:#eee; color:#222; font-family:trebuchet; }<br />
h1 { margin:-25px -25px 20px -25px; padding:15px 0 8px 25px; border-bottom:3px solid #666;<br />
&nbsp;&nbsp;&nbsp;&nbsp;color:#fff; background-color:#777; font:normal 28pt georgia; text-shadow:black 0px 0px 5px; }<br />
a { color:#229; }<br />
.box { width:100px; height:100px; margin-bottom:20px; padding:5px; border:1px solid;<br />
&nbsp;&nbsp;&nbsp;&nbsp;font-size:.6em; letter-spacing:.1em; text-transform:uppercase; }<br />
.pink { border-color:#f00; background-color:#fcc; }<br />
.green { border-color:#090; background-color:#cfc; }<br />
.hover { padding:1px; border-width:5px; }<br />
.ul { padding:5px 0 5px 30px; background-color:#ccc; }</code></p>
<p><i>edit</i> the file <code>project_path\app\controllers\chapter3_controller.rb</code><br />
<i>insert</i> before the line <code>def get_time</code>:<br />
<code>sleep 1.second<br />
render :text => Time.now</code><br />
<i>insert</i> before the line <code>def repeat</code>:<br />
<code>render :text => params.inspect</code><br />
<i>insert</i> before the line <code>def repeat</code>:<br />
<i>insert</i> before the line <code>def reverse</code>:<br />
<code>@reversed_text = params[:text_to_reverse].reverse</code></p>
<p><i>edit</i> the file <code>project_path\app\views\chapter3\index.html.erb</code><br />
<i>replace</i> the whole file with:<br />
<code>&lt;%= link_to "Check Time", :action => 'get_time' %&gt;</code><br />
[<i>to test</i>:] <b>into the browser</b>: <code>http://localhost:3000/chapter3/index</code> [<i>view the image</i>: <code>chap03i02.jpg</code>]</p>
<p><i>edit</i> the file <code>project_path\app\views\layouts\application.html.erb</code><br />
<i>insert</i> at the end of the file:<br />
<code>&lt;script type="text/javascript"&gt;<br />
$(function() {<br />
&nbsp;&nbsp;$('[data-remote][data-replace]')<br />
&nbsp;&nbsp;&nbsp;&nbsp;.data('type', 'html')<br />
&nbsp;&nbsp;&nbsp;&nbsp;.live('ajax:success'<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, function(event, data) { var $this = $(this); $($this.data('replace')).html(data); $this.trigger('ajax:replaced'); }<br />
&nbsp;&nbsp;&nbsp;&nbsp;);<br />
});<br />
&lt;/script&gt;</code><br />
<i>edit</i> the file <code>project_path\app\assets\stylesheets\application.css</code><br />
<i>insert</i> at the end of the file:<br />
#current_time { padding-left:10px; }<br />
#counter { padding-left:3px; color:red; }<br />
<i>edit</i> the file <code>project_path\app\views\chapter3\index.html.erb</code><br />
<i>replace</i> the whole file with:<br />
<code>&lt;span&gt;&lt;%= link_to "Check Time", { :action => 'get_time' }, :id => "time", :remote => true, :"data-replace" => '#current_time' %&gt;&lt;/span&gt;<br />
&lt;span&gt;: &lt;span&gt;&lt;span id="current_time"&gt;Time&lt;/span&gt;&lt;span id="counter"&gt;&lt;/span&gt;<br />
&lt;script type="text/javascript"&gt;<br />
$(function() {<br />
&nbsp;&nbsp;$('#time').bind('ajax:before', function() { $('#current_time').html('&lt;font color=red&gt;Loading...&lt;/font&gt;'); })<br />
&nbsp;&nbsp;&nbsp;&nbsp;.bind('ajax:replaced', function(event) { $('#counter').html($('#counter').html()+'.'); });<br />
});<br />
&lt;/script&gt;</code><br />
[<i>to test</i>:] <b>into the browser</b>: <code>http://localhost:3000/chapter3/index</code> [<i>view the image</i>: <code>chap03i03.jpg</code>]</p>
<p><i>Use jquery-ui</i> to show many interesting visual effects:<br />
&nbsp;&nbsp;&nbsp;&nbsp;[control the compability with the jquery version (<code><u>jQuery JavaScript Library v1.7</u></code>)]<br />
<i>downolad</i> <code>jquery-ui-1.7.3.custom.zip</code> from <code>http://jqueryui.com/download</code><br />
<i>unzip</i>, <i>copy</i> <code>jquery-ui-1.7.3.custom.min.js</code> to folder <code>project_path\vendor\assets\javascripts</code>,<br />
and <i>copy</i> <code>jquery-ui-1.7.3.custom.css</code> and the folder <code>images</code> to the foldeer <code>project_path\vendor\assets\stylesheets</code><br />
<i>edit</i> the file <code>project_path\app\assets\javascripts\application.js</code><br />
<i>insert</i> <code>//= require jquery-ui</code> after the line <code>//= require jquery</code><br />
<i>edit</i> the file <code>project_path\app\views\chapter3\index.html.erb</code><br />
<i>insert</i> before the line <code>.bind('ajax:replaced', function(event) { $('#counter').html($('#counter').html()+'&lt;'); });</code>:<br />
<code>&nbsp;&nbsp;.bind('ajax:failure', function() { alert("Error: can't call Ajax!"); })<br />
&nbsp;&nbsp;.bind('ajax:success', function() { $('#counter').effect('pulsate', {color:"#777777"}, 300 ); })<br />
&nbsp;&nbsp;.bind('ajax:complete', function() { $('#counter').attr("style","font-weight: bold"); })</code><br />
[<i>to test</i>:] <b>into the browser</b>: <code>http://localhost:3000/chapter3/index</code> - control the visual effects in the page.<br />
<i>copy</i> the files to a safe place (<i><u>Github</u></i>)</p>
<p><i>Another <b>link_to</b> options</i> [http://apidock.com/rails/ActionView/Helpers/UrlHelper/link_to]<br />
<code>:confirm => "msg"</code> is used to show a confirmation box before execution and create a <code>data-confirm="msg"</code> in the HTML tag<br />
<code>:method => "msg"</code> is used to pass a REST method and create a <code>data-method="msg"</code> in the HTML tag<br />
<code>:condition</code> was <u>replace</u> by <code>link_to_if</code> [http://apidock.com/rails/ActionView/Helpers/UrlHelper/link_to_if]<br />
&nbsp;&nbsp;or <code>link_to_unless</code> [http://apidock.com/rails/ActionView/Helpers/UrlHelper/link_to_unless]<br />
<i>Warning</i>: <code>link_to_function</code> was modified from Rails v2.2 to v3.1 [http://apidock.com/rails/ActionView/Helpers/JavaScriptHelper/link_to_function]</p>
<p>This approach has a style problem: the <code>javascript code</code> is on the <code>index</code> page.<br />
To separate the code, <i>create</i> the file <code>project_path\app\assets\javascripts\pages\chapter2.js</code> and put the <code>javascript code</code> <i>without</i> &lt;script&gt; tag.<br />
<i><b>Warning</b></i>: <b>CANCEL</b> the file <code>*.js.coffee</code> because it don't permit to open <code>*.js</code> - # => error when <code>coffee</code> compiles the file.<br />
<i>Warning</i>: if the file was created directly in the folder <code>project_path\app\assets\javascripts\</code>, it will be loaded in all pages
&nbsp;&nbsp;To open the <code>javascript file(s)</code> only when necessary,<br />
&nbsp;&nbsp;<i>edit</i> the file <code>project_path\app\helpers\application_helper.rb</code><br />
&nbsp;&nbsp;<i>insert</i> before the last <code>end</code>:<br />
&nbsp;&nbsp;<code>def javascript(*files)<br />
&nbsp;&nbsp;&nbsp;&nbsp;content_for(:head) { javascript_include_tag(*files) }<br />
&nbsp;&nbsp;end</code><br />
&nbsp;&nbsp;<i>edit</i> the file <code>project_path\app\views\layouts\application.html.erb</code><br />
&nbsp;&nbsp;<i>insert</i> before the line <code>&lt;/head&gt;</code>:<br />
<code>&lt;%= yield(:head) %&gt;</code><br />
&nbsp;&nbsp;<i>edit</i> the file <code>project_path\app\views\chapter2\myaction.html.erb</code><br />
&nbsp;&nbsp;<i>insert</i> at the first line: <code>&lt;% javascript 'pages/chapter2.js' %&gt;</code></p>
%%%
<p><b>Forms</b><br />
<i>Form with AJAX call</i><br />
To test the <code>reverse</code> response:
<i>edit</i> the file <code>project_path\app\views\chapter3\reverse.html.erb</code><br />
<i>replace</i> all the file with <code>&lt;p&gt;Chapter3#reverse: &lt;%= @reversed_text %&gt;&lt;/p&gt;</code><br />
[<i>to test</i>:] <b>into the browser</b>: <code>http://localhost:3000/chapter3/reverse?text_to_reverse=Ajax+on+Rails</code> [<i>view the image</i>: <code>chap03i04.jpg</code>]</p>
<i>create</i> the file <code>project_path\assets\javascripts\pages\chapter3.js</code><br />
<i>insert</i>: <code>$(function() {<br />
&nbsp;&nbsp;$('#time').data('type', 'html')<br />
&nbsp;&nbsp;&nbsp;&nbsp;.live('ajax:success', function(event, data) { var $this = $(this); $($this.data('replace')).html(data); $this.trigger('ajax:replaced'); })<br />
&nbsp;&nbsp;&nbsp;&nbsp;.bind('ajax:before', function() { $('#current_time').html('&lt;font color=red&gt;Loading...&lt;/font&gt;'); })<br />
&nbsp;&nbsp;&nbsp;&nbsp;.bind('ajax:failure', function() { alert("Error: can't call Ajax!"); })<br />
&nbsp;&nbsp;&nbsp;&nbsp;.bind('ajax:success', function() { $('#counter').effect('pulsate', {color:"#777777"}, 300 ); })<br />
&nbsp;&nbsp;&nbsp;&nbsp;.bind('ajax:complete', function() { $('#counter').attr("style","font-weight: bold"); })<br />
&nbsp;&nbsp;&nbsp;&nbsp;.bind('ajax:replaced', function(event) { $('#counter').html($('#counter').html()+'&lt;'); });<br />
&nbsp;&nbsp;$('#submit_reverse').data('type', 'html')<br />
&nbsp;&nbsp;&nbsp;&nbsp;.live('ajax:success', function(event, data) { $('#reversed').html(data); })<br />
&nbsp;&nbsp;&nbsp;&nbsp;.bind('ajax:failure', function() { alert("Error: can't call Ajax!"); })<br />
});</code><br />
<i>edit</i> the file <code>project_path\app\views\chapter3\index.html.erb</code><br />
<i>replace</i> all the file with:<br />
<code>&lt;% javascript 'pages/chapter3.js' %&gt;<br />
&lt;span&gt;&lt;%= link_to "Check Time", { :action =&gt; 'get_time' }, :id =&gt; "time", :remote =&gt; true, :"data-replace" =&gt; '#current_time' %&gt;&lt;/span&gt;<br />
&lt;span&gt;: &lt;/span&gt;&lt;span id="current_time"&gt;Time&lt;/span&gt;&lt;span id="counter"&gt;&lt;/span&gt;<br />
&lt;%= form_tag('/chapter3/reverse', :method =&gt; :get, :id =&gt; "submit_reverse", :remote =&gt; true) do -%&gt; [http://apidock.com/rails/ActionView/Helpers/FormTagHelper/form_tag]<br />
&nbsp;&nbsp;&lt;span&gt;&lt;br /&gt;&lt;%=label_tag 'text_to_reverse','Text to reverse:' %&gt; &lt;%= text_field_tag 'text_to_reverse' %&gt;&lt;/span&gt;<br />
&nbsp;&nbsp;&lt;span id='reversed'&gt;&nbsp;&lt;/span&gt;<br />
&nbsp;&nbsp;&lt;p&gt;&lt;%= submit_tag 'Reverse!', :disable_with =&gt; 'Please wait...' %&gt;&lt;/p&gt;<br />
&lt;% end -%&gt;</code><br />
<i>edit</i> the file <code>project_path\app\controllers\chapter3_controller.rb</code><br />
<i>insert</i> before the <code>end</code> of the block <code>def reverse</code>:<br />
<code>render :text =&gt; " =&gt; " + @reversed_text</code><br />
[<i>to test</i>:] <b>into the browser</b>: <code>http://localhost:3000/chapter3/index</code> [<i>view the image</i>: <code>chap03i05.jpg</code>]<br />
<i>Warning</i>: must insert <code>, :method => :get</code> in the form_tag (default=post) if <b>not</b> may be shown a route error [<i>view the image</i>: <code>chap03i06.jpg</code>]</p>
</ul>
