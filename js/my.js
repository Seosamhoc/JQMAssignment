$(document).ready(function () {
            $.getJSON('db/database.json', function(data) {
                
                  var items=''; 
                          
                        /*  
                            The code below adds each of the items from database.json to the list
                        */  
                        $.each(data, function(i,jsonItem){  
                            if(data[i].category==="planets" && i===0){
                              items += "<li data-role='list-divider' role='heading' class='ui-li ui-li-divider ui-bar-b'>Planets</li>";
                              }
                            if(data[i].category==="galaxy" && data[i].category!=data[i-1].category){
                              items += "<li data-role='list-divider' role='heading' class='ui-li ui-li-divider ui-bar-b'>Galaxies</li>";
                            }
                            if(data[i].category==="Moon Of Saturn" && data[i].category!=data[i-1].category){
                              items += "<li data-role='list-divider' role='heading' class='ui-li ui-li-divider ui-bar-b'>Moons Of Saturn</li>";
                            }
                            items += "<li data-filtertext= ' " +data[i].category+ " " + data[i].name + " 'data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='arrow-r' data-iconpos='right' data-theme='c' class='ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb'>";
                            items += "<div class='ui-btn-inner ui-li'><div class='ui-btn-text'>";
                            items += "<a href='#" + data[i].id + "' class='ui-link-inherit' data-transition='slide'><img src='" + data[i].image + "' alt='" + data[i].name + "' class='ui-li-thumb'>" +data[i].name + "</a>";
                            items += "</div><span class='ui-icon ui-icon-arrow-r ui-icon-shadow'>&nbsp;</span></div></li>";
                        }); 
                          $('#ajaxContent').empty();
                          $('#ajaxContent').append(items);  

                  /* 
                    If the site was dynamic each page could be dynamically generated when the appropriate button was clicked
                    Since it is static all pages are generated as soon as the page loads below:
                  */

                  var pages='';

                        $.each(data, function(j,jsonItem){
                          pages += "<div data-role='page' id='" + data[j].id + "' data-add-back-btn='true'>";
                          pages += "<header data-role='header'><h1>Space <br/>OBJECTS</h1></header>";
                          pages += "<div data-role='content'>";
                          pages += "<div class='ui-grid-b'>";
                          pages += "<div class='ui-block-a'></div>";
                          pages += "<div class='ui-block-b'>";
                          pages += "<img src='" + data[j].image + "' alt='" + data[j].name + "'>";
                          pages += "</div>";
                          pages += "<div class='ui-block-c'></div>";
                          pages += "</div>";
                          pages += "<div><h3>Name:</h3> " + data[j].name + "</div>";
                          pages += "<div class='ui-grid-solo'>";
                          pages += "<div class='ui-block-a'><h3>Description:</h3> " + data[j].description + "</div>";
                          pages += "</div>";
                          pages += "<div><a href='" + data[j].wikilink + "'>Learn more at Wikipedia</a></div>";
                          
                          pages += "</div><!-- /content -->";
                          pages += "<footer data-role='footer'><h4><!--[if lte IE 8]><span style='filter: FlipH; -ms-filter: 'FlipH'; display: inline-block;'><![endif]--><span style='-moz-transform: scaleX(-1); -o-transform: scaleX(-1); -webkit-transform: scaleX(-1); transform: scaleX(-1); display: inline-block;'>©</span><!--[if lte IE 8]></span><![endif]--> Seosamh &Oacute; Cinn&eacute;ide </h4></footer>";
                          pages += "</div>";

                        });
                          $('body').append(pages);
            }); 

          });//close on ready