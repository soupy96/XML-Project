// Referencing the DOM via a global variable
var xmlDoc;

// This function loads the XML document into the DOM
function loadXMLDoc() {

    // Get an XMLHttpRequest object
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Save the document node
            xmlDoc = this.responseXML;
        }
        if (this.response) {
            populatetable();
        }
    };
    xmlhttp.open("GET", "Student1FINAL.xml", true);
    xmlhttp.send();
}

function populatetable() {

    var transcripts = xmlDoc.getElementsByTagName("InfoforTranscript");

    //DOCUMENT INFO
    //DOCUMENT INFO
    //DOCUMENT INFO
    //DOCUMENT INFO
    //DOCUMENT INFO

    var Title1 = transcripts[0].childNodes[3].textContent;
    var InstitutionName1 = transcripts[0].childNodes[5].textContent;
    var PrintingDate1 = transcripts[0].childNodes[7].textContent;
    var StudentName1 = transcripts[0].childNodes[9].textContent;
    var StudentIdNumber1 = transcripts[0].childNodes[11].textContent;
    var StudentAddress1 = transcripts[0].childNodes[13].textContent;

    var TermId1 = transcripts[0].childNodes[15].childNodes[3].textContent;

    //TABLE ONE
    //TABLE ONE
    //TABLE ONE
    //TABLE ONE
    //TABLE ONE

    var tableonejs = "<table border='1'>";
    tableonejs += "<tr><th><b>Course</b></th><th><b>Course Title</b></th><th><b>Grade</b></th><th><b>Credits</b></th><th><b>Grade Points</b></th></tr>";
    tableonejs += "<tr><th>" + transcripts[0].childNodes[15].childNodes[13].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[13].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[13].childNodes[9].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[13].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[13].childNodes[11].textContent + "</th></tr>";
    tableonejs += "<tr><th>" + transcripts[0].childNodes[15].childNodes[13].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[13].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[13].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[13].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[13].childNodes[9].textContent + "</th></tr>";
    tableonejs += "<tr><th>" + transcripts[0].childNodes[15].childNodes[15].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[15].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[15].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[15].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[15].childNodes[9].textContent + "</th></tr>";
    tableonejs += "<tr><th>" + transcripts[0].childNodes[15].childNodes[17].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[17].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[17].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[17].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[17].childNodes[9].textContent + "</th></tr>";
    tableonejs += "<tr><th>" + transcripts[0].childNodes[15].childNodes[19].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[19].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[19].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[19].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[19].childNodes[9].textContent + "</th></tr>";
    tableonejs += "<tr><th>" + transcripts[0].childNodes[15].childNodes[21].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[21].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[21].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[21].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[15].childNodes[21].childNodes[9].textContent + "</th></tr>";
    tableonejs += "<tr><th><b>Totals</b></th><th></th><th></th><th><b>" + transcripts[0].childNodes[15].childNodes[9].textContent + "</b></th><th><b>" + transcripts[0].childNodes[15].childNodes[7].textContent + "</b></th></tr>";

    //BOTTOM STUFF
    //BOTTOM STUFF
    //BOTTOM STUFF
    //BOTTOM STUFF
    //BOTTOM STUFF

    var Standing1 = transcripts[0].childNodes[15].childNodes[7].textContent;
    var Program1 = transcripts[0].childNodes[15].childNodes[5].textContent;

    //TABLE TWO
    //TABLE TWO
    //TABLE TWO
    //TABLE TWO
    //TABLE TWO

    var TermId2 = transcripts[0].childNodes[17].childNodes[3].textContent;

    var tabletwojs = "<table border='1'>";
    tabletwojs += "<tr><th><b>Course</b></th><th><b>Course Title</b></th><th><b>Grade</b></th><th><b>Credits</b></th><th><b>Grade Points</b></th></tr>";
    tabletwojs += "<tr><th>" + transcripts[0].childNodes[17].childNodes[13].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[13].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[13].childNodes[9].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[13].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[13].childNodes[11].textContent + "</th></tr>";
    tabletwojs += "<tr><th>" + transcripts[0].childNodes[17].childNodes[15].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[15].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[15].childNodes[9].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[15].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[15].childNodes[11].textContent + "</th></tr>";
    tabletwojs += "<tr><th>" + transcripts[0].childNodes[17].childNodes[17].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[17].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[17].childNodes[9].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[17].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[17].childNodes[11].textContent + "</th></tr>";
    tabletwojs += "<tr><th>" + transcripts[0].childNodes[17].childNodes[19].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[19].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[19].childNodes[9].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[19].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[19].childNodes[11].textContent + "</th></tr>";
    tabletwojs += "<tr><th>" + transcripts[0].childNodes[17].childNodes[21].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[21].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[21].childNodes[9].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[21].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[21].childNodes[11].textContent + "</th></tr>";
    tabletwojs += "<tr><th>" + transcripts[0].childNodes[17].childNodes[23].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[23].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[23].childNodes[9].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[23].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[17].childNodes[23].childNodes[11].textContent + "</th></tr>";
    tabletwojs += "<tr><th><b>Totals</b></th><th></th><th></th><th><b>" + transcripts[0].childNodes[17].childNodes[9].textContent + "</b></th><th><b>" + transcripts[0].childNodes[17].childNodes[7].textContent + "</b></th></tr>";

    //BOTTOM STUFF
    //BOTTOM STUFF
    //BOTTOM STUFF
    //BOTTOM STUFF
    //BOTTOM STUFF

    var Standing2 = transcripts[0].childNodes[17].childNodes[7].textContent;
    var Program2 = transcripts[0].childNodes[17].childNodes[5].textContent;

    //TABLE THREE
    //TABLE THREE
    //TABLE THREE
    //TABLE THREE
    //TABLE THREE

    var TermId3 = transcripts[0].childNodes[19].childNodes[3].textContent;

    var tablethreejs = "<table border='1'>";
    tablethreejs += "<tr><th><b>Course</b></th><th><b>Course Title</b></th><th><b>Grade</b></th><th><b>Credits</b></th><th><b>Grade Points</b></th></tr>";
    tablethreejs += "<tr><th>" + transcripts[0].childNodes[19].childNodes[13].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[13].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[13].childNodes[9].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[13].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[13].childNodes[11].textContent + "</th></tr>";
    tablethreejs += "<tr><th>" + transcripts[0].childNodes[19].childNodes[15].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[15].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[15].childNodes[9].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[15].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[15].childNodes[11].textContent + "</th></tr>";
    tablethreejs += "<tr><th>" + transcripts[0].childNodes[19].childNodes[17].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[17].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[17].childNodes[9].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[17].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[17].childNodes[11].textContent + "</th></tr>";
    tablethreejs += "<tr><th>" + transcripts[0].childNodes[19].childNodes[19].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[19].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[19].childNodes[9].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[19].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[19].childNodes[11].textContent + "</th></tr>";
    tablethreejs += "<tr><th>" + transcripts[0].childNodes[19].childNodes[21].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[21].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[21].childNodes[9].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[21].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[21].childNodes[11].textContent + "</th></tr>";
    tablethreejs += "<tr><th>" + transcripts[0].childNodes[19].childNodes[23].childNodes[3].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[23].childNodes[5].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[23].childNodes[9].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[23].childNodes[7].textContent + "</th>" + "<th>" + transcripts[0].childNodes[19].childNodes[23].childNodes[11].textContent + "</th></tr>";
    tablethreejs += "<tr><th><b>Totals</b></th><th></th><th></th><th><b>" + transcripts[0].childNodes[19].childNodes[11].textContent + "</b></th><th><b>" + transcripts[0].childNodes[19].childNodes[9].textContent + "</b></th></tr>";

    //BOTTOM STUFF
    //BOTTOM STUFF
    //BOTTOM STUFF
    //BOTTOM STUFF
    //BOTTOM STUFF

    var Standing3 = transcripts[0].childNodes[19].childNodes[7].textContent;
    var Program3 = transcripts[0].childNodes[19].childNodes[5].textContent;

    //PRINTING EVERYTHING
    //PRINTING EVERYTHING
    //PRINTING EVERYTHING
    //PRINTING EVERYTHING
    //PRINTING EVERYTHING

    document.getElementById("documenttitle").innerHTML = "<b>" + Title1 + "</b>";
    document.getElementById("schoolname").innerHTML = "<b>" + InstitutionName1 + "</b>";
    document.getElementById("printingdate").innerHTML = PrintingDate1;
    document.getElementById("studentname").innerHTML = StudentName1;
    document.getElementById("studentid").innerHTML = StudentIdNumber1;
    document.getElementById("studentaddress").innerHTML = StudentAddress1;

    //TABLE ONE
    //TABLE ONE
    //TABLE ONE
    //TABLE ONE
    //TABLE ONE

    document.getElementById("termidone").innerHTML = "<b>" + TermId1 + "<b>";

    document.getElementById("tableone").innerHTML = tableonejs;

    document.getElementById("standingone").innerHTML = Standing1;
    document.getElementById("programone").innerHTML = InstitutionName1;

    //TABLE TWO
    //TABLE TWO
    //TABLE TWO
    //TABLE TWO
    //TABLE TWO

    document.getElementById("termidtwo").innerHTML = "<b>" + TermId2 + "<b>";

    document.getElementById("tabletwo").innerHTML = tabletwojs;

    document.getElementById("standingtwo").innerHTML = Standing2;
    document.getElementById("programtwo").innerHTML = Program2;

    //TABLE THREE
    //TABLE THREE
    //TABLE THREE
    //TABLE THREE
    //TABLE THREE

    document.getElementById("termidthree").innerHTML = "<b>" + TermId3 + "<b>";

    document.getElementById("tablethree").innerHTML = tablethreejs;

    document.getElementById("standingthree").innerHTML = Standing3;
    document.getElementById("programthree").innerHTML = Program3;
}