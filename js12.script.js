const imgsNormal = [
    {src: ".\\imgs\\anonymous.png", word: "Anonymous", translate: "анонімний"},
    {src: ".\\imgs\\conscious.png", word: "Conscious", translate: "свідомий"},
    {src: ".\\imgs\\commodity.png", word: "Commodity", translate: "товар"},
    {src: ".\\imgs\\entrepreneur.png", word: "Entrepreneur", translate: "підприємець"},
    {src: ".\\imgs\\hospitality.png", word: "Hospitality", translate: "гостинність"},
    {src: ".\\imgs\\maintenance.png", word: "Maintenance", translate: "обслуговування"},
    {src: ".\\imgs\\philosophical.png", word: "Philosophical", translate: "філософський"},
    {src: ".\\imgs\\pronunciation.png", word: "Pronunciation", translate: "вимова"},
    {src: ".\\imgs\\superfluous.png", word: "Superfluous", translate: "зайвий"},
    {src: ".\\imgs\\thesaurus.png", word: "Thesaurus", translate: "скарбниця"},
];

const imgsEasy = [
    {src: ".\\imgs\\always.png", word: "Always", translate: "завжди"},
    {src: ".\\imgs\\apple.png", word: "Apple", translate: "яблуко"},
    {src: ".\\imgs\\choice.png", word: "Choice", translate: "вибір"},
    {src: ".\\imgs\\enough.png", word: "Enough", translate: "достатньо"},
    {src: ".\\imgs\\internet.png", word: "Internet", translate: "інтернет"},
    {src: ".\\imgs\\like.png", word: "Like", translate: "подобатися"},
    {src: ".\\imgs\\love.png", word: "Love", translate: "любити"},
    {src: ".\\imgs\\music.png", word: "Music", translate: "музика"},
    {src: ".\\imgs\\never.png", word: "Never", translate: "ніколи"},
    {src: ".\\imgs\\settings.png", word: "Settings", translate: "налаштування"},
];

const imgsHard = [
    {src: ".\\imgs\\cynical.png", word: "Cynical", translate: "цинічний"},
    {src: ".\\imgs\\hostile.png", word: "Hostile", translate: "ворожий"},
    {src: ".\\imgs\\loudmouth.png", word: "Loudmouth", translate: "крикун"},
    {src: ".\\imgs\\malicious.png", word: "Malicious", translate: "зловмисний"},
    {src: ".\\imgs\\noble.png", word: "Noble", translate: "шляхетний"},
    {src: ".\\imgs\\persistent.png", word: "Persistent", translate: "наполегливий"},
    {src: ".\\imgs\\pushy.png", word: "Pushy", translate: "настирливий"},
    {src: ".\\imgs\\rebellious.png", word: "Rebellious", translate: "бунтарський"},
    {src: ".\\imgs\\renowned.png", word: "Renowned", translate: "відомий"},
    {src: ".\\imgs\\resentful.png", word: "Resentful", translate: "ображений"},
];


$(window).on('load', $(function(){
    $("#correct").css("color", "green");
    $("#incorrect").css("color", "red");
    Work(imgsEasy);
    $("#easy").on('click', function(){

        Work(imgsEasy);
    });
    $("#normal").on('click', function(){

        Work(imgsNormal);
    });
    $("#hard").on('click', function(){
        
        Work(imgsHard);
    });
}));

function Work(imgs){
    $("#left").unbind();
    $("#right").unbind();
    let length = imgs.length;
    let rand = Math.floor(Math.random() * length), count = 1, tempSrc = [10], tempWord = [10], tempTr = [10];
    let check = 0;
    $("#correct").text("0");
    $("#incorrect").text("0");
    $("#count").html(count + " / 10");
    for(let i = 0; i < length; i++){
        rand = Math.floor(Math.random() * (length - i)) + i;
        tempSrc[i] = imgs[rand].src;
        tempWord[i] = imgs[rand].word;
        tempTr[i] = imgs[rand].translate;
        imgs[rand].src = imgs[i].src;
        imgs[rand].word = imgs[i].word;
        imgs[rand].translate = imgs[i].translate;
        imgs[i].src = tempSrc[i];
        imgs[i].word = tempWord[i];
        imgs[i].translate = tempTr[i];
    }
    $(".img").attr("src", tempSrc[count - 1]);
    $(".container>div").html("<h2>" + tempWord[count - 1] + "</h2>");
    $("#right").on('click', function(){
        if(count < 10){
            count++;
            $("#count").html(count + " / 10");
            $(".img").attr("src", tempSrc[count - 1]);
            $(".container>div").html("<h2>" + tempWord[count - 1] + "</h2>");
            if(check == 0){
                if($("#answer").val().toLowerCase() == tempTr[count - 2]){
                    $("#correct").text(Number($("#correct").text()) + 1);
                }
                else{
                    $("#incorrect").text(Number($("#incorrect").text()) + 1);
                }
            }
            else{ check--; }
            $("#answer").val('');
        }
        else{
            $("#count").html(count + " / 10");
            $(".img").attr("src", tempSrc[count - 1]);
            $(".container>div").html("<h2>" + tempWord[count - 1] + "</h2>");
            if(check == 0){
                if($("#answer").val().toLowerCase() == tempTr[count - 1]){
                    $("#correct").text(Number($("#correct").text()) + 1);
                }
                else{
                    $("#incorrect").text(Number($("#incorrect").text()) + 1);
                }
            }
            else{ check--; }
            $("#answer").val('');
            let res = Number($("#correct").text());
            $("#correct1").text(Number($("#correct").text()));
            $("#incorrect1").text(Number($("#incorrect").text()));
            if($("#easy").prop('checked')){
                if(res<7){$("#englevel").text('A1(Elementary)');}
                else{$("#englevel").text('A2(Elementary)');}
            }
            if($("#normal").prop('checked')){
                if(res<3){$("#englevel").text('A1(Elementary)');}
                else{if(res<7){$("#englevel").text('A2(Elementary)');}
                    else{if(res<9){$("#englevel").text('B1(Intermediate)');}
                        else{$("#englevel").text('B2(Intermediate)');}
                    }
                }
            }
            if($("#hard").prop('checked')){
                if(res<3){$("#englevel").text('A1(Elementary)');}
                else{if(res<7){$("#englevel").text('B2(Elementary)');}
                    else{if(res<9){$("#englevel").text('C1(Advanced)');}
                        else{$("#englevel").text('C2(Advanced)');}
                    }
                }
            }
            $("#openModal").attr("class", "modalShow");
            $("a").on('click', function(){
                $("#openModal").attr("class", "modal");
            });
            $('#answer').remove();
            $('#radio').remove();
            $("body").append($('<button>', {'class':'button'} ));
            $(".button").text("Restart");
            $(".button").on('click', function(){
                window.location.href=".\\index.html";
            });
        }
    });
    $("#left").on('click', function(){
        if(count > 0){
            count--;
            check++;
            $("#count").html(count + " / 10");
            $(".img").attr("src", tempSrc[count - 1]);
            $(".container>div").html("<h2>" + tempWord[count - 1] + "</h2>");
            $("#answer").val('');
        }
    });
}
