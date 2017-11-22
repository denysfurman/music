$(document).ready(function() {
  pqMultiSelect.addItems(majors, ".multiselect-inner");
});



(function(window) {

  function replaceAllMultiple(object, template) {
    var html = template;
    Object.keys(object).forEach(function(key) {
      html = replaceAll(html, "{{" + key + "}}", object[key]);
    });
    return html;
  }

  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  }

  var template = '<div class="option-container">' +
  '<input type="checkbox" value="{{value}}" name="{{name}}" id="{{id}}" {{checked}}>' +
  '<label class="option" for="{{id}}">{{label}}</label>' +
  '</div>';

  var addItems = function(data, destination) {
    var html = "";
    for (var i = 0; i < data.length; i++) {
      if (!data[i].name) {
        data[i].name = "";
      }
      if (!data[i].id) {
        data[i].id = "";
      }
      html += replaceAllMultiple(data[i], template);
    }

    $(destination).append(html);

    $(".multiselect").off("click").on("click", function(e) {
      e.stopPropagation();
      
       if ($(".multiselect-inner").hasClass("open")) {
        $(".multiselect-inner").removeClass("open");
        //flip which icon is hidden
        $(".multiselect .icon.close").hide();
        $(".multiselect .icon.open").show(); 
      } else {
        $(".multiselect-inner").addClass("open");
        //flip which icon is hidden
        $(".multiselect .icon.open").hide();
        $(".multiselect .icon.close").show();
      }
    });
    
    $("body").on("click", function() {
      if ($(".multiselect-inner").hasClass("open")) {
        $(".multiselect-inner").removeClass("open");
        //flip which icon is hidden
        $(".multiselect .icon.close").hide();
        $(".multiselect .icon.open").show(); 
      }
    });
    $(".multiselect .close.icon").on("click", function(e) {
      e.stopPropagation();
      if ($(".multiselect-inner").hasClass("open")) {
        $(".multiselect-inner").removeClass("open");
        //flip which icon is hidden
        $(".multiselect .icon.close").hide();
        $(".multiselect .icon.open").show();  
      }
    });


    // change couter of selected options
    $(".multiselect-inner").off("click").on("click", function(e) {
      e.stopPropagation();
      var selected = [];
      $('.multiselect-inner .option-container input:checked').each(function() {
        selected.push($(this).attr('name'));
      });
      if (selected.length < 1){
        $(".multiselect .multiselect-count").addClass("hidden");
      } else {
        $(".multiselect .multiselect-count").removeClass("hidden");
        $(".multiselect .multiselect-count").html(selected.length);
      }
    });

    $(".multiselect-inner .option").off("click").on("click", function() {
      $(this).parent().toggleClass("active");
    });
  }
  var getSelection = function() {
    console.log("getSelection");
  };

  // Functions made public
  window.pqMultiSelect = {
    addItems: addItems,
    getSelection: getSelection
  };
}(window, undefined));
if (typeof define === "function" && define.amd) {
  define("pqMultiSelect", [], function() {
    return window.pqMultiSelect;
  });
}