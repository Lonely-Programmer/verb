var romaji_table1 = [
    {hiragana:'あ', romaji:'a'},
    {hiragana:'い', romaji:'i'},
    {hiragana:'う', romaji:'u'},
    {hiragana:'え', romaji:'e'},
    {hiragana:'お', romaji:'o'},
    {hiragana:'ん', romaji:'n'}
]
var romaji_table2 = [
    {hiragana:'ふ', romaji:'fu'},
    {hiragana:'じ', romaji:'ji'},
    {hiragana:'じゃ', romaji:'ja'},
    {hiragana:'じゅ', romaji:'ju'},
    {hiragana:'じょ', romaji:'jo'},
    {hiragana:'ふぁ', romaji:'fa'},
    {hiragana:'ふぃ', romaji:'fi'},
    {hiragana:'ふぇ', romaji:'fe'},
    {hiragana:'ふぉ', romaji:'fo'},
    {hiragana:'ぁ', romaji:'xa'},
    {hiragana:'ぃ', romaji:'xi'},
    {hiragana:'ぅ', romaji:'xu'},
    {hiragana:'ぇ', romaji:'xe'},
    {hiragana:'ぉ', romaji:'xo'},

    {hiragana:'か', romaji:'ka'},
    {hiragana:'き', romaji:'ki'},
    {hiragana:'く', romaji:'ku'},
    {hiragana:'け', romaji:'ke'},
    {hiragana:'こ', romaji:'ko'},
    {hiragana:'さ', romaji:'sa'},
    {hiragana:'し', romaji:'si'},
    {hiragana:'す', romaji:'su'},
    {hiragana:'せ', romaji:'se'},
    {hiragana:'そ', romaji:'so'},
    {hiragana:'た', romaji:'ta'},
    {hiragana:'ち', romaji:'ti'},
    {hiragana:'つ', romaji:'tu'},
    {hiragana:'て', romaji:'te'},
    {hiragana:'と', romaji:'to'},
    {hiragana:'な', romaji:'na'},
    {hiragana:'に', romaji:'ni'},
    {hiragana:'ぬ', romaji:'nu'},
    {hiragana:'ね', romaji:'ne'},
    {hiragana:'の', romaji:'no'},
    {hiragana:'は', romaji:'ha'},
    {hiragana:'ひ', romaji:'hi'},
    {hiragana:'ふ', romaji:'hu'},
    {hiragana:'へ', romaji:'he'},
    {hiragana:'ほ', romaji:'ho'},
    {hiragana:'ま', romaji:'ma'},
    {hiragana:'み', romaji:'mi'},
    {hiragana:'む', romaji:'mu'},
    {hiragana:'め', romaji:'me'},
    {hiragana:'も', romaji:'mo'},
    {hiragana:'や', romaji:'ya'},
    {hiragana:'ゆ', romaji:'yu'},
    {hiragana:'よ', romaji:'yo'},
    {hiragana:'ら', romaji:'ra'},
    {hiragana:'り', romaji:'ri'},
    {hiragana:'る', romaji:'ru'},
    {hiragana:'れ', romaji:'re'},
    {hiragana:'ろ', romaji:'ro'},
    {hiragana:'わ', romaji:'wa'},
    {hiragana:'ゐ', romaji:'wi'},
    {hiragana:'ゑ', romaji:'we'},
    {hiragana:'を', romaji:'wo'},
    {hiragana:'が', romaji:'ga'},
    {hiragana:'ぎ', romaji:'gi'},
    {hiragana:'ぐ', romaji:'gu'},
    {hiragana:'げ', romaji:'ge'},
    {hiragana:'ご', romaji:'go'},
    {hiragana:'ざ', romaji:'za'},
    {hiragana:'じ', romaji:'zi'},
    {hiragana:'ず', romaji:'zu'},
    {hiragana:'ぜ', romaji:'ze'},
    {hiragana:'ぞ', romaji:'zo'},
    {hiragana:'だ', romaji:'da'},
    {hiragana:'ぢ', romaji:'di'},
    {hiragana:'づ', romaji:'du'},
    {hiragana:'で', romaji:'de'},
    {hiragana:'ど', romaji:'do'},
    {hiragana:'ば', romaji:'ba'},
    {hiragana:'び', romaji:'bi'},
    {hiragana:'ぶ', romaji:'bu'},
    {hiragana:'べ', romaji:'be'},
    {hiragana:'ぼ', romaji:'bo'},
    {hiragana:'ぱ', romaji:'pa'},
    {hiragana:'ぴ', romaji:'pi'},
    {hiragana:'ぷ', romaji:'pu'},
    {hiragana:'ぺ', romaji:'pe'},
    {hiragana:'ぽ', romaji:'po'}
]
var romaji_table3 = [
    {hiragana:'し', romaji:'shi'},
    {hiragana:'ち', romaji:'chi'},
    {hiragana:'つ', romaji:'tsu'},
    {hiragana:'じゃ', romaji:'jya'},
    {hiragana:'じゅ', romaji:'jyu'},
    {hiragana:'じょ', romaji:'jyo'},
    {hiragana:'つぁ', romaji:'tsa'},
    {hiragana:'つぃ', romaji:'tsi'},
    {hiragana:'つぇ', romaji:'tse'},
    {hiragana:'つぉ', romaji:'tso'},
    {hiragana:'うぁ', romaji:'wha'},
    {hiragana:'うぃ', romaji:'whi'},
    {hiragana:'うぇ', romaji:'whe'},
    {hiragana:'うぉ', romaji:'who'},
    {hiragana:'てぃ', romaji:'thi'},
    {hiragana:'てゅ', romaji:'thu'},
    {hiragana:'てょ', romaji:'tho'},
    {hiragana:'しぇ', romaji:'she'},
    {hiragana:'ちぇ', romaji:'che'},
    {hiragana:'でぃ', romaji:'dhi'},
    {hiragana:'でゅ', romaji:'dhu'},
    {hiragana:'でょ', romaji:'dho'},
    {hiragana:'ゃ', romaji:'xya'},
    {hiragana:'ゅ', romaji:'xyu'},
    {hiragana:'ょ', romaji:'xyo'},
    {hiragana:'っ', romaji:'xtu'},
    {hiragana:'ヶ', romaji:'xke'},

    {hiragana:'きゃ', romaji:'kya'},
    {hiragana:'きゅ', romaji:'kyu'},
    {hiragana:'きょ', romaji:'kyo'},
    {hiragana:'しゃ', romaji:'sha'},
    {hiragana:'しゅ', romaji:'shu'},
    {hiragana:'しょ', romaji:'sho'},
    {hiragana:'ちゃ', romaji:'cha'},
    {hiragana:'ちゅ', romaji:'chu'},
    {hiragana:'ちょ', romaji:'cho'},
    {hiragana:'にゃ', romaji:'nya'},
    {hiragana:'にゅ', romaji:'nyu'},
    {hiragana:'にょ', romaji:'nyo'},
    {hiragana:'ひゃ', romaji:'hya'},
    {hiragana:'ひゅ', romaji:'hyu'},
    {hiragana:'ひょ', romaji:'hyo'},
    {hiragana:'みゃ', romaji:'mya'},
    {hiragana:'みゅ', romaji:'myu'},
    {hiragana:'みょ', romaji:'myo'},
    {hiragana:'りゃ', romaji:'rya'},
    {hiragana:'りゅ', romaji:'ryu'},
    {hiragana:'りょ', romaji:'ryo'},
    {hiragana:'ぎゃ', romaji:'gya'},
    {hiragana:'ぎゅ', romaji:'gyu'},
    {hiragana:'ぎょ', romaji:'gyo'},
    {hiragana:'じゃ', romaji:'jya'},
    {hiragana:'じゅ', romaji:'jyu'},
    {hiragana:'じょ', romaji:'jyo'},
    {hiragana:'びゃ', romaji:'bya'},
    {hiragana:'びゅ', romaji:'byu'},
    {hiragana:'びょ', romaji:'byo'},
    {hiragana:'ぴゃ', romaji:'pya'},
    {hiragana:'ぴゅ', romaji:'pyu'},
    {hiragana:'ぴょ', romaji:'pyo'}
]

function ToCDB(str)
{ 
    var tmp = ''; 
    for(var i=0;i<str.length;i++){ 
        if (str.charCodeAt(i) == 12288){
            tmp += String.fromCharCode(str.charCodeAt(i)-12256);
            continue;
        }
        if(str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375){ 
            tmp += String.fromCharCode(str.charCodeAt(i)-65248); 
        } 
        else{ 
            tmp += String.fromCharCode(str.charCodeAt(i)); 
        } 
    } 
    return tmp 
} 
function get_kana(s)
{
    var remain = '';
    while(s.length > 3)
    {
        remain = remain + s[0];
        s = s.slice(1,s.length);
    }
    while(s.length > 0)
    {
        var tmp;
        if(s.length == 3)
            tmp = romaji_table3;
        else if(s.length == 2)
            tmp = romaji_table2;
        else if(s.length == 1)
            tmp = romaji_table1;

        for(var i=0;i<tmp.length;i++)
        {
            if(tmp[i].romaji == s)
                return remain + tmp[i].hiragana;
        }
        remain = remain + s[0];
        s = s.slice(1,s.length);
    }
    return remain;
}
function romaji_to_hiragana(s)
{
    ans = '';
    tmp = '';
    s = s.toLowerCase();
    s = ToCDB(s);
    for(i=0;i<s.length;i++)
    {
        if(s[i] == '\'')
        {
            ans = ans + get_kana(tmp);
            tmp = '';
            continue;
        }
        if(s[i] == '-')
        {
            ans = ans + get_kana(tmp) + 'ー';
            tmp = '';
            continue;
        }
        if(!(/^[a-zA-Z]+$/.test(s[i])))
        {
            ans = ans + get_kana(tmp) + s[i];
            tmp = '';
            continue;
        }
        tmp = tmp + s[i];
        if('aiueo'.indexOf(s[i]) != -1)
        {
            ans = ans + get_kana(tmp);
            tmp = '';
            continue;
        }
        
        if(tmp.length >= 2 && tmp[tmp.length-1] == tmp[tmp.length-2] && 'aiueon'.indexOf(tmp[tmp.length-1]) == -1)
        {
            ans = ans + tmp.slice(0,tmp.length-2) + 'っ';
            tmp = tmp[tmp.length-1];
            continue;
        }
        if(tmp.length >= 2 && tmp[tmp.length-2] == 'n' && 'aiueo\''.indexOf(tmp[tmp.length-1]) == -1)
        {
            ans = ans + tmp.slice(0,tmp.length-2) + 'ん';
            tmp = tmp[tmp.length-1];
            continue;
        }
    }
    var tmp2 = get_kana(tmp);
    if(tmp2 != '')
        ans = ans + tmp2;
    else
        ans = ans + tmp;
    return ans;
}