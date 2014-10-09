//
// $Id: zebra.js 816 2009-11-23 17:08:20Z js10 $
//
addEvent(window, "load", zebratables_init);

function zebratables_init() {
    if (!document.getElementsByTagName) {
        return;
    }
    tbls = document.getElementsByTagName("table");
    for (ti = 0; ti < tbls.length; ti++) {
        thisTbl = tbls[ti];
        if ((" " + thisTbl.className + " ").indexOf("zebra") != -1 &&
            thisTbl.id) {
            zb_makeZebra(thisTbl);
        }
    }
}

function zb_makeZebra(table) {
    if (table.rows && table.rows.length > 0) {
        var firstRow = table.rows[0];
    }
    if (!firstRow) {
        return;
    }
    var tabrow = 1;
    for (i = 1; i < table.rows.length; i++) {
        table.rows[i].className = "tabrow" + tabrow;
        tabrow = 1 + !(tabrow - 1);
    }
}

function addEvent(elm, evType, fn, useCapture) {
    if (elm.addEventListener) {
        elm.addEventListener(evType, fn, useCapture);
        return true;
    } else if (elm.attachEvent) {
        var r = elm.attachEvent("on" + evType, fn);
        return r;
    } else {
        alert("Handler could not be attached");
    }
}


