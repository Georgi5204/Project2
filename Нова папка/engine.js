         // function showBars(){
         //    let x = document.getElementById("position").value
         //    let text;
         //    if (isNaN(x) || x < 1 || x > 100){
         //        //text = "Please enter a meters between 1 and 100";
         //        console.log("hellooo?");
               
         //    } else {
         //     document.getElementById("NightBars").style.visibility = "visible"; 
         //    }
         //    document.getElementById("demo").innerHTML = text;
         //    }
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

            if(isNaN(x2) || x2 < 1 || x2 > 1000){
                document.getElementById("bars").style.visibility ='hidden';
                document.getElementById("NightBars").style.visibility = "hidden";
                document.getElementById("dailyBars").style.visibility = "hidden";
                return 0;
                
            }else {
                    if (h > 19) {
               document.getElementById("bars").style.visibility ='visible';
               document.getElementById("NightBars").style.visibility = "visible";
               
            } else {  
               document.getElementById("bars").style.visibility ='visible';
               document.getElementById("dailyBars").style.visibility = "visible";                 
            }
            }
        }
         function checkTime(i) {
            if (i < 10) {i = "0" + i};
             return i;
            }            
         function showOpenNightBars(){  
                document.getElementById("NightBars").style.visibility = "visible"; 
                
         }
         function onchangeNightBars(){
                        document.getElementById("NightBars").style.visibility = "visible"; 
                        var mylist = document.getElementById("NightBar");
                            
                            document.getElementById("demo2").value = NightBar.options[NightBar.selectedIndex].text;
                            if (document.getElementById("NightBar").value == "Jar") {
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
                                
                            }
                    }   
         function onchangeDayBars(){
                var mylist2 = document.getElementById("dailyBar");
                    document.getElementById("demo3").value = dailyBar.options[dailyBar.selectedIndex].text;
                    if (document.getElementById("dailyBar").value == "princess") {

                                let x = document.createElement("IMG");
                                    x.setAttribute("src", "thr.jpg");
                                    x.setAttribute("width", "1100");
                                    x.setAttribute("height", "900");
                                    x.setAttribute("alt", "The Pulpit Rock");
                                    document.body.appendChild(x);

                                return
                            } else {
                                
                            }
                            if (document.getElementById("dailyBar").value == "qbar"){
                                let z = document.createElement("IMG");
                                    z.setAttribute("src", "thr.jpg");
                                    z.setAttribute("width", "1100");
                                    z.setAttribute("height", "900");
                                    z.setAttribute("alt", "The Pulpit Rock");
                                    document.body.appendChild(z);
                                return
                            } else {
                                console.log(" :) ");
                            }
                            if (document.getElementById("dailyBar").value == "Rock") {
                                console.log("rock club");
                                return
                            } else {
                                
                            }


            }
            