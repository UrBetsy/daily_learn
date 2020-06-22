(function(){   

    var url = 'nav1';

    history.replaceState(url,null,'');//最开始的状态，采用replace直接替换
    $('#router').html('<p>'+url+'</p>')

    $('a').on('click',function(){
        console.log(this.text)
        url = this.text;

//      $('#router').html('<p>'+ url +'</p>')
        history.pushState(url,null,'#/'+url);
//      location.hash="#"+this.text
    })
    window.addEventListener('popstate',function(e){
        console.log('pop',window.history);
        url = e.state
        $('#router').html('<p>'+ url +'</p>')
    });   
//  window.addEventListener('hashchange',function(e){
//  	    console.log('e',e)
//  })
})()
