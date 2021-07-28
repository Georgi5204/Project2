         function showBars(){
            let x = document.getElementById("position").value
            let text;
            if (isNaN(x) || x < 1 || x > 100){
                text = "Please enter a meters between 1 and 100";
               
            } else {
               
            
             document.getElementById("btnOne").style.visibility = "visible";
             

            }
            document.getElementById("demo").innerHTML = text;
            }
         function startTime() {
            let timeText = "";
            let x2 = document.getElementById("position").value
            const today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
            setTimeout(startTime, 1000);

            if(isNaN(x2) || x2 < 1 || x2 > 100){
                timeText = "Please enter a meters between 1 and 100";
            }else {
                    if (h > 19) {
               //document.getElementById("btn").style.visibility = "visible"; 
               document.getElementById("bars").style.visibility ='visible';
               document.getElementById("NightBars").style.visibility = "visible";
            } else {
                //document.getElementById("btn").style.visibility = "visible"; 
                //document.getElementById("btnOne").style.visibility = "visible";
               document.getElementById("bars").style.visibility ='visible';
               document.getElementById("dailyBars").style.visibility = "visible";
            //console.log('here ?')
                
            }
            }
        }
         function checkTime(i) {
            if (i < 10) {i = "0" + i};
             return i;
            }            
         function showOpenNightBars(){  
                document.getElementById("NightBars").style.visibility = "visible"; 
                

                    //document.getElementsByClassName("NightBars").style.visibility = "visible";
                    
                   // var find = document.getElementById("Jar");
                    // console.log(find);
                    // if (document.getElementById("Jar").value = "Jar") {
                    //      console.log('The Jar ');
                    //     return
                    // } if (document.getElementById("Rock").value = "Rock") {
                    //      console.log('rock club ');
                    //     return
                    // } 
         }
         function onchangeNightBars(){
                        var mylist = document.getElementById("NightBar");
                            
                            document.getElementById("demo2").value = NightBar.options[NightBar.selectedIndex].text;
                            if (document.getElementById("NightBar").value == "Jar") {
                                console.log("Jar club");
                                document.getElementById("JarPic").style.visibility = "visible";
                                return
                            } else {
                                console.log(" :) ");
                            }
                            if (document.getElementById("NightBar").value == "Rock") {
                                document.getElementById("rockPic").style.visibility = "visible";
                                console.log("rock club");
                                return
                            } else {
                                console.log(" :) ");
                            }
                            if (document.getElementById("NightBar").value == "Rock") {
                                console.log("rock club");
                                return
                            } else {
                                console.log(" :) ");
                            }
                    }   
         function showOpenDailyBars(){
                document.getElementById("dailyBars").style.visibility = "visible";
            }
            