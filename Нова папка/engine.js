
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
                        if (h < 19) {
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
                                    let x = document.createElement("IMG");
                                        x.setAttribute("src", "1jar.png");
                                        x.setAttribute("width", "1500");
                                        x.setAttribute("height", "900");
                                        x.setAttribute("alt", "The Pulpit Rock");
                                        document.body.appendChild(x);                                return
                                } else {
                                }
                                if (document.getElementById("NightBar").value == "Rock") {
                                    let z = document.createElement("IMG");
                                        z.setAttribute("src", "1rock.jpg");
                                        z.setAttribute("width", "1500");
                                        z.setAttribute("height", "900");
                                        z.setAttribute("alt", "");
                                        document.body.appendChild(z); 
                                    return
                                } else {
                                }
                                if (document.getElementById("NightBar").value == "qbar") {
                                    let a = document.createElement("IMG");
                                        a.setAttribute("src", "qbar.jpg");
                                        a.setAttribute("width", "1500");
                                        a.setAttribute("height", "900");
                                        a.setAttribute("alt", "");
                                        document.body.appendChild(a); 
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
                                        x.setAttribute("id", "princessOne");
                                        x.setAttribute("width", "1500");
                                        x.setAttribute("height", "900");
                                        x.setAttribute("alt", "");
                                        document.body.appendChild(x);
                                    return } 

                                if (document.getElementById("dailyBar").value == "qbar"){
                                    let z = document.createElement("IMG");
                                        z.setAttribute("src", "qbar.jpg");
                                        z.setAttribute("id", "qbarOne");
                                        z.setAttribute("width", "1500");
                                        z.setAttribute("height", "900");
                                        z.setAttribute("alt", "");
                                        document.body.appendChild(z);
                                    return  }  

                                if (document.getElementById("dailyBar").value == "corona") {
                                    let s = document.createElement("IMG");
                                        s.setAttribute("src", "1Corona.jpg");
                                        s.setAttribute("id", "coronaOne");
                                        s.setAttribute("width", "1500");
                                        s.setAttribute("height", "900");
                                        s.setAttribute("alt", "");
                                        document.body.appendChild(s);
                                    return }

                                     if (document.getElementById("dailyBar").value == "italian_resturant") {
                                    let f = document.createElement("IMG");
                                        f.setAttribute("src", "italian.jpg");
                                        f.setAttribute("id", "italianOne");
                                        f.setAttribute("width", "1500");
                                        f.setAttribute("height", "900");
                                        f.setAttribute("alt", "");
                                        document.body.appendChild(f);
                                    return }

                                     if (document.getElementById("dailyBar").value == "Omerta") {
                                    let d = document.createElement("IMG");
                                        d.setAttribute("src", "omerta.jpg");
                                        d.setAttribute("id", "omertaOne");
                                        d.setAttribute("width", "1500");
                                        d.setAttribute("height", "900");
                                        d.setAttribute("alt", "");
                                        document.body.appendChild(d);
                                        return }

                                        
                                        function removeEl(id){
                                            var myobj = document.getElementById("princessOne");
                                            myobj.remove();
                                        }
                                    // if(document.getElementById("dailyBar").value == "zero"){
                                    //     document.getElementById("princessOne").style.visibility = "hidden";
                                    //     return
                                    //     document.getElementById("coronaOne").style.visibility = "hidden";
                                    //     return
                                    //     document.getElementById("italianOne").style.visibility = "hidden";
                                    //     return
                                    //     document.getElementById("omertaOne").style.visibility = "hidden";
                                    //     return
                                        //document.getElementById("qbar").style.visibility = "hidden";
                                       // document.getElementById("qbar").style.visibility = "hidden";
                                        
                                    //}
                                }
                                    

                                

                
                