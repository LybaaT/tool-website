const original = "ABCDEFGHJIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const rules=["ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ","₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦\xd8₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦\xd8₱QⱤ₴₮ɄV₩ӾɎⱫ",["\uD835\uDE08","\uD835\uDE09","\uD835\uDE0A","\uD835\uDE0B","\uD835\uDE0C","\uD835\uDE0D","\uD835\uDE0E","\uD835\uDE0F","\uD835\uDE10","\uD835\uDE11","\uD835\uDE12","\uD835\uDE13","\uD835\uDE14","\uD835\uDE15","\uD835\uDE16","\uD835\uDE17","\uD835\uDE18","\uD835\uDE19","\uD835\uDE1A","\uD835\uDE1B","\uD835\uDE1C","\uD835\uDE1D","\uD835\uDE1E","\uD835\uDE1F","\uD835\uDE20","\uD835\uDE21","\uD835\uDE22","\uD835\uDE23","\uD835\uDE24","\uD835\uDE25","\uD835\uDE26","\uD835\uDE27","\uD835\uDE28","\uD835\uDE29","\uD835\uDE2A","\uD835\uDE2B","\uD835\uDE2C","\uD835\uDE2D","\uD835\uDE2E","\uD835\uDE2F","\uD835\uDE30","\uD835\uDE31","\uD835\uDE32","\uD835\uDE33","\uD835\uDE34","\uD835\uDE35","\uD835\uDE36","\uD835\uDE37","\uD835\uDE38","\uD835\uDE39","\uD835\uDE3A","\uD835\uDE3B"],["\uD835\uDE3C","\uD835\uDE3D","\uD835\uDE3E","\uD835\uDE3F","\uD835\uDE40","\uD835\uDE41","\uD835\uDE42","\uD835\uDE43","\uD835\uDE44","\uD835\uDE45","\uD835\uDE46","\uD835\uDE47","\uD835\uDE48","\uD835\uDE49","\uD835\uDE4A","\uD835\uDE4B","\uD835\uDE4C","\uD835\uDE4D","\uD835\uDE4E","\uD835\uDE4F","\uD835\uDE50","\uD835\uDE51","\uD835\uDE52","\uD835\uDE53","\uD835\uDE54","\uD835\uDE55","\uD835\uDE56","\uD835\uDE57","\uD835\uDE58","\uD835\uDE59","\uD835\uDE5A","\uD835\uDE5B","\uD835\uDE5C","\uD835\uDE5D","\uD835\uDE5E","\uD835\uDE5F","\uD835\uDE60","\uD835\uDE61","\uD835\uDE62","\uD835\uDE63","\uD835\uDE64","\uD835\uDE65","\uD835\uDE66","\uD835\uDE67","\uD835\uDE68","\uD835\uDE69","\uD835\uDE6A","\uD835\uDE6B","\uD835\uDE6C","\uD835\uDE6D","\uD835\uDE6E","\uD835\uDE6F"],["\uD835\uDDD4","\uD835\uDDD5","\uD835\uDDD6","\uD835\uDDD7","\uD835\uDDD8","\uD835\uDDD9","\uD835\uDDDA","\uD835\uDDDB","\uD835\uDDDC","\uD835\uDDDD","\uD835\uDDDE","\uD835\uDDDF","\uD835\uDDE0","\uD835\uDDE1","\uD835\uDDE2","\uD835\uDDE3","\uD835\uDDE4","\uD835\uDDE5","\uD835\uDDE6","\uD835\uDDE7","\uD835\uDDE8","\uD835\uDDE9","\uD835\uDDEA","\uD835\uDDEB","\uD835\uDDEC","\uD835\uDDED","\uD835\uDDEE","\uD835\uDDEF","\uD835\uDDF0","\uD835\uDDF1","\uD835\uDDF2","\uD835\uDDF3","\uD835\uDDF4","\uD835\uDDF5","\uD835\uDDF6","\uD835\uDDF7","\uD835\uDDF8","\uD835\uDDF9","\uD835\uDDFA","\uD835\uDDFB","\uD835\uDDFC","\uD835\uDDFD","\uD835\uDDFE","\uD835\uDDFF","\uD835\uDE00","\uD835\uDE01","\uD835\uDE02","\uD835\uDE03","\uD835\uDE04","\uD835\uDE05","\uD835\uDE06","\uD835\uDE07"],["\uD835\uDC00","\uD835\uDC01","\uD835\uDC02","\uD835\uDC03","\uD835\uDC04","\uD835\uDC05","\uD835\uDC06","\uD835\uDC07","\uD835\uDC08","\uD835\uDC09","\uD835\uDC0A","\uD835\uDC0B","\uD835\uDC0C","\uD835\uDC0D","\uD835\uDC0E","\uD835\uDC0F","\uD835\uDC10","\uD835\uDC11","\uD835\uDC12","\uD835\uDC13","\uD835\uDC14","\uD835\uDC15","\uD835\uDC16","\uD835\uDC17","\uD835\uDC18","\uD835\uDC19","\uD835\uDC1A","\uD835\uDC1B","\uD835\uDC1C","\uD835\uDC1D","\uD835\uDC1E","\uD835\uDC1F","\uD835\uDC20","\uD835\uDC21","\uD835\uDC22","\uD835\uDC23","\uD835\uDC24","\uD835\uDC25","\uD835\uDC26","\uD835\uDC27","\uD835\uDC28","\uD835\uDC29","\uD835\uDC2A","\uD835\uDC2B","\uD835\uDC2C","\uD835\uDC2D","\uD835\uDC2E","\uD835\uDC2F","\uD835\uDC30","\uD835\uDC31","\uD835\uDC32","\uD835\uDC33"],"ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ","ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ",["\uD83C\uDD30","\uD83C\uDD31","\uD83C\uDD32","\uD83C\uDD33","\uD83C\uDD34","\uD83C\uDD35","\uD83C\uDD36","\uD83C\uDD37","\uD83C\uDD38","\uD83C\uDD39","\uD83C\uDD3A","\uD83C\uDD3B","\uD83C\uDD3C","\uD83C\uDD3D","\uD83C\uDD3E","\uD83C\uDD3F","\uD83C\uDD40","\uD83C\uDD41","\uD83C\uDD42","\uD83C\uDD43","\uD83C\uDD44","\uD83C\uDD45","\uD83C\uDD46","\uD83C\uDD47","\uD83C\uDD48","\uD83C\uDD49","\uD83C\uDD30","\uD83C\uDD31","\uD83C\uDD32","\uD83C\uDD33","\uD83C\uDD34","\uD83C\uDD35","\uD83C\uDD36","\uD83C\uDD37","\uD83C\uDD38","\uD83C\uDD39","\uD83C\uDD3A","\uD83C\uDD3B","\uD83C\uDD3C","\uD83C\uDD3D","\uD83C\uDD3E","\uD83C\uDD3F","\uD83C\uDD40","\uD83C\uDD41","\uD83C\uDD42","\uD83C\uDD43","\uD83C\uDD44","\uD83C\uDD45","\uD83C\uDD46","\uD83C\uDD47","\uD83C\uDD48","\uD83C\uDD49"],["\uD83C\uDD70","\uD83C\uDD71","\uD83C\uDD72","\uD83C\uDD73","\uD83C\uDD74","\uD83C\uDD75","\uD83C\uDD76","\uD83C\uDD77","\uD83C\uDD78","\uD83C\uDD79","\uD83C\uDD7A","\uD83C\uDD7B","\uD83C\uDD7C","\uD83C\uDD7D","\uD83C\uDD7E","\uD83C\uDD7F","\uD83C\uDD80","\uD83C\uDD81","\uD83C\uDD82","\uD83C\uDD83","\uD83C\uDD84","\uD83C\uDD85","\uD83C\uDD86","\uD83C\uDD87","\uD83C\uDD88","\uD83C\uDD89","\uD83C\uDD70","\uD83C\uDD71","\uD83C\uDD72","\uD83C\uDD73","\uD83C\uDD74","\uD83C\uDD75","\uD83C\uDD76","\uD83C\uDD77","\uD83C\uDD78","\uD83C\uDD79","\uD83C\uDD7A","\uD83C\uDD7B","\uD83C\uDD7C","\uD83C\uDD7D","\uD83C\uDD7E","\uD83C\uDD7F","\uD83C\uDD80","\uD83C\uDD81","\uD83C\uDD82","\uD83C\uDD83","\uD83C\uDD84","\uD83C\uDD85","\uD83C\uDD86","\uD83C\uDD87","\uD83C\uDD88","\uD83C\uDD89"],["​\uD83C\uDDE6​","​\uD83C\uDDE7​","​\uD83C\uDDE8​","​\uD83C\uDDE9​","​\uD83C\uDDEA​","​\uD83C\uDDEB​","​\uD83C\uDDEC​","​\uD83C\uDDED​","​\uD83C\uDDEE​","​\uD83C\uDDEF​","​\uD83C\uDDF0​","​\uD83C\uDDF1​","​\uD83C\uDDF2​","​\uD83C\uDDF3​","​\uD83C\uDDF4​","​\uD83C\uDDF5​","​\uD83C\uDDF6​","​\uD83C\uDDF7​","​\uD83C\uDDF8​","​\uD83C\uDDF9​","​\uD83C\uDDFA​","​\uD83C\uDDFB​","​\uD83C\uDDFC​","​\uD83C\uDDFD​","​\uD83C\uDDFE​","​\uD83C\uDDFF​","​\uD83C\uDDE6​","​\uD83C\uDDE7​","​\uD83C\uDDE8​","​\uD83C\uDDE9​","​\uD83C\uDDEA​","​\uD83C\uDDEB​","​\uD83C\uDDEC​","​\uD83C\uDDED​","​\uD83C\uDDEE​","​\uD83C\uDDEF​","​\uD83C\uDDF0​","​\uD83C\uDDF1​","​\uD83C\uDDF2​","​\uD83C\uDDF3​","​\uD83C\uDDF4​","​\uD83C\uDDF5​","​\uD83C\uDDF6​","​\uD83C\uDDF7​","​\uD83C\uDDF8​","​\uD83C\uDDF9​","​\uD83C\uDDFA​","​\uD83C\uDDFB​","​\uD83C\uDDFC​","​\uD83C\uDDFD​","​\uD83C\uDDFE​","​\uD83C\uDDFF​"],"ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀꜱᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀꜱᴛᴜᴠᴡxʏᴢ"];

function generate() {
    const text = $('textInput').value;
    let output = '';
    rules.forEach((rule) => {
        let temp_output = text;
        for (let i = 0; i < original.length; i ++) {
            temp_output = temp_output.replaceAll(original[i], rule[i]);
        };
        output += temp_output + '\n';
    });
    $('textOutput').innerHTML = output;
};

$('textInput').oninput = generate;
generate();