  function customAlert(){ alert('Hello from a custom function.'); }
  function removeHTMLTags(s_text){ 
    var strInputCode = s_text.replace(/&(lt|gt);/g, function (strMatch, p1){ return (p1 == "lt")? "<" : ">"; });
    var i_pos = strInputCode.indexOf("<body>");
    if (i_pos > 0) { strInputCode = strInputCode.substr(i_pos + 6); i_pos = strInputCode.indexOf("</body>");
      if (i_pos > 1) strInputCode.substr(0,i_pos); }
    var strTagStrippedText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");
    return strTagStrippedText;
  }
  function serverSideAlert(){ var request = new XMLHttpRequest();
    request.open('get','/chapter2/myresponse',false);
    request.send(null); var s_text = request.responseText; s_text = removeHTMLTags(s_text);
    alert(s_text);
  }
  function getRequestObject(){
    try { return new XMLHttpRequest() } catch(e) {}
    try { return new ActiveXObject("Msxml2.XMLHTTP")} catch(e) {}
    try { return new ActiveXObject("Microsoft.XMLHTTP")} catch(e) {}
    return false
  }
  function IEAlert(){
    var request = getRequestObject();
    request.open('get','/chapter2/myresponse',false);
    request.send(null); var s_text = request.responseText; s_text = removeHTMLTags(s_text);
    alert(s_text);
  }
  function IEAlert_async(){
    var request = getRequestObject();
    request.open('get','/chapter2/myresponse');
    request.onreadystatechange = function(){
      if (request.readyState == 4) { var s_text = request.responseText; s_text = removeHTMLTags(s_text); alert(s_text); }
    }
    request.send();
  }
  function jQueryAlert(){ var s_url = '/chapter2/myresponse';
    $.ajax({ url: s_url,
      error: function(){ alert('Problem in the AJAX call: ' + s_url); },
      success: function(data){ var s_text = removeHTMLTags(data); alert(s_text); }
    });
  }
