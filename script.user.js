// ==UserScript==
// @name        Messages prédéfinis
// @namespace   Messages prédéfinis pour les forums
// @description Script qui permet d'ajouter des boutons de messages prédéfinis dans les forums
// @include     https://realitygaming.fr/threads/*
// @include     https://realitygaming.fr/conversations/*
// @version     1.0
// @grant       none
// ==/UserScript==

$('#QuickReply').find('.submitUnit').children('input').eq(1).after('<a type="button" class="button primary boutonMessage" data-msg="Salut,<br><br>Tu n\'as pas les [B][COLOR=rgb(0,102,102)]conditions requises[/COLOR][/B] pour proposer ce genres de services.<br>Petit rappel sur les conditions :<br>[LIST]<br>[*]1 000 messages. [FA]fa-comments-o[/FA]<br>[*]500 j\'aimes. [FA]fa-thumbs-o-up[/FA]<br>[*]6 mois d\'ancienneté. [FA]fa-calendar-times-o[/FA]<br>[/LIST]<br>">Conditions</a>');
$('#QuickReply').find('.submitUnit').children('input').eq(1).after('<a type="button" class="button primary boutonMessage" data-msg="Salut,<br><br>Il est [B][COLOR=#006666]illégal[/COLOR][/B] de proposer ce genre de contenu sur le forum.<br>Petit rappel du règlement : [URL=\'https://realitygaming.fr/help/terms/#forum\'][B]ici[/B][/URL].<br>">Illégal</a>');

$(document).ready(function() {
    $('.boutonMessage').click(function() {
    $('iframe.redactor_textCtrl').contents().find('body').html($(this).data('msg').replace(/\n/g, '<br />'));
    $('iframe.redactor_textCtrl').contents().find('body').select();
    $('iframe.redactor_textCtrl').contents().find('body').focus();
    });
});
