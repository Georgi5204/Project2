
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
                    document.getElementById("princessOne").style.visibility = "hidden";
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
                                    let o = document.createElement("IMG");
                                        o.setAttribute("src", "F1/1jar.png");
                                        o.setAttribute("id", "JarOne");
                                        o.setAttribute("width", "1500");
                                        o.setAttribute("height", "900");
                                        document.body.appendChild(o);
                                        return
                                } 
                                if (document.getElementById("NightBar").value == "Rock") {
                                    let z = document.createElement("IMG");
                                        z.setAttribute("src", "F1/1rock.jpg");
                                        z.setAttribute("id", "RockOne");
                                        z.setAttribute("width", "1500");
                                        z.setAttribute("height", "900");
                                        document.body.appendChild(z); 
                                    return
                                } 
                                if (document.getElementById("NightBar").value == "qbar") {
                                    let a = document.createElement("IMG");
                                        a.setAttribute("src", "F1/qbar.jpg");
                                        a.setAttribute("width", "1500");
                                        a.setAttribute("height", "900");
                                        document.body.appendChild(a); 
                                    return
                                }
                                if (document.getElementById("NightBar").value == "valentino") {
                                    let g = document.createElement("IMG");
                                        g.setAttribute("src", "F1/1valentino.jpg");
                                        g.setAttribute("width", "1500");
                                        g.setAttribute("height", "900");
                                        document.body.appendChild(g); 
                                    return }

                                    if (document.getElementById("NightBar").value == "the_wight_bar") {
                                    let y = document.createElement("IMG");
                                        y.setAttribute("src", "F1/wight.jpg");
                                        y.setAttribute("width", "1500");
                                        y.setAttribute("height", "900");
                                        document.body.appendChild(y); 
                                    return 
                                }
                        }   
            
             function onchangeDayBars(){
                    var mylist2 = document.getElementById("dailyBar");
                        document.getElementById("demo3").value = dailyBar.options[dailyBar.selectedIndex].text;
                                    
                                    if (document.getElementById("dailyBar").value == "princess") {
                                    let x = document.createElement("IMG");
                                        x.setAttribute("src", "F1/thr.jpg");
                                        x.setAttribute("id", "princessOne");
                                        x.setAttribute("width", "1500");
                                        x.setAttribute("height", "900");
                                        document.body.appendChild(x);
                                    return
                                     } 

                                if (document.getElementById("dailyBar").value == "qbar"){
                                    let z = document.createElement("IMG");
                                        z.setAttribute("src", "F1/qbar.jpg");
                                        z.setAttribute("id", "qbarOne");
                                        z.setAttribute("width", "1500");
                                        z.setAttribute("height", "900");
                                        document.body.appendChild(z);
                                    return 
                                }  

                                if (document.getElementById("dailyBar").value == "corona") {
                                    let s = document.createElement("IMG");
                                        s.setAttribute("src", "F1/1Corona.jpg");
                                        s.setAttribute("id", "coronaOne");
                                        s.setAttribute("width", "1500");
                                        s.setAttribute("height", "900");
                                        document.body.appendChild(s);
                                    return
                                }

                                 if (document.getElementById("dailyBar").value == "Kadife") {
                                    let b = document.createElement("IMG");
                                        b.setAttribute("src", "F1/kadife.jpg");
                                        b.setAttribute("id", "kadifeOne");
                                        b.setAttribute("width", "1500");
                                        b.setAttribute("height", "900");
                                        document.body.appendChild(b);
                                    return
                                }

                                     if (document.getElementById("dailyBar").value == "italian_resturant") {
                                    let f = document.createElement("IMG");
                                        f.setAttribute("src", "F1/italian.jpg");
                                        f.setAttribute("id", "italianOne");
                                        f.setAttribute("width", "1500");
                                        f.setAttribute("height", "900");
                                        document.body.appendChild(f);
                                    return
                                }

                                     if (document.getElementById("dailyBar").value == "Omerta") {
                                    let d = document.createElement("IMG");
                                        d.setAttribute("src", "F1/omerta.jpg");
                                        d.setAttribute("id", "omertaOne");
                                        d.setAttribute("width", "1500");
                                        d.setAttribute("height", "900");
                                        document.body.appendChild(d);
                                        return
                                    }
                                        
                                            
                                        }
                                        
                                         function clearImg(){
                                           
                                            document.getElementById("princessOne").style.visibility = "hidden";
                                            document.getElementById("qbarOne").style.visibility = "hidden";
                                            document.getElementById("coronaOne").style.visibility = "hidden";
                                            document.getElementById("italianOne").style.visibility = "hidden";
                                            document.getElementById("kadifeOne").style.visibility = "hidden";
                                            document.getElementById("omertaOne").style.visibility = "hidden";

                                         }
                                        
                                

        