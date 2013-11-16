function loadUp() {
    $(".instClass").hide();
    document.getElementById('numberOne').focus();

}
function getTop() {
    alert(document.getElementById('numberOne').offsetTop);
}
function getFactors() {

    var x;
    var y;


    if (document.getElementById('numberOne').value != '' && document.getElementById('numberTwo').value != '') {
        var x = document.getElementById('numberOne').value;
        var y = document.getElementById('numberTwo').value;

        if (!isNaN(x) && !isNaN(y)) {

            var resultsRight = new Array();
            var resultsLeft = new Array();
            var arrayCounter;
            var modResult;
            var mathCounter;
            var resultString;

            var resultsRight1 = new Array();
            var resultsLeft1 = new Array();
            var results1 = 0;
            var results2 = 0;

            resultString = "<table class='resultTable'>";
            arrayCounter = 0;
            modResult = 0;
            mathCounter = 1;

            while (mathCounter < (x / 2) + 1) {

                modResult = x % mathCounter;

                if (modResult == 0) {
                    resultsLeft1[arrayCounter] = mathCounter;
                    resultsRight1[arrayCounter] = x / mathCounter;
                    arrayCounter = arrayCounter + 1;

                }
                else {
                }

                mathCounter = mathCounter + 1;
            }


            var resultString = "<table class='resultTable'>";


            for (var i = 0; i < resultsLeft1.length; ++i) {
                if (resultsLeft1[i] != resultsRight1[i - 1]) {
                    results1 = results1 + 1;
                    resultString = resultString.concat("<tr><td>" + resultsLeft1[i] + "</td><td>" + resultsRight1[i] + "</td></tr>");
                }
            }

            resultString = resultString.concat("</table>");

            document.getElementById('resultsDiv1').innerHTML = resultString;

            resultString = "<table class='resultTable'>";
            arrayCounter = 0;
            modResult = 0;
            mathCounter = 1;
            resultsRight = [];
            resultsLeft = [];

            while (mathCounter < (y / 2) + 1) {

                modResult = y % mathCounter;

                if (modResult == 0) {
                    resultsLeft[arrayCounter] = mathCounter;
                    resultsRight[arrayCounter] = y / mathCounter;
                    arrayCounter = arrayCounter + 1;
                }
                else {
                }

                mathCounter = mathCounter + 1;
            }


            var resultString = "<table class='resultTable'>";


            for (var i = 0; i < resultsLeft.length; ++i) {
                if (resultsLeft[i] != resultsRight[i - 1]) {
                    results2 = results2 + 1;
                    resultString = resultString.concat("<tr><td>" + resultsLeft[i] + "</td><td>" + resultsRight[i] + "</td></tr>");
                }
            }

            resultString = resultString.concat("</table>");

            document.getElementById('resultsDiv2').innerHTML = resultString;

            var a;
            var b;
            var c;
            var d;

            var multString = "<table id='multTable'>";
            var mathResult = 0;
            var variationLoop = 1;
            var asign = 1;
            var bsign = 1;
            var csign = 1;
            var dsign = 1;

            var ra1 = new Array();
            var ra2 = new Array();
            var raCount = 0;
            var ra = new Array();

            var dumpCount = 0;

            for (var i = 0; i < results1; ++i) {
                for (var j = 0; j < results2; ++j) {
                    a = resultsLeft1[i] * asign;
                    b = resultsLeft[j] * bsign;
                    c = resultsRight1[i] * csign;
                    d = resultsRight[j] * dsign;
                    mathResult = (a * d) + (b * c);

                    multString = multString.concat("<tr><td>(" + a + "x + " + b + ")(" + c + "x + " + d + ") = " + mathResult + "</td></tr>");

                    if (i == results1 - 1 && j == results2 - 1) {
                        j = 0;
                        i = 0;


                        switch(variationLoop){
                          
                            case 1:
                                asign = -1;
                                bsign = 1;
                                csign = 1;
                                dsign = 1;
                                break;
                            case 2:
                                asign = 1;
                                bsign = -1;
                                csign = 1;
                                dsign = 1;
                                break;
                            case 3:
                                asign = -1;
                                bsign = -1;
                                csign = 1;
                                dsign = 1;
                                break;
                            case 4:
                                asign = 1;
                                bsign = 1;
                                csign = -1;
                                dsign = 1;
                                break;
                            case 5:
                                asign = -1;
                                bsign = 1;
                                csign = -1;
                                dsign = 1;
                                break;
                            case 6:
                                asign = 1;
                                bsign = -1;
                                csign = -1;
                                dsign = 1;
                                break;
                            case 7:
                                asign = -1;
                                bsign = -1;
                                csign = -1;
                                dsign = 1;
                                break;
                            case 8:
                                asign = 1;
                                bsign = 1;
                                csign = 1;
                                dsign = -1;
                                break;
                            case 9:
                                asign = -1;
                                bsign = 1;
                                csign = 1;
                                dsign = -1;
                                break;
                            case 10:
                                asign = 1;
                                bsign = -1;
                                csign = 1;
                                dsign = -1;
                                break;
                            case 11:
                                asign = -1;
                                bsign = -1;
                                csign = 1;
                                dsign = -1;
                                break;
                            case 12:
                                asign = 1;
                                bsign = 1;
                                csign = -1;
                                dsign = -1;
                                break;
                            case 13:
                                asign = -1;
                                bsign = 1;
                                csign = -1;
                                dsign = -1;
                                break;
                            case 14:
                                asign = 1;
                                bsign = -1;
                                csign = -1;
                                dsign = -1;
                                break;
                            case 15:
                                asign = -1;
                                bsign = -1;
                                csign = -1;
                                dsign = -1;
                                break;
                            default:
                                i = results1;
                                j = results2;
                        }

                         variationLoop = variationLoop + 1;

                    }

                    ra1[raCount] = mathResult;
                    ra2[raCount] = "(" + a + "x + " + b + ")(" + c + "x + " + d + ")";
                    ++raCount;

                    ++dumpCount;
                }

            }

            sortBoth(ra1, ra2);

            for (var z = 0; z < ra1.length; z++) {
                ra[z] = [ra1[z], ra2[z]];
            }

            multString = multString.concat("</table>");


            var xString = "<table>";
            for (var y = 0; y < ra.length; y++) {

                xString = xString.concat("<tr><td>" + ra[y][0] + " = </td><td>" + ra[y][1] + "</td></tr>");

            }
            xString = xString.concat("</table>");

            document.getElementById('arrayOutputDiv').innerHTML = xString;

        }
        else if (!isNaN(x)) {
            alert("Please enter a valid integer for the constant");
            document.getElementById('numberTwo').value = '';
            document.getElementById('numberTwo').focus();
        }
        else if (!isNaN(y)) {
            alert("Please enter a valid integer for the coefficient of x^2");
            document.getElementById('numberOne').value = '';
            document.getElementById('numberOne').focus();
        }
        else {
            alert("Please supply valid integers values in both fields");
            document.getElementById('numberOne').value = '';
            document.getElementById('numberTwo').value = '';
            document.getElementById('numberOne').focus();
        }
    }
    else if (document.getElementById('numberOne').value != '') {
        alert("Please enter the constant value");
    }
    else if (document.getElementById('numberTwo').value != '') {
        alert("Please enter the value of the coefficient of x");
    }
    else {
        alert("Please enter the required values");
    }

}
function sortBoth(ary1, ary2) {
    var merged = [];
    for (var i = 0; i < ary1.length; i++) merged.push({ 'ary1': ary1[i], 'ary2': ary2[i] });
    merged.sort(function (o1, o2) { return ((o1.ary1 < o2.ary1) ? -1 : ((o1.ary1 == o2.ary1) ? 0 : 1)); });
    for (var i = 0; i < merged.length; i++) { ary1[i] = merged[i].ary1; ary2[i] = merged[i].ary2; }
}
function closeInst() {
    $(".instClass").fadeOut(500);

    /*document.getElementById('instDiv').style.visibility = 'hidden';
    document.getElementById('overDiv').style.visibility = 'hidden';;
    document.getElementById('xDiv').style.visibility = 'hidden';*/
}
function dispInst() {

    $(".instClass").fadeIn(500);

    /*document.getElementById('instDiv').style.visibility = 'visible';
    document.getElementById('overDiv').style.visibility = 'visible';
    document.getElementById('xDiv').style.visibility = 'visible';*/
}