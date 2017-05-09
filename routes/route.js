exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCity',
                    headline:'We believe that every city have something to say'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageCount=4;

    if(cityName==='bangalore'){
       title="Bangalore";
       heading="Bangalore: So called safest city";
    }
    else if(cityName==='mysore'){
       title="Mysore";
       heading="Mysore: Known as clean city of Karnataka";
    }
    else if(cityName==='dharwad'){
       title="Dharwad";
       heading="Dharwad: Famous for Peedaaa!!!";
    }
    else if(cityName==='kolar'){
       title="Kolar";
       heading="Kolar: Gold city";
    }
    else if(cityName==='tumkur'){
       title="Tumkur";
       heading="Tumkur: Beauties on the earth";
       imageCount=6;
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
