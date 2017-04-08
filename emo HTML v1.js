<!--Emot-->
<b:if cond='data:blog.pageType == &quot;item&quot;'>    
<script type='text/javascript'>
//<![CDATA[
var emoRange = "#comments p, div.emoWrap",
    putEmoAbove = "iframe#comment-editor",
    emoMessage = "";

// Emoticon bar before comment-form
$(function() {
    $(putEmoAbove)
    .before('');
    var emo = function(emo, imgRep, emoKey) {
        $(emoRange)
            .each(function() {
            $(this)
                .html($(this)
                .html()
                .replace(/<br>:/g, "<br> :")
                .replace(/<br>;/g, "<br> ;")
                .replace(/<br>=/g, "<br> =")
                .replace(/<br>\^/g, "<br> ^")
                .replace(emo, " <img style='max-height:80px' src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
        });
    };
emo(/\s:argh:/ig, "https://2.bp.blogspot.com/-3TZCInLcuQ4/WB_B7C0oC4I/AAAAAAAABUw/w0MDLFJbNJo0lu8uHGy3OnCzXQbx6sF6QCLcB/s1600/aghh.gif", ":argh:");
emo(/\s:bening:/ig, "https://4.bp.blogspot.com/-2s4u0HzpZSk/WB_B8jHo5QI/AAAAAAAABVA/4r3jgLinA7sSXSiYvU4WbwnQ2-o7_ojngCLcB/s1600/cling.gif", ":bening:");
emo(/\s:haha:/ig, "https://2.bp.blogspot.com/-jDSuQYBrpNo/WB_B9Zl93XI/AAAAAAAABVM/39A9ky_QoAQdjxg2nCaTIk3xhsyEGuj_QCLcB/s1600/haha.gif", ":haha:");
emo(/\s:hehe:/ig, "https://4.bp.blogspot.com/-nDSD39ga9Kk/WB_B9mLv5mI/AAAAAAAABVQ/aK8C2xw1k9wLNTvLJv51H7TVmrRIN7DsACLcB/s1600/hehe.gif", ":hehe:");
emo(/\s:kaget:/ig, "https://2.bp.blogspot.com/-QmwK68o0-ss/WB_B_M9XxlI/AAAAAAAABVg/Bo7xchwnW5sYJQSaKQtGV9azwrVZQqT7QCLcB/s1600/kaget.gif", ":kaget:");
emo(/\s:lalala:/ig, "https://4.bp.blogspot.com/-LexjzrLRa98/WB_B_9aqyXI/AAAAAAAABV0/znsrTbA3LiYs84mqwn4J1uc9wsmtDPBiwCLcB/s1600/lalala.gif", ":lalala:");
emo(/\s:hah:/ig, "https://3.bp.blogspot.com/-zZHBZE6c_R0/WB_CA5O1GcI/AAAAAAAABV4/3lmyM1Wloo8hiLr3qpoGPavHdSZ9mdqhQCLcB/s1600/lho.gif", ":hah:");
emo(/\s:lagu:/ig, "https://1.bp.blogspot.com/-RUeVKE24i7M/WB_CBDgfuUI/AAAAAAAABWA/CdlvELz4ICcH7ga4oVhG7OZVdVOWhpWNQCLcB/s1600/listen.gif", ":lagu:");
emo(/\s:lol:/ig, "https://1.bp.blogspot.com/-WaqAnxyWnxE/WB_CBRNrK5I/AAAAAAAABWE/OkfcX9rLDpYW7odKmLK7xUsdZRK8Vi5yQCLcB/s1600/lol.gif", ":lol:");
emo(/\s:nangis:/ig, "https://3.bp.blogspot.com/-Cyzw9NymAXQ/WB_CCVtNlrI/AAAAAAAABWY/Q8Xfnat8Amw2ihw2sRYxKNAhfRUt7QNggCLcB/s1600/nagis.gif", ":nangis:");
emo(/\s:onegai:/ig, "https://2.bp.blogspot.com/-DNkA_Cz6Uoc/WB_CCvol8QI/AAAAAAAABWc/ITW61hizAY8r8aw8zPsZiizLUcs24PLfACLcB/s1600/onegai.gif", ":onegai:");
emo(/\s:daisuki:/ig, "https://1.bp.blogspot.com/-4D_eAN0bpy8/WB_CEZqUeSI/AAAAAAAABWs/l_s18A5WzQQA9GoJd48BJG9911szY6wRQCLcB/s1600/sayangku.gif", ":daisuki:");
emo(/\s:terharu:/ig, "https://2.bp.blogspot.com/-sDsnH-msKbY/WB_CFLhLNYI/AAAAAAAABW4/e0hfRhTH3IwiZT6oikWgFkJvyky_Ftd0ACLcB/s1600/terharu.gif", ":terharu:");
emo(/\s:mantap:/ig, "https://1.bp.blogspot.com/-nnUQw2tDZ_k/WB_CFmyXaHI/AAAAAAAABXA/xe6N59k_ig4Q3LI6pecrYIDKNvUpgViZQCLcB/s1600/top.gif", ":mantap:");
emo(/\s:yahoo:/ig, "https://4.bp.blogspot.com/-UYwyrjSlauI/WB_CHZKqsJI/AAAAAAAABXY/xwXsIoJgJxE6mPHG2zmYmta4RURjJxY-ACLcB/s1600/yahoo.gif", ":yahoo:");
emo(/\s:tolong:/ig, "https://2.bp.blogspot.com/-dv8MR0BTtPM/WB_CFZ7y06I/AAAAAAAABW8/FR-0rRMtmVovDiRzjMUX_mmv2nSDroZKgCLcB/s1600/tolong.gif", ":tolong:");
emo(/\s:yare2:/ig, "https://3.bp.blogspot.com/-8YMNHP4ibDg/WB_CITjSGsI/AAAAAAAABXk/feAHcQq99rw2AtJUxMloFUIsK9tRd-ekQCLcB/s1600/yare2.gif", ":yare2:");
emo(/\s:udonsay:/ig, "https://3.bp.blogspot.com/-Jmfln_N_MSE/WB_CGI2hOtI/AAAAAAAABXI/_R08D2t5yywM50Px2dBu5osF0rGE-uwiACLcB/s1600/udonsay.gif", ":udonsay:");
emo(/\s:troll:/ig, "https://2.bp.blogspot.com/-PRei106yuWs/WB_CGM8B7_I/AAAAAAAABXE/2Y3otgsXLrE7ocOiQu05lyGlk1tQ0rHAQCLcB/s1600/troll.gif", ":troll:");
emo(/\s:wanipiro:/ig, "https://4.bp.blogspot.com/-xRfCv9WnyGQ/WB_CHLAWeCI/AAAAAAAABXU/r4LpD8NxX1oF5Llq5l4XfGjd8c-XGKEdQCLcB/s1600/wanipiro.gif", ":wanipiro:");
emo(/\s:hoho:/ig, "https://1.bp.blogspot.com/-pM31klqUeZo/WB_B-GFg1qI/AAAAAAAABVY/3E0mOuMnskgxwxnhoh5g_qBFRuiaoDe7QCLcB/s1600/hoho.gif", ":hoho:");
emo(/\s:sodok3:/ig, "https://3.bp.blogspot.com/-Jo376SzG21c/WB_B620uCII/AAAAAAAABUo/Jh7MdvJLd1wHUXPZkd9WGNd4oS0U2wXCQCLcB/s1600/3sodok.gif", ":sodok3:");
emo(/\s:bean:/ig, "https://3.bp.blogspot.com/-45mioBlOoWM/WB_B8sW8HeI/AAAAAAAABVI/OvRS5Azp03s1ansQhQLypu-abmaRits1ACLcB/s1600/bean.png", ":bean:");
emo(/\s:gebuk:/ig, "https://3.bp.blogspot.com/-ximAv8DgUPk/WB_B8nIsPWI/AAAAAAAABVE/cov3SBSo1uwo-OKlnkUNf4uNwwXWrfJRACLcB/s1600/gebuk.gif", ":gebuk:");
emo(/\s:asoy:/ig, "https://3.bp.blogspot.com/-LFlORDXdYMw/WB_B7vvCmtI/AAAAAAAABU4/7uJIpLfdp2Uatn7jIOz_fbLGf-QbEWXwACLcB/s1600/asoy2.gif", ":asoy:");
emo(/\s:keplak2:/ig, "https://3.bp.blogspot.com/-78v32Yjq8Yk/WB_B_5JudsI/AAAAAAAABVw/wcSxJ_GnalUvGze_cOb6rQrDNMkGtNs3QCLcB/s1600/keplak2.gif", ":keplak2:");
emo(/\s:keplak:/ig, "https://3.bp.blogspot.com/-4B9v2j8XVEw/WB_B_GiSLpI/AAAAAAAABVo/6UTMCIkwtDIjcdhFRxEdQ-tRqWkaU7rBACLcB/s1600/keplak.gif", ":keplak:");
emo(/\s:lolol:/ig, "https://4.bp.blogspot.com/-QfMHYvedvOY/WB_CBbfmeSI/AAAAAAAABWI/yLnQ0ZK5j9IACNf8sdXj3yjXc9-JmqztgCLcB/s1600/lolol.gif", ":lolo:");
emo(/\s:maso:/ig, "https://2.bp.blogspot.com/-UB2PuBpfEC4/WB_CB72TuFI/AAAAAAAABWM/Nsurl-rto9I16zjtiLcq5AZq3sx-UZU_gCLcB/s1600/maso.gif", ":maso:");
emo(/\s:mlayu:/ig, "https://1.bp.blogspot.com/-vXTc4aD31VI/WB_CCDi8wzI/AAAAAAAABWQ/9aMzBYxXLkQu7skhV4hH84lidzEcJT4agCLcB/s1600/mlayu.gif", ":mlayu:");
emo(/\s:muter:/ig, "https://4.bp.blogspot.com/-Aoypn29muOA/WB_CCJ9HBlI/AAAAAAAABWU/f2WNQPc7PoQfTgytvPTmXkcPycA36rUVwCLcB/s1600/muter.gif", ":muter:");
emo(/\s:pare:/ig, "https://1.bp.blogspot.com/-hXgRLVcpnHM/WB_CC3yTz7I/AAAAAAAABWk/-QAhoVXRNf0M-tb2qi3yuxkLeT9xQoPBACLcB/s1600/pare.jpg", ":pare:");
emo(/\s:pong:/ig, "https://2.bp.blogspot.com/-Hm3-vMhv2Q4/WB_CEBNdIsI/AAAAAAAABWo/2xKgruHcOZQ6Wx2TtE1SVS0raWTx1lcVACLcB/s1600/pong.gif", ":pong:");
emo(/\s:ecchi:/ig, "https://4.bp.blogspot.com/-BcAJmvKkV_Q/WB_CEhIe9PI/AAAAAAAABWw/xAUlj-wIzaoYPjzgF07h4YSm-Le2uhT2gCLcB/s1600/simecol.gif", ":ecchi:");
emo(/\s:sodok:/ig, "https://4.bp.blogspot.com/-mJBeLzi2wjo/WB_CFGl14ZI/AAAAAAAABW0/hKG_uLG0gIktKThmSkpMtZZZdz97kEJ2wCLcB/s1600/sodok.gif", ":sodok:");
emo(/\s:udud:/ig, "https://4.bp.blogspot.com/-C19G_feobY8/WB_CGlmSQlI/AAAAAAAABXM/qQ5AsvnwjLsfvV8UFzjwAa8_RDSoPNWkgCLcB/s1600/udud.gif", ":udud:");
emo(/\s:usap:/ig, "https://3.bp.blogspot.com/-YGLB7xMWDB0/WB_CGk0gOHI/AAAAAAAABXQ/1dr1kam6oE8u5G4Qg--3HTW-jUKIPEDdgCLcB/s1600/usap.gif", ":usap:");
emo(/\s:yaoming:/ig, "https://3.bp.blogspot.com/-tuYamMIBszI/WB_CHs2LKCI/AAAAAAAABXc/1BqRHw2TTiI9zPwYZfXt-GOW_Amo4-MmgCLcB/s1600/yaoming.jpg", ":yaoming:");
emo(/\s:pakyu:/ig, "https://1.bp.blogspot.com/-mCWAdrI5xNg/WB_CC0sJq5I/AAAAAAAABWg/ZGJvQG6g2t4wogu7UqI6ebvKokk6PttJwCLcB/s1600/pakyu.gif", ":pakyu:");
emo(/\s:jotos:/ig, "https://1.bp.blogspot.com/-FMicEhpi6gE/WB_B_H3txfI/AAAAAAAABVk/-1QMuHZ5msgQHkj_8vukxcyKe6QEBYt-QCLcB/s1600/jotos.gif", ":jotos:");
    
    // Click to show the code!
       $('.emo')
        .css('cursor', 'pointer')
        .live("click", function(e) {
        $('.emoKey')
            .remove();
        $(this)
            .after('<input class="emoKey" type="text" size="' + this.alt.length + '" value=" ' + this.alt + '" />');
$('.emoKey')
            .trigger("select");
e.stopPropagation();
    });
    $('.emoKey')
        .live("click", function() {
        $(this)
            .focus()
            .select();
    });

});
//]]>
</script>
</b:if>
