(function($) {

  var Item = function (name, address, phone, www) {
    var obj = this;

    this.name = name;
    this.address = address;
    this.phone = phone;
    this.www = www;

    this.compare = function(item) {
      // no name
      if (obj.name == '') {
        return false;
      }

      // first element
      if (item == undefined) {
        return true;
      }

      // duplicate
      if (item.name == obj.name 
        && item.phone == obj.phone) {
        return false;
      } else {
        return true;
      }
      return true;
    };
  };

  var convertValue = function(val) {
    var ex = val.split("(");

    if(ex.length > 1){
      val = ex[1].replace(")", "") + ",, " + ex[0];
    }

    return val;
  };

  var request = function(location, what, offset) {
    var API = "http://localhost/panorama-ajax-search";

    $.ajax({
      type: "post",
      url: API,
      data: {
        close: false,
        count: 25,
        offset: offset,
        crossEnabled: true,
        disableNameAndOfferCount: true,
        forceAlgorithm: true,
        groupBy: "VOIV|CITY|DISTRICT|CITY_RESTRICTED_VOIV|KITCHEN|EXTRA_INFORMATIONS",
        location: location,
        searchType: "ALGORITHM",
        snippet: "yellow",
        typ: undefined,
        what: what
      },
      success: function(data){

        var result = $.parseJSON(data);

        if (result.e == 1) {
          return false;
        }

        var $content = $(result.m);
        var lastItem;

        $content.each(function() {
          var name = $(this).find('.js-offerName').text();
          var address = $(this).find('.addressArea').text();
          var comment = $(this).find('.crossCommentArea').text();
          var phone = $(this).find('.phoneArea a').text();
          var www = $(this).find('.wwwArea a').text();
          var link = $(this).find('.linkArea a').attr('href');
          var id = $(this).attr('id');

          var item = new Item(name, address, phone, www);

          comment = comment == '' ? '' : '(' + comment + ')';

          if (item.compare(lastItem)) {
            $('#results tbody').append('<tr><td>' + counter + '</td><td>' + name + '</td><td>' + address + ' ' + comment + '</td><td class="nowrap">' + phone + '</td><td>' + www + '</td><td><a href="' + link + '">Mapa</a></td></tr>');
            counter++;
          }

          lastItem = item;
        });
      }
    });
  };

  var counter;

  $('#send').click(function(event) {
    event.preventDefault();
    var what = $('#what').val();
    var location = $('#location').val();
    var totalOffset = $('#number-show').text();

    $('#results tbody').empty();
    counter = 1;

    for (var i = 25; i <= totalOffset; i = i + 25) {
      request(convertValue(location), what, i);
    };

  });

  $('#what').typeahead({
    source: function (query, process) {
      return $.get('http://localhost/panorama-search', { p: query }, function (data) {
        return process(data.split("\n"));
      });
    }
  });

  $('#location').typeahead({
    source: function (query, process) {
      return $.get('http://localhost/panorama-search', { l: query }, function (data) {
        return process(data.split("\n"));
      });
    }
  });

  $('#number-of-searchs a').click(function() {
    var $parent = $(this).closest('#number-of-searchs');
    var $showNumber = $parent.find('#number-show');

    $('#number-of-searchs li').removeClass('active');
    $(this).parent().addClass('active');

    $showNumber.text($(this).text());
  });

  $('#save').click(function(event) {
    event.preventDefault();

    //$.post('excel.php', { table: $('#results tbody').html() });

    $('#table-data').val($('#results tbody').html());
    $('form').submit();
  });

})(jQuery);
