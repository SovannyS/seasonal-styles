$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);


        season = season.toLowerCase();

        switch(season){
            case "spring":
                $("#logo").attr("src", "images/spring.gif");
                $("html").css("background-color","#2B7129");
                $("#wear").attr("src", "images/spring-wear.jpg");
                    alert("Leap into Spring wear");
            break;

            case "summer":
                $("#logo").attr("src", "images/summer.gif");
                $("html").css("background-color"," #EBA52B");
                $("#wear").attr("src", "images/summer-wear.jpg");
                 alert("Leap into Summer wear");
            break;

            case "fall":
                $("#logo").attr("src", "images/fall.gif");
                $("html").css("background-color","#A81124");
                $("#wear").attr("src", "images/fall-wear.jpg");
                alert("Leap into Fall wear");
                
            break;

            case "winter":
                $("#logo").attr("src", "images/winter.gif");
                $("html").css("background-color","#005393");
                $("#wear").attr("src", "images/winter-wear.jpg");
                alert("Leap into Winter wear");
            break;

            case "default":
                $("#logo").attr("src", "images/four-seasons.gif");
                $("html").css("background-color","white");
                $("#wear").attr("src", "images/300x400.png");
                alert("You didn't hit a case!")
            break;


            //default:
                //alert("You didn't hit a case!")


        }



  




    });
});
