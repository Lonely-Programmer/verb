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
function get_dan(hiragana)
{
    var gojuuonzu = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやいゆえよらりるれろわゐうゑをがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ';
    var dans = 'あいうえお';
    pos=gojuuonzu.indexOf(hiragana);
    if('ぁぃぅぇぉゃゅょっん'.indexOf(hiragana) != -1)
        return 'ん';
    if(pos < 0)
        return '';
    return dans[pos%5];
}
function end_with(verb,s)
{
    return verb.length >= s.length && verb.slice(-s.length,verb.length) == s;
}
function list_equal(x,y)
{
    if(x[0] != y[0])
        return false;
    if(x[1] != y[1])
        return false;
    if(x[2].length != y[2].length)
        return false;
    for(var i=0;i<x[2].length;i++)
    {
        if(x[2][i] != y[2][i])
            return false;
    }
    return true;
}
function exist(x,a)
{
    for(var i=0;i<x.length;i++)
    {
        if(list_equal(x[i],a))
            return true;
    }
    return false;
}
function process(verb)
{
    var state = [];
    var state_tmp = [];
    var tmp;
    var last_dan;
    var types;
    var steps;

    state.push([verb,'v1',[],[]]);
    state.push([verb,'v5',[],[]]);
    state.push([verb,'vs',[],[]]);
    state.push([verb,'vk',[],[]]);

    types = ['ます','ました','ません','ませんでした','ましょう'];
    steps = ['ます形','ます形+过去','ます形+否定','ます形+过去否定','ます形+意志'];
    for(var j=0;j<state.length;j++)
    {
        verb = state[j][0];
        var type = state[j][1];
        var change = state[j][2];
        var history = state[j][3];
        for(var i=0;i<types.length;i++)
        {
            if(end_with(verb,types[i]))
            {
                tmp = verb.slice(0,-types[i].length);
                //alert(tmp);
                last_dan = get_dan(tmp[tmp.length-1]);
                if(type == 'v1' && (last_dan == 'い' || last_dan == 'え' || last_dan == ''))
                {
                    state_tmp.push([tmp+'る','v1',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'v5' && last_dan == 'い')
                {
                    state_tmp.push([tmp.slice(0,-1)+trans(tmp[tmp.length-1],'う'),'v5',[steps[i]].concat(change),[verb].concat(history)]);
                    if(tmp[tmp.length-1] == 'い')
                        state_tmp.push([tmp.slice(0,-1)+'る','v5aru',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'vs' && tmp[tmp.length-1] == 'し')
                {
                    state_tmp.push([tmp.slice(0,-1)+'する','vs',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'vk')
                {
                    if(tmp[tmp.length-1] == 'き')
                        state_tmp.push([tmp.slice(0,-1)+'くる','vk',[steps[i]].concat(change),[verb].concat(history)]);
                    else if(last_dan == '')
                        state_tmp.push([tmp+'る','vk',[steps[i]].concat(change),[verb].concat(history)]);
                }
            }
        }
    }
    state = state_tmp.concat(state);
    state_tmp = [];

    types = ['ない','なくて','なければ','なかった'];
    steps = ['ない形','ない形+て形','ない形+ば形','ない形+た形'];
    for(var j=0;j<state.length;j++)
    {
        verb = state[j][0];
        var type = state[j][1];
        var change = state[j][2];
        var history = state[j][3];
        for(var i=0;i<types.length;i++)
        {
            if(end_with(verb,types[i]))
            {
                tmp = verb.slice(0,-types[i].length);
                last_dan = get_dan(tmp[tmp.length-1]);
                if(type == 'v1' && (last_dan == 'い' || last_dan == 'え' || last_dan == ''))
                {
                    state_tmp.push([tmp+'る','v1',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'v5' && last_dan == 'あ')
                {
                    state_tmp.push([tmp.slice(0,-1)+trans(tmp[tmp.length-1],'う'),'v5',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'v5')
                {
                    state_tmp.push([tmp+'ある','v5r-i',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'vs' && tmp[tmp.length-1] == 'し')
                {
                    state_tmp.push([tmp.slice(0,-1)+'する','vs',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'vk')
                {
                    if(tmp[tmp.length-1] == 'こ')
                        state_tmp.push([tmp.slice(0,-1)+'くる','vk',[steps[i]].concat(change),[verb].concat(history)]);
                    else if(last_dan == '')
                        state_tmp.push([tmp+'る','vk',[steps[i]].concat(change),[verb].concat(history)]);
                }
            }
        }
    }
    state = state_tmp.concat(state);
    state_tmp = [];

    types = ['てで','ただ'];
    steps = ['て形','た形'];
    for(var j=0;j<state.length;j++)
    {
        verb = state[j][0];
        var type = state[j][1];
        var change = state[j][2];
        var history = state[j][3];
        for(var i=0;i<types.length;i++)
        {
            if(end_with(verb,types[i][0]) || end_with(verb,types[i][1]))
            {
                tmp = verb;
                last_dan = get_dan(tmp[tmp.length-2]);
                if(type == 'v1' && tmp[tmp.length-1] == types[i][0] && (tmp[tmp.length-1] == types[i][0] || last_dan == 'い' || last_dan == 'え' || last_dan == ''))
                {
                    state_tmp.push([tmp.slice(0,-1)+'る','v1',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'v5')
                {
                    if(tmp[tmp.length-2] == 'っ' && tmp[tmp.length-1] == types[i][0])
                    {
                        state_tmp.push([tmp.slice(0,-2)+'る','v5',[steps[i]].concat(change),[verb].concat(history)]);
                        state_tmp.push([tmp.slice(0,-2)+'つ','v5',[steps[i]].concat(change),[verb].concat(history)]);
                        state_tmp.push([tmp.slice(0,-2)+'う','v5',[steps[i]].concat(change),[verb].concat(history)]);
                        state_tmp.push([tmp.slice(0,-2)+'く','v5k-s',[steps[i]].concat(change),[verb].concat(history)]);
                    }
                    else if(tmp[tmp.length-2] == 'し' && tmp[tmp.length-1] == types[i][0])
                    {
                        state_tmp.push([tmp.slice(0,-2)+'す','v5',[steps[i]].concat(change),[verb].concat(history)]);
                    }
                    else if(tmp[tmp.length-2] == 'い' && tmp[tmp.length-1] == types[i][0])
                    {
                        state_tmp.push([tmp.slice(0,-2)+'く','v5',[steps[i]].concat(change),[verb].concat(history)]);
                    }
                    else if(tmp[tmp.length-2] == 'い' && tmp[tmp.length-1] == types[i][1])
                    {
                        state_tmp.push([tmp.slice(0,-2)+'ぐ','v5',[steps[i]].concat(change),[verb].concat(history)]);
                    }
                    else if(tmp[tmp.length-2] == 'ん' && tmp[tmp.length-1] == types[i][1])
                    {
                        state_tmp.push([tmp.slice(0,-2)+'ぶ','v5',[steps[i]].concat(change),[verb].concat(history)]);
                        state_tmp.push([tmp.slice(0,-2)+'ぬ','v5',[steps[i]].concat(change),[verb].concat(history)]);
                        state_tmp.push([tmp.slice(0,-2)+'む','v5',[steps[i]].concat(change),[verb].concat(history)]);
                    }
                    else if(tmp[tmp.length-2] == 'う' && tmp[tmp.length-1] == types[i][0])
                    {
                        state_tmp.push([tmp.slice(0,-1),'v5u-s',[steps[i]].concat(change),[verb].concat(history)]);
                    }
                }
                else if(type == 'vs' && tmp[tmp.length-2] == 'し' && tmp[tmp.length-1] == types[i][0])
                {
                    state_tmp.push([tmp.slice(0,-2)+'する','vs',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'vk' && tmp[tmp.length-1] == types[i][0])
                {
                    if(tmp[tmp.length-2] == 'き')
                        state_tmp.push([tmp.slice(0,-2)+'くる','vk',[steps[i]].concat(change),[verb].concat(history)]);
                    else if(last_dan == '')
                        state_tmp.push([tmp.slice(0,-1)+'る','vk',[steps[i]].concat(change),[verb].concat(history)]);
                }
            }
        }
    }
    state = state_tmp.concat(state);
    state_tmp = [];

    types = ['ば'];
    steps = ['ば形'];
    for(var j=0;j<state.length;j++)
    {
        verb = state[j][0];
        var type = state[j][1];
        var change = state[j][2];
        var history = state[j][3];
        for(var i=0;i<types.length;i++)
        {
            if(end_with(verb,types[i]))
            {
                tmp = verb.slice(0,-types[i].length);
                //alert(tmp);
                last_dan = get_dan(tmp[tmp.length-1]);
                last_dan_2 = get_dan(tmp[tmp.length-2]);
                if(type == 'v1' && tmp[tmp.length-1] == 'れ' && (last_dan_2 == 'い' || last_dan_2 == 'え'  || last_dan_2 == ''))
                {
                    state_tmp.push([tmp.slice(0,-1)+trans(tmp[tmp.length-1],'う'),'v1',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'v5' && last_dan == 'え')
                {
                    state_tmp.push([tmp.slice(0,-1)+trans(tmp[tmp.length-1],'う'),'v5',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'vs' && tmp[tmp.length-2] == 'す' && tmp[tmp.length-1] == 'れ')
                {
                    state_tmp.push([tmp.slice(0,-1)+trans(tmp[tmp.length-1],'う'),'vs',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'vk' && tmp[tmp.length-1] == 'れ')
                {
                    if(tmp[tmp.length-2] == 'く')
                        state_tmp.push([tmp.slice(0,-1)+'る','vk',[steps[i]].concat(change),[verb].concat(history)]);
                    else if(last_dan_2 == '')
                        state_tmp.push([tmp.slice(0,-1)+'る','vk',[steps[i]].concat(change),[verb].concat(history)]);
                }
            }
        }
    }
    state = state_tmp.concat(state);
    state_tmp = [];

    types = ['う'];
    steps = ['意志形'];
    for(var j=0;j<state.length;j++)
    {
        verb = state[j][0];
        var type = state[j][1];
        var change = state[j][2];
        var history = state[j][3];
        for(var i=0;i<types.length;i++)
        {
            if(end_with(verb,types[i]))
            {
                tmp = verb.slice(0,-types[i].length);
                last_dan = get_dan(tmp[tmp.length-1]);
                if(type == 'v1' && (tmp[tmp.length-1] == 'よ'))
                {
                    state_tmp.push([tmp.slice(0,-1)+'る','v1',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'v5' && last_dan == 'お')
                {
                    state_tmp.push([tmp.slice(0,-1)+trans(tmp[tmp.length-1],'う'),'v5',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'vs' && tmp[tmp.length-2] == 'し' && tmp[tmp.length-1] == 'よ')
                {
                    state_tmp.push([tmp.slice(0,-2)+'する','vs',[steps[i]].concat(change),[verb].concat(history)]);
                }
                else if(type == 'vk' && tmp[tmp.length-1] == 'よ')
                {
                    if(tmp[tmp.length-2] == 'こ')
                        state_tmp.push([tmp.slice(0,-2)+'くる','vk',[steps[i]].concat(change),[verb].concat(history)]);
                    else if(get_dan(tmp[tmp.length-2]) == '')
                        state_tmp.push([tmp.slice(0,-1)+'る','vk',[steps[i]].concat(change),[verb].concat(history)]);
                }
            }
        }
    }
    state = state_tmp.concat(state);
    state_tmp = [];

    types = ['I'];
    steps = ['命令形'];
    for(var j=0;j<state.length;j++)
    {
        verb = state[j][0];
        var type = state[j][1];
        var change = state[j][2];
        var history = state[j][3];
        for(var i=0;i<types.length;i++)
        {
            tmp = verb;
            //alert(tmp);
            last_dan = get_dan(tmp[tmp.length-1]);
            if(type == 'v1' && tmp[tmp.length-1] == 'ろ' && (get_dan(tmp[tmp.length-2]) == 'い' || get_dan(tmp[tmp.length-2]) == 'え'))
            {
                state_tmp.push([tmp.slice(0,-1)+'る','v1',[steps[i]].concat(change),[verb].concat(history)]);
            }
            else if(type == 'v1' && tmp[tmp.length-1] == 'れ')
            {
                state_tmp.push([tmp+'る','v1-s',[steps[i]].concat(change),[verb].concat(history)]);
            }
            else if(type == 'v5' && last_dan == 'え')
            {
                state_tmp.push([tmp.slice(0,-1)+trans(tmp[tmp.length-1],'う'),'v5',[steps[i]].concat(change),[verb].concat(history)]);
            }
            else if(type == 'vs' && ((tmp[tmp.length-2] == 'し' && tmp[tmp.length-1] == 'ろ') || tmp[tmp.length-2] == 'せ' && tmp[tmp.length-1] == 'よ'))
            {
                state_tmp.push([tmp.slice(0,-2)+'する','vs',[steps[i]].concat(change),[verb].concat(history)]);
            }
            else if(type == 'vk' && tmp[tmp.length-1] == 'い')
            {
                if(tmp[tmp.length-2] == 'こ')
                        state_tmp.push([tmp.slice(0,-2)+'くる','vk',[steps[i]].concat(change),[verb].concat(history)]);
                else if(get_dan(tmp[tmp.length-2]) == '')
                    state_tmp.push([tmp.slice(0,-1)+'る','vk',[steps[i]].concat(change),[verb].concat(history)]);
            }
        }
    }
    state = state_tmp.concat(state);
    state_tmp = [];

    for(var i=0;i<state.length;i++)
    {
        var last = state[i][0];
        last = last[last.length-1];
        if(state[i][0].length > 1 && 'るつうすぐくぶぬむ'.indexOf(last) != -1 && !exist(state_tmp,state[i]))
            state_tmp.push(state[i]);
    }
    state = state_tmp;
    state_tmp = [];

    types = ['せられる'];
    steps = ['使役被动态'];
    pres = ['さ'];
    for(var j=0;j<state.length;j++)
    {
        verb = state[j][0];
        var type = state[j][1];
        var change = state[j][2];
        var history = state[j][3];
        for(var i=0;i<types.length;i++)
        {
            if(end_with(verb,types[i]))
            {
                tmp = verb.slice(0,-types[i].length);
                last_dan = get_dan(tmp[tmp.length-1]);
                last_dan_2 = get_dan(tmp[tmp.length-2]);
                if(type == 'v1' && (last_dan_2 == 'い' || last_dan_2 == 'え' || last_dan_2 == '') && tmp[tmp.length-1] == pres[i])
                {
                    state_tmp.push([tmp.slice(0,-1)+'る','v1',[steps[i]].concat(change),[verb].concat(history)]);
                }
                //alert(tmp+','+pres[i]);
                if((type == 'v1' || type == 'vs') && tmp[tmp.length-1] == 'さ')
                {
                    state_tmp.push([tmp.slice(0,-1)+'する','vs',[steps[i]].concat(change),[verb].concat(history)]);
                }
                if((type == 'v1' || type == 'vk') && tmp[tmp.length-1] == pres[i])
                {
                    if(tmp[tmp.length-2] == 'こ')
                        state_tmp.push([tmp.slice(0,-2)+'くる','vk',[steps[i]].concat(change),[verb].concat(history)]);
                    else if(get_dan(tmp[tmp.length-2]) == '')
                        state_tmp.push([tmp.slice(0,-1)+'る','vk',[steps[i]].concat(change),[verb].concat(history)]);
                }
            }
            if(end_with(verb,'される'))
            {
                tmp = verb.slice(0,-3);
                last_dan = get_dan(tmp[tmp.length-1]);
                if((type == 'v1' || type == 'v5') && last_dan == 'あ')
                {
                    state_tmp.push([tmp.slice(0,-1)+trans(tmp[tmp.length-1],'う'),'v5',[steps[i]].concat(change),[verb].concat(history)]);
                }
            }
        }
    }
    state = state_tmp.concat(state);
    state_tmp = [];

    types = ['れる','せる'];
    steps = ['被动态','使役态'];
    pres = ['ら','さ'];
    for(var j=0;j<state.length;j++)
    {
        verb = state[j][0];
        var type = state[j][1];
        var change = state[j][2];
        var history = state[j][3];
        for(var i=0;i<types.length;i++)
        {
            if(end_with(verb,types[i]))
            {
                tmp = verb.slice(0,-types[i].length);
                last_dan = get_dan(tmp[tmp.length-1]);
                last_dan_2 = get_dan(tmp[tmp.length-2]);
                if(type == 'v1' && (last_dan_2 == 'い' || last_dan_2 == 'え' || last_dan_2 == '') && tmp[tmp.length-1] == pres[i])
                {
                    state_tmp.push([tmp.slice(0,-1)+'る','v1',[steps[i]].concat(change),[verb].concat(history)]);
                }
                if((type == 'v1' || type == 'v5') && last_dan == 'あ')
                {
                    state_tmp.push([tmp.slice(0,-1)+trans(tmp[tmp.length-1],'う'),'v5',[steps[i]].concat(change),[verb].concat(history)]);
                }
                //alert(tmp+','+pres[i]);
                if((type == 'v1' || type == 'vs') && tmp[tmp.length-1] == 'さ')
                {
                    state_tmp.push([tmp.slice(0,-1)+'する','vs',[steps[i]].concat(change),[verb].concat(history)]);
                }
                if((type == 'v1' || type == 'vk') && tmp[tmp.length-1] == pres[i])
                {
                    if(tmp[tmp.length-2] == 'こ')
                        state_tmp.push([tmp.slice(0,-2)+'くる','vk',[steps[i]].concat(change),[verb].concat(history)]);
                    else if(get_dan(tmp[tmp.length-2]) == '')
                        state_tmp.push([tmp.slice(0,-1)+'る','vk',[steps[i]].concat(change),[verb].concat(history)]);
                }
            }
        }
    }
    state = state_tmp.concat(state);
    state_tmp = [];

    types = ['れる'];
    steps = ['可能态'];
    pres = ['ら'];
    for(var j=0;j<state.length;j++)
    {
        verb = state[j][0];
        var type = state[j][1];
        var change = state[j][2];
        var history = state[j][3];
        for(var i=0;i<types.length;i++)
        {
            if(end_with(verb,types[i]))
            {
                tmp = verb.slice(0,-types[i].length);
                last_dan = get_dan(tmp[tmp.length-1]);
                last_dan_2 = get_dan(tmp[tmp.length-2]);
                if(type == 'v1' && (last_dan_2 == 'い' || last_dan_2 == 'え' || last_dan_2 == '') && tmp[tmp.length-1] == pres[i])
                {
                    state_tmp.push([tmp.slice(0,-1)+'る','v1',[steps[i]].concat(change),[verb].concat(history)]);
                }
                if((type == 'v1' || type == 'vk') && tmp[tmp.length-1] == pres[i])
                {
                    if(tmp[tmp.length-2] == 'こ')
                        state_tmp.push([tmp.slice(0,-2)+'くる','vk',[steps[i]].concat(change),[verb].concat(history)]);
                    else if(get_dan(tmp[tmp.length-2]) == '')
                        state_tmp.push([tmp.slice(0,-1)+'る','vk',[steps[i]].concat(change),[verb].concat(history)]);
                }
            }
            if((type == 'v1' || type == 'v5') && verb[verb.length-1] == 'る' && get_dan(verb[verb.length-2]) == 'え')
            {
                tmp = verb;
                state_tmp.push([tmp.slice(0,-2)+trans(tmp[tmp.length-2],'う'),'v5',[steps[i]].concat(change),[verb].concat(history)]);
            }
            if(verb.slice(-3,verb.length) == 'できる')
            {
                tmp = verb.slice(0,-3);
                state_tmp.push([tmp+'する','vs',[steps[i]].concat(change),[verb].concat(history)]);
            }
        }
    }
    state = state_tmp.concat(state);
    state_tmp = [];

    for(var i=0;i<state.length;i++)
    {
        var last = state[i][0];
        last = last[last.length-1];
        if(state[i][0].length > 1 && 'るつうすぐくぶぬむ'.indexOf(last) != -1 && !exist(state_tmp,state[i]))
            state_tmp.push(state[i]);
    }
    state = state_tmp;
    state_tmp = [];
    
    return state; 
}
function get_result(result)
{
    //ans = '';
    //result = process(verb);
    //for(var i=0;i<result.length;i++)
    //    ans = ans + result[i].join(',') + '\n';
    //return ans;
    ans = '';
    for(var i=0;i<result.length;i++)
    {
        ans = ans + result[i][0] + '(' + result[i][1] + ')';
        for(var j=0;j<result[i][2].length;j++)
        {
            ans = ans + '--(' + result[i][2][j] + ')-->' + result[i][3][j] + '';
        }
        ans = ans + '\n';
    }
    return ans;
}
