        var allsongs = [{title:"Rey's Theme",artist:"John Williams",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/example.mp3"},
                        {title:"Flagpole Sitta",artist:"Harvey Danger",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Flagpole%20Sitta.mp3"},
                        {title:"Back In Black",artist:"AC/DC",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Back%20In%20Black.mp3"},
                        {title:"Hysteria",artist:"Muse",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Hysteria.mp3"},
                        {title:"Smells Like Teen Spirit",artist:"Nirvana",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Smells%20Like%20Teen%20Spirit.wav"},
                        {title:"Rock And Roll Band",artist:"Boston",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Rock%20&%20Roll%20Band.mp3"},
                        {title:"Come Out And Play",artist:"The Offspring",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Play.mp3"},
                        {title:"The Anthem",artist:"Good Charlotte",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/The%20Anthem.mp3"},
                        {title:"I Wanna Rock",artist:"Twisted Sister",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/i%20wanna%20rock%20(1).wav"},
                        {title:"I Want To Be Sedated",artist:"The Ramones",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/I%20wanna%20be%20sedated.wav"},
                        {title:"Blitzkrieg Bop",artist:"The Ramones",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Blitzkrieg%20Bop.mp3"},
                        {title:"Take On Me",artist:"Karl Kling",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/2332304.0.mp3"},
                        {title:"All The Small Things",artist:"Blink-182",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/All%20The%20Small%20Things.mp3"},
                        {title:"Blue Orchid",artist:"The White Stripes",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Blue%20Orchid.mp3"},
                        {title:"American Idiot",artist:"Green Day",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/American%20Idiot.mp3"},
                        {title:"Fell In Love With A Girl",artist:"The White Stripes",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Fell%20In%20Love.mp3"},
                        {title:"Time Is Running Out",artist:"Muse",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Time%20is%20Running%20Out.mp3"},
                        {title:"Lonely Boy",artist:"The Black Keys",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Lonely%20Boy.mp3"},
                        {title:"Peace Of Mind",artist:"Boston",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Peace%20Of%20Mind.mp3"},
                        {title:"Holiday",artist:"Green Day",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Holiday.mp3"},
                        {title:"I Love Rock And Roll",artist:"Joan Jett",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/I%20Love%20Rock%20N'%20Roll.mp3"},
                        {title:"Seven Nation Army",artist:"Joan Jett",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/heads/main/Seven%20Nation%20Army.mp3"},
                        {title:"The Kids Aren't Alright",artist:"The Offspring",link:"https://github.com/devastator111/Devastator111-Home/raw/refs/main/Alright.mp3"}
                       ];
        var queue = {
            songs:["Lonely Boy"],//use titles
            alreadyPlayed:[],
            nextSong() {
                if(this.songs.length>0){
                    playSong(this.songs[0],0);
                    this.alreadyPlayed.push(this.songs[0])
                    this.songs.splice(0,1);
                }
            },
            prevSong() {
                if(this.alreadyPlayed.length!==0){
                    this.songs.splice(0,0,this.alreadyPlayed[this.alreadyPlayed.length-1]);
                    this.alreadyPlayed.splice(this.alreadyPlayed.length-1,1);
                    playSong(this.songs[0],0);
                }
            },
            swapSong() {
                playSong(prompt("Please type the name of a song", "Song"),0);
            },
            addSong(title) {
                if(title){
                    if(Array.isArray(title)){
                        for (item of title) {
                            this.songs.push(item.title);
                        }
                    }else if(this.songs.find((element)=>element.title===title)){
                        this.songs.push(title);
                    }else alert("Please choose a valid song title.");
                }else{
                    checkForNull: {
                        var toAdd = prompt("Choose a song to add to the queue.");
                        if(toAdd===null){break checkForNull;}
                        if(allsongs.find((element)=>element.title===toAdd)){
                            this.songs.push(toAdd);
                        }else if(parseInt(toAdd)<=allsongs.length&&parseInt(toAdd)+1!=null){
                            this.songs.push(allsongs[parseInt(toAdd)].title);
                        }else if(toAdd.includes(",")){
                            for (item of toAdd.split(",")) {
                                if(allsongs.find((element)=>element.title===item)){
                                    this.songs.push(item);
                                }
                            }
                        }
                    }
                }
            },
            clearSongs() {
                this.songs = [];
            },
        };
        if(findStorage("currentTime")){
            queue.clearSongs();
            //queue.addSong(allsongs);
            if(findStorage("queue").length!=0){
                queue.songs = findStorage("queue").split(",");
            }
            playSong(findStorage("songTitle"),findStorage("songTime"));
            
        }else{
            queue.nextSong();
        }
        Playlist = function(songs){
            this.songs = [songs],
            this.queueList = function(){
                
            }
        }
        
        function findStorage(name){
            if(localStorage.getItem(name)!=null){
            return localStorage.getItem(name);
            }else{
                return false;
            }
        };
        function expireCookies() {
            document.cookie = "currentTime=--; SameSite=None; expires=Thu 01 Jan 1970 00:00:00 UTC; Secure ";
            document.cookie = "songTime=--; SameSite=None; expires=Thu 01 Jan 1970 00:00:00 UTC; Secure ";
            document.cookie = "startTime=--; SameSite=None; expires=Thu 01 Jan 1970 00:00:00 UTC; Secure";
            document.cookie = "totalTime=--; SameSite=None; expires=Thu 01 Jan 1970 00:00:00 UTC; Secure";
            document.cookie = "queue=--; SameSite=None; expires=Thu 01 Jan 1970 00:00:00 UTC; Secure";
            document.cookie = "songTitle=--; SameSite=None; expires=Thu 01 Jan 1970 00:00:00 UTC; Secure";
            document.cookie = "already=--; SameSite=None; expires=Thu 01 Jan 1970 00:00:00 UTC; Secure"
        }
        function saveTime(){
            localStorage.setItem('currentTime',Date.now());
            if(document.getElementById("song")!=null){
                localStorage.setItem("songTime",document.getElementById("song").currentTime);
            }
            localStorage.setItem("queue",queue.songs);
            localStorage.setItem("already",queue.alreadyPlayed);
            output = document.getElementById("audiobar").getElementsByTagName("span");
            if(output!=null&&true){
                output[0].textContent = findStorage('songTitle')+" - "+allsongs.find((element)=>element.title===findStorage('songTitle')).artist;
                //output[1].textContent = findStorage('songTitle');
                output[1].textContent = findStorage('songTime')+"/"+document.getElementById("song").duration;
                //output[3].textContent = queue.songs;
                //output[4].textContent = queue.alreadyPlayed;
            }
           // document.getElementById('anime').textContent = queue.songs;
        };
        setInterval(saveTime,100);
        function playSong(searchTitle,time){
            findTitle = searchTitle;
            newAudio = document.createElement("AUDIO");
            newAudio.src=allsongs.find(function(element){
                if(element.title===findTitle){
                    return true;
                }
            }).link;
            newAudio.currentTime = time;
            newAudio.controls = false;
            newAudio.autoplay = true;
            newAudio.setAttribute("id","song");
            newAudio.addEventListener("ended",()=>{
                if(queue.songs.length!==0){
                    queue.nextSong();
                }else this.pause;
            });
            document.getElementById("holder").replaceChildren(newAudio);
            localStorage.setItem("songTitle",searchTitle);
        };
        function toggleAudio(){
            if(document.getElementById('song').paused){
                document.getElementById('song').play()
            }else document.getElementById('song').pause();
        };
