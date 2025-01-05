var lang = "";
var type = "";
function tfb_cs_tmm() {
    if (args.length == 2) {
        type = args[0];
        lang = args[1];
    }

    if (type == "name") {
        switch (lang) {
            case "danish":
                return "#FFFFFFT#FFAFC7h#73D7EEe#3A6C77 #000000M#281A08e#50350Fo#784F17w#BC280C #FF0000M#FF7F00o#FFFF00v#00FF00e#0000FFm#2600C1e#4B0082n#9400D3t";
                break;
            default:
                return "#FFFFFFT#FFAFC7h#73D7EEe#3A6C77 #000000M#281A08e#50350Fo#784F17w#BC280C #FF0000M#FF7F00o#FFFF00v#00FF00e#0000FFm#2600C1e#4B0082n#9400D3t";
        }

    } else if (type == "lore") {
        switch (lang) {
            case "danish":
                return "&eSprog&8: &7Engelsk\\n&eKlik for at joine nu!";
                break;
            default:
                return "&eLanguage&8: &7English\\n&eClick to connect now!";
        }
    } else if (type == "message") {
        switch (lang) {
            case "danish":
                return "&ahttps://stats.theflyingbirds.net:8804 &8<- &eKlik her for at joine!";
                break;
            default:
                return "&ahttps://stats.theflyingbirds.net:8804 &8<- &eClick me to see stats";
        }
    } else { return "error"; }
}

tfb_cs_tmm();