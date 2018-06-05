/*var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=vrig2Z20djcALF5KvZuCN9t3erea2lgv&limit=5");
xhr.done(function(data) { 
	console.log("success got data", data);
 });
 https://api.giphy.com/v1/gifs/search?api_key=vrig2Z20djcALF5KvZuCN9t3erea2lgv&q=&limit=25&offset=0&rating=G&lang=en
 */
$(document).ready(function() {
    const dibujarGifts = function(data) {
        let gif = "";
        let url = "";
        data.forEach(function(element) {
            gif = element.images.downsized_large.url;
            url = element.bitly_gif_url;
            $("#elementos").append(armarTemplate(gif, url));
        });
    }
    const armarTemplate = function(gif,url) {
        let t = "<div class='elemento'><img src='" + gif + "'/><a href='" + url + "'>Ver más</a></div>"
        return t;
    }
  const ajaxGif = function(gif) {
      $.ajax ({
          url: 'https://api.giphy.com/v1/gifs/search?api_key=vrig2Z20djcALF5KvZuCN9t3erea2lgv&q=&limit=25&offset=0&rating=G&lang=en',
          type: 'GET',
          datatype: 'json',
          data : {
            q : gif,
            //api_key : 'vrig2Z20djcALF5KvZuCN9t3erea2lgv'
            }
        })
        .done(function(response) {
            console.log(response);
            dibujarGifts(response.data);
        })
        .fail(function() {
            console.log("error");
        });
    }
    $("#buscar-gif").click(function(event) {
        console.log("Entro");
			//<div class="col-lg-offset-3 col-lg-6" id="elementos"></div>
			$("#elementos").empty();
        let gif = $("#gif-text").val();
        ajaxGif(gif);
    });
});
