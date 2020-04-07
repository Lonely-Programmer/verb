function kata_to_hira(ch)
{
    var hiragana = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやいゆえよらりるれろわゐうゑをがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉゃゅょっん';
    var katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤイユエヨラリルレロワヰウヱヲガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォャュョッン';
    var ans = '';
    for(var i=0;i<ch.length;i++)
    {
        var idx = katakana.indexOf(ch[i]);
        if(idx != -1)
            ans = ans + hiragana[idx];
        else
            ans = ans + ch[i] 
    }
    return ans;
}
function trans(verb,dan)
{
    var gojuuonzu = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやいゆえよらりるれろわゐうゑをがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉん';
    var dans = 'あいうえお';
    pos=gojuuonzu.indexOf(verb);
    if(pos < 0)
        return '';
    row = parseInt(pos / 5);
    line = dans.indexOf(dan);
    if(line < 0)
        return '';
    if(row == 0 && line == 0)
        return 'わ';
    return gojuuonzu[row*5+line];
}
function to_masu(verb,dan)
{
    if(dan == 'v5aru')
        return verb.slice(0,-1) + 'います';
    if(dan.slice(0,2) == 'v5')
        return verb.slice(0,-1) + trans(verb[verb.length-1],'い') + 'ます';
    if(dan.slice(0,2) == 'v1')
        return verb.slice(0,-1) + 'ます';
    if(dan.slice(0,2) == 'vs')
        return verb.slice(0,-2) + 'します';
    if(dan.slice(0,2) == 'vk')
        return verb.slice(0,-1) + 'ます';
    return 'Error';
}
function to_te(verb,dan)
{
    if(dan == 'v5k-s')
        return verb.slice(0,-1) + 'って';
    if(dan == 'v5u-s')
        return verb + 'て';
    if(dan.slice(0,2) == 'v5')
    {
        var last = verb[verb.length-1];
        if(last == 'る' || last == 'つ' || last == 'う')
            return verb.slice(0,-1) + 'って';
        if(last == 'ぶ' || last == 'ぬ' || last == 'む')
            return verb.slice(0,-1) + 'んで';
        if(last == 'す')
            return verb.slice(0,-1) + 'して';
        if(last == 'く')
            return verb.slice(0,-1) + 'いて';
        if(last == 'ぐ')
            return verb.slice(0,-1) + 'いで';
        return 'Error';
    }
    if(dan.slice(0,2) == 'v1')
        return verb.slice(0,-1) + 'て';
    if(dan.slice(0,2) == 'vs')
        return verb.slice(0,-2) + 'して';
    if(dan.slice(0,2) == 'vk')
        return verb.slice(0,-1) + 'て';
    return 'Error';
}
function to_ta(verb,dan)
{
    var ans = to_te(verb,dan);
    if(ans[ans.length-1] == 'て')
        return ans.slice(0,-1) + 'た';
    if(ans[ans.length-1] == 'で')
        return ans.slice(0,-1) + 'だ';
    return 'Error';
}
function to_nai(verb,dan)
{
    if(dan == 'v5r-i')
        return verb.slice(0,-2) + 'ない';
    if(dan.slice(0,2) == 'v5')
        return verb.slice(0,-1) + trans(verb[verb.length-1],'あ') + 'ない';
    if(dan.slice(0,2) == 'v1')
        return verb.slice(0,-1) + 'ない';
    if(dan.slice(0,2) == 'vs')
        return verb.slice(0,-2) + 'しない';
    if(dan.slice(0,2) == 'vk')
        return verb.slice(0,-1) + 'ない';
    return 'Error';
}
function to_you(verb,dan)
{
    if(dan.slice(0,2) == 'v5')
        return verb.slice(0,-1) + trans(verb[verb.length-1],'お') + 'う';
    if(dan.slice(0,2) == 'v1')
        return verb.slice(0,-1) + 'よう';
    if(dan.slice(0,2) == 'vs')
        return verb.slice(0,-2) + 'しよう';
    if(dan.slice(0,2) == 'vk')
        return verb.slice(0,-1) + 'よう';
    return 'Error';
}
function to_ba(verb,dan)
{
    if(dan.slice(0,2) == 'v5' || dan.slice(0,2) == 'v1' || dan.slice(0,2) == 'vk')
        return verb.slice(0,-1) + trans(verb[verb.length-1],'え') + 'ば';
    if(dan.slice(0,2) == 'vs')
    return verb.slice(0,-2) + 'すれば';
    return 'Error';
}
function to_eru(verb,dan)
{
    if(dan.slice(0,2) == 'v5')
        return verb.slice(0,-1) + trans(verb[verb.length-1],'え') + 'る';
    if(dan.slice(0,2) == 'v1')
        return verb.slice(0,-1) + 'られる';
    if(dan.slice(0,2) == 'vs')
        return verb.slice(0,-2) + 'できる';
    if(dan.slice(0,2) == 'vk')
        return verb.slice(0,-1) + 'られる';
    return 'Error';
}
function to_rareru(verb,dan)
{
    if(dan.slice(0,2) == 'v5')
        return verb.slice(0,-1) + trans(verb[verb.length-1],'あ') + 'れる';
    if(dan.slice(0,2) == 'v1')
        return verb.slice(0,-1) + 'られる';
    if(dan.slice(0,2) == 'vs')
        return verb.slice(0,-2) + 'される';
    if(dan.slice(0,2) == 'vk')
        return verb.slice(0,-1) + 'られる';
    return 'Error';
}
function to_saseru(verb,dan)
{
    if(dan.slice(0,2) == 'v5')
        return verb.slice(0,-1) + trans(verb[verb.length-1],'あ') + 'せる';
    if(dan.slice(0,2) == 'v1')
        return verb.slice(0,-1) + 'させる';
    if(dan.slice(0,2) == 'vs')
        return verb.slice(0,-2) + 'させる';
    if(dan.slice(0,2) == 'vk')
        return verb.slice(0,-1) + 'させる';
    return 'Error';
}
function to_saserareru(verb,dan)
{
    if(dan.slice(0,2) == 'v5')
        return verb.slice(0,-1) + trans(verb[verb.length-1],'あ') + 'される';
    if(dan.slice(0,2) == 'v1')
        return verb.slice(0,-1) + 'させられる';
    if(dan.slice(0,2) == 'vs')
        return verb.slice(0,-2) + 'させられる';
    if(dan.slice(0,2) == 'vk')
        return verb.slice(0,-1) + 'させられる';
    return 'Error';
}
function to_command(verb,dan)
{
    if(dan == 'v1-s')
        return verb.slice(0,-1);
    if(dan.slice(0,2) == 'v5')
        return verb.slice(0,-1) + trans(verb[verb.length-1],'え');
    if(dan.slice(0,2) == 'v1')
        return verb.slice(0,-1) + 'ろ';
    if(dan.slice(0,2) == 'vs')
        return verb.slice(0,-2) + 'しろ/せよ';
    if(dan.slice(0,2) == 'vk')
        return verb.slice(0,-1) + 'い';
    return 'Error';
}
function get_result(verb,dan)
{
    ans = verb + '——';
    if(dan.slice(0,2) == 'v1')
        ans = ans + '二类动词/一段动词\n\n';
    else if(dan.slice(0,2) == 'v5')
        ans = ans + '一类动词/五段动词\n\n';
    else if(dan.slice(0,2) == 'vs')
        ans = ans + '三类动词/サ变动词\n\n';
    else if(dan.slice(0,2) == 'vk')
        ans = ans + '三类动词/カ变动词\n\n';
    else
    {
        ans = ans + '无法判断动词类型，请检查输入动词是否正确！\n\n';
        return ans;
    }

    ans = ans + 'ます形:\t ' + to_masu(verb,dan) + '\n\r';
    ans = ans + 'て形:\t ' + to_te(verb,dan) + '\n';
    ans = ans + 'た形:\t ' + to_ta(verb,dan) + '\n';
    ans = ans + 'ない形:\t ' + to_nai(verb,dan) + '\n';
    ans = ans + '意志形:\t ' + to_you(verb,dan) + '\n';
    ans = ans + 'ば形:\t ' + to_ba(verb,dan) + '\n';
    ans = ans + '可能态:\t ' + to_eru(verb,dan) + '\n';
    ans = ans + '被动态:\t ' + to_rareru(verb,dan) + '\n';
    ans = ans + '使役态:\t ' + to_saseru(verb,dan) + '\n';
    ans = ans + '使役被动态:\t ' + to_saserareru(verb,dan) + '\n'
    ans = ans + '命令形:\t ' + to_command(verb,dan) + '\n';
    return ans;
}
